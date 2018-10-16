import { AgeCalculator } from './AgeCalculator';
import './styles.css';

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
    
   
    
    let birthdayArray = birthdayInput.GetAgeOnEarth();
    $('#result').text(" The Age on the Earth is :"+birthdayArray[0]+ 
    " Years "+birthdayArray[1]+" Months "+birthdayArray[2]+" Days ");

    $('#AgeOnMercury').text(" The Age on the Mercury is :"+birthdayInput.GetAgeOnMercury()+" Years ");
    $('#AgeOnVenus').text(" The Age on the Venus is :"+birthdayInput.GetAgeOnVenus()+" Years ");
    $('#AgeOnMars').text(" The Age on the Mars is :"+birthdayInput.GetAgeOnMars()+" Years ");
    $('#AgeOnJupiter').text(" The Age on the Jupiter is :"+birthdayInput.GetAgeOnJupiter()+" Years ");

    $('#LeftYearEarth').text(" you can live more than :"+birthdayInput.GetLeftYearsEarth()+" Years on Earth");
    $('#LeftYearMercury').text(" you can live more than :"+birthdayInput.GetLeftYearsMercury()+" Years on Mercury");
    $('#LeftYearVenus').text(" you can live more than :"+birthdayInput.GetLeftYearsVenus()+" Years on Venus");
    $('#LeftYearMars').text(" you can live more than :"+birthdayInput.GetLeftYearsMars()+" Years on Mars");
    $('#LeftYearJupiter').text(" you can live more than :"+birthdayInput.GetLeftYearsJupiter()+" Years on Jupiter");

    // if(average_life>age_year){
    //   return "you can live more than" + Year +"years";
    // }else{
    //   return "you have lived more than" + Year+"years";
    // }
   
    
    });
    $('#AgeOnPlant-btn').click(function(){

      $("#OtherAgeOnPlant").show(); 
    });

    $('#LeftYearOnPlant-btn').click(function(){
      $("#leftYearOnPlant").show(); 
    });



  });

