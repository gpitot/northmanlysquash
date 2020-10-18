const { GoogleSpreadsheet } = require("google-spreadsheet");
const moment = require("moment-timezone");
const { SHEET, SOCIAL_ID, KEY } = require("./config");

exports.handler = async () => {
  const ranksDoc = new GoogleSpreadsheet(SHEET);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[SOCIAL_ID];
  const rows = await sheet.getRows({
    limit: 120,
  }); // can pass in { limit, offset }

  const socialFiltered = [];
  rows.forEach(({ Date, Event, Name }) => {
    let date = Date;
    if (Date) {
      date = moment(date);
      socialFiltered.push([date, Event, Name]);
    }
  });

  return {
    status: 200,
    body: JSON.stringify(socialFiltered),
  };
};
