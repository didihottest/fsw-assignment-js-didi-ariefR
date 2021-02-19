let numbers = [20, 30, 40, 50, 60, 70];

// Nomor 1
const arrMax = (a, b) => Math.max(a, b);
const arrMin = (a, b) => Math.min(a, b);

let numbersMaxVal = numbers.reduce(arrMax);
let numbersMinVal = numbers.reduce(arrMin);


console.log(`Nilai terbesar dari array numbers adalah ${numbersMaxVal} dan nilai terkecilnya adalah ${numbersMinVal}`);
console.log(numbers);
// Nomor 2

let sortArrayDesc = (a, b) => (b - a);
console.log(`Nilai dari array yang sudah di sort secara desc ${numbers.sort(sortArrayDesc)}`);
console.log(numbers);
// nomor 3 

let time = new Date();
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
    "Oktober", "November", "Desember"
];

console.log(`Hari dan Tanggal hari ini adalah ${hari[time.getDay()]} ${time.getDate()} ${bulan[time.getMonth()]} ${time.getFullYear()}`);
console.log(`Hari dan Tanggal kemarin adalah ${hari[time.getDay()-1]} ${time.getDate()-1} ${bulan[time.getMonth()]} ${time.getFullYear()}`);
console.log(`Hari dan Tanggal besok adalah ${hari[time.getDay()+1]} ${time.getDate()+1} ${bulan[time.getMonth()]} ${time.getFullYear()}`);

// nomor 4
numbers = [20, 30, 40, 50, 60, 70];
let accumulator = 19;
var accumulated = 0;
var newNumbers = [];
for (let i=0; i<numbers.length; i++) {
    accumulated = numbers[i] + accumulator;
    accumulator += 10;
    newNumbers.push(accumulated);
}
var newNumbersString = newNumbers.toString();
console.log(`numbers yang sudah dirubah dan berubah jadi string ${newNumbersString}`);