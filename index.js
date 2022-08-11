const express = require("express");
const { google } = require("googleapis");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/founders", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1A3HYNjh4457YHb7XhWK7BQGgxiYRL6QQnfdHNr4YQd8";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  //Read rows from spreadsheets
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Hoja 1!B:B",
  })
  const emails = getRows.data;
  res.json(emails);
});

app.listen(5500, (req, res) => console.log("running on 5500"));


