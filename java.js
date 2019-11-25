



//positon katt
var kattx = 1;
var katty = 1;


//värdet som plussas på monstrerna varje gång update körs
var eastWest4 = 1;
var eastWest3 = 1;
var eastWest2 = 1;
var eastWest  = 1;
  
var isPaused  = false;




//varje gång uppdate körs flyttas monstrerna 1 steg så länge isPased = false
 
function update() {
    
    if (isPaused == false){
    monsterx  = monsterx  + eastWest;
    monster2x = monster2x + eastWest2;
    monster3x = monster3x + eastWest3;
    monster4y = monster4y + eastWest4;

   //När monster går in i en vägg så körs en formel som gör så att monstret byter håll
    if(bana[monstery][monsterx]  === 1 ){
        eastWest  = eastWest  * (-1)
        monsterx  = monsterx  + 2 * eastWest;


    }
    //När monster2 går in i en vägg så körs en formel som gör så att monstret byter håll
    if(bana[monster2y][monster2x]  === 1 ){
       
        eastWest2 = eastWest2 * (-1)
        monster2x = monster2x + 2 * eastWest2;

    }
    //När monster3 går in i en vägg så körs en formel som gör så att monstret byter håll
    if(bana[monster3y][monster3x]  === 1 ){
       
        eastWest3 = eastWest3 * (-1)
        monster3x = monster3x + 2 * eastWest3;

    }
     //När monster4 går in i en vägg så körs en formel som gör så att monstret byter håll
    if(bana[monster4y][monster4x]  === 1 ){
       
        eastWest4 = eastWest4 * (-1)
        monster4y = monster4y + 2 * eastWest4;

    }



    
    draWorld();


//Om katten kolliderar ihop med ett monster så skapas en div mitt på skärmen och talar om att spelet är över
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
 }//update
}

function pause(){

    

    if (isPaused == true){
        isPaused = false

    }
    else{
        isPaused = true
    }
    
}



    

//Ritar ut banan
//1 = vägg
//2 = marken
//3 = Mål
function draWorld() {


    document.getElementById("spelruta_p").innerHTML= "";
    for(var y = 0; y < bana.length; y=y+1){
        for(var x=0; x < bana[y].length; x=x+1){

            //Den kollar monstrets position i arrayen sedan ritan ut monstret och går vidare till nästa villkor
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
        }//else
    }//xlength
        
}//ylength


   

}//drawworld




//Funktion för pilarna som ger nya värden till kattens pos varje gång man klickar
 function move(xdirection,ydirection){
     console.log(move.innerHTML)
     var nyposx = kattx + xdirection;
     var nyposy = katty + ydirection;

    if (bana[nyposy][nyposx] === 2 || bana[nyposy][nyposx] === 4){
         kattx = nyposx ;
         katty = nyposy ;
        
     }
     if (katty===9 && kattx===15){ 
        confetti.start();
        isPaused = true;
        var finish = document.createElement("finish");
        finish.innerHTML = "FINISH";
        document.body.prepend(finish);
        finish.classList.add("finish");
        confetti.start();
        console.log(finish.innerHTML);
        
    }//finish

   

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
    
        draWorld();

}

