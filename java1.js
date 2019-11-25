
var bana = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,1,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,2,1,2,1,1,1,1,1,1,2,1,2,1,2,1],
    [1,2,1,2,1,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,2,1,1,1,1,1,1,1,1,2,1],
    [1,2,1,2,1,2,1,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,2,2,2,2,1,1,1,1,1,1,2,1],
    [1,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1],
    [1,2,2,2,1,2,2,2,2,2,1,2,1,1,1,1],
    [1,1,1,2,1,2,1,1,1,2,1,2,2,1,2,4],
    [1,2,2,2,1,2,1,2,2,2,1,1,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,2,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    
]
//positon katt
var kattx = 1;
var katty = 1;

//position monster1
var monsterx = 8;
var monstery = 3;

//position monster2
 var monster2x = 14;
 var monster2y = 10;

 //position monster3
 var monster3x = 11;
 var monster3y = 12;

  //position monster4
  var monster4x = 3;
  var monster4y = 13;

var eastWest4 = 1;
var eastWest3 = 1;
var eastWest2 = 1;
var eastWest  = 1;
  
var isPaused  = false;

function update() {
    if (isPaused == false){
    monsterx  = monsterx  + eastWest;
    monster2x = monster2x + eastWest2;
    monster3x = monster3x + eastWest3;
    monster4y = monster4y + eastWest4;

   
    if(bana[monstery][monsterx]  === 1 ){
        eastWest  = eastWest  * (-1)
        monsterx  = monsterx  + 2 * eastWest;


    }
    if(bana[monster2y][monster2x]  === 1 ){
       
        eastWest2 = eastWest2 * (-1)
        monster2x = monster2x + 2 * eastWest2;

    }

    if(bana[monster3y][monster3x]  === 1 ){
       
        eastWest3 = eastWest3 * (-1)
        monster3x = monster3x + 2 * eastWest3;

    }

    if(bana[monster4y][monster4x]  === 1 ){
       
        eastWest4 = eastWest4 * (-1)
        monster4y = monster4y + 2 * eastWest4;

    }



    
    draWorld();

    if (katty === monstery &&kattx === monsterx ||
        katty === monster2y&&kattx === monster2x||
        katty === monster3y&&kattx === monster3x||
        katty === monster4y&&kattx === monster4x){
        
                isPaused = true;
                var gameover = document.createElement("gameover");
                gameover.innerHTML = "GAME OVER";
                document.body.prepend(gameover);
                gameover.classList.add("gameover");
                console.log(gameover.innerHTML);
        }//gameover
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
    document.getElementById("spelruta_p").innerHTML= "";
    for(var y = 0; y < bana.length; y=y+1){
        for(var x=0; x < bana[y].length; x=x+1){

            if (y===monstery&&x===monsterx){
                document.getElementById("spelruta_p").innerHTML += "<img src='monster.png' class='monster bilder'>";
                continue
            }

            if (y===monster2y&&x===monster2x){
                document.getElementById("spelruta_p").innerHTML += "<img src='monster.png' class='monster bilder'>";
                continue
            }

            if (y===monster3y&&x===monster3x){
                document.getElementById("spelruta_p").innerHTML += "<img src='monster.png' class='monster bilder'>";
                continue
            }

            if (y===monster4y&&x===monster4x){
                document.getElementById("spelruta_p").innerHTML += "<img src='monster.png' class='monster bilder'>";
                continue
            }

            if (y===katty&&x===kattx){
                document.getElementById("spelruta_p").innerHTML += "<img src='cat.png' class='cat bilder'>";
                continue
            }



            else{
                if(bana[y][x] ===1){
                    document.getElementById("spelruta_p").innerHTML += "<img src='wall.png' class='wall bilder'>";
                }
                else  if(bana[y][x] ===2){
                    document.getElementById("spelruta_p").innerHTML += "<div <img src='grå.png' class='marken bilder'></div>";
                }
                else  if(bana[y][x] ===4){
                    document.getElementById("spelruta_p").innerHTML += "<div class='mål bilder'></div>";
                }

                else  if(bana[y][x] ===3){
                    document.getElementById("spelruta_p").innerHTML += "<img src='cat.png' class='cat bilder'>";
                }
        }//else
    }//xlength
        
}//ylength

    






    







}//drawworld





 function move(xdirection,ydirection){
     var nyposx = kattx + xdirection;
     var nyposy = katty + ydirection;

    if (bana[nyposy][nyposx] === 2 || bana[nyposy][nyposx] === 4){
         kattx = nyposx ;
         katty = nyposy ;
        
     }
     if (katty===9 && kattx===15){ 
        isPaused = true;
        var finish = document.createElement("finish");
        finish.innerHTML = "FINISH";
        document.body.prepend(finish);
        finish.classList.add("finish");
        console.log(finish.innerHTML);
    }//finish

   draWorld();

    if (katty === monstery &&kattx === monsterx ||
        katty === monster2y&&kattx === monster2x||
        katty === monster3y&&kattx === monster3x||
        katty === monster4y&&kattx === monster4x){
        
                isPaused = true;
                var gameover = document.createElement("gameover");
                gameover.innerHTML = "GAME OVER";
                document.body.prepend(gameover);
                gameover.classList.add("gameover");
                console.log(gameover.innerHTML);
        }//gameover
    
     

}

// function DrawCat(){
//     document.getElementById("spelruta_p").innerHTML += "<img src='cat.png' class='cat bilder'>";
    
// }
