const onload = () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  const renderGame = () => {
    for(let y = 0; y < row; y += 1){
      for(let x = 0; x< row; x += 1){
        ctx.fillStyle = 'aqua';
        ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
      }
    }
  };

  renderGame();

}

window.addEventListener('load', onload);