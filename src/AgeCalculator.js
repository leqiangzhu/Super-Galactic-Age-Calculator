//    https://www.calculator.net/age-calculator.html
//     https://kalender-365.de/leap-years.php
//     https://www.timeanddate.com/time/map/

import { LeapYear } from './IsLeapYear';

import { toUnicode } from "punycode";

//the data is from: https://data.worldbank.org/indicator/SP.DYN.LE00.IN
//average life expectancy USA
const average_life=79;
export class AgeCalculator { 
   constructor (year,month,day)
    {
    this.day = day;
    this.year = year;
    this.month = month;
    this.birthday=new Date(this.year,this.month-1,this.day);
    this.today=new Date();
    this.Earth_days=(this.today.getTime()-this.birthday.getTime())
                        /(24*60*60*1000);
    
    }

        GetAgeOnEarth(){
            //the birthday is from user input
            //let birthday =new Date (this.year,this.month-1,this.day);
           
            let today_year=this.today.getFullYear();
            let birthday_year=this.birthday.getFullYear();
            
            let today_time = this.today.getTime();
            let birthday_time = this.birthday.getTime();

            let age_year=0;
            let age_month=0;
            let age_day=0;
            let life_day=(today_time-birthday_time)/(24*60*60*1000);
             age_year = Math.floor(this.Earth_days/365);
             

            let leapYearCount=0;
            // for(let i= birthday_year;i< today_year;i++){
            //     let LeapYear=new Date(i,0,0);
            //     if(LeapYear.CheckLeapYear()){
            //         leapYearCount++;
            //     }
            // }

            //this loop is count how many leap years from the birthday input to current today
            for(let i= birthday_year;i< today_year;i++){
                
                if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
                    leapYearCount++;
                }
            }

             age_month=Math.floor((this.Earth_days% 365-leapYearCount)/30);
             age_day= Math.floor((this.Earth_days% 365-leapYearCount)%30);

            return [age_year,age_month,age_day];
         
    
    }
    // the Earth year is 365 days,A Mercury year is .24 Earth years.
    GetAgeOnMercury(){
      //  Math.round(number * 100) / 100)
        let Mercury_years=(this.Earth_days/365/0.24).toFixed(1);
        return  Mercury_years;
    }

    GetAgeOnVenus(){
        //  Math.round(number * 100) / 100)
          let Venus_years=(this.Earth_days/365/0.62).toFixed(1);
          return  Venus_years;
      }

      GetAgeOnMars(){
          let Mars_years=(this.Earth_days/365/1.88).toFixed(1);
          return  Mars_years;
      }

      GetAgeOnJupiter(){
          let Jupiter_years=(this.Earth_days/365/11.86).toFixed(1);
          return  Jupiter_years;
      } 



      GetLeftYearsEarth(){
       let age_year = (this.Earth_days/365).toFixed();
      //expectancy_years_on_Earth
     return Math.abs(average_life-age_year);
     
      }
      GetLeftYearsMercury(){
        return (this.GetLeftYearsEarth()/0.24).toFixed(1);
       }
       
    GetLeftYearsVenus(){
        return (this.GetLeftYearsEarth()/0.62).toFixed(1);
    }
        
    GetLeftYearsMars(){
        return (this.GetLeftYearsEarth()/1.88).toFixed(1);
        }

    GetLeftYearsJupiter(){
        return (this.GetLeftYearsEarth()/11.86).toFixed(1);
    }



}






    

