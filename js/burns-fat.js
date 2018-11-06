
$(function(){
        /* 公司介绍手动轮播 */
        $('.flow').find('.right_one').click(function(){
            if(!$('.spicList').is(':animated')){
                    $('.spicList').animate({marginLeft:'-1460px'},'slow');
            }
        }
        )
        $('.flow').find('.left_one').click(function(){
            if(!$('.spicList').is(':animated')){
                $('.spicList').animate({marginLeft:'0px'},'slow');
            }
        }
        )
        /* 健身设备 */
        var sLi = document.querySelectorAll('.more li');
        var img = document.querySelector('.big img')
        var length = sLi.length;
        for (var i = 0; i < length; i++) {
            sLi[i].onmouseover = function () {
                var currentImg = this.children[0];
                var imgSrc = currentImg.getAttribute('src');
                img.src = imgSrc.replace(/x/g, 'xx');
            }
        }
    /* 导航轮播 */
    $(".sidebar li").bind("click",function () {//找到li，鼠标滑上去实现什么效果
        var index = $(this).index();//获取到鼠标滑动上去的元素的序列号
        $("#columm section").eq(index-1).show().siblings().hide();
        $('#four').addClass('haha')
    });
/* img轮播 */
    $(".num ul li").hover(function () {//找到li，鼠标滑上去实现什么效果
        var index = $(this).index();//获取到鼠标滑动上去的元素的序列号
        $(".friend div").eq(index).show().siblings().hide();
    });
    $('.container-teach li').hover(function(){
        if(!$('.slideup').is(':animated')){
        $(this).find('.slideup').slideDown('normal')
    }
    },function(){
        $(this).find('.slideup').slideUp('normal')
    })
})