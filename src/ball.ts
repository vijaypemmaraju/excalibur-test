import * as ex from 'excalibur';
import game from './game';

// Create a ball
var ball = new ex.Actor(100, 300, 20, 20)

// Set the color
ball.color = ex.Color.Red

// Set the velocity in pixels per second
ball.vel.setTo(100, 100)

// Set the collision Type to passive
// This means "tell me when I collide with an emitted event, but don't let excalibur do anything automatically"
ball.collisionType = ex.CollisionType.Passive
// Other possible collision types:
// "ex.CollisionType.PreventCollision - this means do not participate in any collision notification at all"
// "ex.CollisionType.Active - this means participate and let excalibur resolve the positions/velocities of actors after collision"
// "ex.CollisionType.Fixed - this means participate, but this object is unmovable"

// On collision bounce the ball
ball.on('precollision', function(ev) {
  // reverse course after any collision
  // intersections are the direction body A has to move to not be clipping body B
  // `ev.intersection` is a vector `normalize()` will make the length of it 1
  // `negate()` flips the direction of the vector
  var intersection = ev.intersection.normalize()

  // The largest component of intersection is our axis to flip
  if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
    ball.vel.x *= -1
  } else {
    ball.vel.y *= -1
  }
})

export default ball;
