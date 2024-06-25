import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

const dayOfWeeks = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];

console.log("월요일", dayOfWeeks[0]);

const key = "isMale";
const person = {
  name: "김민철",
  age: 30,
  youtube: "AAA",
  isMale: false,
};

console.log(person.name);
console.log(person[key]);
console.log(person.youtube);

const lunchList = [
  {
    id: 1,
    name: "김민철",
    menu: "커피",
  },
  {
    id: 2,
    name: "문성준",
    menu: "밥",
  },
  {
    id: 3,
    name: "한승일",
    menu: "된장찌개",
  },
];

const copyLunchList = lunchList.map((lunch) => `${lunch.menu}`);
console.log("copyLunchList", copyLunchList);

const mbtiType = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

// const mbtiTypeWithHeart = mbtiType.map((mbti) => {
//   // console.log("mbti", mbti);
//   return `${mbti}` + "♥";
// });
const mbtiTypeWithHeart = mbtiType.map((mbti) => {
  // console.log("mbti", mbti);
  return `${mbti}` + "♥";
});

console.log("mbtiTypeWithHeart", mbtiTypeWithHeart);

const scoreList = [75, 82, 56, 90, 71, 65, 78, 99, 50, 67];

const filterScoreList = scoreList.filter((score) => score >= 70);
console.log("filterScoreList", filterScoreList);
// 예상 결과값 [75, 82, 90, 71, 78, 99]

const findScoreList = scoreList.find((score) => score >= 70);
console.log("findScoreList", findScoreList);
// find는 결과값을 찾으면 바로 return함

const someScoreList = scoreList.some((score) => score >= 90);
console.log("someScoreList", someScoreList);
// some, every은 boolean타입으로 return함
// every는 배열의 모든 조건을 파악함

const userName = "김민철";
const userAge = 30;

const welcomMessage = `안녕하세요 ${userName}님 나이가 ${userAge}이시네요 환영합니다`;

console.log("welcomMessage", welcomMessage);

const user = {
  isLoggedin: true,
  role: "admin", // 'guest'
};

console.log("관리자?", !user.isLoggedin === true && user.role === "admin");

// user.isLoggedin === false

if (user.isLoggedin) {
  if (user.role === "admin") {
    // 페이지 이동 가능 로직
    console.log("구린방법");
  }
}

if (user.isLoggedin && user.role === "admin") {
  // 페이지 이동 가능 로직
  console.log("간지나는 방법");
}

// 로그인 안해도 'admin'이기만 하면 로직 실행
if (user.isLoggedin || user.role === "admin") {
  // 로직
  console.log("or");
}

const userInput = ""; // false
const isEmpty = !userInput; // true

const data = "";
const isData = !!data;
// !!는 값을 boolean 타입으로 변환
console.log("isData", isData);

if (isEmpty) {
  // 사용자가 값을 입력하지 않은 경우
  console.log("값을 입력해 주세요.");
} else {
  // 사용자가 값을 입력한 경우
  console.log("입력값", userInput);
}

console.log(!userInput ? "값을 입력해 주세요.11" : "입력값", userInput);

const checkIsLoggedin = (user) => {
  if (user.isLoggedin) {
    console.log("로그인");
  } else {
    console.log("로그아웃");
  }
};
checkIsLoggedin(user);

// 파라미터의 두배수한 값을 리턴하는 함수
const doubleNum = (num = 0) => {
  return num * 2;
};
console.log("double", doubleNum(4));
console.log("double", doubleNum());

const colorList = ["red", "purple", "yello"];

const red = colorList[0];
console.log("11", red);

const [a, b, c, d = "blue"] = colorList;
console.log("d", d);

const youtube = {
  name: "김민철",
  message: "도전하고 성장하는 삶을 개발합니다.",
};

const name = youtube.name;
const message = youtube.message;
console.log("name", name);

const { name: channelName } = youtube;
console.log("channelName", channelName);

const colorList2 = ["red", "purple", "yello"];
const colorList3 = ["green", "black"];
const copyColorList2 = [...colorList2];
const addColorList2 = [...colorList2, "blue"];
const resultColorList = [...colorList2, "pink", ...colorList2];

console.log("원본배열", colorList2);
console.log("addColorList2", addColorList2);
console.log("resultColorList", resultColorList);

const add = (a, b, c) => {
  return a + b + c;
};

const numberList = [1, 2, 3];
console.log("add", add(...numberList));

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map((numbers) => numbers + 1);
console.log(incrementedNumbers); // 여기에 코드를 작성하세요. // 예상 결과: [2, 3, 4, 5, 6]

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter((number) => number % 2 == 0); // 여기에 코드를 작성하세요.
console.log(evenNumbers); // 예상 결과: [2, 4, 6]

const fruits = ["banana", "apple", "orange", "pineapple"];
const foundFruit = fruits.find((fruit) => fruit == "apple"); // 여기에 코드를 작성하세요.
console.log(foundFruit); // 예상 결과: 'apple'
