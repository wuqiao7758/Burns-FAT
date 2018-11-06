$('.section-1 .join,.banner a').click(function(){
    $('.pop-up,.shade').show()
    $('.pop-up .close').click(function(){
        $('.pop-up,.shade').hide()
    })
});
$('#form').submit(function(event){
    event.preventDefault()
});
$('#form :input').blur(function(){
    if($(this).is('#name')){
        if(this.value == ""){
            $(this).next().replaceWith('<span class="error">✘</span>')
        }else{
            $(this).next().replaceWith('<span class="success">✔</span>')
        }
    }
    if($(this).is('#phone')){
        if(this.value == "" || (this.value != "" && !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.value))){
            $(this).next().replaceWith('<span class="error">✘</span>')
        }else{
            $(this).next().replaceWith('<span class="success">✔</span>')
        }
    }
}).keyup(function(){
    $(this).triggerHandler('blur')
});
$('#send').click(function(){
    $('#form :input').trigger('blur')
    let numError = $('#form .error').length
    if(numError>0){
        return false
    }
    $('.ok').slideDown(2000).slideUp(1000)
    for(let i of $('#form :text')){
        i.value = ""
    }
    $('#form span').replaceWith('<span class="error">*</span>')
    $('.pop-up,.shade').hide(2000)
});