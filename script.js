let shareButton = document.getElementById('share-button')
let socialLinksContainer = document.getElementById('social-links-container')


document.addEventListener('click', function(event) {
    if (shareButton.contains(event.target)) {
        socialLinksContainer.style.display = 'block'
    } else if (socialLinksContainer.contains(event.target)) {
        socialLinksContainer.style.display = 'block'
    }
    else {
        socialLinksContainer.style.display = 'none'
    }
})
 