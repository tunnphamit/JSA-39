
// Nhiệm vụ về nhà sau buổi 2 JSA39
// Tạo file btvn.js trong folder buoi_2, tạo mảng foodList chứa danh sách món ăn và thực hiện các yêu cầu sau
// 1. Tính và in ra số lượng phần tử của mảng foodList
// 2. Thay đổi giá trị của phần tử cuối cùng của mảng bằng 1 món ăn khác. In ra màn hình giá trị mới sau khi thay đổi
// 3. Nếu số lượng phần từ < 10 thì thông báo ra "Số lượng món ăn không đủ", nếu >= 10 thì thông báo "Số lượng món ăn đã đủ"
// (Gợi ý sử dụng câu lệnh if để kiểm tra, sử dụng hàm alert để hiện thị thông báo)
// 4. Đẩy Btvn lên github

// Tìm hiểu thêm: Vòng lặp, hàm trong JS

// Khởi tạo mảng foodList
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

// 1. Tính và in ra số lượng phần tử của mảng foodList
let foodListLength = foodList.length;
console.log("Số lượng phần tử của foodList", foodListLength);

// 2. Thay đổi giá trị của phần tử cuối cùng của mảng bằng 1 món ăn khác. In ra màn hình giá trị mới sau khi thay đổi
foodList[foodListLength - 1] = "Bún thang";
console.log(foodList);

// 3. Nếu số lượng phần từ < 10 thì thông báo ra "Số lượng món ăn không đủ", 
//    nếu >= 10 thì thông báo "Số lượng món ăn đã đủ"

if (foodListLength < 10) {
    alert("Số lượng món ăn không đủ");
} else {
    alert("Số lượng món ăn đã đủ");
}

// 4. Đẩy Btvn lên github