const userRate = document.getElementById('user-rate')
const ratingSlider = document.getElementById('rating-slider')

const handleRate1 = document.getElementById('1-rate')
const handleRate2 = document.getElementById('2-rate')
const handleRate3 = document.getElementById('3-rate')
const handleRate4 = document.getElementById('4-rate')
const handleRate5 = document.getElementById('5-rate')

const handleBtn = document.getElementById('handle-btn')

handleRate1.addEventListener('click', ()=> {
    resetAllHandles()
    selectHandle(handleRate1)
})
handleRate2.addEventListener('click', ()=> {
    resetAllHandles()
    selectHandle(handleRate2)
})
handleRate3.addEventListener('click', ()=> {
    resetAllHandles()
    selectHandle(handleRate3)
})
handleRate4.addEventListener('click', ()=> {
    resetAllHandles()
    selectHandle(handleRate4)
})
handleRate5.addEventListener('click', ()=> {
    resetAllHandles()
    selectHandle(handleRate5)
})

handleBtn.addEventListener('click', ()=> {
    for(i = 1; i < 6; i++) {
        const handles = document.getElementById(`${i}-rate`)
        if(handles.classList.contains('selected')){
            userRate.textContent = handles.innerText
            ratingSlider.style.left = '-100%'
        }
    }
})


function resetAllHandles() {
    handleRate1.classList.remove('selected')
    handleRate2.classList.remove('selected')
    handleRate3.classList.remove('selected')
    handleRate4.classList.remove('selected')
    handleRate5.classList.remove('selected')
}

function selectHandle(handle) {
    handle.classList.add('selected')
}