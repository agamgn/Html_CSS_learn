// 基本点：canvas是基于状态来画图的
var canvas = document.getElementById("canvas");
canvas.width=1024;
canvas.height=768;

var ctx = canvas.getContext("2d");
ctx.lineWidth=5;
ctx.strokeStyle="#005588";
ctx.arc(300,300,200,0,2*Math.PI);
ctx.stroke();

for(var i =0;i<10;i++){
    ctx.beginPath();
    ctx.arc(50+i*100,600,40,0,2*Math.PI*(i+1)/10);
    // 封闭
    // ctx.closePath();
    ctx.stroke();
}

