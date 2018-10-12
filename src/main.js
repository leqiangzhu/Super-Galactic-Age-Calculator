import { AgeCalculator } from './AgeCalculator';
import './styles.css';




$(document).ready(function() {
  $('#day-checker').submit(function(event) {
    event.preventDefault();
    let year = parseInt($('#year').val());
    let month = parseInt($('#month').val());
    let day = parseInt($('#day').val());
    

    let daydate =new  DayCalculator (year,month,day);
    let maxday =   daydate.GetMaxDay();
   // let dayNumber=daydate.getDay();
    if(day>maxday || maxday===0){
     alert("the input is wrong");
    }
    
    
    let dayoutput = daydate.DayChecker();
    $('#result').text("This MAX DAY is " +maxday +" This day is :" +dayoutput);
   
    
    });
  });

