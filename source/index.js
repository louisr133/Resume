
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && window.innerWidth > 800) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


function showPopup(id) {
    var popupWindow = document.getElementById(id);
    popupWindow.style.display = "block";

}

function closePopup(id) {
    var popupWindow = document.getElementById(id);
    popupWindow.style.display = "none";
}


