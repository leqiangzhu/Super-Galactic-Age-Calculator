import { AgeCalculator } from './AgeCalculator';

export class LeapYear {
    constructor (year,month,day)
    {
        this.year=year;
        this.month= month;
        this.day=day;
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
        };

    GetMaxDay() {
    let maxDay=0;
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

    CheckYearInput()
    {
       if(this.CheckLeapYear()) {
          if(this.day >this.GetMaxDay()){
              alert("void input!");
          }

       }
        
    }
}