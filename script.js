const canvas = document.getElementById('c1');

const ctx = canvas.getContext('2d');

// ctx.fillRect(x, y, width, height);
ctx.fillStyle = 'red';
ctx.fillRect(100, 50, 150, 75);

// стереть всё 

ctx.clearRect(0, 0, 400, 200);

ctx.rect( 50, 50, 100, 100);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = '10';
ctx.stroke();