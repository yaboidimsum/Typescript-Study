"use strict";
//!Interface for the class that will be used to create the object
//Inteface adalah sebuah kontrak yang berisi definisi dari sebuah class
function createIntel(processor) {
    console.log(`Thank you for buying ${processor.brand} ${processor.baseModel} ${processor.modelName} with clock size ${processor.clockSpeed} Ghz with turbo boost ${processor.turboBoost} and core ${processor.coreTotal}`);
}
function createAmd(processor) {
    console.log(`Thank you for buying ${processor.brand} ${processor.baseModel} ${processor.modelName} with clock size ${processor.clockSpeed} Ghz with turbo boost ${processor.precisionBoost ? processor.precisionBoost : "Not available"} and core ${processor.coreTotal}`);
}
//Harus sesuai dengan interface yaitu lengkap
const CoreI7 = {
    brand: "Intel",
    baseModel: "Core i7",
    modelName: "i7-8700K",
    coreTotal: 6,
    clockSpeed: 4.5,
    turboBoost: true,
};
const Ryzen1 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "Ryzen 3 3200G",
    coreTotal: "Quadcore",
    clockSpeed: 6,
};
const Ryzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "Ryzen 3 3200G",
    coreTotal: "Quadcore",
    clockSpeed: 6,
    precisionBoost: "Auto Overclocking",
};
createIntel(CoreI7);
createAmd(Ryzen1);
createAmd(Ryzen3);
