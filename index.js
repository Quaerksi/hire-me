const carousel = document.getElementById('carousel')
const request = document.getElementById('request')
const buttonAllowAnimation  = document.getElementById('button-allow-audio')
const acrobatics = document.getElementById('acrobatics')

const requestChilds = []
for(let i = 1; i <= 6; i++){
    requestChilds[i-1] = document.getElementById(`child${i}`)
}

const spanQuantity = requestChilds.length

// sounds
var soundHep1 = new Audio('music/hep-1.mp3')
var soundHep2 = new Audio('music/hep-2-laut.mp3')
var soundHep22 = new Audio('music/hep-2-laut.mp3')
var soundHep3 = new Audio('music/hep-3.mp3')
var soundHep4 = new Audio('music/hep-5.mp3')
var soundBloop = new Audio('music/bloop.mp3')
var soundBloop2 = new Audio('music/bloop.mp3')
var soundWhoosh = new Audio('music/whoosh.mp3')
var soundWhoosh2 = new Audio('music/whoosh.mp3')
var soundClapping = new Audio('music/clapping1.mp3')
var hulaHoop = new Audio('music/hula-hoops2.mp3')
var crowdCheer = new Audio('music/crowd-cheer1.mp3')

var intro = new Audio('music/intro1.mp3')
var music = new Audio('music/music-for-the-show-dark.mp3')
var wellDone = new Audio('music/end.mp3')

console.log(`Sound from https://pixabay.com/ and https://freesound.org/`)

buttonAllowAnimation.addEventListener('click', playAll)

// start animation
function playAll(){

    buttonAllowAnimation.style.display = 'none';

    getOut()

    function startLetetrsMoving(){

        getOut()
        intro.play();
        setTimeout(()=> music.play() , 11700)

        setTimeout(() =>{ 
            //carousel moves in and out
            startMoving() 
            // font appears
            lettersPopUp(7500)
            // font jumps and rotate
            lettersJumpAndSpin(10500) 
            // letters build tower
            buildATower(17500)
            // jumping and cheering word me
            chumpingAndCheeringWordMe(27800) 
            // move the word me to the right
            jumpToRightWordMe(30300)
            // circular around the tower
            circularArroundTheTower(33300)
            // move the word me to the left
            jumpToLeftWordMe(37800)
            // dismantle the tower
            dismantleTheTower(39100)
            // jumping and cheering all
            jumpingAndCheeringAll(49800)
        }, 10000)

        setTimeout(() => {
            // carousel close
            getIn()
            //start outro
            setTimeout(() => {
                music.pause()
                wellDone.play()
            }, 4500)
            // pause outro
            setTimeout(() => {
                wellDone.pause()
            }, 9300)
            // refresh
            setTimeout(() => {
                location.reload()
            }, 10500)
        }, 65000)
    }

    startLetetrsMoving()  
}

/****** create triangles for carousel and create functions ******/

const NUMBER_OF_TRIANGLES = 18;

let allTriangles = [ 'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5', 'triangle6', 'triangle7', 
    'triangle8', 'triangle9', 'triangle10', 'triangle11', 'triangle12', 'triangle13', 'triangle14', 'triangle15', 'triangle16', 'triangle17', 'triangle18']

allTriangles.forEach(element =>{

    window[element] = document.createElement('div')
    window[element].classList.add('triangle-basics')
    window[element].classList.add(element)  
    carousel.appendChild(window[element])  
})

async function getOut() {
    

    for(let i = 1; i <= NUMBER_OF_TRIANGLES; i++){

        /******* for production *******/
        await new Promise(resolve => setTimeout(resolve, 500)).then(v => window[`triangle${i}`].classList.add(`triangle${i}-out`))

    }
}

async function startMoving() {

    for(let i = 1; i <= (NUMBER_OF_TRIANGLES / 3); i++){

        /******* for production *******/
        await new Promise(resolve => setTimeout(resolve, 500)).then(v => {
            window[`triangle${i}`].classList.add(`triangle${i}-out-move`) //1 2 3 4 5 6 
            window[`triangle${i+6}`].classList.add(`triangle${i+6}-out-move`)// 7 8 9 10 11 12
            window[`triangle${i + 12}`].classList.add(`triangle${i + 12}-out-move`) //13 14 15 16 17 18
        })
    }
}

async function getIn() {

    for(let i = 1; i <= NUMBER_OF_TRIANGLES; i++){

        // get computed style
        window[`triangle${i}`].style.top = getComputedStyle(window[`triangle${i}`]).top;
        window[`triangle${i}`].style.left = getComputedStyle(window[`triangle${i}`]).left

        /******* for production *******/
        await new Promise(resolve => setTimeout(resolve, 200)).then(v => {

            // remove classes
            window[`triangle${i}`].classList.remove(`triangle${i}-out`)
            window[`triangle${i}`].classList.remove(`triangle${i}-out-move`)
            // add classes
            window[`triangle${i}`].classList.add('triangle-in')
        })
    }
}

/* ************************* functions for letter move ***************************************** */

// letter pop in
async function lettersPopUp() {

    for(let i = 0; i < spanQuantity; i++){

        await new Promise(resolve => setTimeout(resolve, 1500)).then(v => {
            
            i%2 === 0 ? setTimeout(() => {soundBloop.play()}, 1500) : setTimeout(() => {soundBloop2.play()}, 1500)
            requestChilds[i].classList.add('start-animation-pop-up')
        }) 

        // set computed style
        requestChilds[i].style.transform = `scale(1)`;
    }
}

// font jumps and rotate
async function lettersJumpAndSpin(time) {
    
    await new Promise(resolve => setTimeout(resolve, time))
    for(let i = spanQuantity - 1; i >= 0; i--){
        
        await new Promise(resolve => setTimeout(resolve, 1000)).then(v => {

            i%2 === 0 ? soundWhoosh.play() : soundWhoosh2.play()
            requestChilds[i].classList.add('start-animation-jump-and-spin')
        }) 
    }
}

// letters build tower
async function buildATower(time) {

    await new Promise(resolve => setTimeout(resolve, time)).then(v => {
        soundHep1.play()
        setTimeout(() => {
            requestChilds[2].innerHTML= ''
            requestChilds[2].classList.add('tower-hire-r')
        }, 200)
        setTimeout(() => {soundHep3.play()}, 2700)
        setTimeout(() => {
            requestChilds[1].innerHTML= ''
            requestChilds[1].classList.add('tower-hire-i')
        }, 3000)
        setTimeout(() => {soundHep2.play()}, 5900)
        setTimeout(() => {soundHep2.play()}, 7700)
        setTimeout(() => {soundHep2.play()}, 9200)
        setTimeout(() => {
            requestChilds[0].innerHTML= ''
            requestChilds[0].classList.add('tower-hire-h')}
            , 6000)
    })
}

// jumping and cheering word me
async function chumpingAndCheeringWordMe(time) {
   
    await new Promise(resolve => setTimeout(resolve, time)).then(v =>  {

        soundClapping.play()
        
        setTimeout(() => {
            requestChilds[4].classList.add('request-dance')
            setTimeout(() => {requestChilds[5].classList.add('request-dance')}, 200)
        }, 00)
    })
}

 // move the word me to the right
 async function jumpToRightWordMe(time) {

    await new Promise(resolve => setTimeout(resolve, time)).then(v => {

        soundHep1.play()
        soundHep4.play()
        
        requestChilds[4].innerHTML= '';
        requestChilds[4].classList.add('m-from-the-word-me')
        requestChilds[5].innerHTML= '';
        requestChilds[5].classList.add('e-from-the-word-me')           
    })
}

// circular around the tower
async function circularArroundTheTower(time) {

    await new Promise(resolve => setTimeout(resolve, time)).then(v => {

        hulaHoop.play()

        requestChilds[4].classList.add('swing-arround-m-to-the-left')
        requestChilds[5].classList.add('swing-arround-e-to-the-left')
        acrobatics.classList.add('swing-arround')
    })
}

// move the word me to the left
async function jumpToLeftWordMe(time){

    await new Promise(resolve => setTimeout(resolve, time)).then(v => { 

        soundHep1.play()
        soundHep4.play()
        
        requestChilds[4].innerHTML= '';
        requestChilds[4].classList.add('m-from-the-word-me-to-left')
        requestChilds[5].innerHTML= '';
        requestChilds[5].classList.add('e-from-the-word-me-to-left') 
    })
}

// dismantle the tower
async function dismantleTheTower(time){

    await new Promise(resolve => setTimeout(resolve, time)).then(v => { 

        // letter H
        setTimeout(() => {soundHep2.play()}, 700)
        setTimeout(() => {soundHep22.play()}, 1900)
        setTimeout(() => {soundHep2.play()}, 3100)

        setTimeout(() => {
            // requestChilds[0].style.left = '10rem'
            requestChilds[0].innerHTML= ''
            requestChilds[0].classList.add('dismantle-tower-hire-h')
        }, 1000)

        // letter I
        setTimeout(() => {soundHep3.play()}, 5100)
        setTimeout(() => {
            // requestChilds[1].style.left = '6.5rem'
            requestChilds[1].innerHTML= ''
            requestChilds[1].classList.add('dismantle-tower-hire-i')
        }, 5500)

        setTimeout(() => {soundHep1.play()}, 8000)
        setTimeout(() => {
            requestChilds[2].innerHTML= ''
            requestChilds[2].classList.add('dismantle-tower-hire-r')
        }, 8000)
    })
}

// jumping and cheering all
async function jumpingAndCheeringAll(time){
    await new Promise(resolve => setTimeout(resolve, time)).then(v =>  {
    crowdCheer.play()

    requestChilds[2].classList.add('request-dance-all')
    requestChilds[5].classList.add('request-dance-all')

    setTimeout(() => 
        {
            requestChilds[0].classList.add('request-dance-all')
            requestChilds[4].classList.add('request-dance-all')
        }, 200)
    setTimeout(() => {
            requestChilds[1].classList.add('request-dance-all')
            requestChilds[3].classList.add('request-dance-all')
        }, 300)
    })
}

