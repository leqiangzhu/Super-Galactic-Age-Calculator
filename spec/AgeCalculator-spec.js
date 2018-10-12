import { AgeCalculator } from './AgeCalculator';

describe('GetMaxDay()', function() {

    it('should test the Max day in that month', function() {
      let test_day = new Date(2018,10,12);
      let test_day1 = new Date(1984,2,12);
      expect(test_day.GetMaxDay()).toEqual(31);
      expect(test_day1.GetMaxDay()).toEqual(29);
    });
  
  });

  describe('GetMaxDay()', function() {

    it('should test the Max day in that month', function() {
      let test_day = new Date(2018,10,12);
      expect(test_day.GetMaxDay()).toEqual(31);
    });
  
  });