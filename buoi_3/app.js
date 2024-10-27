
/**
 * 1. Câu lệnh điều kiện if - else if - else
    * Khái niệm: Dùng để đưa ra điều kiện thực thi cho 1 đoạn code nào đó.
    * VD: Nếu a < b => In ra "A lớn hơn B"
    * Cú pháp (Syntax)
        if (điều_kiện_1) {
            Code 
        } else if (điều_kiện_2) {

        } else {
            Code
        }
 */

// VD minh họa
/** Cho biến userAge có giá trị bằng giá trị người dùng nhập.
 * Kiểm tra: 
 * Nếu tuổi < 18 => In ra "Tuổi < 18"
 * Nếu tuổi = 18 => In ra "Tuổi = 18"
 * Nếu tuổi > 18 => In ra "Tuổi > 18"
 */

// Cách 1: Dùng hàm prompt để lấy dữ liệu user nhập vào
// let userAge = prompt("Nhập tuổi: ");

// if (userAge < 18) {
//     console.log("Tuổi < 18");
// }
// else if (userAge == 18) {
//     console.log("Tuổi = 18");
// }
// else {
//     console.log("Tuổi > 18");
// }

// Cách 2: Dùng thẻ input để lấy dữ liệu user nhập vào
// Tự nghiên cứu (BTVN). Gợi ý: Áp dụng kiến thức về DOM để giải quyết

/**
 * 1. Vòng lặp for
 * Công dụng: Dùng để thực hiện 1 đoạn code lặp lại nhiều lần (Với số lần biết trước)
 * VD: Dùng vòng lặp để hiển thị ra các số từ 1 đến 100
 * Cú pháp (Syntax): 
    for (let tên_biến, điều_kiện_dừng_của_vòng_lặp, bước nhảy) {
        Code
    }
 */

// VD minh họa: In ra màn hình console các số từ 1 đến 100
for (let index = 1; index <= 100; index ++) {
    console.log(index);
}

// VD2: Cho mảng foodList
// In ra từng phần từ của mảng
let foodList = [
    "Phở",
    "Bánh mì",
    "Bún chả",
    "Nem rán",
    "Cháo",
    "Gỏi cuốn",
    "Bún bò Huế",
    "Hủ tiếu",
    "Cơm tấm",
    "Bánh xèo" // => Bún Thang
];

console.log(foodList);
let foodListLength = foodList.length;

for (let i = 0; i < foodListLength; i++) {
    console.log(foodList[i]);
}

// In ra danh sách các món ăn của foodList
let foodListHTML = document.querySelector(".food-list");
for (let i = 0; i < foodListLength; i++) {
    // Tạo ra phần tử li
    let li = document.createElement("li");

    // Thêm nội dung cho thẻ li
    li.innerHTML = foodList[i];

    // Nối các thẻ li vào thẻ ul
    foodListHTML.appendChild(li)
}

