/* eslint-disable no-undef */
describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register of new skill', async () => {
    const newSkillInput = await element(by.id('newSkill-input'));
    const buttonAdd = await element(by.id('button-add'));
    const flatListSkills = await element(by.id('flatList-skills'));

    await newSkillInput.tap();
    await newSkillInput.typeText('React Native');
    await buttonAdd.tap();

    await flatListSkills.tap();

    expect(element(by.id('flatList-skills'))).toBeVisible();
  });
});
