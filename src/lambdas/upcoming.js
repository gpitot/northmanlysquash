const { GoogleSpreadsheet } = require("google-spreadsheet");

const { SHEET, UPCOMING_ID, KEY } = require("./config");

exports.handler = async (event, context) => {
  const ranksDoc = new GoogleSpreadsheet(SHEET);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[UPCOMING_ID];
  const rows = await sheet.getRows({
    limit: 40,
  }); // can pass in { limit, offset }
  const upcoming = rows.map((row) => {
    return [row["Challenger Name"], row["Opponent Name"], row["Status"]];
  });

  return {
    status: 200,
    body: JSON.stringify(upcoming),
  };
};
