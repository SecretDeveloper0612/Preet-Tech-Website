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
    process.exit(1);
}

const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });
const SHEET_ID = process.env.SHEET_ID;

async function createTab(sheetName) {
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
            await sheets.spreadsheets.values.update({
                spreadsheetId: SHEET_ID,
                range: `'${sheetName}'!A1:H1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [['Date & Time', 'Service', 'Name', 'BusinessName', 'Email', 'Phone Number', 'Industry', 'Budget Range']]
                }
            });
            console.log(`Tab '${sheetName}' created!`);
        } else {
            console.log(`Tab '${sheetName}' already exists.`);
        }
    } catch (err) {
        console.error(`Error:`, err.message);
    }
}

createTab('Software Leads');
