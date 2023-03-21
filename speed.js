const speed = parseInt(prompt("Enter the speed of the car "));
let demeritPoints = 0;

if (speed <= 70) {
  console.log("Ok");
} else {
  demeritPoints = ((speed - 70) / 5);
  console.log(`Demerit points: ${demeritPoints}`);
}