let inputField = document.querySelector('#inputDiv')
let addNewButton = document.querySelector('#addNew')
let addButton = document.querySelector('#add')
let mainDiv = document.querySelector('#mainDiv')
inputField.style.display = 'none'

addNewButton.addEventListener("click", showDivInput);
addButton.addEventListener("click", addImageSrc);

function showDivInput(){
  if(inputField.style.display === 'none'){
    document.querySelector('.inputForNew').value = ' '
    inputField.style.display = 'flex'
  }else{
    inputField.style.display = 'none'
  }
}

let allImg = document.querySelectorAll('img')

function addImageSrc() {
  let newImg = document.createElement('img')
  newImg.className = allImg.length + 1
  newImg.src = document.querySelector('.inputForNew').value
  
  let howManyDivs = document.querySelectorAll('div')
  console.log('hello')
  console.log(howManyDivs)
  let lastDiv = howManyDivs[howManyDivs.length -1]
console.log('this is div count' + howManyDivs.length)
  lastDiv.className = `last-${howManyDivs.length} last`

  let howManyImg = document.querySelectorAll(`.last-${howManyDivs.length} img`)
  let imgNum = howManyImg.length
  console.log(imgNum)
  if(imgNum >= 3 ){
    let newDiv= document.createElement('div')
    newDiv.className = `last-${howManyDivs.length +1}`
    mainDiv.append(newDiv)
    showDivInput()
   return  newDiv.append(newImg)
  }else{
    showDivInput()
    return lastDiv.append(newImg)
  }

}