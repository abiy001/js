const soalMenengah = (a, b) => {
    let total = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            total++;
        }
    }
    console.log(total);
};

const main = (a, b) => {
    let hasil = 0;
    for (let i = a; i < b; i++) {
        if(1 % 2 == 1) {
            hasil = hasil + 1;
        }
    }
};