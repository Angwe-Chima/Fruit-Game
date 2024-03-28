let main = document.querySelector('main');
let overlay = document.querySelector('.overlay');
let restart = document.querySelector('button')

const imagesArr = ['images/apple.png', 'images/lemon.png', 'images/mango.png', 'images/apple.png', 'images/lemon.png', 'images/mango.png', 'images/orange.png', 'images/pineapple.png', 'images/strawberry.png', 'images/watermelon.png', 'images/orange.png', 'images/pineapple.png', 'images/strawberry.png', 'images/watermelon.png'];

let clickedDivs = [];
let matchedImages = [];

imagesArr.forEach((imgUrl) => {
  let div = document.createElement('div');
  let image = document.createElement('img');
  image.src = imgUrl;
  image.classList.add('hide');
  div.appendChild(image);
  main.appendChild(div);

  div.addEventListener('click', () => {
    if (clickedDivs.length === 2) {
      return;
    }

    div.classList.add('js-turn');
    image.classList.remove('hide');

    clickedDivs.push(div);

    if (clickedDivs.length === 2) {
      setTimeout(() => {
        if (clickedDivs[0].querySelector('img').src === clickedDivs[1].querySelector('img').src) {
          console.log('Match!');
          overlay.style.display = 'flex'
          overlay.innerHTML = `
            <img src="${clickedDivs[0].querySelector('img').src}">
          `
          setTimeout(()=>{
            overlay.style.display = 'none'
          }, 800)
          matchedImages.push(clickedDivs[0], clickedDivs[1]);
          if (matchedImages.length === imagesArr.length) {
            console.log('Game Over!');
            overlay.style.display = 'flex'
            overlay.innerHTML = `
              <h1>Game Over</h1>
            `
          }
        } else {
          console.log('Not a match!');
          clickedDivs[0].classList.remove('js-turn');
          clickedDivs[1].classList.remove('js-turn');
          clickedDivs[0].classList.add('js-turn2');
          clickedDivs[1].classList.add('js-turn2');
          clickedDivs[0].querySelector('img').classList.add('hide');
          clickedDivs[1].querySelector('img').classList.add('hide');
        }
        clickedDivs = [];
      }, 900);
    }
  });
});


restart.addEventListener('click',()=>{
  location.reload(true)
})