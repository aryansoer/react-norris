import { replace } from './utils';

describe('replace', () => {
  it('should change a specified value with a new one', () => {
    const msg = 'Chuck Norris can\'t test for equality because he has no equal.'
    const result = replace(msg, 'Chuck Norris', 'Bruce Lee');
    expect(result).toBe('Bruce Lee can\'t test for equality because he has no equal.');
  });

  it('should be case-sensitive', () => {
    const msg = 'Mr Green has a green car.';
    const result = replace(msg, 'Green', 'Red');
    expect(result).toBe('Mr Red has a green car.');
  });
});