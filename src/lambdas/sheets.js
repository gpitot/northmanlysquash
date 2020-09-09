const { GoogleSpreadsheet } = require("google-spreadsheet");

//AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA
// https://sheets.googleapis.com/v4/spreadsheets/1SSnVv3nfogNozLj7Kw2xsP3KlENmzjeDhOLDZOWBl2k?key=AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA

const RANKS = "1SSnVv3nfogNozLj7Kw2xsP3KlENmzjeDhOLDZOWBl2k";
const KEY = "AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA";

exports.handler = async (event, context) => {
  const ranksDoc = new GoogleSpreadsheet(RANKS);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsByIndex[0];
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  console.log(rows);
  return {
    status: 200,
    body: "hello world",
  };
};
