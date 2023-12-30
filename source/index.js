
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
    popupWindow.className =  `${id} is-visuallyHidden`

}

function closePopup(id) {
    var popupWindow = document.getElementById(id);
    var _listen = document.getElementById ('listen');
    var _goodAt = document.getElementById('goodAt');
    var _body = document.getElementById('body');
    var _Education = document.getElementById('Education');
    var _Awards = document.getElementById('Awards');
    var _table = document.getElementById('table');
    var _intro = document.getElementById('intro');

    popupWindow.className = `${id} is-hidden is-visuallyHidden`;
    _listen.className = 'listen';
    _goodAt.className = 'goodAt';
    _body.className = '';
    _Awards.className = 'Awards';
    _Education.className = 'Education';
    _table.className = 'jobs';
    _intro.className = 'intro';

    
    
}


function getModal(className) {
    var modal = document.getElementsByClassName(className);
    return modal;

}


function blurry(modal) {
    var _modal = document.getElementById(modal);
    var _goodAt = document.getElementById('goodAt');
    var _body = document.getElementById('body');
    var _listen = document.getElementById('listen');
    var _Education = document.getElementById('Education');
    var _Awards = document.getElementById('Awards');
    var _table = document.getElementById('table');
    var _intro = document.getElementById('intro');

    showPopup(modal);

    _modal.className = `${modal} is-visuallyHidden`;
    setTimeout(function() {
        _listen.className = 'listen is-blurred';
        _goodAt.className = "goodAt is-blurred";
        _Education.className = "Education is-blurred";
        _Awards.className = "Awards is-blurred";
        _modal.className = "modal";
        _table.className = 'jobs is-blurred';
        _intro.className = 'intro is-blurred';
    }, 100);
    _body.className = "ModalOpen"
    
}