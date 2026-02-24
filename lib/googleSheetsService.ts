import { google } from 'googleapis';

export const getGoogleSheetsAuth = () => {
    // If running in edge or missing vars this might complain, but we assume node runtime
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    // Strip surrounding literal quotes if they accidentally got parsed, and ensure actual newline characters
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
        ?.replace(/^"|"$/g, '')
        ?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
        throw new Error("Missing Google Service Account credentials.");
    }

    return new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
};

const SHEET_ID = process.env.SHEET_ID;
const RANGE = 'A:D';

export const googleSheetsService = {
    checkIfEmailExists: async (email: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });
            const rows = response.data.values || [];

            // Assume Email is Column B (index 1)
            return rows.some(row => row[1] === email);
        } catch (error: any) {
            console.error("Error checking sheet for email:", error?.message || error);
            throw new Error(`Google Sheets API Error: ${error?.message || 'Failed to read subscriber data'}`);
        }
    },

    addSubscriber: async (name: string, email: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });

            const date = new Date().toISOString();
            const status = 'Active';

            await sheets.spreadsheets.values.append({
                spreadsheetId: SHEET_ID,
                range: RANGE,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[name || 'Subscriber', email, date, status]]
                }
            });
            return true;
        } catch (error: any) {
            console.error("Error appending to sheets:", error?.message || error);
            throw new Error(`Google API Append Error: ${error?.message || 'Failed to add subscriber'}`);
        }
    },

    getActiveSubscribers: async () => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });
            const rows = response.data.values || [];

            // Skip the header row and filter active users
            return rows.slice(1).filter(row => row[3] === 'Active').map(row => ({
                name: row[0],
                email: row[1]
            }));
        } catch (error) {
            console.error("Error fetching subscribers list:", error);
            return [];
        }
    },

    updateSubscriberStatus: async (email: string, status: string) => {
        try {
            const auth = getGoogleSheetsAuth();
            const sheets = google.sheets({ version: 'v4', auth });
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: RANGE,
            });

            const rows = response.data.values || [];

            // Find row by email
            const rowIndex = rows.findIndex(row => row[1] === email);
            if (rowIndex === -1) return false;
            const cellRange = `D${rowIndex + 1}`;
            await sheets.spreadsheets.values.update({
                spreadsheetId: SHEET_ID,
                range: cellRange,
                valueInputOption: 'USER_ENTERED',
                requestBody: { values: [[status]] }
            });

            return true;
        } catch (error: any) {
            console.error("Error updating sheet status:", error?.message || error);
            throw new Error(`Google API Update Error: ${error?.message || 'Failed to update status'}`);
        }
    }
};
