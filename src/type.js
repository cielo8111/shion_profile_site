'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 100,
}) // Software Project Manager|
  // .move(-18)
  // .type('Good ') //Good |Project Manager
  .pause(1000)
  .move(null, { to: 'END' }) //Amazing Project Manager|
  .delete() //|
  .type('Project Manager') //Project Manager|
  // .move(-18)
  // .type('Amazing ') //Amazing |Project Manager
  .pause(1000)
  .move(null, { to: 'END' }) 
  .delete()
  .go();
