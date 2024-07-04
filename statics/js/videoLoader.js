window.onload = function() {
    const gallery = document.getElementById('gallery');
    const images = gallery.getElementsByTagName('img');
    let currentIndex = 0;
    const delay = 2500; // 滚动的时间间隔

    function updateGalleryPosition() {
        const imageWidth = images[0].offsetWidth;
        gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGalleryPosition();
    }, delay);

    // 初始化位置
    updateGalleryPosition();
};