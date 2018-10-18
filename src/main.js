import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { AgeCalculator } from './AgeCalculator';

$(document).ready(function() {
  $('#dateInput').submit(function(event) {
    event.preventDefault();
    let year = parseInt($('#year').val());
    let month = parseInt($('#month').val());
    let day = parseInt($('#day').val());
    
    let birthdayInput =new  AgeCalculator (year,month,day);
    if(day>birthdayInput.GetMaxDay()){
      alert("viod input");
    }
    
    let nextBirdays=birthdayInput.GetNextBirthdays();
    $('#LeftYearOnPlant-btn').click(function(){
      if (birthdayArray[0]<79){
        $("#leftYearOnPlant").show(); 
      }else{
        $("#YearsThanAverage").show(); 
      }
     
    });
    
    let birthdayArray = birthdayInput.GetAgeOnEarth();
    $('#result').text(" The Age on the Earth is :"+birthdayArray[0]+ 
    " Years "+birthdayArray[1]+" Months "+birthdayArray[2]+" Days ");

    $('#AgeOnMercury').text(birthdayInput.GetAgeOnMercury());
    $('#AgeOnVenus').text(birthdayInput.GetAgeOnVenus());
    $('#AgeOnMars').text(birthdayInput.GetAgeOnMars());
    $('#AgeOnJupiter').text(birthdayInput.GetAgeOnJupiter());

    $('.LeftYearEarth').text(birthdayInput.GetLeftYearsEarth());
    $('.LeftYearMercury').text(birthdayInput.GetLeftYearsMercury());
    $('.LeftYearVenus').text(birthdayInput.GetLeftYearsVenus());
    $('.LeftYearMars').text(birthdayInput.GetLeftYearsMars());
    $('.LeftYearJupiter').text(birthdayInput.GetLeftYearsJupiter());

    $('#Next-Birthday-Earth').text(+birthdayInput.GetNextBirthdayEarth().toDateString());
    $('#Next-Birthday-Mercury').text(nextBirdays[0]);
    $('#Next-Birthday-Venus').text(nextBirdays[1]);
    $('#Next-Birthday-Mars').text(nextBirdays[2]);
    $('#Next-Birthday-Jupiter').text(+nextBirdays[3]);

    // if(average_life>age_year){
    //   return "you can live more than" + Year +"years";
    // }else{
    //   return "you have lived more than" + Year+"years";
    // }
   
    
    });
    $('#AgeOnPlant-btn').click(function(){
      $("#OtherAgeOnPlant").show(); 
    });

 
    $('#NextBirthday-btn').click(function(){
      $("#NextBirthday").show(); 
      

  });

  });