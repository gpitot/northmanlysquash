const { GoogleSpreadsheet } = require("google-spreadsheet");

const { SHEET, SOCIAL_ID, KEY } = require("./config");

exports.handler = async () => {
  const ranksDoc = new GoogleSpreadsheet(SHEET);
  ranksDoc.useApiKey(KEY);
  await ranksDoc.loadInfo();
  const sheet = ranksDoc.sheetsById[SOCIAL_ID];
  const rows = await sheet.getRows({
    limit: 120,
  }); // can pass in { limit, offset }
  const social = rows.map(({ Date, Event, Name }) => {
    let date = Date;
    if (Date) {
      date = moment(date);
    }
    return [date, Event, Name];
  });

  //get any results since tuesday morning
  let time = moment
    .tz(new Date("10/20/2020"), "Australia/Sydney")
    .add(1, "hours");
  let currentDay = time.isoWeekday();
  while (currentDay !== 1) {
    time = time.subtract(1, "days");
    currentDay = time.isoWeekday();
  }
  //tuesday
  time = time.startOf("day");

  const socialThisWeek = [];

  for (let i = social.length - 1; i >= 0; i -= 1) {
    if (social[i][0] < time) {
      break;
    }
    if (social[i][2] && social[i][2].length > 1) {
      socialThisWeek.unshift(social[i]);
    }
  }

  return {
    status: 200,
    body: JSON.stringify(socialThisWeek),
  };
};
