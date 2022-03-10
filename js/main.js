// //lấy tất cả các thành phần con trong .slider-items
// let slides = document.querySelector('.slideshow__items').children;
// console.log(slides);
// // gán class .truoc vào biến nextSlide vừa khai báo
// let sangPhai = document.querySelector(".truoc");
// //gán class .sau vào biến prevSlide vừa khai báo
// let sangTrai = document.querySelector(".sau");
// // tạo biến totalSlides, thể hiện có tất cả bao nhiêu slide tương đương có bấy nhiêu bức ảnh
// let totalSlides = slides.length;
// //tạo biến đếm
// let index = 0;

// let next1 = function() {
//     index++;
//     if (index == totalSlides) {
//         index = 0;
//     }
//     console.log(index);
//     console.log("sang phai ok");
//     for (let i = 0; i < totalSlides; i++) {
//         slides[i].classList.remove("batHinh");
//     }
//     slides[index].classList.add("batHinh");

// }

// let next2 = function() {

//     if (index == 0) {
//         index = totalSlides - 1;
//     } else {
//         index--;
//     }

//     console.log(index);
//     console.log("sang trai ok");
//     //sau mỗi lần chạy hàm thì tắt hiển thị toàn bộ ảnh
//     // chỉ hiển thị ảnh có index tương ứng
//     for (let i = 0; i < totalSlides; i++) {
//         slides[i].classList.remove("batHinh");
//     }
//     slides[index].classList.add("batHinh");
// }

// let list = document.getElementsByClassName("slideshow__items");
// list = document.createElement("div");

let slideIndex;

function showPic() {
    let pics = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < pics.length; i++) {
        // pics[i].classList.add("hide");
        pics[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    pics[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > pics.length - 1) {
        slideIndex = 0
    }
    //tự động chuyển đổi slide sau 5s
    setTimeout(showPic, 3000);
}
//mặc định hiển thị slide đầu tiên 
showPic(slideIndex = 0);


function currentSlide(n) {
    showPic(slideIndex = n);
}


// showPic();