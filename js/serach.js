$('.section-2').find('input[type=submit]').click(function(){
    $('.serach,.shade').show()
})
$('.serach>span').click(function(){
    $('.serach,.shade').hide()
})
function serach(){
    const left = $('.serach').find('.left')
    const right = $('.serach').find('.right')
    const li = $('.serach>ul li')
    const sli = $('.serach div li')
    let num = 0
    right.click(function(){
        ++num;
        if(num>2){
            num=0;
        };
        $(li[num]).show().siblings().hide()
        $(sli[num]).css({'background': '#58f7db','color':'#fff'})
        .siblings().css({'background': '#fff','color':'#000'})
    });
    left.click(function(){
        num--;
        if(num<0){
            num=2;
        };
        $(li[num]).show().siblings().hide()
        $(sli[num]).css({'background': '#58f7db','color':'#fff'})
        .siblings().css({'background': '#fff','color':'#000'})
    })
    $(sli).click(function(){
        let index = $(this).index()
        $(this).css({'background': '#58f7db','color':'#fff'})
        .siblings().css({'background': '#fff','color':'#000'})
        $(li[index]).show().siblings().hide()
    })
}
serach()