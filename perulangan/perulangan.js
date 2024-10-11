//soal dasar nomor 1
    // let n = prompt("masukan angka");

    // for (let i = 1; n >= i; i++) {
    //     console.log(i);
    // }

//soal dasar nomor 2
    // let batasAwal = prompt("masukan angka awal");
    // let batasAkhir = prompt("masukan angka akhir");


    // for (let i = batasAwal; i <= batasAkhir; i++) {
    //     alert(i);
    // }

// 3.   soal dasar nomor 3

    // let batasAwal = prompt("masukan angka awal");
    // let batasAkhir = prompt("masukan angka akhir");  

    // while (batasAwal <= batasAkhir) {
    //     if (batasAwal % 2 == 1) {
    //         alert(batasAwal);
    //         batasAwal++;
    //     }else {
    //         alert("yah ini bukan bilangan ganjil");
    //     }
    // }

//4.	soal dasar nomor 4

    let batasAwal = prompt("masukan angka awal");
    let batasAkhir = prompt("masukan angka akhir");

    while (batasAwal <= batasAkhir) {
        if (batasAwal % 5 == 0) {
            alert(batasAwal);
        }else {
            alert("yah ini bukan bilangan habis dibagi 5");
        }
        batasAwal++;
    }