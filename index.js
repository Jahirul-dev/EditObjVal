const products = [
    {name: 'Gold Star', priceVal:200},
    {name: 'Diamond Star', priceVal:403},
    {name: 'Ruby Star', priceVal:3220},
    {name: 'Monika Star', priceVal:534},
    {name: 'Silver Star', priceVal:34},
    {name: 'Titenium Star', priceVal:76}
]

const saleProducts = products.map((deductVal =>{
    //Edit Object value
    if (deductVal.priceVal > 50){
        return deductVal.priceVal = deductVal.priceVal/3
    }
    else
    return deductVal;

    // Without changing object value
    // if (deductVal.priceVal > 50){
    //     return {name:deductVal.name, priceVal:deductVal.priceVal/2}
    // }
    // else
    // return deductVal;
}))

console.log(products);
console.log(saleProducts);
