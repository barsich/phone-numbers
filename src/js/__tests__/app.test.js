import clearPhoneNumbers from '../app';

test('clearPhoneNumbers', () => {
  expect('+79270000000').toBe(clearPhoneNumbers('8 (927) 000-00-00'));
  expect('+79600000000').toBe(clearPhoneNumbers('+7 960 000 00 00'));
  expect('+860000000000').toBe(clearPhoneNumbers('+86 000 000 0000'));
});
