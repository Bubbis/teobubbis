var c = document.getElementById("GameBoard");
var board = c.getContext("2d");
var lastone;
var player = new player(170,170,10,10);
var playerWidth = player.getWidth();
var playerHeight = player.getHeight();
var food = new food(200,200,350,10,10);
var foodWidth = food.getWidth();
var foodHeight = food.getHeight();
food.draw();
var direction = 87;
var requestID;
var counter = 0;


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
    var locations = player.getLocations();
    if(counter == speed) {
        if (direction == 87) {//w
            player.extractY();
        }
        if (direction == 83) {//s
            player.addY();
        }
        if (direction == 65) {//a
            player.extractX();
        }
        if (direction == 68) {//d
            player.addX();
        }
        //Tormaystesti seiniin
        if (player.getX() > 330 || player.getY() > 330 || player.getX() < 10 || player.getY() < 10) {
            gameOver();
        }
        //Tormaystesti ruokaan
        for(var i=0;i<locations.length;i++) {
            if (locations[i][0] <= (food.getX() + foodWidth)
                && food.getX() <= (locations[i][0] + playerWidth)
                && locations[i][1] <= (food.getY() + foodHeight)
                && food.getY() <= (playerHeight + locations[i][1])) {
                player.addPoints();
                food.clear();
                food.draw();
            }
        }
        //Tormaystesti omaan hantaan
        for(var i=0;i<locations.length;i++){
            for(var k=0;k<locations.length;k++){
                if(i==k){
                    //do nothing
                }
                else{
                    if(locations[i][0] < (locations[k][0]+playerWidth)
                    && locations[k][0] < (locations[i][0]+playerWidth)
                    && locations[i][1] < (locations[k][1]+playerHeight)
                    && locations[k][1] < (locations[i][1]+playerHeight)){
                        gameOver();
                    }
                }
            }
        }
        counter = 0;
    }
    else{
        counter = counter + 1;
    }

};

function animate() {
    requestID = requestAnimationFrame(animate);
    update(8);
    player.draw();
}
animate();

function gameOver(){
    console.log(player.getPoints());
    cancelAnimationFrame(requestID);
    player.draw();
}
