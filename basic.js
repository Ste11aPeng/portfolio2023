document.addEventListener('DOMContentLoaded', function () {
    var projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(function (img) {
        img.addEventListener('click', function () {
            var url = this.getAttribute('data-url'); // 获取当前被点击元素的 data-url 属性
            if (url) {
                window.location.href = url; // 使用这个 URL 进行导航
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一旦元素变为可见，就停止观察它
            }
        });
    }, { threshold: 0.1 }); // 至少有 10% 的元素在视口中时触发

    // 为所有希望滚动触发的元素添加观察器
    document.querySelectorAll('.scroll-trigger').forEach(item => {
        observer.observe(item);
    });
});
