

// Lấy DOM của film-container
const filmContainer = document.querySelector(".film-container")
// Tạo biến để lưu đường dẫn đến Mock API
const movieAPI = "https://67431b12b7464b1c2a63a07d.mockapi.io/movies"

// Hàm lấy dữ liệu từ Mock API
async function getMovieList() {
    let data = await fetch(movieAPI)
    let moveListData = await data.json()
    
    // Gọi hàm hiển thị sản phẩm ra trang web
    renderMoveList(moveListData)
}

// Hàm hiển thị dữ liệu ra trang web (Render)
// Coi movies là 1 mảng chứa danh sách phim
function renderMoveList(movies) {
    let html = ""
    for (let i = 0; i < movies.length; i++) {
        html += `
            <div class="movie-item">
                <img src="${movies[i].image_path}">
                <h3>${movies[i].name}</h3>
            </div>
        `
    }

    console.log(html);
    filmContainer.innerHTML = html
}

getMovieList()