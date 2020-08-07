import { functionThatGivesSmallerArrayBasedOnInput } from './main';

describe('Tests', () => {
  test('no matches', () => {
    expect(
      functionThatGivesSmallerArrayBasedOnInput([123, 4556, 127, 415, 8, 42, 88, 888, 13], 9)
    ).toEqual([]);
  });

  test('detects if numberToSearchFor is in the number once', () => {
    expect(findAnagrams([123, 4556, 177, 415, 8, 42, 88, 888, 13], 2)).toEqual([
      '123',
      '42'
    ]);
  });

  test('detects if numberToSearchFor is repeated in some number', () => {
    expect(findAnagrams([122, 4556, 177, 415, 8, 242, 88, 888, 13], 2)).toEqual([
      '122',
      '242'
    ]);
  });


  test('detects if numberToSearchFor is in all the numbers', () => {
    expect(findAnagrams([1272, 45576, 177, 4175, 87, 2742, 788, 8878, 173], 7)).toEqual([
      '1272', 
      '45576', 
      '177', 
      '4175', 
      '87', 
      '2742', 
      '788', 
      '8878', 
      '173'
    ]);
  });

  test('detects if numberToSearchFor has more than one digit', () => {
    expect(findAnagrams([123, 4556, 177, 415, 8, 2423, 88, 238, 13], 23)).toEqual([
      '123',
      '2423',
      '238'
    ]);
  });

  test('detects if numberToSearchFor is a string', () => {
    expect(findAnagrams([123, 4386, 177, 415, 8, 383, 88, 238, 13], '38')).toEqual([
      '4386',
      '383',
      '238'
    ]);
  });

  test('detects if numberToSearchFor and arrayOfNumber is a string', () => {
    expect(findAnagrams(['123', '4386', '177', '415', '8', '383', '88', '238', '13'], '38')).toEqual([
      '4386',
      '383',
      '238'
    ]);
  });
});
