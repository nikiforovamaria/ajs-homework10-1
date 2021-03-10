import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

console.log('worked');

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  return new GameSaving(saving);
});
