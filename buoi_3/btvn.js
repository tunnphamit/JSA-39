// - Tạo 1 mảng productList chứa danh sách sản phẩm về trang phục
// - Hiển thị danh sách sản phẩm ra giao diện trang web (sử dụng kiến thức về mảng, vòng lặp)_
// - Nâng cao: 
//     Trong danh sách sản phẩm productList, mỗi sản phẩm là 1 đối tượng (kiểu dữ liệu đối tượng)
//     let productList = [
//         {
//             'name': 'Sản phẩm 1',
//             'image': 'link url ảnh 1',
//             'price': 199000,
//         },
//         {
//             'name': 'Sản phẩm 2',
//             'image': 'link url ảnh 2',
//             'price': 199000,
//         },
//     ]
// Hiển thị danh sách sản phảm bảo gòm các thông tin: name, image, price


// Kiểu dữ liệu đối tượng (Object) trong JS 
// VD

const productContainer = document.querySelector("#product-container")

let productList = [
    {
        "name": "Iphone 16",
        "image": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-600x600.jpg",
        "price": 25000000,
    },
    {
        "name": "Samsung S22 Ultra",
        "image": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22-ultra/galaxy-s22-ultra-green.jpg",
        "price": 20000000,
    },
    {
        "name": "Iphone 16",
        "image": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-600x600.jpg",
        "price": 25000000,
    },
    {
        "name": "Samsung S22 Ultra",
        "image": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22-ultra/galaxy-s22-ultra-green.jpg",
        "price": 20000000,
    },
    {
        "name": "Iphone 16",
        "image": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-600x600.jpg",
        "price": 25000000,
    },
    {
        "name": "Samsung S22 Ultra",
        "image": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22-ultra/galaxy-s22-ultra-green.jpg",
        "price": 20000000,
    },
    {
        "name": "Iphone 16",
        "image": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-600x600.jpg",
        "price": 25000000,
    },
    {
        "name": "Samsung S22 Ultra",
        "image": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22-ultra/galaxy-s22-ultra-green.jpg",
        "price": 20000000,
    },
    {
        "name": "Iphone 16",
        "image": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-600x600.jpg",
        "price": 25000000,
    },
    {
        "name": "Samsung S22 Ultra",
        "image": "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s22-ultra/galaxy-s22-ultra-green.jpg",
        "price": 20000000,
    },
]

function showProduct() {
    let htmls = ""
    for (let i = 0; i < productList.length; i++) {
        
        // Leterial string tromg JS
        htmls += `
            <div class="product-item">
                <h6>${productList[i].name}</h6>
                <h3>${productList[i].price}</h3>
                <img src="${productList[i].image}">
            </div>
        `
    }

    productContainer.innerHTML = htmls
}

// Gọi hàm
showProduct()