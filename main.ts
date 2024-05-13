// 1. Loop through an Array with For-Of
// const favouriteMovies: string[] = [
//     "Inception", "The Matrix", "Interstellar"
// ];

// function printEachMovie (movies: string[]){
//     for (const movie of movies){
//         console.log(movie)
//     }
// }
// printEachMovie(favouriteMovies);

// 2. Enumerate properties with for-in-loop
// let car: any = {
//     make: "Honda", modle: "Civic", year: 2020
// };
// function printCar (car: { [key:string]: string| number}) {
//     for (let key in car){
//         console.log(`${key}: ${car[key]}`)
//     };
// };
// printCar(car);

// 3. Basic for loop Exercise
// function fizzBuzz() {
//     for (let i=0; i<= 100 ; i++){
//         let output = '';
//         if(i % 3 === 0)output += 'Fizz';
//         if(i % 5 === 0)output += 'Buzz';
//         console.log(output || i)
//     }
// }
// fizzBuzz();

// 4. Practicing Do-While loop
// function guessingGame(){
//     const randomNumber = Math.floor(Math.random() * 10) +1;
//     let userGuess : number | null = null;
//     do{
//         userGuess =getUserInput("Guess a number between 1 and 10");
//         if (userGuess !== null && userGuess !== undefined){
//             if(userGuess === randomNumber){
//                 console.log(`Congratulation! You guessed the number : ${randomNumber}`);
//             } else if(userGuess < randomNumber){
//                 console.log(`Too low! Try again.`);
//             }else if(userGuess> randomNumber){
//                 console.log(`Too high! Try again.`);
//             }
//         }
//     } while (userGuess !== randomNumber);
// }

// 5. WHILE LOOP FOR A COUNTDOWN
// function countDown(numbers: number){
//     while(numbers >= 0){
//         console.log(`Count down to ${numbers}`);
//         numbers --;
//     }
// }
// countDown(8);

// 6. ENUMS FOR DAYS OF THE WEEK
// enum DaysOfWeek {
//     Saturday,
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday, 
//     Thursday,
//     Friday 
// }
// function week(day: DaysOfWeek){
//     if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday){
//         return "Weekend";
//     } else {
//         return "Weekday";
//     }
// }
// console.log(`Saturday = ${week(DaysOfWeek.Saturday)}`);
// console.log(`Friday =${week(DaysOfWeek.Friday)}`);

// 7. Tuples For RGB Colors
// type RGBTuple = [number, number, number];
// function describeColor(rgb: RGBTuple): string{
//     const [red, green , biue] = rgb;
//     return `RGB(${red}, ${green}, ${biue})`;
// }
// const color: RGBTuple = [255 , 0 ,0];
// console.log(describeColor(color));
