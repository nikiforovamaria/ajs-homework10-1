import GameSavingLoader from '../GameSavingLoader';

test('1 - should return object', (done) => {
  GameSavingLoader.load().then((data) => {
    expect(data).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    done();
  });
});
