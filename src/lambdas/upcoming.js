const { GoogleSpreadsheet } = require("google-spreadsheet");
const moment = require("moment");

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
    let status = row["Status"];
    if (status) {
      status = status.toLowerCase();
    }
    let date = row["Date"];
    if (date) {
      date = moment(date, "DD.MM.YYYY.hh.mm");
      console.log(date);
    }
    return [
      row["Challenger Name"],
      row["Opponent Name"],
      status,
      date,
      row["Court"],
    ];
  });

  const booked = upcoming.filter((row) => row[2] === "booked");
  const pending = upcoming.filter((row) => row[2] === "pending");

  const sortedBooked = booked.sort((a, b) => a[3] - b[3]);
  const bookedWithReadableDate = sortedBooked.map((booking) =>
    booking[3].format("DD/MM/YYYY hh:mm")
  );
  return {
    status: 200,
    body: JSON.stringify([...bookedWithReadableDate, ...pending]),
  };
};
