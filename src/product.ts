export type ProductType = {
    id: string;
    title: string;
    price: number;
    category: string;
};


//sukurkite product klase
export class Product {
    private id: string;
    private title: string;
    private price: number;
    private category: string;

    constructor({ id, title, price, category }: ProductType) {
        this.id = this.generateId();
        this.title = title;
        this.price = price;
        this.category = category;
    }

    //Getteris ir setteris kainai
    get getPrice(): number {
        return this.price;
    }


    set setPrice(newPrice: number) {
        this.price = newPrice;
    }

    //getproduct metodas, kuris grazina producttype objekta
    getProduct(): ProductType {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            category: this.category,
        };
    }
    //automatiskai sugeneruoti id
    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}
