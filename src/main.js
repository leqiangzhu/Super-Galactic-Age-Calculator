import { AgeCalculator } from './AgeCalculator';
import './styles.css';




$(document).ready(function() {
  $('#day-checker').submit(function(event) {
    event.preventDefault();
    let year = parseInt($('#year').val());
    let month = parseInt($('#month').val());
    let day = parseInt($('#day').val());
    

    let daydate =new  AgeCalculator (year,month,day);
    let maxday =   daydate.GetMaxDay();
   // let dayNumber=daydate.getDay();
    if(day>maxday || maxday===0){
     alert("the input is wrong");
    }
    
    
    let dayoutput = daydate.GetAgeOnEarth();
    $('#result').text(" The Age on the Earth is :"+dayoutput[0]+ 
    " Years "+dayoutput[1]+" Months "+dayoutput[2]+" Days ");
   
    
    });
  });

