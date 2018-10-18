import { AgeCalculator } from '../src/AgeCalculator';

describe("AgeCalculator", function(){
  let test_day = new AgeCalculator(2010,1,1);
  it('should identify a AgeCalculator class',function(){
   
    expect(test_day.GetMaxDay()).toEqual(31);
  });


  it('should check if the GetAgeOnEarth() works',function(){
    //the data is from https://www.calculator.net/age-calculator.html
    //the test day is 10/18,
    expect(test_day.GetAgeOnEarth()).toEqual([8,9,17]);
    expect(test_day.GetAgeOnEarth()).not.toEqual([17,10,28]);
  });
  

  it('should check if the GetAgeOnMercury() works',function(){
    expect(test_day.GetAgeOnMercury()).toEqual("36.7");
  });

  it('should check if the GetAgeOnVenus() works',function(){
    expect(test_day.GetAgeOnVenus()).not.toEqual(75);
  });

  it('should check if the GetAgeOnMars() works',function(){
    expect(test_day.GetAgeOnMars()).toEqual("4.7");
  });

  it('should check if the GetAgeOnJupiter() works',function(){
    expect(test_day.GetAgeOnJupiter()).toEqual("0.7");
  });

  it('should check if the GetLeftYearsEarth() works',function(){
    let test_day = new AgeCalculator(2010,1,1);
    expect(test_day.GetLeftYearsEarth()).toEqual(70);
  });

 
  // it('should check if the GetAgeOnMercury() works',function(){
  //   let test_day = new AgeCalculator(2000,10,20);
  //   expect(test_day.GetAgeOnMercury()).not.toEqual(75);
  // });


  
});
