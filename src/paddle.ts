import { Actor, CollisionType, Color } from 'excalibur';
import game from './game';

class Paddle extends Actor {
  constructor() {
    super(150, game.drawHeight - 40, 200, 20);
    this.color = Color.Chartreuse;
    this.collisionType = CollisionType.Fixed;

    game.input.pointers.primary.on('move', (evt) => {
      this.pos.x = (evt as any).worldPos.x;
    });
  }

}
export default Paddle;
