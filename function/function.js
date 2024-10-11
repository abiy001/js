// Luas Segitiga

    // let alas = Number(prompt("masukan alas"));
    // let tinggi = Number(prompt("masukan tinggi"));

    // function luasSegitiga(alas, tinggi) {
    //     let luas = (alas * tinggi) / 2;
    //     alert(`Luas Segitiga = ${luas}`)
    // }

    // luasSegitiga(alas, tinggi)

//  Keliling Lingkaran

    // let jari = Number(prompt("masukan jari-jari"));

    // function kelilingLingkaran(jari) {
    //     let keliling = 2 * 3.14 * jari
    //     alert(`Keliling Lingkaran = ${keliling}`)
    // }
    // kelilingLingkaran(jari)

// Bill Prima

    let bill = Number(prompt("masukan bill"));

    function billPrima(bill) {
        let prima = true;
        for (let i = 2; i < bill; i++) {
            if (bill % i == 0) {
                prima = false;
                break;
            }
        }
        if (prima) {
            alert(`Bill Prima = ${bill}`)
        } else {
            alert(`Bill bukan prima`)
        }
    }

    billPrima(bill)