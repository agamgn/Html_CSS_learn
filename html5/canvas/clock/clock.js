// 获取画布
var dom = document.getElementById("clock");
// 返回一个用于在画布上绘图的环境
var ctx = dom.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var rem = width / 200;

function drawBackground() {
    ctx.save();
    // 重新映射画布上的 (0,0) 位置
    ctx.translate(r, r);
    // 起始一条路径，或重置当前路径
    ctx.beginPath();
    // 设置或返回当前的线条宽度
    ctx.lineWidth = 10 * rem;
    // 创建弧/曲线（用于创建圆形或部分圆）
    ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);
    // 绘制已定义的路径
    ctx.stroke();

    // 画数字
    var houseNumber = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = 18 * rem + 'px Arial';
    // 设置或返回文本内容的当前对齐方式
    ctx.textAlign = 'center';
    // 设置或返回在绘制文本时使用的当前文本基线
    ctx.textBaseline = 'middle';
    houseNumber.forEach(function (number, i) {
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30 * rem);
        var y = Math.sin(rad) * (r - 30 * rem);
        ctx.fillText(number, x, y);

    });

    // 画点
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var y = Math.sin(rad) * (r - 18 * rem);
        var x = Math.cos(rad) * (r - 18 * rem);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
        } else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
        }
        ctx.fill();
    }
}

function drawHour(hour, minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * minute;
    // 旋转当前绘图
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 6 * rem;
    // 设置或返回线条的结束端点样式
    ctx.lineCap = 'round';
    // 把路径移动到画布中的指定点，不创建线条
    ctx.moveTo(0, 10 * rem)
    // 添加一个新点，然后在画布中创建从该点到最后指定点的线条。;
    ctx.lineTo(0, -r / 2 );
    ctx.stroke();
    // 返回之前保存过的路径状态和属性
    ctx.restore();
}
function drawMinute(minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * minute;
    ctx.rotate(rad);
    ctx.lineWidth = 3 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10 * rem);
    ctx.lineTo(0, -r + 30);
    ctx.stroke();
    ctx.restore();
}

function drawSecond(second) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#c14543';
    var rad = 2 * Math.PI / 60 * second;
    ctx.rotate(rad);
    ctx.moveTo(-2, 20 * rem);
    ctx.lineTo(2, 20 * rem);
    ctx.lineTo(1, -r + 18 * rem);
    ctx.lineTo(-1, -r + 18 * rem);
    ctx.fill();
    ctx.restore();
}

function drawDot() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3 * rem, 0, 2 * Math.PI, false);
    ctx.fill();
}




function draw() {
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    drawBackground();
    drawHour(hour, minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}
draw();
setInterval(draw, 1000);