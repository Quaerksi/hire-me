const carousel = document.getElementById('carousel')

// point in the middle
// const center = document.createElement('div')
// center.classList.add('center')
// carousel.appendChild(center)

// create triangles

let allTriangles = [ 'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5', 'triangle6', 'triangle7', 
    'triangle8', 'triangle9', 'triangle10', 'triangle11', 'triangle12', 'triangle13', 'triangle14', 'triangle15', 'triangle16', 'triangle17', 'triangle18']

allTriangles.forEach(element =>{
        console.log('Hello')
    window[element] = document.createElement('div')
    window[element].classList.add('triangle-basics')
    window[element].classList.add(element)  
    carousel.appendChild(window[element])  
})

/*
const triangle1 = document.createElement('div')
const triangle2 = document.createElement('div')
const triangle3 = document.createElement('div')
const triangle4 = document.createElement('div')
const triangle5 = document.createElement('div')
const triangle6 = document.createElement('div')
const triangle7 = document.createElement('div')
const triangle8 = document.createElement('div')
const triangle9 = document.createElement('div')
const triangle10 = document.createElement('div')
const triangle11 = document.createElement('div')
const triangle12 = document.createElement('div')
const triangle13 = document.createElement('div')
const triangle14 = document.createElement('div')
const triangle15 = document.createElement('div')
const triangle16 = document.createElement('div')
const triangle17 = document.createElement('div')
const triangle18 = document.createElement('div')

//add classes to triangle
triangle1.classList.add('triangle-basics')
triangle1.classList.add('triangle1')

triangle2.classList.add('triangle-basics')
triangle2.classList.add('triangle2')

triangle3.classList.add('triangle-basics')
triangle3.classList.add('triangle3')

triangle4.classList.add('triangle-basics')
triangle4.classList.add('triangle4')

triangle5.classList.add('triangle-basics')
triangle5.classList.add('triangle5')

triangle6.classList.add('triangle-basics')
triangle6.classList.add('triangle6')

triangle7.classList.add('triangle-basics')
triangle7.classList.add('triangle7')

triangle8.classList.add('triangle-basics')
triangle8.classList.add('triangle8')

triangle9.classList.add('triangle-basics')
triangle9.classList.add('triangle9')

triangle10.classList.add('triangle-basics')
triangle10.classList.add('triangle10')

triangle11.classList.add('triangle-basics')
triangle11.classList.add('triangle11')

triangle12.classList.add('triangle-basics')
triangle12.classList.add('triangle12')

triangle13.classList.add('triangle-basics')
triangle13.classList.add('triangle13')

triangle14.classList.add('triangle-basics')
triangle14.classList.add('triangle14')

triangle15.classList.add('triangle-basics')
triangle15.classList.add('triangle15')

triangle16.classList.add('triangle-basics')
triangle16.classList.add('triangle16')

triangle17.classList.add('triangle-basics')
triangle17.classList.add('triangle17')

triangle18.classList.add('triangle-basics')
triangle18.classList.add('triangle18')

//append triangles
carousel.appendChild(triangle1)
carousel.appendChild(triangle2)
carousel.appendChild(triangle3)
carousel.appendChild(triangle4)
carousel.appendChild(triangle5)
carousel.appendChild(triangle6)
carousel.appendChild(triangle7)
carousel.appendChild(triangle8)
carousel.appendChild(triangle9)
carousel.appendChild(triangle10)
carousel.appendChild(triangle11)
carousel.appendChild(triangle12)
carousel.appendChild(triangle13)
carousel.appendChild(triangle14)
carousel.appendChild(triangle15)
carousel.appendChild(triangle16)
carousel.appendChild(triangle17)
carousel.appendChild(triangle18)

*/