const gameEvents = new Map([
    [17,'GOAL'],
    [36,'Subsituation'],
    [47,'GOAL'],
    [61,'Subsituation'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70,'Subsituation'],
    [72,'Subsituation'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow card'],
]);
const events = {...new Set(gameEvents.values())};
console.log(events);

gameEvents.delete(64);

console.log(`An event happened, on average, every ${gameEvents.size / 90} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
}




