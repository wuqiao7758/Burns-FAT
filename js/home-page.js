window.onload = function(){
        const green = document.querySelector('.container3>img:nth-of-type(2)');
        const div = document.querySelector('.container3>div');
        green.onmouseover = function () {
            div.style.display = 'block'
        }
    div.onmouseover = function () {
         div.style.display = 'block'
    }
    green.onmouseout = function () {
        div.style.display = 'none'
    }
    div.onmouseout = function(){
            div.style.display = 'none'
    }
}
