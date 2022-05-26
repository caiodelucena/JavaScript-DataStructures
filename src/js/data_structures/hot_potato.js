import { Queue } from './queue.js';

function hotPotato(elementList, number) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < number; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 9)

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game`);
});

console.log(`The winner was ${result.winner}`);