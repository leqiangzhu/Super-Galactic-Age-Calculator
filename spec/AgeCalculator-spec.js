import { AgeCalculator } from './AgeCalculator';

describe('GetMaxDay()', function() {

    it('should test the Max day in that month', function() {
      let test_day = new Date(2018,10,12);
      expect(test_day.GetMaxDay()).toEqual(31);
    });
  
    // it('should correctly determine whether the three sides cannnot be made into a triangle', function(){
    //   var notTriangle = new Triangle(2,2,500);
    //   expect(notTriangle.checkType()).toEqual("not a triangle");
    // });
  
    // it('should correctly determine if a triange is equalaterial', function(){
    //   var equalTriangle = new Triangle (5,5,5);
    //   expect(equalTriangle.checkType()).toEqual("an equilateral triangle");
    // });
  
    // it('should correctly determine if a triangle is isoceles',function(){
    //   var isocelesTriangle = new Triangle(2,2,4);
    //   expect(isocelesTriangle.checkType()).toEqual("an isosceles triangle");
    // });
  
  });