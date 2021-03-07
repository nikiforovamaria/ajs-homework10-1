import GameSavingLoader from './GameSavingLoader';

console.log('worked');

console.log(GameSavingLoader.load().then((saving) => saving));
