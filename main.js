var c = document.getElementById("GameBoard");
var board = c.getContext("2d");
var lastone;
var player = new player(170,170,10,10);
var food = new food(200,200,350,10,10);
food.draw();
var direction = 87;
var requestID;


//WASD LIIKKUU
function listenkey(){
    window.onkeydown = function(p){
        var key = p.keyCode ? p.keyCode : p.which;
        // 87 = w
        if (key === 87 && direction != 83){
            direction = 87;
        }
        // 65 = a
        else if (key === 65 && direction != 68){
            direction = 65;
        }
        // 83 = s
        else if (key === 83 && direction != 87){
            direction = 83;
        }
        // 68 = d
        else if (key === 68 && direction != 65){
            direction = 68;
        }
    };
}
listenkey();


var update = function(speed){
    if (direction == 87){//w
        player.extractY(speed);
    }
    if(direction == 83){//s
        player.addY(speed);
    }
    if(direction == 65){//a
        player.extractX(speed);
    }
    if(direction == 68){//d
        player.addX(speed);
    }
    //Tormaystesti seiniin
    if(player.getX()>340 || player.getY()>340 || player.getX()<0 || player.getY()<0){
        gameOver();
    }
    //Tormaystesti ruokaan
    if(player.getX()<=(food.getX() + food.getWidth())
        &&food.getX()<=(player.getX() + player.getWidth())
        &&player.getY()<=(food.getY() + food.getHeight())
        &&food.getY()<=(player.getHeight() + player.getY())){
        player.addPoints();
        food.clear();
        food.draw();
    }

};

function animate() {
    requestID = requestAnimationFrame(animate);
    update(2);
    player.draw();
}
animate();

function gameOver(){
    console.log(player.getPoints());
    cancelAnimationFrame(requestID);
}
