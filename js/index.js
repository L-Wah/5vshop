document.addEventListener(("DOMContentLoaded") ,function(){
  var pic = document.getElementById('pic').getElementsByTagName("li"),
      circle = document.getElementById('point').getElementsByTagName('li'),
      left = document.getElementById('left'),
      right = document.getElementById('right'),
  //声明一个变量，获取图片和圆里面的数组下标，index等于几就是相对应下标的值
  index = 0,
  
  //声明变量保存一个空的定时器；
  timer = null;

  // 定义并调用自动播放函数
  timer = setInterval(autoPlay, 5000);

  // 鼠标划过整个容器时停止自动播放
  container.onmouseover = function () {
    clearInterval(timer);
  }
  // 鼠标离开整个容器时继续播放至下一张
  container.onmouseout = function (){
    timer = setInterval(autoPlay, 5000);
  }
  //自动播放，最后一张时，返回第一张
  function autoPlay(){
    if (++index >= pic.length){
      index = 0;
    }
    changePic(index);
  }

  // 定义图片切换函数
  function changePic (index) {
    for (var i = 0; i < pic.length; ++i) {
      //遍历pic里所有的元素，设置隐藏
      circle[i].style.background = "";
      circle[i].className = "";
      pic[i].style.opacity=0;
      pic[i].style.zIndex = "0";
    }
      pic[index].style.zIndex = "1";
      circle[index].style.background='#fc0';
      pic[index].style.opacity=1;
  }

   // 遍历所有圆里的li的值，实现点击切换至对应的图片
  for( var i = 0;i < circle.length;i++ ){
    circle[i].onmousedown = function (){
      clearInterval(timer);
      // this：指向调用函数的对象
      //此处this拿的就是circle[i]对应的li标签
      index = this.getAttribute("value");
      //调用切换图片函数，将递增之后的index作为参数传过去
      changePic(index);
    } 
  }
  left.onmousedown = function(){
    clearInterval(timer);
     index--;
     if( index < 0 ){
       index = pic.length -1;
     }
     changePic(index);
  }
  right.onmousedown = function(){
    clearInterval(timer);
     index++;
     if( index > pic.length -1 ){
       index = 0;
     }
     changePic(index);
  }
  console.log(pic)
})
function pop(id){
  var id = document.getElementById(id).getElementsByTagName('ul');
  id[0].style.display= "block";
}
function out(id){
  var id = document.getElementById(id).getElementsByTagName('ul')
  id[0].style.display="none";
}
function jt_over(){
  var left = document.getElementById('left'),
  right = document.getElementById('right')
  left.style.backgroundColor="rgba(255, 255, 255, .3)"
  right.style.backgroundColor="rgba(255, 255, 255, .3)"
  left.style.visibility="visible";
  right.style.visibility="visible";
}
function jt_out(){
  var left = document.getElementById('left'),
  right = document.getElementById('right')
  left.style.visibility="hidden";
  right.style.visibility="hidden";
}
function jtover_left(){
  var right = document.getElementById('right')
  right.style.backgroundColor="rgba(255, 255, 255, .3)"
  right.style.visibility="visible";
}
function jtout_left(){
  var right = document.getElementById('right')
  right.style.visibility="hidden";
}
function jtover_right(){
  var left = document.getElementById('left')
  left.style.backgroundColor="rgba(255, 255, 255, .3)"
  left.style.visibility="visible";
}
function jtout_right(){
  var left = document.getElementById('left')
  left.style.visibility="hidden";
}