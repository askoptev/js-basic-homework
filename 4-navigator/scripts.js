const addressLat = 5;
const addressLong = 10;
let positionLat = 6;
let positionLong = 12;

const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;

const distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2)

console.log(`Расстояние до пункта назначения: ${distance.toFixed(2)}км.`);
