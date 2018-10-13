import { toUnicode } from "punycode";

export class AgeCalculator { 
   constructor (year,month,day) {
    this.day = day;
    this.year = year;
    this.month = month;
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
            let birthday =new Date (this.year,this.month-1,this.day);
            let today =new Date();
            
            let today_year=today.getFullYear();
            let birthday_year=birthday.getFullYear();
            

            let today_time = today.getTime();
            let birthday_time = birthday.getTime();

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

             age_month=Math.floor((life_day% 365)/30);
             age_day= Math.floor(life_day % 365%30-leapYearCount);

            

            console.log(age_day)
            console.log(leapYearCount)

            return [age_year,age_month,age_day];
    
    }


}






    

