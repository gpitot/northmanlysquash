const { GoogleSpreadsheet } = require("google-spreadsheet");
const { SHEET, HISTORY_ID, KEY } = require("./config");

exports.handler = async (event, context) => {
  const ranksDoc = new GoogleSpreadsheet(SHEET);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[HISTORY_ID];
  const rows = await sheet.getRows({
    limit: 40,
  }); // can pass in { limit, offset }

  const results = rows
    .map((row) => {
      return [
        row["Your name"],
        row["Opponent name"],
        row["Result"],
        row["Approved"],
      ];
    })
    .filter((row) => row[3] === "yes");
  results.reverse();
  return {
    status: 200,
    body: JSON.stringify(results),
  };
};
