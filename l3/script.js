const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelectorAll('.slider-image')
const bottom = document.querySelector('.bottom')

let currentSlideIndex = 0
const paginationCircles = []
let sliderWidth = slider.clientWidth

window.addEventListener('resize', ()=> {
   sliderWidth = slider.clientWidth
   showSlide()
})

function createPagination() {
   const div = document.createElement('div')
   div.classList.add('pagination-circle')
   bottom.appendChild(div)
   paginationCircles.push(div)
}

function addPagination() {
   slides.forEach(createPagination)
   paginationCircles[0].classList.add('activeSlider')
   paginationCircles.forEach((circle, index) => {
      circle.addEventListener('click', () => changeSlider(index))
   })
}

function addActiveSliderClass() {
   paginationCircles[currentSlideIndex].classList.add('activeSlider')
}

function removeActiveSliderClass() {
   paginationCircles[currentSlideIndex].classList.remove('activeSlider')
}

function changeSlider(sliderIndex) {
   removeActiveSliderClass()
   currentSlideIndex = sliderIndex
   addActiveSliderClass()
   showSlide()
}
function showSlide() {
   slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`
   slider.style.transition = 'transform 0.5s ease'
}

function nextSlide() {
   let newSliderIndex = currentSlideIndex + 1
   if(newSliderIndex >= slides.length) {
      newSliderIndex = 0
   }
   changeSlider(newSliderIndex)
}

function prevSlide() {
   let newSliderIndex = currentSlideIndex - 1
   if(newSliderIndex < 0) {
      newSliderIndex = slides.length - 1
   }
   changeSlider(newSliderIndex)
}
addPagination()
arrowLeft.addEventListener('click', prevSlide)
arrowRight.addEventListener('click', nextSlide)