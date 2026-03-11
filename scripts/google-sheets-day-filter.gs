/**
 * ============================================================
 * Preet Tech — Day-Wise Filter for All Lead Sheet Tabs
 * ============================================================
 * HOW TO USE:
 * 1. Open your Google Sheet
 * 2. Click Extensions → Apps Script
 * 3. Paste this entire script, replacing any existing code
 * 4. Click Save, then Run → onOpen (grant permissions if asked)
 * 5. Reload your Google Sheet
 * 6. A new menu "🔍 Filter by Day" will appear in the top menu bar
 * ============================================================
 */

// Runs when the spreadsheet is opened — adds the custom menu
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔍 Filter by Day')
    .addItem('Filter Current Sheet by Date', 'showFilterSidebar')
    .addItem('Filter ALL Sheets by Date', 'filterAllSheetsByDate')
    .addSeparator()
    .addItem('Clear Filter on Current Sheet', 'clearCurrentFilter')
    .addItem('Clear Filter on ALL Sheets', 'clearAllFilters')
    .addSeparator()
    .addItem('Fix Headers on All Sheets', 'fixAllSheetHeaders')
    .addToUi();
}

// Opens the sidebar for picking a date to filter the active sheet
function showFilterSidebar() {
  const html = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <style>
          body { font-family: Arial, sans-serif; padding: 16px; background: #f8f9fa; }
          h3 { color: #1a73e8; margin-top: 0; }
          label { font-size: 13px; color: #555; display: block; margin-bottom: 4px; }
          input[type="date"] {
            width: 100%; padding: 8px 10px; border: 1px solid #ddd;
            border-radius: 8px; font-size: 14px; margin-bottom: 14px;
            box-sizing: border-box;
          }
          button {
            width: 100%; padding: 10px; border: none; border-radius: 8px;
            font-size: 14px; font-weight: bold; cursor: pointer; margin-bottom: 8px;
          }
          .btn-primary { background: #1a73e8; color: white; }
          .btn-secondary { background: #34a853; color: white; }
          .btn-danger { background: #ea4335; color: white; }
          .btn-primary:hover { background: #1558b0; }
          .btn-secondary:hover { background: #2d8c47; }
          .btn-danger:hover { background: #c62828; }
          #status { font-size: 12px; color: #555; margin-top: 8px; min-height: 20px; }
        </style>
      </head>
      <body>
        <h3>📅 Filter Leads by Day</h3>

        <label>Select Date:</label>
        <input type="date" id="dateInput" />

        <button class="btn-primary" onclick="filterCurrent()">Filter This Sheet</button>
        <button class="btn-secondary" onclick="filterAll()">Filter ALL Sheets</button>
        <button class="btn-danger" onclick="clearAll()">Clear All Filters</button>

        <div id="status"></div>

        <script>
          function getSelectedDate() {
            const val = document.getElementById('dateInput').value;
            if (!val) { document.getElementById('status').innerText = '⚠️ Please select a date first.'; return null; }
            // Convert YYYY-MM-DD to DD/MM/YYYY to match our sheet format
            const parts = val.split('-');
            return parts[2] + '/' + parts[1] + '/' + parts[0];
          }

          function filterCurrent() {
            const d = getSelectedDate();
            if (!d) return;
            document.getElementById('status').innerText = 'Filtering...';
            google.script.run
              .withSuccessHandler(msg => document.getElementById('status').innerText = msg)
              .withFailureHandler(err => document.getElementById('status').innerText = '❌ Error: ' + err.message)
              .filterCurrentSheetByDate(d);
          }

          function filterAll() {
            const d = getSelectedDate();
            if (!d) return;
            document.getElementById('status').innerText = 'Filtering all sheets...';
            google.script.run
              .withSuccessHandler(msg => document.getElementById('status').innerText = msg)
              .withFailureHandler(err => document.getElementById('status').innerText = '❌ Error: ' + err.message)
              .filterAllSheetsByDate(d);
          }

          function clearAll() {
            document.getElementById('status').innerText = 'Clearing filters...';
            google.script.run
              .withSuccessHandler(msg => document.getElementById('status').innerText = msg)
              .withFailureHandler(err => document.getElementById('status').innerText = '❌ Error: ' + err.message)
              .clearAllFilters();
          }

          // Set today's date as default
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const dd = String(today.getDate()).padStart(2, '0');
          document.getElementById('dateInput').value = yyyy + '-' + mm + '-' + dd;
        </script>
      </body>
    </html>
  `)
    .setTitle('🔍 Filter by Day')
    .setWidth(280);

  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Filters the currently active sheet by a specific date string (DD/MM/YYYY).
 * Column A must contain the "Date" field (date-only, e.g. "10/03/2026").
 */
function filterCurrentSheetByDate(dateStr) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  applyDateFilterToSheet(sheet, dateStr);
  return '✅ Filter applied on "' + sheet.getName() + '" for ' + dateStr;
}

/**
 * Filters ALL lead tabs across the spreadsheet by a specific date string.
 * Called from the sidebar.
 */
function filterAllSheetsByDate(dateStr) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  let count = 0;

  sheets.forEach(function(sheet) {
    const name = sheet.getName();
    // Skip utility/system sheets (adjust this list as needed)
    if (name === 'Sheet1' || name.toLowerCase() === 'config') return;
    applyDateFilterToSheet(sheet, dateStr);
    count++;
  });

  return '✅ Filter applied on ' + count + ' sheet(s) for ' + dateStr;
}

/**
 * Applies a basic filter on Column A (Date) of a given sheet.
 * Shows only rows where Column A matches dateStr exactly.
 */
function applyDateFilterToSheet(sheet, dateStr) {
  const lastRow = Math.max(sheet.getLastRow(), 2);
  const lastCol = Math.max(sheet.getLastColumn(), 9);

  // Set up / replace the basic filter on the entire data range
  const range = sheet.getRange(1, 1, lastRow, lastCol);

  // Remove any existing filter before applying a new one
  const existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();

  // Create new filter
  const filter = range.createFilter();

  // Apply filter criteria on Column A (index 1) — match exact date string
  const criteria = SpreadsheetApp.newFilterCriteria()
    .whenTextEqualTo(dateStr)
    .build();

  filter.setColumnFilterCriteria(1, criteria);
}

/**
 * Clears all filters on the currently active sheet.
 */
function clearCurrentFilter() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const filter = sheet.getFilter();
  if (filter) {
    filter.remove();
    return '✅ Filter cleared on "' + sheet.getName() + '"';
  }
  return 'ℹ️ No filter found on "' + sheet.getName() + '"';
}

/**
 * Clears all filters on ALL sheets in the spreadsheet.
 */
function clearAllFilters() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  let count = 0;

  sheets.forEach(function(sheet) {
    const filter = sheet.getFilter();
    if (filter) {
      filter.remove();
      count++;
    }
  });

  return '✅ Cleared filters on ' + count + ' sheet(s)';
}

/**
 * Utility: Fixes the header row on all existing sheets that still use the old 8-column format.
 * Adds "Date" as the new Column A, shifting existing headers right.
 * Run this ONCE after deploying the updated googleSheetsService.ts.
 */
function fixAllSheetHeaders() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  const oldHeader = 'Date & Time';
  const newHeaders = ['Date', 'Date & Time', 'Service', 'Name', 'BusinessName', 'Email', 'Phone Number', 'Industry', 'Budget Range'];
  let fixed = 0;

  sheets.forEach(function(sheet) {
    const firstCell = sheet.getRange('A1').getValue();
    // Only fix sheets that still have the OLD header format
    if (firstCell === oldHeader) {
      // Insert a new column A and set headers
      sheet.insertColumnBefore(1);
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
      // Bold the header row
      sheet.getRange(1, 1, 1, newHeaders.length).setFontWeight('bold');
      fixed++;
    }
  });

  SpreadsheetApp.getUi().alert('✅ Fixed headers on ' + fixed + ' sheet(s).');
}
