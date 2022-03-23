import { sortByHealth } from '../filterHealth';

test.each([
  [
    'test1',
    [
      { name: 'Маг', health: 100 },
      { name: 'Маг', health: 80 },
      { name: 'Маг', health: 30 },
    ],
    [
      { name: 'Маг', health: 100 },
      { name: 'Маг', health: 80 },
      { name: 'Маг', health: 30 },
    ],
  ],
  [
    'test2',
    [
      { name: 'Маг', health: 30 },
      { name: 'Маг', health: 100 },
      { name: 'Маг', health: 20 },
    ],
    [
      { name: 'Маг', health: 100 },
      { name: 'Маг', health: 30 },
      { name: 'Маг', health: 20 },
    ],
  ],
  [
    'test3',
    [
      { name: 'Маг', health: 10 },
      { name: 'Маг', health: 10 },
      { name: 'Маг', health: 55 },
    ],
    [
      { name: 'Маг', health: 55 },
      { name: 'Маг', health: 10 },
      { name: 'Маг', health: 10 },
    ],
  ],
])('should return', (_, character, expected) => {
  const result = sortByHealth(character);
  expect(result).toEqual(expected);
});
