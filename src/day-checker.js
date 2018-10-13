export class DayCalculator { 
   constructor (year,month,day) {
    this.day = day;
    this.year = year;
    this.month = month;
            }



        GetMaxDay() {
        var maxDay=0;
        if ((this.month === 2) &&((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0))) {
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

        
        DayChecker(){
           // var days =  [ "Sunday" ,"Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
            let date =new Date (this.year,this.month-1,this.day);
            let today =new Date();
            let today_year=today.getFullYear();
            let date_year=date.getFullYear();
            let age=today_year-date_year;

            return age;
    
    }


}






    

