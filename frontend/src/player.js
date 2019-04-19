
class Player{
    constructor(playerData){
        // console.log(playerData)
        const player =  document.createElement('img')
        player.src = playerData.staticImgUrl
        player.id = "player"
        player.style.width = '200px'
        player.style.height = '150px'
        player.style.left = window.innerWidth / 2 - 100 //playerData.x//
        player.style.top = "32%"
        player.style.left = "40%"
        // player.style.bottom = "10%"
        player.style.position = 'absolute'
        player.style.zIndex = 2

        // player.style.display = "none"
        //this.element = player
        document.querySelector('#game-area').prepend(player)
        
        this.move(player, playerData)
        this.stop(player, playerData)
        setInterval(() => {
            if(this.direction == 'left'){
              let left = parseInt(bg.style.left)
              bg.style.left = `${left + 0.1}px`
            } 
            if(this.direction == 'right'){
              let left = parseInt(bg.style.left)
              bg.style.left = `${left - 0.1}px`
            } 
          }, 1000)
    }

    
    move=(player, playerData)=>{
        document.addEventListener('keydown', e=> {
           battle(player)
            if(e.repeat) return
            if(e.key == "ArrowRight" ) { //&& parseInt(player.style.left) < 3000
                this.direction = 'right'
                player.src = playerData.rightImgUrl
            }else if(e.key == "ArrowLeft") { // && parseInt(player.style.left) > 20
                this.direction = 'left'
                player.src = playerData.leftImgUrl
            }
          })
    }
    // renderDungeon() {
    //   let dunDiv = document.createElement('div')
    //   dunDiv.id = "dungeon"
    //   let monsterOne = purpleMonster
    //   dunDiv.style.backgroundImage ="url('https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyOTAucG5n/original/p3QHJw.png')"
    //   dunDiv.style.backgroundRepeat = "no-repeat"
    //   dunDiv.style.backgroundSize = "2000px 352px"
    //   dunDiv.style.opacity = 0
    //   /*______MONSTER______*/
    //   monsterOne.style = 'box-sizing: content-box'
    //   monsterOne.style.position = 'absolute'
    //   monsterOne.style.top = '150px'
    //   monsterOne.style.left = '60px'
    //   // dunDiv.style.left = '150px'
    //   /*______DUNGEON______*/
    //   dunDiv.style.top = '443px'
    //   dunDiv.style.bottom = '200px'
    //   dunDiv.style.height = '352px'
    //   dunDiv.style.width = '100%'
    //   dunDiv.style.position = 'fixed'
    //   dunDiv.append(player)
    //   dunDiv.append(monsterOne)
    //   document.body.append(dunDiv)
    // }


    stop=(player, playerData)=>{
        document.addEventListener('keyup', e=> {
        this.direction = null
          player.src = playerData.staticImgUrl
          //save player position
          fetch(playerUrl, {  
                method:"PATCH",
                headers: {
                       'Content-Type': 'application/json'
                         },
                body: JSON.stringify({
                        x: document.querySelector('.game-container').scrollLeft//player.style.left// to be fixed, update the position but when refresh it goes back to beginning part
                        })          
          }) 
        })
    }




}


