import { ProductType } from "./product";

export class DB {
    private products: ProductType[] = [];


    insertProduct(product: ProductType): void {
        this.products.push(product);
    }

    getAllProducts(): ProductType[] {
        return this.products;
    }

    //getproductsID metodas

    getproductByID(id: string): ProductType | undefined {
        return this.products.find(product => product.id === id);
    }

}