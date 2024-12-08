let productContainer = document.querySelector(".product-container")
console.log(productContainer);

let productList = [
    {
        name: "Macbook",
        ram: 16,
        screen: 14,
        price: 35000000
    },
    {
        name: "Dell",
        ram: 16,
        screen: 16,
        price: 25000000
    },
    {
        name: "Asus",
        ram: 16,
        screen: 14,
        price: 30000000
    },
]

function showProductList() {
    let html = ""
    for (let i = 0; i < productList.length; i++) {
        html += `
            <h3>${productList[i].name}</h3>
        `
    }

    console.log(html);
    
    productContainer.innerHTML = html
}

showProductList()



// In ra tên của tất cả các sản phẩm