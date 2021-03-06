function food(x,y,boardsize,width,height){
    var c = document.getElementById("GameBoard");
    var board = c.getContext("2d");
    this.boardsize = boardsize;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    var img = new Image();
    img.src = "images/food.png"


    this.getX = function(){
        return this.x;
    };

    this.getY = function(){
        return this.y;
    };

    this.clear = function(){
        board.clearRect(this.x,this.y,this.width,this.height);
    };

    this.draw = function(){
        this.x = Math.floor(Math.random()*(this.boardsize-10+1)+0);
        this.y = Math.floor(Math.random()*(this.boardsize-10+1)+0);
        board.fillStyle = board.createPattern(img, "repeat");
        board.fillRect(this.x,this.y,this.width,this.height);
    };

    this.getWidth = function(){
        return this.width;
    };

    this.getHeight = function(){
        return this.height;
    };
}