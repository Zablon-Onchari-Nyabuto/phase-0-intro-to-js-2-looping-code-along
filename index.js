// Code your solutions in this file
const arrayStringNames = ["Guadalupe", "Ollie", "Aki"]
function writeCards( arrayStringNames, birthday = "surprise" ) {
    let thankYouCards = []
    for ( let i = 0; i < arrayStringNames.length; i++ ) {
      thankYouCards.push( `Thank you, ${arrayStringNames[i]}, for the wonderful ${birthday} gift!` )
    }
    return thankYouCards
  }
  writeCards(["Guadalupe", "Ollie", "Aki"], "wedding");
  
  function countDown( numberFromTheTop ) {
    while ( numberFromTheTop > 0 ) {
      console.log( numberFromTheTop );
      numberFromTheTop -= 1;
    }
    console.log( numberFromTheTop );
  }
  numberFromTheTop();
