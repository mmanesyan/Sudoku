let numbers = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
let newNumbers = [];

function sort(array) {
    array.map(num => num.sort((a) => Math.floor(Math.random()*1.5 - 1)));
}

let answer = false;

function makeSudoku() {
  sort(numbers);
  as: while (answer) {
    sort(numbers);
    switch (numbers[0][0]) {
      case numbers[1][0]:
        continue as;
      case numbers[2][0]:
        continue as;
      case numbers[3][0]:
        continue as;
    }

    switch (numbers[0][1]) {
      case numbers[1][1]:
        continue as;
      case numbers[2][1]:
        continue as;
      case numbers[3][1]:
        continue as;
    }

    switch (numbers[0][2]) {
      case numbers[1][2]:
        continue as;
      case numbers[2][2]:
        continue as;
      case numbers[3][2]:
        continue as;
    }

    switch (numbers[0][3]) {
      case numbers[1][3]:
        continue as;
      case numbers[2][3]:
        continue as;
      case numbers[3][3]:
        continue as;
    }

    answer = true;
  }

  return numbers;
}

console.log(makeSudoku());
