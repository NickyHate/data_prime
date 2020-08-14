const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const pi = Math.PI;

ctx.strokeStyle = 'black';
ctx.lineWidth = '2'
ctx.moveTo( 50, 50 );
ctx.lineTo( 50, 450 );
ctx.moveTo( 50, 450 );
ctx.lineTo( 750, 450 );
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'white'
ctx.moveTo(100, 300);
ctx.arc(100, 300, 5, 0, 2*pi, false);

ctx.moveTo(100, 300);
ctx.arc(200, 300, 5, 0, 2*pi, false);

ctx.moveTo(200, 300);
ctx.arc(300, 300, 5, 0, 2*pi, false);

ctx.moveTo(300, 300);
ctx.arc(400, 300, 5, 0, 2*pi, false);

ctx.moveTo(400, 300);
ctx.arc(500, 300, 5, 0, 2*pi, false);

ctx.moveTo(500, 300);
ctx.arc(600, 300, 5, 0, 2*pi, false);

ctx.moveTo(600, 300);
ctx.arc(700, 300, 5, 0, 2*pi, false);

ctx.closePath();
ctx.stroke();
ctx.fill()