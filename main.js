var canvas=new fabric.Canvas("myCanvas")

var playerx = 15
var playery = 20
var blockwidth = 30
var blockheight = 30
var blockstuff = ""
var blockman = ""

function playerplay (){
    fabric.Image.fromURL("player.png",function(img){

        blockman=img

        blockman.scaleToWidth(150)
        blockman.scaleToHeight(140)
        blockman.set({
            top:playery,
            left:playerx
        })
        canvas.add(blockman)
    })
}

function blox (getimage){
    fabric.Image.fromURL(getimage,function(img){

        blockstuff=img

        blockstuff.scaleToWidth(blockwidth)
        blockstuff.scaleToHeight(blockheight)
        blockstuff.set({
            top:playery,
            left:playerx
        })
        canvas.add(blockstuff)
    })
}

window.addEventListener("keydown",keypress)

function keypress (store){
    var pressedkey = store.keyCode
    console.log (pressedkey)

    if(pressedkey=="37"){
        left()

    }

    if(pressedkey=="38"){
        up()

    }

    if(pressedkey=="39"){
        right()

    }

    if(pressedkey=="40"){
        down()

    }

    if(pressedkey=="87"){
        blox("wall.jpg")
    }

    if(pressedkey=="67"){
        blox("cloud.jpg")
    }

    if(pressedkey=="68"){
        blox("dark_green.png")
    }

    if(pressedkey=="71"){
        blox("ground.png")
    }

    if(pressedkey=="76"){
        blox("light_green.png")
    }

    if(pressedkey=="82"){
        blox("roof.jpg")
    }

    if(pressedkey=="84"){
        blox("trunk.jpg")
    }

    if(pressedkey=="85"){
        blox("unique.png")
    }

    if(pressedkey=="89"){
        blox("yellow_wall.png")
    }

    if(store.shiftKey==true && pressedkey=="80"){
        blockwidth=blockwidth+10
        blockheight=blockheight+10

        document.getElementById("curwid").innerHTML=blockwidth
        document.getElementById("curhei").innerHTML=blockheight
    }

    if(store.shiftKey==true && pressedkey=="77"){
        blockwidth=blockheight-10
        blockheight=blockheight-10

        document.getElementById("curwid").innerHTML=blockwidth
        document.getElementById("curhei").innerHTML=blockheight
    }
}

function left(){
    if(playerx>0){
        playerx=playerx - blockwidth
        canvas.remove(blockman)
        playerplay()
    }
}

function right(){
    if(playerx<750){
        playerx=playerx + blockwidth
        canvas.remove(blockman)
        playerplay()
    }
}

function up(){
    if(playery>0){
        playery=playery - blockheight
        canvas.remove(blockman)
        playerplay()
    }
}

function down(){
    if(playery<550){
        playery=playery + blockheight
        canvas.remove(blockman)
        playerplay()
    }
}


