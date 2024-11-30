const fruits = require("../data/fruits");

const index = () => {
    console.log("Method index - Menampilkan Daftar Buah:");
    fruits.forEach((fruit, index) => console.log(`${index + 1}. ${fruit}`));
};

const store = (name) => {
    console.log(`Method store - Menambahkan buah '${name}'`);
    fruits.push(name);
    index();
};

const update = (position, name) => {
    if (position >= 0 && position < fruits.length) {
        console.log(`Method update - Mengubah buah di posisi ${position + 1} menjadi '${name}'`);
        fruits[position] = name;
        index();
    } else {
        console.error("Posisi tidak valid!");
    }
};

const destroy = (position) => {
    if (position >= 0 && position < fruits.length) {
        console.log(`Method destroy - Menghapus buah di posisi ${position + 1}`);
        fruits.splice(position, 1);
        index();
    } else {
        console.error("Posisi tidak valid!");
    }
};

module.exports = { index, store, update, destroy };
