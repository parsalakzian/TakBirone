// Contact Popup
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.visibility = 'visible';
    document.getElementById('popupOverlay').style.opacity = '1';
    document.querySelector('.popup-content').classList.add('show');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.querySelector('.popup-content').classList.remove('show');
    setTimeout(function() {
        document.getElementById('popupOverlay').style.visibility = 'hidden';
        document.getElementById('popupOverlay').style.opacity = '0';
    }, 300);
});

// Address Popup
document.getElementById('openPopup2').addEventListener('click', function() {
    document.getElementById('popupOverlay2').style.visibility = 'visible';
    document.getElementById('popupOverlay2').style.opacity = '1';
    document.querySelector('.popup-content2').classList.add('show');
});

document.getElementById('closePopup2').addEventListener('click', function() {
    document.querySelector('.popup-content2').classList.remove('show');
    setTimeout(function() {
        document.getElementById('popupOverlay2').style.visibility = 'hidden';
        document.getElementById('popupOverlay2').style.opacity = '0';
    }, 300);
});