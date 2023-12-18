/* gebruik getElementById als je class wilt selecterem, alleen elementen werken met queryselector*/
const offeredBtn = document.getElementById('offered');
const wantedBtn = document.getElementById('wanted');  /*niet vergeten een id bij je class te zetten in html*/
const offeredList = document.getElementById('card-list-offered');
const wantedList = document.getElementById('card-list-wanted');


offeredBtn.addEventListener('click', function() {
    offeredBtn.classList.add("active")
    wantedBtn.classList.remove("active")
    
    offeredList.classList.add('active')
    wantedList.classList.remove('active')
})

wantedBtn.addEventListener('click', function() {
    wantedBtn.classList.add("active")
    offeredBtn.classList.remove("active")
    
    offeredList.classList.remove('active')
    wantedList.classList.add('active')
})

// const iconPijlBtn = document.querySelector('.material-symbols-outlined')
const dropdownBtn = document.querySelector('.information-text-container')
// const dropdownInfo = document.querySelector('.information-text-container p')
// console.log(dropdownInfo)

dropdownBtn.addEventListener('click', menuOpen)

function menuOpen() {
    dropdownBtn.classList.toggle('information-text-container-show')
    // iconPijlBtn.classList.toggle('rotationIcon')
    // dropdownInfo.classList.toggle('information-fold-out')
}