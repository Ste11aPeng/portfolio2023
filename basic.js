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
    // 第一个 IntersectionObserver，命名为 observer1
    let observer1 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.scroll-trigger').forEach(item => {
        observer1.observe(item);
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







    // 第二个 IntersectionObserver，命名为 observer2
    // 获取所有的 div
    const divs = document.querySelectorAll('.columnlayout3 > div');

    // 设置淡入函数，给每个div添加淡入效果
    function fadeInElements() {
        divs.forEach((div, index) => {
            setTimeout(() => {
                div.style.opacity = 1;  // 设置为可见
            }, index * 300);
        });
    }

    // 创建第二个观察者
    let observer2 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInElements();  // 当元素进入视口时触发淡入效果
                obs.disconnect();  // 触发后取消监听，防止重复触发
            }
        });
    });

    // 开始观察 .columnlayout3 容器
    const target = document.querySelector('.columnlayout3');
    if (target) {
        observer2.observe(target);
    } else {
        console.warn('.columnlayout3 元素未找到');
    }
});







// 尝试

document.addEventListener('DOMContentLoaded', function () {

    // 创建 IntersectionObserver 实例
    let observer1 = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // 选择 .scroll-trigger 和 .columnlayout3 > div 元素进行观察
    const elementsToObserve = document.querySelectorAll('.scroll-trigger, .columnlayout3 > div');

    elementsToObserve.forEach(item => {
        observer1.observe(item);
    });

    // 手动检查元素是否已经在视口中
    elementsToObserve.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
            observer1.unobserve(item);
        }
    });

    // 检查元素是否在视口中的函数
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom > 0
        );
    }

    // 当滑动到相应位置就可以变颜色
    const navLinks = document.querySelectorAll(".aside-nav-link");
    const sections = document.querySelectorAll("section[id]");

    function activateLink() {
        let fromTop = window.scrollY;
        let viewportHeight = window.innerHeight;
        let offset = viewportHeight / 8;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

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

