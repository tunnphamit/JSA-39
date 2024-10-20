
// Tại một thời điểm, 1 biến chỉ lưu được 1 giá trị duy nhất
let a = 3
console.log("Giá trị của biến a trước khi ghi đè: ", a);

// Ghi đè giá trị của biến a
a = 4
console.log("Giá trị của biến a sau khi bị ghi đè là: ", a);

// Mảng: Có thể lưu được nhiều giá trị (Có nhiều phần tử) tại 1 thời điển
// Chỉ số (index) của mảng bắt đầu từ 0
let colorList = ["Yellow", "Green", "Red", "White"];

// In ra phần tử có chỉ số là 2
console.log("Phần tử có chỉ số là 2", colorList[2]);

// Kiểm tra số lượng phần tử của mảng
let colorListLength = colorList.length
console.log("Số lượng phầm tử của colorList", colorListLength);

// Bài toán: Làm sao để in ra phần tử cuối cùng của mảng colorList?
console.log(colorList[colorListLength - 1]);

// Câu hỏi: Có thể thay đổi giá trị của phần tử trong mảng không?
colorList[0] = "Blue"
console.log(colorList[0]);

// Khi đẩy 1 dự án mới lên github
// git init 