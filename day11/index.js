console.log("Day 11 — Basic Objects & Functions");

const sampleAnimal = {
  name: "Cheetah",
  color: "golden yellow",
  speed: 120, // km/h
};

/**
 * tampilkan info hewan di console dengan format:
 * {nama} is a {warna} animal that can run as fast as {kecepatan} km/h.
 * @param {Object} animal - isinya nama, warna, and kecepatan
 */

const showAnimalInfo = (animal) => {
  console.log(`${animal.name} is a ${animal.color} animal 
that can run as fast as ${animal.speed} km/h.`);
};

showAnimalInfo(sampleAnimal);

// Example Function: Sum of Numbers

/**
 * tambah 2 angka secara sederhana
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of a and b
 */

const addNumbers = (a, b) => a + b;

console.log("1 + 2 =", addNumbers(1, 2));
console.log("10 + 15 =", addNumbers(10, 15));
console.log("7 + 8 =", addNumbers(7, 8));
