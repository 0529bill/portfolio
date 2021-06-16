import i18n from '../i18n';

describe('[lang] [i18n] function export correctly', () => {
  it('exports successfully', () => {
    let t = i18n();
    expect(typeof t('frontend.test.lang.en')).toBe('string');
    expect(t('frontend.test.lang.en')).toBe('testing');
  });

  it('exports wrong i18n key', () => {
    let t = i18n();
    const fakeKey = 'frontend.local.fake.keys';
    expect(typeof t('frontend.local.fake.keys')).toBe('string');
    expect(t('frontend.local.fake.keys')).toBe(
      '[NO_TRANSLATION_WITH_THIS_LANG]: [frontend.local.fake.keys]'
    );
  });
});
