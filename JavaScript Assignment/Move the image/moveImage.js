const image = document.getElementById('my-image');
let x = 0; // initial x position
let y = 0; // initial y position

document.addEventListener('keydown', event => {
  // Handle arrow key events
  switch (event.code) {
    case 'ArrowUp':
      y -= 10; // move up
      break;
    case 'ArrowDown':
      y += 10; // move down
      break;
    case 'ArrowLeft':
      x -= 10; // move left
      break;
    case 'ArrowRight':
      x += 10; // move right
      break;
    default:
      return; // do nothing if it's not an arrow key event
  }
  
  // Update the image position
  image.style.transform = `translate(${x}px, ${y}px)`;
});
