import * as ex from 'excalibur';
import Ball from './actors/Ball';
import Paddle from './actors/Paddle';
import game from './game';

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(new Paddle());

// Add the ball to the current scene
game.add(new Ball());

// Start the engine to begin the game.
game.start();
