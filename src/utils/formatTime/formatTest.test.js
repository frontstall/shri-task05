import formatTime from '.';

it('format hours', () => {
  expect(formatTime(4800000)).toBe('1 h 20 min');
  expect(formatTime(44241000)).toBe('12 h 17 min');
});

it('format minutes', () => {
  expect(formatTime(3120000)).toBe('52 min 0 sec');
  expect(formatTime(3164000)).toBe('52 min 44 sec');
});

it('format seconds', () => {
  expect(formatTime(10000)).toBe('10 sec');
  expect(formatTime(0)).toBe('0 sec');
  expect(formatTime(60000)).toBe('1 min 0 sec');
  expect(formatTime(55000)).toBe('55 sec');
});

it('format empty', () => {
  expect(formatTime()).toBe('Not finished');
});
