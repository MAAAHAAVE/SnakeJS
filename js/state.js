const state = {
  snake: {
    tail: [
      { x: 1, y: 1, d: "right", h: false },
      // { x: 2, y: 1, d: "right", h: false },
      // { x: 3, y: 1, d: "right", h: false },
      { x: 2, y: 1, d: "right", h: true },
    ],
    direction: "right",
    lastPosTail: {},
    speed: 300,
  },
  food: {
    didAte: true,
    apples: {},
  },
};
