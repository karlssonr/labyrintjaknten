// 1

var bana = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,2,1,1,1,1,1,1,1,1,2,1],
    [1,2,1,2,1,2,1,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,2,2,1,1,1,1,1,1,2,1],
    [1,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1],
    [1,2,2,2,1,2,2,2,2,2,1,1,1,1,1,1],
    [1,1,1,2,1,2,1,1,1,2,1,2,2,1,2,4],
    [1,2,2,2,1,2,1,2,2,2,1,1,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var kattx = 1;
var katty = 1;

var monsterx = 8;
var monstery = 3;
var eastWest = 1;  
var isPaused = false;

function update() {
    if (isPaused == false){
    monsterx = monsterx + eastWest;
   
    if(bana[monstery][monsterx]  === 1 ){
        eastWest = eastWest * (-1)
        monsterx = monsterx + 2 * eastWest;
    }

    
    draWorld();
 }
}

function pause(){

    if (isPaused == true){
        isPaused = false
    }
    else{
        isPaused = true
    }
    
}



    


function draWorld() {
    document.getElementById("spelruta").innerHTML = "";
    for(var y = 0; y < bana.length; y=y+1){
        for(var x=0; x < bana[y].length; x=x+1){

            if (y===monstery&&x===monsterx){
                document.getElementById("spelruta").innerHTML += "<img src='monster.png' class='monster bilder'>";
                continue
            }
            if (y===katty&&x===kattx){
                document.getElementById("spelruta").innerHTML += "<img src='cat.png' class='cat bilder'>";
                continue
            }



            else{
                if(bana[y][x] ===1){
                    document.getElementById("spelruta").innerHTML += "<img src='wall.png' class='wall bilder'>";
                }
                else  if(bana[y][x] ===2){
                    document.getElementById("spelruta").innerHTML += "<div <img src='grå.png' class='marken bilder'></div>";
                }
                else  if(bana[y][x] ===4){
                    document.getElementById("spelruta").innerHTML += "<div class='mål bilder'></div>";
                }
        }//else
    }//xlength
        
}//ylength

    

if (katty===monstery&&kattx===monsterx){
    
            isPaused = true;
            var gameover = document.createElement("gameover");
            gameover.innerHTML = "GAME OVER";
            document.body.prepend(gameover);
            gameover.classList.add("gameover");
            console.log(gameover.innerHTML);
    }//gameover

    if (katty===9 && kattx===15){
        isPaused = true;
        var finish = document.createElement("finish");
        finish.innerHTML = "FINISH";
        document.body.prepend(finish);
        finish.classList.add("finish");
        console.log(finish.innerHTML);
    }//finish

}//drawworld





 function move(xdirection,ydirection){
     var nyposx = kattx + xdirection;
     var nyposy = katty + ydirection;

    if (bana[nyposy][nyposx] === 2 || bana[nyposy][nyposx] === 4){
         kattx = nyposx ;
         katty = nyposy ;
        
     }
    
     

}
