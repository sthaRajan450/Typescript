class Product{
    name:string;
    price:number;
    PId:number;
    inCart=false;
    isOrdered=false;
    constructor(name:string,price:number,pId:number){
        this.name=name;
        this.price=price;
        this.PId=pId;
    }
    addToCart():void{
    this.inCart=true;
    }
    buyProduct():string{
        if(this.inCart)
        {
            return `product ${this.name} is ordered in ${this.price}`
        }
        else{
            return `no product in cart`
        }
    }
}


var product1=new Product('samsung',20000,34)
product1.addToCart()
console.log(product1.buyProduct())
var product2=new Product('opp0',10000,345   )
product2.addToCart()
console.log(product2.buyProduct())
