import { toUnicode } from "punycode";

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


        //this method is to check the input day is void,the input day can not bigger than maxday
    CheckLeapYear(){
        let flag=true;
        if (this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0){
            flag= true;
            }else{
                flag= false;
            }
            return flag;
            }

        GetMaxDay() {
        var maxDay=0;
        if ((this.month === 2) && this.CheckLeapYear()) {
            maxDay = 29;
        } else {
            switch (this.month) {
                case 1:
                maxDay = 31;
                    break;
                case 2:
                maxDay = 28;
                    break;
                case 3:
                maxDay = 31;
                    break;
                case 4:
                maxDay = 30;
                    break;
                case 5:
                maxDay = 31;
                    break;
                case 6:
                maxDay = 30;
                    break;
                case 7:
                maxDay = 31;
                    break;
                case 8:
                maxDay = 31;
                     break;
                case 9:
                maxDay = 30;
                    break;
                case 10:
                maxDay = 31;
                    break;
                case 11:
                maxDay = 30;
                    break;
                case 12:
                maxDay = 31;
                    break;
        }
    }
        return maxDay;
        }
//2---out 3
// INPU2-1     2

        
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
             age_year = Math.floor(life_day/365);
             

            let leapYearCount=0;
            // for(let i= birthday_year;i< today_year;i++){
            //     let LeapYear=new Date(i,0,0);
            //     if(LeapYear.CheckLeapYear()){
            //         leapYearCount++;
            //     }

            // }

            //this loop is count how many leap years from birthday to today
            for(let i= birthday_year;i< today_year;i++){
                
                if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
                    leapYearCount++;
                }
            }

             age_month=Math.floor((life_day% 365-leapYearCount)/30);
             age_day= Math.floor((life_day % 365-leapYearCount)%30);

            

            console.log(age_day)
            console.log(leapYearCount)

            return [age_year,age_month,age_day];
            //https://www.calculator.net/age-calculator.html
            //https://kalender-365.de/leap-years.php
            //https://www.timeanddate.com/time/map/
    
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
        //  Math.round(number * 100) / 100)
          let Mars_years=(this.Earth_days/365/1.88).toFixed(1);
          return  Mars_years;
      }

      GetAgeOnJupiter(){
        //  Math.round(number * 100) / 100)
          let Jupiter_years=(this.Earth_days/365/11.86).toFixed(1);
          return  Jupiter_years;
      } 




}






    

