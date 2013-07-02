class App
    backgroundColor: '#45E75F'

    init:()->
        @canvas = new fabric.Canvas('tenis')
        @canvas.backgroundColor = @backgroundColor

        #создаём прямоугольник
        rect = new fabric.Rect
            left: 100
            top: 400
            fill: 'white'
            width: 100
            height: 8


        @canvas.add(rect)
        document.body.onkeydown = (ev)=>
            draw =
                onChange: canvas.renderAll.bind(canvas)

            switch (ev.keyCode)
                when 37
                    rect.animate('left', '-=20', draw)

                when 38
                    rect.animate('top', '-=20', draw)

                when 39
                    rect.animate('left', '+=20', draw)

                when 40
                    rect.animate('top', '+=20', draw)



        ball = new fabric.Circle
            radius: 7
            fill: 'black'
            left: 100
            top: 100

        @canvas.add(ball)
        self = @

        ball.animate('top', '+=300',  {onChange: self.canvas.renderAll.bind(self.canvas) })

app = new App()
window.onload = ()->
    app.init()