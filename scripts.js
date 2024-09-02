// Площадь и периметр квадрата.
const squareInput = document.querySelector('#square-input');
const areaSquare = document.querySelector('#area-square');
const perimeterSquare = document.querySelector('#perimeter-square');
squareInput.addEventListener('blur', function (e) {
  areaSquare.textContent = e.target.value * e.target.value;
  perimeterSquare.textContent = e.target.value * 4;
  e.target.value = '';
});

// Площадь и периметр прямоугольника.
const rectangleLength = document.querySelector('#rectangle-length');
const rectangleHeight = document.querySelector('#rectangle-height');
const areaRectangle = document.querySelector('#area-rectangle');
const perimeterRectangle = document.querySelector('#perimeter-rectangle');
rectangleHeight.addEventListener('blur', function (e) {
  areaRectangle.textContent =
    Number(e.target.value) * Number(rectangleLength.value);
  perimeterRectangle.textContent =
    (Number(e.target.value) + Number(rectangleLength.value)) * 2;
  e.target.value = '';
  rectangleLength.value = '';
});

// Площадь круга и длина окружности.
const radius = document.querySelector('#radius');
const areaCircle = document.querySelector('#area-circle');
const circumference = document.querySelector('#circumference');
radius.addEventListener('blur', function (e) {
  areaCircle.textContent = Math.PI * e.target.value ** 2;
  circumference.textContent = 2 * Math.PI * e.target.value;
  e.target.value = '';
});

// Площадь треугольника по трем сторонам.
const firstSide = document.querySelector('#first-side');
const secondSide = document.querySelector('#second-side');
const thirdSide = document.querySelector('#third-side');
const areaTriangle = document.querySelector('#area-triangle');
thirdSide.addEventListener('blur', function () {
  let a = firstSide.value;
  let b = secondSide.value;
  let c = thirdSide.value;
  let p = (a + b + c) / 2;
  areaTriangle.textContent = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  firstSide.value = '';
  secondSide.value = '';
  thirdSide.value = '';
});

// Корень квадратного уравнения.
const a = document.querySelector('#first-num');
const b = document.querySelector('#second-num');
const c = document.querySelector('#third-num');
const root = document.querySelector('#root');
c.addEventListener('blur', function () {
  let d = b.value * 2 - 4 * +a.value * +c.value;
  console.log(d);
  let x1 = -b.value + (Math.sqrt(d) / 2) * a.value;
  let x2 = -b.value - (Math.sqrt(d) / 2) * a.value;
  if (a.value == 0) {
    a.value = '';
    b.value = '';
    c.value = '';
    return (root.textContent =
      'Уравнение линейное, а не квадратное. Первый числовой коэффициент не должен быть равен нулю');
  }
  if (d > 0) {
    root.textContent = `Уравнение имеет 2 корня первый ${x1}, второй ${x2}`;
  }
  if (d == 0) {
    root.textContent = `Корень квадратного уравннения равен ${x1}`;
  }
  if (d < 0) {
    root.textContent = `Уравнение корней не имеет`;
  }
});

// Проверка чисел на тройкой Пифагора.
const aPith = document.querySelector('#first-pyth-num');
const bPith = document.querySelector('#second-pyth-num');
const cPith = document.querySelector('#third-pyth-num');
const pyth = document.querySelector('#pyth');
cPith.addEventListener('blur', function () {
  const maxNum = Math.max(aPith.value, bPith.value, cPith.value);
  console.log(maxNum);
  if (
    maxNum ** 2 === aPith.value ** 2 + bPith.value ** 2 ||
    maxNum ** 2 === bPith.value ** 2 + cPith.value ** 2 ||
    maxNum ** 2 === aPith.value ** 2 + cPith.value ** 2
  ) {
    pyth.textContent = 'Числа являются тройкой Пифагора';
  } else {
    pyth.textContent = 'Числа не являются тройкой Пифагора';
  }
});

// Поиск делителей числа
const numberToSearch = document.querySelector('#numberToSearch');
const resultOfDivisors = document.querySelector('#resultOfDivisors');
const btn = document.querySelector('#btnResultOfDivisors');
let arrOfDivisors = [];
btn.addEventListener('click', function () {
  resultOfDivisors.textContent = '';
  for (let i = 1; i <= numberToSearch.value; i++) {
    if (numberToSearch.value % i === 0) {
      arrOfDivisors.push(i);
    }
  }
  resultOfDivisors.textContent = arrOfDivisors;
  numberToSearch.value = '';
});

// Поиск общих делителей двух чисел
const firstNumberToSearch = document.querySelector('#firstNumberToSearch');
const secondNumberToSearch = document.querySelector('#secondNumberToSearch');
const resultOfTwoDivisors = document.querySelector('#resultOfTwoDivisors');
const btnResultOfDivisors = document.querySelector('#btnResultOfTwoDivisors');

btnResultOfDivisors.addEventListener('click', function () {
  let arr1 = [];
  let arr2 = [];
  let arrCommonsDivisors = [];
  for (let i = 1; i <= firstNumberToSearch.value; i++) {
    if (firstNumberToSearch.value % i == 0) {
      arr1.push(i);
    }
  }
  for (let j = 1; j <= secondNumberToSearch.value; j++) {
    if (secondNumberToSearch.value % j == 0) {
      arr2.push(j);
    }
  }
  for (let elem of arr1) {
    for (let el of arr2) {
      if (elem === el) {
        arrCommonsDivisors.push(elem);
      }
    }
  }
  resultOfTwoDivisors.textContent = arrCommonsDivisors;
  firstNumberToSearch.value = '';
  secondNumberToSearch.value = '';
});

// Поиск наибольшего общего делителя трех чисел
const firstOfThree = document.querySelector('#firstOfThree');
const secondOfThree = document.querySelector('#secondOfThree');
const thirdOfThree = document.querySelector('#thirdOfThree');
const getBiggestDivisors = document.querySelector('#getBiggestDivisors');
const resultOfBiggestDivisors = document.querySelector(
  '#resultOfBiggestDivisors'
);

getBiggestDivisors.addEventListener('click', function () {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let gcd = 0;

  for (let i = 0; i < firstOfThree.value; i++) {
    if (firstOfThree.value % i == 0) {
      arr1.push(i);
    }
  }
  for (let j = 0; j < secondOfThree.value; j++) {
    if (secondOfThree.value % j == 0) {
      arr2.push(j);
    }
  }
  for (let k = 0; k < thirdOfThree.value; k++) {
    if (thirdOfThree.value % k == 0) {
      arr3.push(k);
    }
  }
  for (let firstElem of arr1) {
    for (let secondElem of arr2) {
      for (let thirdElem of arr3) {
        if (firstElem === secondElem && firstElem === thirdElem) {
          arr4.push(firstElem);
        }
      }
    }
  }

  // console.log(arr4);
  gcd = Math.max(...arr4);
  // console.log([gcd]);

  resultOfBiggestDivisors.textContent = gcd;
  firstOfThree.value = '';
  secondOfThree.value = '';
  thirdOfThree.value = '';
});

// Поиск наименьшего общего делителя трех чисел
const firstOfThreeMin = document.querySelector('#firstOfThreeMin');
const secondOfThreeMin = document.querySelector('#secondOfThreeMin');
const thirdOfThreeMin = document.querySelector('#thirdOfThreeMin');
const getSmallestDivisors = document.querySelector('#getSmallestDivisors');
const resultOfSmallestDivisors = document.querySelector(
  '#resultOfSmallestDivisors'
);
getSmallestDivisors.addEventListener('click', function () {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let scd = 0;
  for (let i = 1; i <= firstOfThreeMin.value; i++) {
    if (firstOfThreeMin.value % i === 0) {
      arr1.push(i);
    }
  }
  for (let j = 1; j <= secondOfThreeMin.value; j++) {
    if (secondOfThreeMin.value % j === 0) {
      arr2.push(j);
    }
  }
  for (let k = 1; k <= thirdOfThreeMin.value; k++) {
    if (thirdOfThreeMin.value % k === 0) {
      arr3.push(k);
    }
  }
  for (let elemOfFirstArr of arr1) {
    for (let elemOfSecondArr of arr2) {
      for (let elemOfThirdArr of arr3) {
        if (
          elemOfFirstArr === elemOfSecondArr &&
          elemOfFirstArr === elemOfThirdArr
        ) {
          arr4.push(elemOfFirstArr);
        }
      }
    }
  }
  scd = Math.min(...arr4);
  resultOfSmallestDivisors.textContent = scd;
  firstOfThreeMin.value = '';
  secondOfThreeMin.value = '';
  thirdOfThreeMin.value = '';
});
