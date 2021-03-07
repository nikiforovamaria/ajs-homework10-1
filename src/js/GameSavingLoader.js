import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = read();
        data.then((response) => {
          const value = json(response);
          return value;
        }).then((response) => {
          resolve(response);
        });
      }, 2000);
    });
  }
}
