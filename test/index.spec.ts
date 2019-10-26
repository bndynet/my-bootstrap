import { checkDependencies } from '../src/scripts';

describe('checkDependencies', () => {
  it('should throw errors if dependencies missing', () => {
    expect(() => {
      checkDependencies(['']);
    }).toThrow();
  });
});
