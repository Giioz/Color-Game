let guessRgb = document.getElementById('rgb')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')
let start = document.getElementById('startBtn')
let boxs = document.querySelectorAll('.box')
let boxs2 = document.getElementById('boxs2')
let score = document.getElementById('score')
let result = document.getElementById('result')
let header = document.querySelector('header')
let newColors = document.getElementById('new')

let gm = 0

easy.addEventListener('click', function(){
    gm = 3
    boxs2.classList.add('disnone')
})

hard.addEventListener('click', function(){
    gm = 6
    boxs2.classList.remove('disnone')
})

let rgbs = []

function rgbFill(quantity){
    for(i = 0; i<quantity; i++){
        let r = Math.round(Math.random() * 256)
        let g = Math.round(Math.random() * 256)
        let b = Math.round(Math.random() * 256)
        let rgb = `rgb(${r}, ${g}, ${b})`;
        rgbs.push(rgb)
    }
    console.log(rgbs);
}
function randomRgb(rgbs){
    let random = Math.round(Math.random() * (rgbs.length -1))
    return rgbs[random]
}


function onStart(){
    let onstart = true
    header.style.backgroundColor = ''
    rgbs = []
    rgbFill(gm)
    let guess = randomRgb(rgbs)

    if(gm != 0){
        guessRgb.innerText = guess


    }else{
        alert('Choose difficulty first')
    }

    boxs = document.querySelectorAll('.box')
    boxs.forEach(box => {
        box.style.visibility = 'visible'
        box.style.opacity = '100'
        result.innerText = ''
    
        let rgb = rgbs.pop()
        console.log(rgb);
        box.style.backgroundColor = rgb
            box.addEventListener('click', function(e){
            if(onstart){
    
                if(guess == rgb){
                    score.innerText++
                    result.innerText = 'Correct!'
                    onstart=false
                    Swal.fire({
                        title: "Good job!",
                        text: "You Won The Game!",
                        icon: "success"
                      });
                    header.style.backgroundColor = rgb
                    header.style.transition = '1s'
                    rgbs = []

                }
                else {
                    console.log(onstart);
                    result.innerText = 'Incorrect!'
                    box.style.visibility = 'hidden'
                    box.style.opacity = '0'
                    box.style.transition = '0.5s'
                }
            }})
    })
}


start.addEventListener('click', function(){
    onStart()
})
newColors.addEventListener('click', onStart)