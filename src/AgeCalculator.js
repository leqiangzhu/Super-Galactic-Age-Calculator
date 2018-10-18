//    https://www.calculator.net/age-calculator.html
//     https://kalender-365.de/leap-years.php
//     https://www.timeanddate.com/time/map/


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
    this.today=new Date ();
    //get how many days from the user input to today
    this.Earth_days=(Date.now()-this.birthday.getTime())
                        /(24*60*60*1000);
    }
    //this method is to check the user input,and get how many days of the month that user input 
    GetMaxDay(){
        let maxDay=0;
        if(this.month===1 || this.month==3 || this.month==5 || this.month==7 || 
            this.month==8 || this.month==10||this.month==12)
        {
               maxDay=31;
        }else{
            if(this.month===2) {
                maxDay = 28;
                //if the year user input is leap year
                if(this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0)
                maxDay++;
             }
             else{
                maxDay = 30;
             }
         }
         return maxDay;    
    }

        GetAgeOnEarth(){
            let birthday_year=this.birthday.getFullYear();
            let age_year=0;
            let age_month=0;
            let age_day=0;
           // let life_day=(today_time-birthday_time)/(24*60*60*1000);
            console.log(this.Earth_days)
            let leapYearCount=0;
            //this loop is count how many leap years from the birthday input to current today
           
            for(let i= birthday_year;i< this.today.getFullYear();i++){
                if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
                    leapYearCount++;
                }
            }
                /*example:if a person's birthday is 1980,1,1;
                from 1980 to 2018,there are 10 leap years
                //the bugs for navtive month,should minus the leapyear count first
                update 2018/10/15,do not need to count the leap year,
                the result is equal to" https://www.calculator.net/age-calculator.html"
                */
             age_year = Math.floor(this.Earth_days/365);
             age_month=Math.floor((this.Earth_days%365-leapYearCount)/30);
             age_day= this.today.getDate()-this.day;
            
            if(age_month<0){
                age_year--;
                age_month+=12;
             }

             if(age_day<0){
                age_day= age_day+this.GetMaxDay();
             }
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

    GetNextBirthdayEarth(){
        let nextYeaar=0;
        let nextMonth=this.month-1;
        let nextDay=this.day;
       

        if(this.today.getMonth()>this.month){
            nextYeaar= this.today.getFullYear()+1;
        }else if(this.today.getMonth()===this.month){
            if (this.today.getDate()>this.day){
                nextYeaar= this.today.getFullYear()+1;
            }
            if(this.today.getDate()<this.day){
                nextYeaar= this.today.getFullYear();
            }

        }else if(this.today.getMonth()<this.month){
            nextYeaar= this.today.getFullYear()+1;
        }

        let nextBirthday=new Date(nextYeaar,nextMonth,nextDay);

        return nextBirthday;
    }
    
    GetNextBirthdays(){
        let nextBirthdayOnEarth=new Date(this.GetNextBirthdayEarth());
        let LiftTimes= nextBirthdayOnEarth-Date.now();
       
        let Mercury=new Date(LiftTimes* 0.24+Date.now());
        let Venus=new Date(LiftTimes* 0.62+Date.now());
        let Mars=new Date(LiftTimes* 1.88+Date.now());
        let Jupiter=new Date(LiftTimes* 11.86+Date.now());
       
        return [Mercury,Venus,Mars,Jupiter];
    }

    GetNextBirthdayVenus(){
       // let nextBirthdayOnEarth=this.GetNextBirthdayEarth();
       // let LiftTimes= this.GetNextBirthdayEarth()-Date.now();
        
        return Date((this.GetNextBirthdayEarth()-Date.now())* 0.62+Date.now());
    }
    GetNextBirthdayMars(){ 
       // let nextBirthdayOnEarth=this.GetNextBirthdayEarth();
       // let LiftTimes= this.GetNextBirthdayEarth()-Date.now();
        return Date((this.GetNextBirthdayEarth()-Date.now()) * 1.88+Date.now());
    }
    GetNextBirthdayJupiter(){ 
       // let nextBirthdayOnEarth=this.GetNextBirthdayEarth();
      //  let LiftTimes= this.GetNextBirthdayEarth()-Date.now();
        return Date((this.GetNextBirthdayEarth()-Date.now()) * 11.86+Date.now());
    }

    

}
