// Pictures path
const pictures = [
  './pictures/foto1.jpeg',
  './pictures/foto2.png',
  './pictures/foto3.jpeg',
  './pictures/foto4.jpeg'
];

// Select profile picture and add click event to change the profile picture
const profilePic = document.querySelector('.card-picture');
profilePic.addEventListener('click', () => changeProfilePicture());

// Using a helper variable
let index = 0;

// Function to change the profile picture
function changeProfilePicture() {
  // make index value back to 0
  if (index === pictures.length) [(index = 0)];
  // set profile pic as background image
  profilePic.style.backgroundImage = `url(${pictures[index]})`;
  // increment index to choose the next profile picture in the next click event
  index++;
}

/******************************************************************************/
// Select card name and add a name to it
const profileName = document.querySelector('.card-name');

function createNameInHTML(name) {
  const nameHelper = name.split('');
  nameHelper.forEach((letter, index) => {
    profileName.innerHTML += `<span class='card-name_letter' style='animation-delay: ${
      0.25 + index / 10
    }s;'>${letter}</span>`;
  });
}

// Add name to html
createNameInHTML('Rafael Lima de Morais');

// change param <name> to the desired name, e.g.: createNameInHTML('Rafael Lima')

// this.props.copy.split("").map(function(char, index){
//   let style = {"animation-delay": (0.5 + index / 10) + "s"}
