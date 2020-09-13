const fakeEncrypt = (num) => {
  const arr = num.split("");
  arr.reverse();
  const newnum = [];
  for (let i = 0; i < arr.length; i += 1) {
    newnum.push(arr[i]);
    newnum.push(Math.floor(Math.random() * 10));
  }
  return newnum.join("");
};

export { fakeEncrypt };
