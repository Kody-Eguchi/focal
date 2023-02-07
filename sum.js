const args = process.argv;
const nums = args.slice(2, 4);

// eslint-disable-next-line space-before-function-paren
const sum = function () {
  return Number(nums[0]) + Number(nums[1]);
};

console.log(sum());
