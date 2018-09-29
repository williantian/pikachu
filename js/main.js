!function () {
    var duration = 100
    function writeCode(code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            /*没有起作用？*/
            if (n < code.length) {
               setTimeout(run, duration)
            }else{
                fn && fn.call()
            }
        }, 10)
    }

    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow': 
              duration = 100
              break
            case 'normal': 
              duration = 50
              break
            case 'fast': 
              duration = 10
              break

        }
    })

let code = `
/*首先准备皮卡丘的皮肤颜色*/
.preview{
    height: 100%;
    border: 1px solid bule;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}
.wrapper{
    width: 100%;
    height: 218px;
    position: relative;
}
/*接下来 画皮卡丘的鼻子*/
.nose{
    position: absolute;
    border: 11px solid transparent;
    border-top-color: black;
    border-radius: 50%;
    left: 50%;
    top: 28px;
    margin-left: -11px;
}
/*开始画眼睛*/
.eye{
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2e2e2e;
    position: absolute;
    border: 2px solid black;

}
/*画左眼*/
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*给眼睛增加立体感*/
.eye.left::after{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 5px;
    top: 3px;
}
/*右边眼睛也是一样*/
.eye.right{
    left: 50%;
    margin-left: 90px;
}
.eye.right::after{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 5px;
    top: 3px;
}
/*给皮卡丘画上可爱的腮红*/
.face{
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #fc0d1c;
    position: absolute;
    border: 2px solid black;
}
.face.left{
    right: 50%;
    top: 85px;
    margin-right: 116px;
}
.face.right{
    left: 50%;
    top: 85px;
    margin-left: 116px;
}
/*接下来就是上嘴唇了*/
.upperLip{
    position: absolute;
    height: 20px;
    width: 54px;
    border: 2px solid black;
    top: 52px;
    background: #fee433;
    
}
.upperLip.left{
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    right: 50%;
    transform: rotate(-20deg);
}
.upperLip.right{
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    left: 50%;
    transform: rotate(20deg);
}
/*下嘴唇*/
.lowerLip-wrapper{
    width: 300px;
    height: 110px;
    position: absolute;
    bottom: 45px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}
.lowerLip{
    position: absolute;
    height: 2000px;
    width: 200px;
    border-radius: 100px/1000px;
    border: 2px solid black;
    bottom: 0;
    background: #990513;
    margin-left: 50px;
    overflow: hidden;
}
/*还有舌头哦*/
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    margin-left: 50px;
    border-radius: 50%;
}
/*好了  这个皮卡丘送给你*/
`
    writeCode(code)

}.call()

