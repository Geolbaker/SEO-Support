import $ from 'jquery';

function ColourPalette() {


  $(window).keypress(function(e) {
    var variance;
    var HSLValue;
    var randomIntValue1 = 20;
    var randomIntValue2 = 80;

    if (e.which === 32) {
      //initial random hsl colour
      var firstMainValue = getRandomInt(0, 360);
      var secondMainValue = getRandomInt(randomIntValue1, randomIntValue2);
      var thirdMainValue = getRandomInt(randomIntValue1, randomIntValue2);
      //setting the primary colour
      HSLValue = 'hsl(' + firstMainValue + ',' + secondMainValue + '%,' + thirdMainValue+ '%)';
      document.documentElement.style.setProperty('--colour-palette-1', HSLValue );

      //setting secondary colour
      var firstSecondaryValue;
      //get variance
      getRandomVariance();
      firstSecondaryValue = firstMainValue + variance;
      firstSecondaryValue = colourValidation(firstSecondaryValue);
      //getting other two hsl values
      var secondSecondaryValue = getRandomInt(randomIntValue1, randomIntValue2);
      var thirdSecondaryValue = thirdMainValue + variance;
      thirdSecondaryValue = colourValidation(thirdSecondaryValue);
      //setting the secondary colour
      HSLValue = 'hsl(' + firstSecondaryValue + ',' + secondSecondaryValue + '%,' + thirdSecondaryValue+ '%)';
      document.documentElement.style.setProperty('--colour-palette-2', HSLValue );

      //setting tertiary colour
      var firstTertiaryValue;
      //get variance
      getRandomVariance();
      firstTertiaryValue = firstSecondaryValue + variance;
      firstTertiaryValue = colourValidation(firstTertiaryValue);
      //getting other two hsl values
      var secondTertiaryValue = getRandomInt(randomIntValue1, randomIntValue2);
      var thirdTertiaryValue = thirdMainValue + variance;
      thirdTertiaryValue = colourValidation(thirdTertiaryValue);
      //setting the secondary colour
      HSLValue = 'hsl(' + firstTertiaryValue + ',' + secondTertiaryValue + '%,' + thirdTertiaryValue+ '%)';
      document.documentElement.style.setProperty('--colour-palette-3', HSLValue );

      //setting quaternary colour
      var firstQuaternaryValue;
      //get variance
      getRandomVariance();
      firstQuaternaryValue = firstTertiaryValue + variance;
      firstQuaternaryValue = colourValidation(firstQuaternaryValue);
      //getting other two hsl values
      var secondQuaternaryValue = getRandomInt(randomIntValue1, randomIntValue2);
      var thirdQuaternaryValue = thirdMainValue + variance;
      thirdQuaternaryValue = colourValidation(thirdQuaternaryValue);
      //setting the secondary colour
      HSLValue = 'hsl(' + firstQuaternaryValue + ',' + secondQuaternaryValue + '%,' + thirdQuaternaryValue+ '%)';
      document.documentElement.style.setProperty('--colour-palette-4', HSLValue );

      //setting quinary colour
      var firstQuinaryValue;
      //get variance
      getRandomVariance();
      firstQuinaryValue = firstQuaternaryValue + variance;
      firstQuinaryValue = colourValidation(firstQuinaryValue);
      //getting other two hsl values
      var secondQuinaryValue = getRandomInt(randomIntValue1, randomIntValue2);
      var thirdQuinaryValue = thirdMainValue + variance;
      thirdQuinaryValue = colourValidation(thirdQuinaryValue);
      //setting the secondary colour
      HSLValue = 'hsl(' + firstQuinaryValue + ',' + secondQuinaryValue + '%,' + thirdQuinaryValue+ '%)';
      document.documentElement.style.setProperty('--colour-palette-5', HSLValue );



    }

    function getRandomVariance() {
      variance = Math.ceil(Math.random() * 20) * (Math.round(Math.random()) ? 1 : -1);
    }

    function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function colourValidation(value) {
      if (value < 0 || value > 360) {
        return 0;
      } else {
        return value;
      }
    }
  });

  return (
    <>
      <div className="w-screen h-screen flex flex-col sm:flex-row ">

        <div id="colour-1" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-1">
          Colour 1
        </div>

        <div id="colour-2" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-2">
          Colour 2
        </div>

        <div id="colour-3" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-3">
          Colour 3
        </div>

        <div id="colour-4" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-4">
          Colour 4
        </div>

        <div id="colour-5" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-5">
          Colour 5
        </div>

      </div>
    </>
  );
}

export default ColourPalette;
