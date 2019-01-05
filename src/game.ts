import * as ex from 'excalibur';

// game.js

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
const game = new ex.Engine({
  height: 600,
  width: 800,
});

export default game;
