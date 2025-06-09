// code your solution here
function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

const record = [
  { year: "2015", result: "L" },
  { year: "2016", result: "L" },
  { year: "2017", result: "W" },
  { year: "2018", result: "L" }
];

console.log(superbowlWin(record)); // Output: "2017"
