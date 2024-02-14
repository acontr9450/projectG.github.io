// Slideshow code below
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//Get slide info from database below & display
function getSlides(){
    let theURL = "http://localhost/moneyg/php/getslides.php";
    fetch( theURL )										
        .then( res => res.json() )						
        .then( data => displaySlides( data ) );			
}

let slides = [];

function displaySlides( theArray ){
    text = "";
    const slide = {
        img: '',
        date: '',
        desc: ''
    }
    theArray.forEach(function( item ){
        text += "<div class=\"slide\">";
        let count = 0;
        item.forEach(function( elem ){
            switch(count){
                case 0:
                    slide.img = elem;
                    console.log(slide.img);
                    text += "<img src=\"" + slide.img + "\">\n";
                    count++;
                    break;
                case 1:
                    slide.date = elem;
                    console.log(slide.date);
                    text += "<div class=\"date\">" + slide.date + "</div>\n";
                    count++;
                    break;
                case 2:
                    slide.desc = elem;
                    console.log(slide.desc);
                    text += "<div class=\"text\">" + slide.desc + "</div>\n";
                    count++;
                    break;
            }
        });
        text += "</div>\n"
        slides.push(slide);
    });
    text += "\n<a class=\"bttn\" onclick=\"changeSlide(-1)\">&#10094;</a>\n";
    text += "<a class=\"bttn\" onclick=\"changeSlide(1)\">&#10095;</a>\n";
    text += "</div>";
    document.getElementById( 'slideshow-container' ).innerHTML = text;
    showSlides();
}

