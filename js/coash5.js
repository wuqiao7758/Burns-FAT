$('.section-4').find('.right').click(function(){
    if(!$('.section-4 .flow').is(':animated')){
        $('.section-4 .flow').animate({marginLeft:'-1275px'},'slow');
    }
}
)
$('.section-4').find('.left').click(function(){
    if(!$('.section-4 .flow').is(':animated')){
        $('.section-4 .flow').animate({marginLeft:'0px'},'slow');
    }
}
)