// app.js
const { index, store, update, destroy } = require('.controllers/FruitController');

const main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0);
};

main();
