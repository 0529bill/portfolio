import i18n from '../i18n';

describe('[lang] [i18n] function export correctly', () => {
  const t = i18n();

  it('exports successfully', () => {
    expect(typeof t('frontend.test.lang.en')).toBe('string');
    expect(t('frontend.test.lang.en')).toBe('testing');
  });

  it('exports wrong i18n key', () => {
    const fakeKey = 'frontend.local.fake.keys';
    expect(typeof t('frontend.local.fake.keys')).toBe('string');
    expect(t('frontend.local.fake.keys')).toBe(
      '[NO_TRANSLATION_WITH_THIS_LANG]: [frontend.local.fake.keys]'
    );
  });
});
