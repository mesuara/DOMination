




let images = [];


printImages();

function printImg(img, imgIndex) {

  const div = document.querySelector('#mainDiv');
  if( imgIndex === 0 || imgIndex%3 ===0){
  const createDiv = document.createElement('div');
  createDiv.id = 'div'+imgIndex;
  createDiv.className='imagesDiv'

  let createNewDiv = document.createElement('div')
  createNewDiv.className = 'insideDiv'
  
  const imgElement = document.createElement('img');
  imgElement.id = imgIndex
  console.log(img)
  imgElement.src = img.url
  const removeButton = document.createElement('button');
  removeButton.className = 'removeBtn'
  removeButton.innerText = 'remove'
  removeButton.addEventListener('click', function(){
    img.remove = true
    handleDelete()
  })
  const editButton = document.createElement('button');
  editButton.className = 'editButton'
  editButton.innerText = 'edit'




   createNewDiv.appendChild(removeButton);
   createNewDiv.appendChild(editButton);
   createNewDiv.append(imgElement)
   createDiv.append(createNewDiv)
   div.append(createDiv)
  
  }else{
    const div = document.querySelector('.imagesDiv:last-child')

    console.log(div)
    let createNewDiv = document.createElement('div')
    createNewDiv.className = 'insideDiv'
    const imgElement = document.createElement('img');
  imgElement.id = imgIndex
  imgElement.src = img.url
  const removeButton = document.createElement('button');
  removeButton.className = 'removeBtn'
  removeButton.innerText = 'remove'
  removeButton.addEventListener('click', function(){
    img.remove = true
    handleDelete()
  })
  const editButton = document.createElement('button');
  editButton.className = 'editButton'
  editButton.innerText = 'edit'
  createNewDiv.appendChild(removeButton);
  createNewDiv.appendChild(editButton);
  createNewDiv.append(imgElement)
  div.append(createNewDiv)
  }
    
 

}

function printImages() {
  let i = 0;
  while (i < images.length) {
    printImg (images[i], i);

    i++;
  }
}

function addImage(obj) {

 images.push(obj);
}

const addButton = document.querySelector('#add');
addButton.onclick = addToDiv;

function addToDiv() {
  const inputBox = document.querySelector('.inputForNew');
  const imgUrl = inputBox.value;


  
  const newObj = {
    url: imgUrl,
    edit: false,
    remove: false,
  }



  addImage(newObj);
  printImg(newObj,  images.length - 1);
  inputBox.value = null;
  inputBox.focus();
}



function handleDelete() {
  const newImages = [];

  // Only push into newTodos any todo that is NOT complete.
  for (i = 0; i < images.length; i ++) {
    if (images[i].remove === false) {
      newImages.push(images[i]);
    }
  }
  
  images = newImages;
  clearList();
  printImages();
}
function clearList() {

  const mainDiv = document.querySelector('#mainDiv');


  while (mainDiv.hasChildNodes()) {
    mainDiv.firstChild.remove();
  }
}

// function markComplete(index) {
//   // If it's complete in the data, set it to not complete, and vice versa!
//   if  (images[index].completed === false) {
//    images[index].completed = true;
//   } else if  (images[index].completed === true) {
//    images[index].completed = false;
//   }
// }

// function printMark(index) {
//   const li = document.querySelector(`li:nth-child(${index + 1})`);
  
//     // Set the dom styling appropriately here based on whether it's complete or not!
//     if  (images[index].completed = true) {
//       li.classList.toggle(`complete-item`);
//     }
//   }

// const deleteButton = document.querySelector('.delete-completed images');
// deleteButton.onclick = handleDelete;

// function handleDelete() {
//   const newTodos = [];

//   // Only push into newTodos any todo that is NOT complete.
//   for (i = 0; i < images.length; i ++) {
//     if  (images[i].completed === false) {
//       newTodos.push (images[i]);
//     }
//   }
  
//  images = newTodos;
//   clearList();
//   printList();
// }


// function clearList() {
//   // Grab the todo list ul and put it in a variable
//   const list = document.querySelector('.todo-list');

//   // Remove all children of that list.
//   // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
//   while (list.hasChildNodes()) {
//     list.firstChild.remove();
//   }
// }

























// let inputField = document.querySelector('#inputDiv')
// let addNewButton = document.querySelector('#addNew')
// let addButton = document.querySelector('#add')
// let mainDiv = document.querySelector('#mainDiv')
// inputField.style.display = 'none'

// addNewButton.addEventListener("click", showDivInput);
// addButton.addEventListener("click", addImageSrc);
// //showing or hiding the div that contains the input files when you want to add a new image
// function showDivInput(){
//   if(inputField.style.display === 'none'){
//     document.querySelector('.inputForNew').value = ' '
//     inputField.style.display = 'flex'
//   }else{
//     inputField.style.display = 'none'
//   }
// }


// let allImg = document.querySelectorAll('img')
// function addDivsAndButton() {
//   for(let i=0; i < allImg.length; i++){
//     //going through all the images 
//    let parentDiv = allImg[i].parentElement.id
//     console.log(parentDiv)
//     //grabbing the current div
//     let actualDiv = document.querySelector(`#${parentDiv}`)
//     //creating the edit button
//     let editButton = document.createElement('button')
//     editButton.id = 'editButton'
//     editButton.innerText = 'edit'
//     //creating the remove button
//     let removeButton = document.createElement('button')
//     removeButton.id = 'removeButton'
//     removeButton.innerText = 'remove'
    
//     //creating a div to append it to the parent div of the image and also it helps keep the components nice 
//     let wrapDiv = document.createElement('div')
//     wrapDiv.className = `imgDiv class${i}`
//     wrapDiv.id = 'div'+i
//     //appending the created div to the main div and the button to the div we created
   
//     wrapDiv.append(editButton)
//     wrapDiv.append(removeButton)
//     wrapDiv.append(allImg[i])
//     actualDiv.append(wrapDiv)
//     removeButton.addEventListener("click", function() {
//       removeImg(wrapDiv);

//   })
//   }
//   return allImg
// }


// function addDivsAndButtonForNewImg(img){
//   console.log(img)
//   let parentDiv = img.parentElement.id
//     console.log(parentDiv)
//     //grabbing the current div
//     let actualDiv = document.querySelector(`#${parentDiv}`)
//     //creating the edit button
//     let editButton = document.createElement('button')
//     editButton.id = 'editButton'
//     editButton.innerText = 'edit'
//     //creating the remove button
//     let removeButton = document.createElement('button')
//     removeButton.id = 'removeButton'
//     removeButton.innerText = 'remove'
    
//     //creating a div to append it to the parent div of the image and also it helps keep the components nice 
//     let wrapDiv = document.createElement('div')
//     wrapDiv.className = `imgDiv class${i}`
//     wrapDiv.id = 'div'+i
//     //appending the created div to the main div and the button to the div we created
   
//     wrapDiv.append(editButton)
//     wrapDiv.append(removeButton)
//     wrapDiv.append(allImg[i])
//     actualDiv.append(wrapDiv)
//     removeButton.addEventListener("click", function() {
//       removeImg(wrapDiv);

// })

// }
// //calling the function so it always shows



// //grabing the source of the image on add new image from the input field and adding it to the page
// function addImageSrc() {
//   //creating the new img element for the new image
//   let newImg = document.createElement('img')
//   newImg.className = allImg.length + 1
//   //grabing the input calue the url in this case
//   newImg.src = document.querySelector('.inputForNew').value
//   //getting all the divs in order to grab the last div later
//   let howManyDivs = document.querySelectorAll('div')

//   console.log(howManyDivs)
//   let lastDiv = howManyDivs[howManyDivs.length -1]
// console.log('this is div count' + howManyDivs.length)
//   lastDiv.className = `last-${howManyDivs.length} last`
  
// //grabing the image from the last div 
//   let howManyImg = document.querySelectorAll(`.last-${howManyDivs.length} img`)
//   let imgNum = howManyImg.length
//   console.log(imgNum)
//   //checking if there are 3 images already so I can create a new div and I keep tha layout 3 images in a row
//   if(imgNum >= 3 ){
//     let newDiv= document.createElement('div')
//     newDiv.className = `last-${howManyDivs.length +1}`
//     newDiv.id =`${howManyDivs.length}`
//     mainDiv.append(newDiv)
    
//     showDivInput()
//    newDiv.append(newImg)
//   return addDivsAndButtonForNewImg(newImg)
//   }else{
//     addDivsAndButtonForNewImg(newImg)
//     showDivInput()
//     lastDiv.append(newImg)
//     return addDivsAndButtonForNewImg(newImg)

//   }

// }

// //remove img function 

// function removeImg(element){
//   console.log('inside the remove function')
//   console.log(element.parentNode)
//   element.parentNode.removeChild(element)
//   return element.remove()
// }

// addDivsAndButton()