
// Localstorage là gì?
// Dùng để lưu trữ dữ liệu trên trình duyệt (5MB)


// let userId = "kjadjasjdasldakldsadlkdasd"

// let darkMode = true

// // Lưu dữ liệu vào localstorage
// localStorage.setItem("user_id_local", userId)
// localStorage.setItem("dark_mode", darkMode)

// // Lấy dữ liệu từ LS ra
// let data = localStorage.getItem('user_id_local')
// console.log(data);

// ___________________
// Tramg TodoList - Note những việc cần làm
// Khi click vào nút thêm thì lấy dữ liệu đã nhập
// ở ô input và lưu vào Localstorage 

// Khai báo DOM
const inputTodo = document.querySelector(".inputTodo")
const btnAdd = document.querySelector(".btn-add")
const todoListDOM = document.querySelector(".todo-list")

let todoList = []
// Hàm xử lý thêm Todo vào Localstorage
function addNewTodo(event) {
    // Ngăn cho trình duyệt không tải lại trang
    event.preventDefault();

    // Lấy dữ liệu của người dùng nhập vào ô input
    let inputValue = inputTodo.value;
    console.log(inputValue);

    // THêm todo mới vào mảng todoList
    todoList.push(inputValue)

    // Lưu dữ liệu vào Localstorage
    // Localstorage chỉ lưu được dữ liệu dạng chuỗi
    // Nên trước khi lưu phải biến dữ liệu thành kiểu chuỗi
    localStorage.setItem("todoList", JSON.stringify(todoList))

    // GỌi hàm để cập nhật danh sách todoList
    showTodoList();
}

// Hàm hiển thị danh sách todo
function showTodoList() {
    // Lấy dữ liệu và biến thành dạng JS
    // Nếu trong trường hợp localstorage chưa có key là todoList thì todoListData = []
    let todoListData = JSON.parse( localStorage.getItem("todoList") ) || []
    console.log(todoListData);
    let htmls = ""
    for (let i = 0; i < todoListData.length; i++) {
        htmls += `
            <li>${todoListData[i]}</li>
        `
    }
    todoListDOM.innerHTML = htmls;
}

showTodoList()

// Lắng nghe: Khi click vào btnAdd thì thực hiện hàm addNewTodo
btnAdd.addEventListener("click", function(event) {
    addNewTodo(event)
})



