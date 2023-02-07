const num = process.argv.slice(2);
const roll = Number(num);

const diceRoller = function (attempt) {
  let result = "";
  for (let i = 0; i < attempt; i++) {
    if (i === attempt - 1) {
      result += Math.floor(Math.random() * 6 + 1);
    } else {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return `Rolled ${attempt} dice: ${result}`;
};

console.log(diceRoller(roll));
