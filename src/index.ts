import * as ex from 'excalibur';
import Ball from './ball';
import game from './game';
import Paddle from './paddle';

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(new Paddle());

// Add the ball to the current scene
game.add(new Ball());

// Start the engine to begin the game.
game.start();
