const carousel = document.getElementById('carousel')
const request = document.getElementById('request')
const buttonAllowAudio  = document.getElementById('button-allow-audio')
// const requestChilds = request.children
const acrobatics = document.getElementById('acrobatics')

const requestChilds = []
for(let i = 1; i <= 6; i++){
    requestChilds[i-1] = document.getElementById(`child${i}`)
}

const spanQuantity = requestChilds.length

// sounds
var soundHep1 = new Audio('music/hep-1.mp3')
var soundHep2 = new Audio('music/hep-2-laut.mp3')
var soundHep3 = new Audio('music/hep-3.mp3')
var soundHep4 = new Audio('music/hep-4.mp3')
var soundBloop = new Audio('music/bloop.mp3')
var soundBloop2 = new Audio('music/bloop.mp3')
var soundWhoosh = new Audio('music/whoosh.mp3')
var soundClapping = new Audio('music/clapping-2sek.mp3')
var hulaHoop = new Audio('music/hula-hoops.mp3')
var crowdCheer = new Audio('music/crowd-cheer.mp3')

// point in the middle
// const center = document.createElement('div')
// center.classList.add('center')
// carousel.appendChild(center)

buttonAllowAudio.addEventListener('click', playAll)

// font appears
function playAll(){

    function startLetetrsMoving(){

        // font appears
        lettersPopUp(1000)
        // font jumps and rotate
        lettersJumpAndSpin(7500)
        // letters build tower
        buildATower(15000)
        // jumping and cheering word me
        chumpingAndCheeringWordMe(26000) 
        // move the word me to the right
        jumpToRightWordMe(28500)
        // circular around the tower
        circularArroundTheTower(31500)
        // move the word me to the left
        jumpToLeftWordMe(36000)
        // dismantle the tower
        dismantleTheTower(37300)
        // jumping and cheering all
        jumpingAndCheeringAll(48000)
    }
    
    // startLetetrsMoving()

    /****** animate request ******/
    request.classList.add('center')








    
    // tower insg später, i früher

    /****** create triangles ******/

    const NUMBER_OF_TRIANGLES = 18;

    let allTriangles = [ 'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5', 'triangle6', 'triangle7', 
        'triangle8', 'triangle9', 'triangle10', 'triangle11', 'triangle12', 'triangle13', 'triangle14', 'triangle15', 'triangle16', 'triangle17', 'triangle18']

    allTriangles.forEach(element =>{

        window[element] = document.createElement('div')
        window[element].classList.add('triangle-basics')
        window[element].classList.add(element)  
        carousel.appendChild(window[element])  
    })

    setTimeout(getOut, 00)

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function getOut() {

        for(let i = 1; i <= NUMBER_OF_TRIANGLES; i++){

                    /******* for production *******/
                    // await new Promise(resolve => setTimeout(resolve, 500)).then(v => window[`triangle${i}`].classList.add(`triangle${i}-out`))

                    /******* for developement *******/
                    window[`triangle${i}`].classList.add(`triangle${i}-out`)
        }
    }

    // setTimeout(getIn, 500)
    // setTimeout(getIn, 4000)

    async function getIn() {

        for(let i = 1; i <= NUMBER_OF_TRIANGLES; i++){

            // get computed style
            window[`triangle${i}`].style.top = getComputedStyle(window[`triangle${i}`]).top;
            window[`triangle${i}`].style.left = getComputedStyle(window[`triangle${i}`]).left

            /******* for production *******/
            await new Promise(resolve => setTimeout(resolve, 500)).then(v => {

                // remove classes
                window[`triangle${i}`].classList.remove(`triangle${i}-out`)
                // add classes
                window[`triangle${i}`].classList.add('triangle-in')
            })

            /******* for developement *******/

            // remove classes
            // window[`triangle${i}`].classList.remove(`triangle${i}-out`)

            // add classes
            // window[`triangle${i}`].classList.add('triangle-in')
        }
    }

}

async function lettersPopUp(time) {

    for(let i = 0; i < spanQuantity; i++){

        await new Promise(resolve => setTimeout(resolve, time)).then(v => {
            
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

            soundWhoosh.play()
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
        }, 100)
        setTimeout(() => {soundHep3.play()}, 2700)
        setTimeout(() => {
            requestChilds[1].innerHTML= ''
            requestChilds[1].classList.add('tower-hire-i')
        }, 3000)
        setTimeout(() => {soundHep2.play()}, 5800)
        setTimeout(() => {soundHep2.play()}, 7700)
        setTimeout(() => {soundHep2.play()}, 9500)
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

        requestChilds[4].classList.add('request-dance')
    
        setTimeout(() => {requestChilds[5].classList.add('request-dance')}, 200)
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
        setTimeout(() => {soundHep2.play()}, 1000)
        setTimeout(() => {soundHep2.play()}, 2400)
        setTimeout(() => {soundHep2.play()}, 4000)

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

// Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=106455">Pixabay</a>
