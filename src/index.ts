import * as ex from 'excalibur';
import game from './game';
import paddle from './paddle';
import ball from './ball';

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(paddle)

// Add the ball to the current scene
game.add(ball)

// Start the engine to begin the game.
game.start()
