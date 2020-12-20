import { Actor, CollisionType, Color, Input } from 'excalibur';
import game from '../game';

class Paddle extends Actor {
  constructor() {
    super(150, game.drawHeight - 40, 200, 20);
    this.color = Color.Chartreuse;

    game.input.pointers.primary.on('move', (evt: Input.PointerMoveEvent) => {
      this.pos.x = evt.worldPos.x;
    });
  }
}
export default Paddle;
