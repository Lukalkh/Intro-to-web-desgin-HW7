$(document).ready(function () {
    // 1. 访问元素并更改内容
    $("h1").text("Welcome to Luka's Interactive World!");

    // 2. 更改样式：导航栏动态样式
    $(".menu a").hover(
        function () {
            $(this).css({
                "color": "#FFD700",
                "font-size": "20px",
                "transition": "0.3s",
            });
        },
        function () {
            $(this).css({
                "color": "#D8BFD8",
                "font-size": "18px",
            });
        }
    );

    // 3. 淡入淡出效果：About 页面文字内容
    $(".floating-text").hide().fadeIn(2000);

    // 4. 鼠标悬停：图片放大并添加阴影
    $(".gallery img").hover(
        function () {
            $(this).css({
                "transform": "scale(1.1)",
                "box-shadow": "0 8px 15px rgba(0, 0, 0, 0.5)",
                "transition": "transform 0.3s, box-shadow 0.3s",
            });
        },
        function () {
            $(this).css({
                "transform": "scale(1)",
                "box-shadow": "none",
            });
        }
    );

    // 5. 滑动显示：Gallery 图片的标题
    $(".gallery figcaption").hide();
    $(".gallery figure").hover(
        function () {
            $(this).find("figcaption").slideDown();
        },
        function () {
            $(this).find("figcaption").slideUp();
        }
    );

    // 6. 按钮点击：弹出提示框
    $(".btn").click(function () {
        alert("Thanks for exploring Luka's Creative World!");
    });

    // 7. 添加动画效果：页面滚动到特定位置时触发
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("header").css({
                "background": "#8A2BE2",
                "transition": "background 0.5s",
            });
        } else {
            $("header").css("background", "linear-gradient(90deg, #4A90E2, #8A2BE2)");
        }
    });

    // 8. 动态添加新内容
    $("main").append("<p style='text-align:center; margin-top:20px;'>Thank you for visiting!</p>");
});
