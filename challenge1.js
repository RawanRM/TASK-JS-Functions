/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
  console.log(`My name is ${name}`);
}
let my_name = "Rawan";
printName(my_name);
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
let year = 2021;
function printAge(birth_year) {
  console.log(year - birth_year);
}
let my_year = 1995;
printAge(my_year);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(the_name, the_lang) {
  if (the_lang === "en") {
    console.log(`Hello ${the_name}`);
  } else if (the_lang === "es") {
    console.log(`Hola ${the_name}`);
  } else if (the_lang === "fr") {
    console.log(`Bonjur ${the_name}`);
  } else if (the_lang === "tr") {
    console.log(`Merhaba ${the_name}`);
  } else {
    console.log(`${the_lang} is not a listed language.`);
  }
}
let lang = "en";
printHello(my_name, lang);

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
let n1 = 30;
let n2 = 40;
printMax(n1,n2);
