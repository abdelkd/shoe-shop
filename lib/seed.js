const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("node:crypto");
const { readFile, readFileSync } = require("node:fs");
const path = require("node:path");

// type Product = {
//   id: string,
//   name: string,
//   price: number,
//   description: string,
//   audience: "male" | "female",
//   images: string[],
//   addedOn: Date,
//   visits: number,
//   // colors and sizes,
//   availableSizes: ShoeSize[],
//   availableColors: ShoeColor[],
// }

// type ShoeColor = {
//   color: "white" | "black" | "red",
//   isAvailable: boolean,
// }

// type ShoeSize = {
//   size: string,
//   isAvailable: boolean
// }

const prisma = new PrismaClient();

async function generateProducts(numProducts = 10) {
  const products = [];

  for (let i = 0; i < numProducts; i++) {
    const id = randomUUID();
    const name = `Product ${i + 1}`;
    const price = Math.floor(Math.random() * 100) + 10;
    const description = `This is a great product with many features.`;
    const audience = ["MALE", "FEMALE"][Math.floor(Math.random() * 2)];
    const addedOn = new Date();
    const visits = Math.floor(Math.random() * 1000);

    const imageName = name + ".jpeg";
    const imageFile = readFileSync(
      path.join(__dirname, "seedImages", imageName),
    );
    const imageBuffer = Buffer.from(imageFile);

    const image = await prisma.image.create({
      data: {
        data: imageBuffer,
      },
    });

    const availableColors = ["white", "black", "red"];

    const availableSizes = ["7", "8", "9", "10"];

    const product = {
      id,
      name,
      price,
      description,
      audience,
      imageId: image.id,
      addedOn,
      visits,
      availableColors,
      availableSizes,
    };

    products.push(product);
  }

  return products;
}

const seedDb = async () => {
  try {
    const products = await generateProducts(10);

    for (const product of products) {
      const r = await prisma.product.create({
        data: product,
      });
      console.log(r);
    }

    console.log("Finished without a problem");
  } catch (error) {
    console.log("Oops something went wrong");
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

seedDb();
