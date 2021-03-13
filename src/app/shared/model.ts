export class Model {

    colors:string;
    size:number;
    amount:number;
    city:string;
    delivery:string;
    data:string;

    constructor (colors:string, size:number, 
                amount:number, city:string, delivery:string, data:string) {

        this.colors = colors;
        this.size = size;
        this.amount = amount;
        this.city = city;
        this.delivery = delivery;
        this.data = data;            

    }

}