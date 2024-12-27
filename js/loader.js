document.addEventListener('DOMContentLoaded', function () {
    const loader = document.createElement('div');
    loader.className = 'loader-container';
    loader.innerHTML = `
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="logo"></div>
    `;
    document.body.appendChild(loader);

    // Add logo path dynamically
    const logoElement = loader.querySelector('.logo');
    logoElement.style.backgroundImage = "url('./images/logo.png')"; // Change the path to your logo

    // Remove loader after 5 seconds
    setTimeout(() => {
        loader.style.display = 'none';
    }, 5000); // 5000ms = 5 seconds
});
