(function() {

    document.addEventListener("mousemove", parallax);

    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let width = window.innerWidth/2.5;
        let height = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50 - (mouseX - width) * 0.01}% ${50 - (mouseY - height) * 0.01}%`;
        let depth2 = `${50 - (mouseX - width) * 0.03}% ${50 - (mouseY - height) * 0.03}%`;
        let depth3 = `${50 - (mouseX - width) * 0.06}% ${50 - (mouseY - height) * 0.06}%`;
        let x = `${depth3}, ${depth2}, ${depth1}`;
        elem.style.backgroundPosition = x;
    }

})();