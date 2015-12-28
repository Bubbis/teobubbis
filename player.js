function player(x,y,width,height){
    //x ja y vaa starttaus pisteita, lokaatiot tallennetaan this.locations
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
    var img = new Image();
    img.src = "images/player.gif"

    this.draw = function(){
        board.clearRect(this.oldx,this.oldy,this.width,this.height);
        for(var i = 0; i < this.locations.length; i++){
            board.fillRect(this.locations[i][0],this.locations[i][1],this.width,this.height);
            board.fillStyle = board.createPattern(img, "repeat");
            board.fillRect(this.locations[i][0],this.locations[i][1],10,10);
        }
        this.oldx = this.locations[this.locations.length - 1][0];
        this.oldy = this.locations[this.locations.length - 1][1];
    };

    this.addPoints = function(){
        this.points = this.points + 1;
        this.locations.push([this.oldx,this.oldy]);
        document.getElementById('yourPoints').innerHTML = "Points: " + this.points;
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

    this.addY = function(){
        this.locations.unshift([this.locations[0][0],(this.locations[0][1] + this.height)]);
        this.locations.pop();
    };

    this.extractY = function(){
        this.locations.unshift([this.locations[0][0],(this.locations[0][1] - this.height)]);
        this.locations.pop();
    };

    this.addX = function(){
        this.locations.unshift([(this.locations[0][0]+this.width),this.locations[0][1]])
        this.locations.pop();
    };

    this.extractX = function(){
        this.locations.unshift([(this.locations[0][0]-this.width),this.locations[0][1]])
        this.locations.pop();
    };

    this.getWidth = function(){
        return this.width;
    };

    this.getHeight = function(){
        return this.height;
    };

    this.getLocations = function(){
        return this.locations;
    }
}