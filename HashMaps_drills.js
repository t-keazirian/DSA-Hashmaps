const HashMap = require('./HashMap');

// Hobbit and Maiar have been replaced by the new key that was set after the initial set

// Capacity is 8 - even though we have more than 8 sets

const main = () => {
	const lotr = new HashMap();
	lotr.MAX_LOAD_RATIO = 0.5;
	lotr.SIZE_RATIO = 3;
	lotr.set('Hobbit', 'Bilbo');
	lotr.set('Hobbit', 'Frodo');
	lotr.set('Wizard', 'Gandalf');
	lotr.set('Human', 'Aragorn');
	lotr.set('Elf', 'Legolas');
	lotr.set('Maiar', 'The Necromancer');
	lotr.set('Maiar', 'Sauron');
	lotr.set('RingBearer', 'Gollum');
	lotr.set('LadyOfLight', 'Galadriel');
	lotr.set('HalfElven', 'Arwen');
	lotr.set('Ent', 'Treebeard');

  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  console.log(lotr._capacity);

	console.log(lotr);
};

main();
