const onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  const renderGame = () => {
    ctx.clearRect(0, 0, width, height);
    for (let y = 0; y < row; y += 1) {
      for (let x = 0; x < row; x += 1) {
        state.snake.tail.forEach((s) => {
          if (s.x === x && s.y === y) {
            ctx.fillStyle = colors.snakeBody;
            ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
            if (s.h) {
              ctx.fillStyle = colors.snakeHead;
              ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
            }
          }
        });

        if (state.food.apples.x === x && state.food.apples.y === y) {
          ctx.fillStyle = colors.apples;
          ctx.fillRect(x * ceil, y * ceil, ceil, ceil);
        }
      }
    }
  };

  renderGame();

  let startTime = 0,
    currentTime = 0,
    time = 0,
    currentSecond = 0;

  animateRAFInterval.start(() => {
    if (startTime === 0) {
      startTime = new Date().getTime();
    }

    currentTime = new Date().getTime();
    time = currentTime - startTime;
    currentSecond = Math.floor(time / state.snake.speed);

    if (currentSecond > 0) {
      startTime = 0;
      moveSnake();
      addNewFood();
      renderGame();
    }
  });

  const onkeydown = (e) => {
    changeDirection(e.keyCode);
  };

  document.addEventListener("keydown", onkeydown);
};

window.addEventListener("load", onload);
