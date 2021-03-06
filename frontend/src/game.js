const bg = document.querySelector('#game-container') //to combine two pages together
//const bg = document.querySelector('div')
const bgUrl = 'http://localhost:3000/stages/1'

//fetch stage first
fetch(bgUrl) 
.then(function(response){
  return response.json()  
})  
.then(function(stageData){
  new Stage(stageData) //instantiate stage
  Stage.josh()
  Stage.monsterLight()
  Stage.purpleMonster()
  Stage.dragon()
  Stage.redDragon()
  Stage.final()
})


const playerUrl = `http://localhost:3000/players/Pikachu`
document.addEventListener("DOMContentLoaded", function(){
   //fetch player 
   fetch(playerUrl)
   .then(response=> response.json())
   .then(testPlayerData=> {
     // console.log(testPlayerData)
     testPlayer = new Player(testPlayerData);
    //  testPlayer.style.display = "block"
   }
    ) //instantiate player 

   
})