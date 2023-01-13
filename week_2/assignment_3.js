function calculate(data) {
    const discount = data.discount;
    let total = 0;
    for(let product of data.products){
        total += product.price;
    }
    return total*discount; 
}
    const discountedPrice = calculate({
    discount: 0.1,
    products: [
    {
    name: "Product 1",
    price: 100
    },
    {
    name: "Product 2",
    price: 700
    },
    {
    name: "Product 3",
    price: 250
    }
    ]
    });
    console.log(discountedPrice)