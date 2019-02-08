import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimePipe();
    expect(pipe).toBeTruthy();
  });

  it('pads the input', () => {
    const pipe = new TimePipe();
    expect(pipe.transform(8)).toBe('08');
  });
});
