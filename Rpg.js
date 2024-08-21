window.onload = function() {
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 1000);
};

