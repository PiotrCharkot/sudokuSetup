let s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14,
  s15,
  s16,
  s17,
  s18,
  s19,
  s20,
  s21,
  s22,
  s23,
  s24,
  s25,
  s26,
  s27,
  s28,
  s29,
  s30,
  s31,
  s32,
  s33,
  s34,
  s35,
  s36,
  s37,
  s38,
  s39,
  s40;
let s41,
  s42,
  s43,
  s44,
  s45,
  s46,
  s47,
  s48,
  s49,
  s50,
  s51,
  s52,
  s53,
  s54,
  s55,
  s56,
  s57,
  s58,
  s59,
  s60,
  s61,
  s62,
  s63,
  s64,
  s65,
  s66,
  s67,
  s68,
  s69,
  s70,
  s71,
  s72,
  s73,
  s74,
  s75,
  s76,
  s77,
  s78,
  s79,
  s80,
  s81;

let [col1, col2, col3, col4, col5, col6, col7, col8, col9] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let [row1, row2, row3, row4, row5, row6, row7, row8, row9] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
let [squ1, squ2, squ3, squ4, squ5, squ6, squ7, squ8, squ9] = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

let rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let counterOfTries = 0;

let keepGoing = true;

const makeS1 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row1.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS2();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS1();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      squ1.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS2 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row1.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS3();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS2();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      squ1.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS3 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row1.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS4();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS3();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      squ1.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS4 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row1.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS5();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS4();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS5 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row1.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS6();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS5();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      col5.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS6 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row1.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS7();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS6();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      col5.splice(0);
      col6.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS7 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row1.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS8();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS7();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      col5.splice(0);
      col6.splice(0);
      col7.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      squ3.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS8 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row1.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS9();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS8();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      col5.splice(0);
      col6.splice(0);
      col7.splice(0);
      col8.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      squ3.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS9 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row1.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row1.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    makeS10();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS9();
    } else {
      counterOfTries = 0;
      row1.splice(0);
      col1.splice(0);
      col2.splice(0);
      col3.splice(0);
      col4.splice(0);
      col5.splice(0);
      col6.splice(0);
      col7.splice(0);
      col8.splice(0);
      col9.splice(0);
      squ1.splice(0);
      squ2.splice(0);
      squ3.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS1();
    }
  }
};

const makeS10 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row2.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS11();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS10();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      squ1.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS11 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row2.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS12();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS11();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      squ1.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS12 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row2.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS13();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS12();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      squ1.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS13 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row2.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS14();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS13();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS14 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row2.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS15();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS14();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS15 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row2.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS16();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS15();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      col6.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS16 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row2.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS17();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS16();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      col6.splice(1);
      col7.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      squ3.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS17 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row2.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS18();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS17();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      col6.splice(1);
      col7.splice(1);
      col8.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      squ3.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS18 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row2.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row2.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row1, row2) === 1) {
      makeS19();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      col6.splice(1);
      col7.splice(1);
      col8.splice(1);
      col9.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      squ3.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS18();
    } else {
      counterOfTries = 0;
      row2.splice(0);
      col1.splice(1);
      col2.splice(1);
      col3.splice(1);
      col4.splice(1);
      col5.splice(1);
      col6.splice(1);
      col7.splice(1);
      col8.splice(1);
      col9.splice(1);
      squ1.splice(3);
      squ2.splice(3);
      squ3.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS10();
    }
  }
};

const makeS19 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row3.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS20();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS19();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      squ1.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS20 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row3.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS21();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS20();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      squ1.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS21 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ1.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row3.push(numberToTry);
    squ1.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS22();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS21();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      squ1.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS22 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row3.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS23();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS22();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS23 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row3.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS24();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS23();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS24 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ2.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row3.push(numberToTry);
    squ2.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS25();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS24();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      col6.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS25 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row3.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS26();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS25();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      col6.splice(2);
      col7.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      squ3.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS26 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row3.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS27();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS26();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      col6.splice(2);
      col7.splice(2);
      col8.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      squ3.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS27 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row3.includes(numberToTry) &&
    !squ3.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row3.push(numberToTry);
    squ3.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row1, row3) + checkIfValid(row2, row3) === 2) {
      makeS28();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      col6.splice(2);
      col7.splice(2);
      col8.splice(2);
      col9.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      squ3.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS27();
    } else {
      counterOfTries = 0;
      row3.splice(0);
      col1.splice(2);
      col2.splice(2);
      col3.splice(2);
      col4.splice(2);
      col5.splice(2);
      col6.splice(2);
      col7.splice(2);
      col8.splice(2);
      col9.splice(2);
      squ1.splice(6);
      squ2.splice(6);
      squ3.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS19();
    }
  }
};

const makeS28 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row4.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS29();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS28();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      squ4.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS29 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row4.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS30();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS29();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      squ4.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS30 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row4.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS31();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS30();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      squ4.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS31 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row4.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS32();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS31();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS32 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row4.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS33();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS32();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      col5.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS33 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row4.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS34();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS33();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      col5.splice(3);
      col6.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS34 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row4.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS35();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS34();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      col5.splice(3);
      col6.splice(3);
      col7.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      squ6.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS35 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row4.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS36();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS35();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      col5.splice(3);
      col6.splice(3);
      col7.splice(3);
      col8.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      squ6.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS36 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row4.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row4.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    makeS37();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS36();
    } else {
      counterOfTries = 0;
      row4.splice(0);
      col1.splice(3);
      col2.splice(3);
      col3.splice(3);
      col4.splice(3);
      col5.splice(3);
      col6.splice(3);
      col7.splice(3);
      col8.splice(3);
      col9.splice(3);
      squ4.splice(0);
      squ5.splice(0);
      squ6.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS28();
    }
  }
};

const makeS37 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row5.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS38();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS37();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      squ4.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS38 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row5.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS39();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS38();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      squ4.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS39 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row5.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS40();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS39();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      squ4.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS40 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row5.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS41();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS40();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS41 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row5.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS42();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS41();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS42 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row5.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS43();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS42();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      col6.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS43 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row5.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS44();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS43();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      col6.splice(4);
      col7.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      squ6.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS44 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row5.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS45();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS44();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      col6.splice(4);
      col7.splice(4);
      col8.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      squ6.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS45 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row5.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row5.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row4, row5) === 1) {
      makeS46();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      col6.splice(4);
      col7.splice(4);
      col8.splice(4);
      col9.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      squ6.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS45();
    } else {
      counterOfTries = 0;
      row5.splice(0);
      col1.splice(4);
      col2.splice(4);
      col3.splice(4);
      col4.splice(4);
      col5.splice(4);
      col6.splice(4);
      col7.splice(4);
      col8.splice(4);
      col9.splice(4);
      squ4.splice(3);
      squ5.splice(3);
      squ6.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS37();
    }
  }
};

const makeS46 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row6.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS47();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS46();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      squ4.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS47 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row6.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS48();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS47();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      squ4.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS48 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ4.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row6.push(numberToTry);
    squ4.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS49();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS48();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      squ4.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS49 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row6.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS50();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS49();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS50 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row6.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS51();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS50();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS51 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ5.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row6.push(numberToTry);
    squ5.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS52();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS51();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      col6.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS52 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row6.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS53();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS52();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      col6.splice(5);
      col7.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      squ6.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS53 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row6.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS54();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS53();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      col6.splice(5);
      col7.splice(5);
      col8.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      squ6.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS54 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row6.includes(numberToTry) &&
    !squ6.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row6.push(numberToTry);
    squ6.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row4, row6) + checkIfValid(row5, row6) === 2) {
      makeS55();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      col6.splice(5);
      col7.splice(5);
      col8.splice(5);
      col9.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      squ6.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS54();
    } else {
      counterOfTries = 0;
      row6.splice(0);
      col1.splice(5);
      col2.splice(5);
      col3.splice(5);
      col4.splice(5);
      col5.splice(5);
      col6.splice(5);
      col7.splice(5);
      col8.splice(5);
      col9.splice(5);
      squ4.splice(6);
      squ5.splice(6);
      squ6.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS46();
    }
  }
};

const makeS55 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row7.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS56();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS55();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      squ7.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS56 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row7.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS57();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS56();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      squ7.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS57 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row7.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS58();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS57();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      squ7.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS58 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row7.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS59();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS58();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS59 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row7.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS60();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS59();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      col5.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS60 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row7.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS61();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS60();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      col5.splice(6);
      col6.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS61 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row7.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS62();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS61();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      col5.splice(6);
      col6.splice(6);
      col7.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      squ9.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS62 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row7.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS63();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS62();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      col5.splice(6);
      col6.splice(6);
      col7.splice(6);
      col8.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      squ9.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS63 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row7.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row7.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    makeS64();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS63();
    } else {
      counterOfTries = 0;
      row7.splice(0);
      col1.splice(6);
      col2.splice(6);
      col3.splice(6);
      col4.splice(6);
      col5.splice(6);
      col6.splice(6);
      col7.splice(6);
      col8.splice(6);
      col9.splice(6);
      squ7.splice(0);
      squ8.splice(0);
      squ9.splice(0);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS55();
    }
  }
};

const makeS64 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row8.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS65();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS64();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      squ7.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS65 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row8.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS66();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS65();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      squ7.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS66 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row8.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS67();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS66();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      squ7.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS67 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row8.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS68();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS67();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS68 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row8.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS69();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS68();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS69 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row8.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS70();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS69();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      col6.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS70 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row8.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS71();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS70();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      col6.splice(7);
      col7.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      squ9.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS71 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row8.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS72();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS71();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      col6.splice(7);
      col7.splice(7);
      col8.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      squ9.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS72 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row8.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row8.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row7, row8) === 1) {
      makeS73();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      col6.splice(7);
      col7.splice(7);
      col8.splice(7);
      col9.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      squ9.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS72();
    } else {
      counterOfTries = 0;
      row8.splice(0);
      col1.splice(7);
      col2.splice(7);
      col3.splice(7);
      col4.splice(7);
      col5.splice(7);
      col6.splice(7);
      col7.splice(7);
      col8.splice(7);
      col9.splice(7);
      squ7.splice(3);
      squ8.splice(3);
      squ9.splice(3);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS64();
    }
  }
};

const makeS73 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col1.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col1.push(numberToTry);
    row9.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS74();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS73();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      squ7.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS74 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col2.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col2.push(numberToTry);
    row9.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS75();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS74();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(6);
      squ7.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS75 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col3.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ7.includes(numberToTry)
  ) {
    col3.push(numberToTry);
    row9.push(numberToTry);
    squ7.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS76();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS75();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      squ7.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS76 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col4.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col4.push(numberToTry);
    row9.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS77();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS76();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS77 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col5.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col5.push(numberToTry);
    row9.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS78();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS77();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS78 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col6.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ8.includes(numberToTry)
  ) {
    col6.push(numberToTry);
    row9.push(numberToTry);
    squ8.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS79();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS78();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      col6.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS79 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col7.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col7.push(numberToTry);
    row9.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS80();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS79();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      col6.splice(8);
      col7.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      squ9.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS80 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col8.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col8.push(numberToTry);
    row9.push(numberToTry);
    squ9.push(numberToTry);

    rowWithNum.splice(randomIndex, 1);

    makeS81();
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS80();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      col6.splice(8);
      col7.splice(8);
      col8.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      squ9.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const makeS81 = () => {
  let randomIndex = Math.floor(Math.random() * rowWithNum.length);
  let numberToTry = rowWithNum[randomIndex];

  if (
    !col9.includes(numberToTry) &&
    !row9.includes(numberToTry) &&
    !squ9.includes(numberToTry)
  ) {
    col9.push(numberToTry);
    row9.push(numberToTry);
    squ9.push(numberToTry);
    9;
    rowWithNum.splice(randomIndex, 1);
    rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (checkIfValid(row7, row9) + checkIfValid(row8, row9) === 2) {
      console.log("pretty good");
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      col6.splice(8);
      col7.splice(8);
      col8.splice(8);
      col9.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      squ9.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  } else {
    counterOfTries++;
    if (counterOfTries < 30) {
      makeS81();
    } else {
      counterOfTries = 0;
      row9.splice(0);
      col1.splice(8);
      col2.splice(8);
      col3.splice(8);
      col4.splice(8);
      col5.splice(8);
      col6.splice(8);
      col7.splice(8);
      col8.splice(8);
      col9.splice(8);
      squ7.splice(6);
      squ8.splice(6);
      squ9.splice(6);
      rowWithNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      makeS73();
    }
  }
};

const checkIfValid = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i] && arr2[j] === arr1[i]) {
        console.log("wrong grid");
        return 0;
      }
    }
  }

  console.log("grid ok");
  return 1;
};

const gridMaker = () => {
  makeS1();

  console.log(row1);
  console.log(row2);
  console.log(row3);
  console.log(row4);
  console.log(row5);
  console.log(row6);
  console.log(row7);
  console.log(row8);
  console.log(row9);

  console.log("col:", col1, col2, col3, col4, col5, col6, col7, col8, col9);
  console.log("row:", row1, row2, row3, row4, row5, row6, row7, row8, row9);
  console.log("squ:", squ1, squ2, squ3, squ4, squ5, squ6, squ7, squ8, squ9);
  console.log("row with nums is:", rowWithNum);

  totalValid =
    checkIfValid(row1, row2) +
    checkIfValid(row2, row3) +
    checkIfValid(row1, row3) +
    checkIfValid(row4, row5) +
    checkIfValid(row5, row6) +
    checkIfValid(row4, row6) +
    checkIfValid(row7, row8) +
    checkIfValid(row8, row9) +
    checkIfValid(row7, row9) +
    checkIfValid(col1, col2) +
    checkIfValid(col2, col3) +
    checkIfValid(col1, col3) +
    checkIfValid(col4, col5) +
    checkIfValid(col5, col6) +
    checkIfValid(col4, col6) +
    checkIfValid(col7, col8) +
    checkIfValid(col8, col9) +
    checkIfValid(col7, col9);
  console.log("total valid points:", totalValid);

  if (totalValid === 18) {
    let data = { row1, row2, row3, row4, row5, row6, row7, row8, row9 };
    console.log("data in the client", data);
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/gridMaker", options).then((response) => {
      console.log(response);
    });
    console.log("found right one!!!");
  }
};

let intervalGrid = setInterval(() => {
  gridMaker();
}, 500);
