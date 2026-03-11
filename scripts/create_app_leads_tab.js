import { google } from 'googleapis';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/^"|"$/g, '')?.replace(/\\n/g, '\n');

if (!clientEmail || !privateKey) {
    console.error("Missing credentials Check .env.local path");
    console.log('Path checked:', path.join(__dirname, '..', '.env.local'));
    process.exit(1);
}

const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });
const SHEET_ID = process.env.SHEET_ID;

async function createTab(sheetName) {
    console.log(`Checking/Creating tab: ${sheetName} in ${SHEET_ID}`);
    try {
        const res = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
        const tabExists = res.data.sheets?.some(s => s.properties?.title === sheetName);

        if (!tabExists) {
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SHEET_ID,
                requestBody: {
                    requests: [{ addSheet: { properties: { title: sheetName } } }]
                }
            });
            console.log(`Tab '${sheetName}' created!`);

            // Add headers
            await sheets.spreadsheets.values.update({
                spreadsheetId: SHEET_ID,
                range: `'${sheetName}'!A1:H1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [['Date & Time', 'Service', 'Name', 'BusinessName', 'Email', 'Phone Number', 'Industry', 'Budget Range']]
                }
            });
            console.log(`Headers added to '${sheetName}'.`);
        } else {
            console.log(`Tab '${sheetName}' already exists in spreadsheet.`);
            console.log('Current tabs:', res.data.sheets?.map(s => s.properties?.title));
        }
    } catch (err) {
        console.error(`Error:`, err.message);
    }
}

async function run() {
    await createTab('App Leads');
    // Also check ECO_LEADS_SHEET_ID just in case
    const ECO_ID = process.env.ECO_LEADS_SHEET_ID;
    if (ECO_ID && ECO_ID !== SHEET_ID) {
        console.log('--- Checking Second Spreadsheet ---');
        // Check if ECO ID has the tab
        try {
            const res2 = await sheets.spreadsheets.get({ spreadsheetId: ECO_ID });
            const hasAppLeads = res2.data.sheets?.some(s => s.properties?.title === 'App Leads');
            console.log(`Tabs in ${ECO_ID}:`, res2.data.sheets?.map(s => s.properties?.title));
            if (!hasAppLeads) {
                console.log('Attempting to create App Leads tab in ECO_LEADS_SHEET_ID too...');
                await sheets.spreadsheets.batchUpdate({
                    spreadsheetId: ECO_ID,
                    requestBody: { requests: [{ addSheet: { properties: { title: 'App Leads' } } }] }
                });
                await sheets.spreadsheets.values.update({
                    spreadsheetId: ECO_ID,
                    range: `'App Leads'!A1:H1`,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [['Date & Time', 'Service', 'Name', 'BusinessName', 'Email', 'Phone Number', 'Industry', 'Budget Range']]
                    }
                });
                console.log('Tab created in second spreadsheet.');
            }
        } catch (e) {
            console.log('Second spreadheet check failed (unauthorized or non-existent):', e.message);
        }
    }
}

run();
