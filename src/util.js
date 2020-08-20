import moment from "moment";

export const api = {
  // observations: "https://httpbin.org/json",
  // observations: "http://localhost:8000/api/observations",
  observations: "https://birdie-observations-tracker.herokuapp.com/api/observations"
};

export function serialize(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export function formatString(str) {
  return str.replace(/_/g, " ")
}

export function formatDate(date) {
  return moment(date).format("DD MMM YYYY LT")
}

export function filterDataKeys(data) {
  let newArr = [
    ...new Set(data.reduce((acc, x) => acc.concat(Object.keys(x)), [])),
  ].filter((x) => !/^id$|_id|observed|observations|screenprops|navigation|media|rrule/gi.test(x));
  // harcoded filter function

  // find timestamp and move it a the first column
  let id = newArr.indexOf("timestamp");
  let timestamp = newArr.splice(id, 1);
  newArr.unshift(...timestamp)
  return newArr
}