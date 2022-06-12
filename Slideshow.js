<!DOCTYPE html>
<html>
<head>
<title>Slideshow</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
    font-family: Arial;
    margin:0;
}
* {
    box-sizing: border-box;
}
.A {
    position: relative;
}
.B {
    display: none;
}
.prev , .next {
    position: absolute;
    width:auto;
    background-color: ;
    color:White;
    user-select: none;
    font-size: 40px;
    top:40%;
    margin-top: -50px;
    padding: 15px;
    border-radius: 0px 3px 3px 0px;
    font-weight: bold;
    cursor: pointer;
}
.prev:hover, .next:hover {
    background-color: black;
}
.next {
    right:0;
    border-radius: 3px 0px 0px 3px;
}
.C::after {
    content: "";
    display: table;
    clear: both;
}
.D {
    float:left;
    width: 20%;
}
</style>
</head>
<body>

<div class="A">
    <div class="B">
        <img src="https://www.w3schools.com/howto/img_lights_wide.jpg" style="width:100%">
    </div>
    <div class="B">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
    </div>
    <div class="B">
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
    </div>
</div>

<a class="prev" onclick="myFunction(-1)"><</a>
<a class="next" onclick="myFunction(1)">></a>

<div class="C">
    <div class="D">
        <img class="F" src="https://www.w3schools.com/howto/img_lights_wide.jpg" style="width:100%" onclick="currentSlide(1)">
    </div>
    <div class="D">
        <img class="F" src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%" onclick="currentSlide(2)">
    </div>
    <div class="D">
        <img class="F" src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%" onclick="currentSlide(3)">
    </div>
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function myFunction(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("B");
    let dots = document.getElementsByClassName("F");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0 ; i < slides.length ; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0 ; i < dots.length ; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} =
</script>

</body>
</html>
