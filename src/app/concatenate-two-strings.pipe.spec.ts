import { ConcatenateTwoStringsPipe } from './concatenate-two-strings.pipe';

describe('ConcatenateTwoStringsPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenateTwoStringsPipe();
    expect(pipe).toBeTruthy();
  });
});
