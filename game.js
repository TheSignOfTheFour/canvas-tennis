window.onload = function() {
	var canvas = new fabric.Canvas('tenis');
	canvas.backgroundColor = '#45E75F';

	// создаём прямоугольник
	var rect = new fabric.Rect({
	  left: 100,
	  top: 400,
	  fill: 'white',
	  width: 100,
	  height: 8
	});

	canvas.add(rect);
	document.body.onkeydown = function(ev) {
		var draw = { onChange: canvas.renderAll.bind(canvas) };
		switch (ev.keyCode) {
			case 37:
				rect.animate('left', '-=20', draw);
				break;
			case 38:
				rect.animate('top', '-=20', draw);
				break
			case 39:
				rect.animate('left', '+=20', draw);
				break
			case 40:
				rect.animate('top', '+=20', draw);
				break
			default:
				break
		}
	}

	window.ball = new fabric.Circle({
	  radius: 7, fill: 'black', left: 100, top: 100
	});

	canvas.add(ball);

	ball.animate('top', '+=300', { onChange: canvas.renderAll.bind(canvas) });
}
