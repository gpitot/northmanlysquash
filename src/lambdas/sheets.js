const fetch = require("node-fetch");

//AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA
// https://sheets.googleapis.com/v4/spreadsheets/1SSnVv3nfogNozLj7Kw2xsP3KlENmzjeDhOLDZOWBl2k?key=AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA

const RANKS =
  "https://sheets.googleapis.com/v4/spreadsheets/1SSnVv3nfogNozLj7Kw2xsP3KlENmzjeDhOLDZOWBl2k";
const HISTORY = "";
const KEY = "AIzaSyBhPxjwHTAMUG-wAf1uF0lv965uVdJf4qA";

exports.handler = async (event, context) => {
  return fetch(`${RANKS}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
