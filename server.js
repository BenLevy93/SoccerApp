const csv = require("csvtojson");
//add property to the array given name and value
addProperty = (arr, propName, propValue) => {
  arr.map(match => {
    match[propName] = propValue;
  });
  return arr;
};

module.exports = fetchData = async () => {
  let result_played = await csv().fromFile("./result_played.csv");
  let result_upcoming = await csv().fromFile("./result_upcoming.csv");
  let resultPlayedWithStatus = addProperty(result_played, "status", "played");
  let resultUpWithStatus = addProperty(result_upcoming, "status", "upcoming");
  let allData = resultPlayedWithStatus.concat(resultUpWithStatus);
  return allData;
};
