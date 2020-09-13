const { GoogleSpreadsheet } = require("google-spreadsheet");

const { SHEET, RANKS_ID, KEY } = require("./config");

exports.handler = async (event, context) => {
  const ranksDoc = new GoogleSpreadsheet(SHEET);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[RANKS_ID];
  const rows = await sheet.getRows({
    limit: 40,
  }); // can pass in { limit, offset }
  const ranks = rows.map(({ Name, Streak }) => [Name, Streak]);
  return {
    status: 200,
    body: JSON.stringify(ranks),
  };
};
