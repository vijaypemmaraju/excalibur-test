import {
  Actor,
  CollisionType,
  Color,
} from 'excalibur';
import game from '../game';

class Ball extends Actor {
  constructor() {
    super(100, 300, 20, 20);

    this.color = Color.Red;

    this.vel.setTo(200, 200);

    this.collisionType = CollisionType.Passive;

    this.on('precollision', (ev) => {
      const intersection = ev.intersection.normalize();

      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        this.vel.x *= -1;
      } else {
        this.vel.y *= -1;
      }
    });

    this.on('postupdate', () => {
      if (this.pos.x < this.getWidth() / 2) {
        this.vel.x *= -1;
      }

      if (this.pos.x + this.getWidth() / 2 > game.drawWidth) {
        this.vel.x *= -1;
      }

      if (this.pos.y < this.getHeight() / 2) {
        this.vel.y *= -1;
      }
    });

  }

  public draw(ctx: CanvasRenderingContext2D, delta: number) {
    // Optionally call original 'base' method
    // ex.Actor.prototype.draw.call(this, ctx, delta)

    // Custom draw code
    ctx.fillStyle = this.color.toString();
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

export default Ball;
