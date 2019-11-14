let inputField = document.querySelector('#inputDiv')
let addNewButton = document.querySelector('#addNew')
let addButton = document.querySelector('#add')
let mainDiv = document.querySelector('#mainDiv')
inputField.style.display = 'none'

addNewButton.addEventListener("click", showDivInput);
addButton.addEventListener("click", addImageSrc);
//showing or hiding the div that contains the input files when you want to add a new image
function showDivInput(){
  if(inputField.style.display === 'none'){
    document.querySelector('.inputForNew').value = ' '
    inputField.style.display = 'flex'
  }else{
    inputField.style.display = 'none'
  }
}


let allImg = document.querySelectorAll('img')
function addDivsAndButton() {
  for(let i=0; i < allImg.length; i++){
    //going through all the images 
   let parentDiv = allImg[i].parentElement.id
    console.log(parentDiv)
    //grabbing the current div
    let actualDiv = document.querySelector(`#${parentDiv}`)
    //creating the edit button
    let editButton = document.createElement('button')
    editButton.id = 'editButton'
    editButton.innerText = 'edit'
    //creating the remove button
    let removeButton = document.createElement('button')
    removeButton.id = 'removeButton'
    removeButton.innerText = 'remove'
    //creating a div to append it to the parent div of the image and also it helps keep the components nice 
    let wrapDiv = document.createElement('div')
    wrapDiv.className = `imgDiv class${i}`

    //appending the created div to the main div and the button to the div we created

    wrapDiv.append(editButton)
    wrapDiv.append(removeButton)
    wrapDiv.append(allImg[i])
    actualDiv.append(wrapDiv)

  }

  return allImg
}

//calling the function so it always shows

addDivsAndButton()
//grabing the source of the image on add new image from the input field and adding it to the page
function addImageSrc() {
  //creating the new img element for the new image
  let newImg = document.createElement('img')
  newImg.className = allImg.length + 1
  //grabing the input calue the url in this case
  newImg.src = document.querySelector('.inputForNew').value
  //getting all the divs in order to grab the last div later
  let howManyDivs = document.querySelectorAll('div')

  console.log(howManyDivs)
  let lastDiv = howManyDivs[howManyDivs.length -1]
console.log('this is div count' + howManyDivs.length)
  lastDiv.className = `last-${howManyDivs.length} last`
  
//grabing the image from the last div 
  let howManyImg = document.querySelectorAll(`.last-${howManyDivs.length} img`)
  let imgNum = howManyImg.length
  console.log(imgNum)
  //checking if there are 3 images already so I can create a new div and I keep tha layout 3 images in a row
  if(imgNum >= 3 ){
    let newDiv= document.createElement('div')
    newDiv.className = `last-${howManyDivs.length +1}`
    newDiv.id =`${howManyDivs.length}`
    mainDiv.append(newDiv)
    addDivsAndButton()
    showDivInput()
   return  newDiv.append(newImg)
  }else{
    addDivsAndButton()
    showDivInput()
    return lastDiv.append(newImg)
  }

}