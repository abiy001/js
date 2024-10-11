let hasil;

function tambah() {
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`);
}
function kurang() {
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`);
}
function kali() {
    hasil = a * b;
    alert(`${a} * ${b} = ${hasil}`);
}
function bagi() {
    hasil = a / b;
    alert(`${a} / ${b} = ${hasil}`);
}

let operator = prompt("masukan operator");
let a = Number(prompt("masukan angka pertama"));
let b = Number(prompt("masukan angka kedua"));

if (operator == "+") {
    tambah(a, b);
    alert(`${a} + ${b} = ${hasil}`);
} else if (operator == "-") {
    kurang(a, b);
    alert(`${a} - ${b} = ${hasil}`);
} else if (operator == "*") {
    kali(a, b);
    alert(`${a} * ${b} = ${hasil}`);
} else if (operator == "/") {
    bagi(a, b);
    alert(`${a} / ${b} = ${hasil}`);
} else {
    alert("operator salah");
}