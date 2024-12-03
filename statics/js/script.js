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

// Galery
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate gallery items
function animateGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }else {
            item.classList.remove('show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', animateGalleryItems);

// Initial call to check items already in viewport
animateGalleryItems();