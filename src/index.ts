//!Interface for the class that will be used to create the object
//Inteface adalah sebuah kontrak yang berisi definisi dari sebuah class

type coreCount = 2 | 4 | 6 | 8 | 10 | 12 | 16 | 32;
type coreType = "Dualcore" | "Quadcore";

type Core = coreCount | coreType;

interface interfaceProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  // Selain spesifikasi tipe data, interface juga bisa digunakan untuk membatasi nilai yang bisa diinput
  coreTotal: Core;
  clockSpeed: number;
}

//Interface bisa dapat dibuat lagi dengan nama yang sama namun isinya akan menambahkan data baru
// interface interfaceProcessor {
//   turboBoost: boolean;
// }

interface Intel extends interfaceProcessor {
  turboBoost: boolean;
}

interface AMD extends interfaceProcessor {
  precisionBoost?: string;
}

function createIntel(processor: Intel): void {
  console.log(
    `Thank you for buying ${processor.brand} ${processor.baseModel} ${processor.modelName} with clock size ${processor.clockSpeed} Ghz with turbo boost ${processor.turboBoost} and core ${processor.coreTotal}`
  );
}

function createAmd(processor: AMD): void {
  console.log(
    `Thank you for buying ${processor.brand} ${processor.baseModel} ${
      processor.modelName
    } with clock size ${processor.clockSpeed} Ghz with turbo boost ${
      processor.precisionBoost ? processor.precisionBoost : "Not available"
    } and core ${processor.coreTotal}`
  );
}

//Harus sesuai dengan interface yaitu lengkap
const CoreI7: Intel = {
  brand: "Intel",
  baseModel: "Core i7",
  modelName: "i7-8700K",
  coreTotal: 6,
  clockSpeed: 4.5,
  turboBoost: true,
};

const Ryzen1: AMD = {
  brand: "AMD",
  baseModel: "Ryzen 3",
  modelName: "Ryzen 3 3200G",
  coreTotal: "Quadcore",
  clockSpeed: 6,
};

const Ryzen3: AMD = {
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
