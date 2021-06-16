import en from '../en';
import tw from '../tw';

describe('[lang] [data] only export string', () => {
  it('check en only export string', () => {
    const enTesting = en['frontend.test.lang.en'];
    expect(typeof enTesting).toBe('string');
    expect(enTesting).toBe('testing');
  });

  it('check tw only export string', () => {
    const twTesting = tw['frontend.test.lang.tw'];
    expect(typeof twTesting).toBe('string');
    expect(twTesting).toBe('測試');
  });
});
