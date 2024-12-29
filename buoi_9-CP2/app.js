
// Lấy DOM
const productForm = document.querySelector(".product-form")
const name = document.querySelector(".name")
const price = document.querySelector(".price")
const productContainer = document.querySelector(".product-container");

// Lấy danh sách sản phẩm trong localstorage
let productList = JSON.parse(localStorage.getItem('product-list')) || []

// Hàm thêm sản phẩm, khi thêm thành công thì gọi lại hàm showProduct
function addProduct(event) {
    event.preventDefault();

    let nameValue = name.value
    let priceValue = price.value

    let productInfo = {
        name: nameValue,
        price: priceValue,
    }

    productList.push(productInfo)

    localStorage.setItem("product-list", JSON.stringify(productList))

    showProduct()
}

// Hàm hiển thị danh sách sản phẩm
function showProduct() {
    let htmls = ""
    for(let i = 0; i < productList.length; i++) {
        htmls += `
            <div class="product-item">
                <h3>${productList[i].name}</h3>
                <p>${productList[i].price}</p>
            </div>
        `
    }
    productContainer.innerHTML = htmls
}

showProduct()

// Bắt sự kiện submit của form để gọi hàm addProduct
// để thêm sản phẩm mới
productForm.addEventListener("submit", addProduct)