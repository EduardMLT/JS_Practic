// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const lang = "JAVASCRIPT";

// console.log(
//   `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${lang}`
// );

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Enter your name");
// const email = prompt("Enter your email");
// const phone = prompt("Enter your phone");

// console.log(
//   `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОЧТУ І ${phone} ТЕЛЕФОН`
// );

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ
// const tvSet = Number(prompt('enter tvSet price'));
// const tab = Number(prompt ('enter tab price'));
// const phone = Number(prompt('enter phone price'));
// const totalPrice = tvSet + tab + phone;

// console.log(totalPrice);
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

//const month = Number(prompt("Enter month"));
// if (month ===12) {
//   console.log(`Вірно`);
// }else {
//   console.log(`Не знаєте? 12`);}
//const result = month === 12 ? "correct" :  'Не знаєте? 12';
//console.log(result);

//ЗАДАЧА 5
//НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = Number(prompt('Введіть число'));
// //if (number % 2 === 0) {
// //  console.log(`Парне число`);
// //} else { console.log(`Непарне число`); }

// const answer = number % 2 === 0 ? "Парне число" : "Непарне число";
// console.log(answer);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const monthBirth = Number(prompt("Enter your birth month"));
// if (monthBirth === 12 || monthBirth === 1 || monthBirth === 2) {
//   console.log("winter");
// } else if (monthBirth >= 3 && monthBirth <= 5) {
//   console.log("spring");
// } else if (monthBirth >= 6 && monthBirth <= 8) {
//   console.log("summer");
// } else if (monthBirth >= 9 && monthBirth <= 11) {
//   console.log("fall");
// } else {
//   console.log("There's no such season");
// }

// ЗАДАЧА 7
// // НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const login = 'pon_chick';
// const password = 'One123';
// const message = prompt('Enter your login');
// const messagePassword = prompt('Enter your password');
// if (login === message && password === messagePassword){
//   console.log('Congrats!')
//  } else{
//   console.log('enter your right data')
//  } 

//ЗАДАЧА 7  - з уточненнями
const textLogoEnterMore = 'Довжина введеного лого більше існуючого на ';
const textLogoEnterLess = 'Довжина введеного лого менше існуючого на ';
const textParolEnterMore = 'Введений пароль має довжину більше існуючого на ';
const textParolEnterLess = 'Введений пароль має довжину менше існуючого на ';
const textParolError = 'Невірні значання паролю замінені на * ';
const textLogoError = 'Невірні значання лого замінені на * ';
const userLogo = "123ttt";
const userParol = "qwer";

let entryCycle = 0 ; // змінна для входу в цикл
 while (entryCycle === 0) {
    const userLogoEnter = prompt("Введіть ваш логін");
    const userParolEnter = prompt("Введіть ваш пароль");

    let userLogoEnterArray = (userLogoEnter.split(""));
    let userParolEnterArray = (userParolEnter.split(""));
    let userLogoArray = (userLogo.split(""));
    let userParolArray = (userParol.split(""));
    // console.log(userLogoEnterArray);
    // console.log(userParolEnterArray);
    // console.log(userLogoArray);
    // console.log(userParolArray);


   if ( userLogoEnter === userLogo && userParol === userParolEnter ) {
     entryCycle = 1 ; console.log("ВІТАЮ! Ви здійснили вхід.");
   } else { 

   let oddsLogo = userLogoEnter.length - userLogo.length;
    // console.log("різниця лого ",oddsLogo);
      if ( oddsLogo === 0 ) {console.log("довжину лого вгадали")}
        else if ( oddsLogo < 0 ) {console.log((textLogoEnterLess) , -(oddsLogo)) } else {console.log((textLogoEnterMore) , oddsLogo)};
        console.log(textLogoError)
       for ( let i = 0; i <= ( userLogoArray.length - 1 ); i += 1 ) {
          if ( userLogoArray[i] != userLogoEnterArray[i]) { userLogoEnterArray[i] = '*' ; }
          // console.log(i, " =", userLogoEnterArray[i] ) ; 
        }; 
       const delLogoEnterArray = userLogoEnterArray.splice(userLogoArray.length, (userLogoEnterArray.length - 1)); 
       console.log(userLogoEnterArray.join(""));
  let oddsParol = userParolEnter.length - userParol.length;
    // console.log("різниця пароль ",oddsParol);
      if ( oddsParol === 0 ) {console.log("довжину паролю вгадали")}
        else if ( oddsParol < 0 ) {console.log((textParolEnterLess) , -(oddsParol)) } else {console.log((textParolEnterMore) , oddsParol)};
        console.log(textParolError)
        for ( let i = 0; i <= ( userParolArray.length - 1 ); i += 1 ) {
          if ( userParolArray[i] != userParolEnterArray[i]) { userParolEnterArray[i] = '*' ; }
          // console.log(i, " =", userParolEnterArray[i] ) ; 
        };
        const delParolEnterArray = userParolEnterArray.splice(userParolArray.length, (userParolEnterArray.length - 1)); 
        console.log(userParolEnterArray.join(""));

  let exitCycle = prompt("Продовжити пошук - 1 ");
   if (exitCycle != 1) {entryCycle = 1};
  }; 
  console.log("/* ------------------------------- */");
};
console.log("пошук завершено ...");