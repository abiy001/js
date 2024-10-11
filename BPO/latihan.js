// function person(firstname, lastname, age) {
//     this.firstname = firstname;
//     this.lastname;
//     this.age = age;

//     this.showDetails = function () {
//         console.log(`nama saya ${firstname}, ${lastname}, umur saya ${age}`);
//     };
// }

// const Denggol = new person("Denggol", "doang", 30);
// Denggol.showDetails();

// const Grano = new person("Granola", "time", 17);
// Grano.showDetails();

function PersegiPanjang(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;

    this.luas = function() {
        console.log(this.panjang * this.lebar);
    }

    this.keliling = function() {
        console.log(2 *(this.panjang + this.lebar))
    }
}

let persegiPanjang = new PersegiPanjang(50, 20);
   persegiPanjang.luas();
   persegiPanjang.keliling();