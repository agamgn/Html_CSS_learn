// 基本点：canvas是基于状态来画图的
var canvas = document.getElementById("canvas");

var content = canvas.getContext("2d");
content.beginPath();
content.moveTo(100, 100);
content.lineTo(700, 700);
content.lineTo(100, 700);
content.lineTo(100, 100);

content.lineWidth =5
content.strokeStyle="red"
content.closePath();
// stroke用于绘制线条的
content.stroke();
content.beginPath();
content.moveTo(100, 10);
content.lineTo(500, 100);
content.strokeStyle="blue"
content.stroke();
content.closePath();
// content.fillStyle="rgb(2,100,30)";
// content.fill();



