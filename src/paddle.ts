import * as ex from 'excalibur';
import game from './game';

// Create an actor with x position of 150px,
// y position of 40px from the bottom of the screen,
// width of 200px, height and a height of 20px
const paddle = new ex.Actor(150, game.drawHeight - 40, 200, 20);

// Let's give it some color with one of the predefined
// color constants
paddle.color = ex.Color.Chartreuse;
// Make sure the paddle can partipate in collisions, by default excalibur actors do not collide
paddle.collisionType = ex.CollisionType.Fixed;

// Add a mouse move listener
game.input.pointers.primary.on('move', (evt) => {
  paddle.pos.x = (evt as any).worldPos.x;
});

export default paddle;
