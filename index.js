function scuberGreetingForFeet(someValue){
if (someValue < 400 || someValue == 400) {
  return 'This one is on me!';
}

else if (someValue > 400 && someValue < 2000) {
  return 'That will be twenty bucks.';
}

else if (someValue > 2000 && someValue < 2500) {
  return 'I will gladly take your thirty bucks.';
}

else if (someValue > 2500 ) {
  return 'No can do.';

}


}


function ternaryCheckCity(cityName){
  if (cityName == 'NYC') {
    return "Ok, sounds good.";
  }

  else if (cityName != 'NYC') {
    return "No go.";
  }
}

function switchOnCharmFromTip(tipType){
  if (tipType == 'generous') {
    return 'Thank you so much.';
  }
  else if (tipType == 'not as generous') {
    return 'Thank you.';
  }
  else if (tipType == 'thanks for everything') {
    return 'Bye.';
  }
  
}