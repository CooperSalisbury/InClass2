function showImage(imageId) {
    var image = document.getElementById(imageId);
    var hideButton = document.querySelector(`#${imageId} + .hide-button`);
    var showButton = document.querySelector(`#${imageId} + .show-button`);
    
    image.style.display = 'block';
    hideButton.style.display = 'inline-block';
    showButton.style.display = 'none';
}

function hideImage(imageId) {
    var image = document.getElementById(imageId);
    var hideButton = document.querySelector(`#${imageId} + .hide-button`);
    var showButton = document.querySelector(`#${imageId} + .show-button`);
    
    image.style.display = 'none';
    hideButton.style.display = 'none';
    showButton.style.display = 'inline-block';
}