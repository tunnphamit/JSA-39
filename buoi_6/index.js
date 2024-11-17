
/**
 Code chạy từ trên xuống dưới, 
    câu lệnh nào viết trước thì thực hiện trước
 Lập trình bất đồng bộ: Thứ tự thực hiện câu lệnh không nhất thiết
 phải từ trên xuống dưới
 */

// API lấy trên MockAPI
const movieAPI = "https://6739e583a3a36b5a62efed92.mockapi.io/movies"
const movieList = document.querySelector(".movie-list")

// Hàm gọi dữ liệu từ API
async function getMovieList() {
    try {
        let respone= await fetch(movieAPI)
        let movieList = await respone.json()
        renderMoveList(movieList) // Gọi hàm render movie list
    } catch (error) {
        console.log("Call API ERR", error);
        
    }
}
// Hàm render danh sách phim
function renderMoveList(movies) {
    let html = "";
    for (let i = 0; i < movies.length; i++) {
        html += `
            <div class="movie-item">
                <img src="${movies[i].image_path} 
                    alt="${movies[i].name}">
                <h5 class="movie-name">${movies[i].name}</h5>
            </div>
        `
    }
    movieList.innerHTML = html; // Render movie list
}
getMovieList()