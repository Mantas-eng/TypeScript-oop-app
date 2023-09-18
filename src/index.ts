import { Product } from "./product";
import { DB } from "./db";

const database = new DB();

const product1 = new Product({
    id: "Computer",
    title: "GAMING",
    price: 1000,
    category: "Components",
});

const product2 = new Product({
    id: "Laptop",
    title: "Potato",
    price: 25,
    category: "Components",
})

database.insertProduct(product1.getProduct());
database.insertProduct(product2.getProduct());
const allProducts = database.getAllProducts();

console.log("products", allProducts);




