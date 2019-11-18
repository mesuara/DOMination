




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



  createNewDiv.appendChild(createDrop(imgElement))
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
  createNewDiv.appendChild(createDrop(imgElement))
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



function createDrop(img){
//   <div class="dropdown">
//   <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//   </div>
// </div>
console.log(img)
let mainDivDrop = document.createElement('div')
mainDivDrop.className = 'dropdown'
let button = document.createElement('button')
button.className = 'dropbtn'
button.innerText = 'Filter'
button.addEventListener('click',dropFunction)
mainDivDrop.append(button)
let dropDiv = document.createElement('div')
dropDiv.className = 'dropdown-content'
dropDiv.id = 'myDropdown'
mainDivDrop.append(dropDiv)
let sepiaFilter  = document.createElement('a')
sepiaFilter.innerText = 'sepia'
sepiaFilter.className = 'sepia'
sepiaFilter.addEventListener('click', function(){
  addImgFilter(img, 'sepia')
})
dropDiv.append(sepiaFilter)

let contrastFilter  = document.createElement('a')
contrastFilter.innerText = 'contrast'
contrastFilter.className = 'contrast'
contrastFilter.addEventListener('click', function(){
  addImgFilter(img, 'contrast')
})
dropDiv.append(contrastFilter)

return mainDivDrop
}


function dropFunction(){
  document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function addImgFilter(img,filter){
  console.log(img)
  if(filter === 'sepia'){
  img.style.filter = "sepia()"
  }
  if(filter === 'contrast'){
    img.style.filter = "contrast()"
    }
}













