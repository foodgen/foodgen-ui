import { CastToFormcontrolPipe } from './cast-to-formcontrol.pipe';

describe('CastToFormcontrolPipe', () => {
  it('create an instance', () => {
    const pipe = new CastToFormcontrolPipe();
    expect(pipe).toBeTruthy();
  });
});
