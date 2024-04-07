document.addEventListener('DOMContentLoaded', function () {
    var projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(function (img) {
        img.addEventListener('click', function () {
            var url = this.getAttribute('data-url'); // 获取当前被点击元素的 data-url 属性
            if (url) {
                window.location.href = url;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // 至少有 10% 的元素在视口中时触发

    // 为所有希望滚动触发的元素添加观察器
    document.querySelectorAll('.scroll-trigger').forEach(item => {
        observer.observe(item);
    });
});




// 当滑动到相应位置就可以变颜色

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".aside-nav-link");
    const sections = document.querySelectorAll("section[id]");

    function activateLink() {
        let fromTop = window.scrollY;
        let viewportHeight = window.innerHeight;
        // 增加一个额外的偏移量，可以根据需要调整这个值
        let offset = viewportHeight / 8; // 将偏移量设置为视窗高度的1/8

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 修改条件，增加偏移量
            if (sectionTop - fromTop < viewportHeight / 4 - offset && sectionTop - fromTop + sectionHeight > 0) {
                let currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').endsWith(currentId)) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateLink);
    activateLink(); // 初始调用以设置初始活动链接
});
