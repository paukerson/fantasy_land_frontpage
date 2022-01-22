

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        document.getElementById('input').checked = false;
    }
}, true);

screen.lockOrientation('portrait');