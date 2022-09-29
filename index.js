const carousel = document.getElementById('carousel')

// point in the middle
// const center = document.createElement('div')
// center.classList.add('center')
// carousel.appendChild(center)

// create triangles
const NUMBER_OF_TRIANGLES = 18;

let allTriangles = [ 'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5', 'triangle6', 'triangle7', 
    'triangle8', 'triangle9', 'triangle10', 'triangle11', 'triangle12', 'triangle13', 'triangle14', 'triangle15', 'triangle16', 'triangle17', 'triangle18']

allTriangles.forEach(element =>{
        // console.log('Hello')
    window[element] = document.createElement('div')
    window[element].classList.add('triangle-basics')
    window[element].classList.add(element)  
    carousel.appendChild(window[element])  
})

setTimeout(getOut, 500)

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

setTimeout(getIn, 500)
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