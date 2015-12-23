function player(x,y,width,height){
    var c = document.getElementById("GameBoard");
    var board = c.getContext("2d");
    this.oldx = x;
    this.oldy = y;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.points = 0;
    this.counter = 0;
    this.locations = new Array();
    this.locations[0] = [x,y];

    this.draw = function(){
        board.clearRect(this.oldx,this.oldy,10,10);
        for(var i = 0; i < this.locations.length; i++){
            board.fillStyle = "#FFFF00"
            board.fillRect(this.locations[i][0],this.locations[i][1],10,10);
        }
        this.oldx = this.locations[0][0];
        this.oldy = this.locations[0][1];
    };

    this.addPoints = function(){
        this.points = this.points + 1;
        this.counter = this.counter + 1;
        this.locations.push([this.oldx,this.oldy]);
    };

    this.getPoints = function(){
        return this.points;
    }
    this.getX = function(){
        return this.locations[0][0];
    };

    this.getY = function(){
        return this.locations[0][1];
    };

    this.addY = function(speed){
        this.locations[0][1] = this.locations[0][1] + speed;
    };

    this.extractY = function(speed){
        this.locations[0][1] = this.locations[0][1] - speed;
    };

    this.addX = function(speed){
        this.locations[0][0] = this.locations[0][0] + speed;
    };

    this.extractX = function(speed){
        this.locations[0][0] = this.locations[0][0] - speed;
    };

    this.getWidth = function(){
        return this.width;
    };

    this.getHeight = function(){
        return this.height;
    };
}