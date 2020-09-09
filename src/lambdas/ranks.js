const { GoogleSpreadsheet } = require("google-spreadsheet");

const RANKS = "1SSnVv3nfogNozLj7Kw2xsP3KlENmzjeDhOLDZOWBl2k";
const KEY = "AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA";

exports.handler = async (event, context) => {
  const ranksDoc = new GoogleSpreadsheet(RANKS);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[2004016643];
  const rows = await sheet.getRows({
    limit: 40,
  }); // can pass in { limit, offset }
  const ranks = rows.map(({ Name, Points, Win, Loss }) => [
    Name,
    Points,
    Win,
    Loss,
  ]);
  return {
    status: 200,
    body: ranks,
  };
};
