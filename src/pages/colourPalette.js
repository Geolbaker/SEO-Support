import $ from 'jquery';

function ColourPalette() {

  function textValidation() {
    var colourValues = [];
    for (var i = 1; i < 6; i++) {
      colourValues[i] = document.documentElement.style.getPropertyValue('--colour-palette-'+i);
      var tempArray = colourValues[i].split(",", 3);
      colourValues[i] = tempArray[2].replace(/\D/g,'');
      if (colourValues[i] < 50) {
        $('#colour-'+i)[0].style.color = "white";
      } else {
        $('#colour-'+i)[0].style.color = "black";
      }
    }
  }

  $(window).keypress(function(e) {
    if (e.which === 32) {
      colourPalette();
      textValidation();
    }
  });

  function colourPalette(){
    var variance;
    var HSLValue;
    var randomIntValue1 = 20;
    var randomIntValue2 = 80;
    var firstColourValues = [];
    var secondColourValues = [];
    var thirdColourValues = [];

    //initial random hsl colour
    var firstMainValue = getRandomInt(0, 360);
    var secondMainValue = getRandomInt(randomIntValue1, randomIntValue2);
    var thirdMainValue = getRandomInt(randomIntValue1, randomIntValue2);
    //setting the primary colour
    HSLValue = 'hsl(' + firstMainValue + ',' + secondMainValue + '%,' + thirdMainValue+ '%)';
    document.documentElement.style.setProperty('--colour-palette-1', HSLValue );

    //setting original colour value as part of the array of colours
    firstColourValues[0] = firstMainValue;
    secondColourValues[0] = secondMainValue;
    thirdColourValues[0] = thirdMainValue;


    for (var i = 1; i < 5; i++ ) {
      //getting variance
      getRandomVariance();
      //setting colour
      firstColourValues[i] = firstColourValues[i - 1] + variance;
      firstColourValues[i] = colourValidation(firstColourValues[i]);
      //getting other two hsl values
      secondColourValues[i] = getRandomInt(randomIntValue1, randomIntValue2);
      thirdColourValues[i] = thirdColourValues[i - 1] + variance;
      thirdColourValues[i] = colourValidation(thirdColourValues[i]);
      //setting the colour on the page
      HSLValue = 'hsl(' + firstColourValues[i] + ',' + secondColourValues[i] + '%,' + thirdColourValues[i] + '%)';
      document.documentElement.style.setProperty('--colour-palette-'+[i+1], HSLValue );

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
  }

  return (
    <>
      <div className=" w-screen h-[calc(100vh-25vh)] sm:h-screen flex flex-col sm:flex-row ">

        <div id="colour-1" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-1">
          Press
        </div>

        <div id="colour-2" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-2">
          Space
        </div>

        <div id="colour-3" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-3">
          To
        </div>

        <div id="colour-4" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-4" style={{color: "white"}}>
          Get
        </div>

        <div id="colour-5" className="flex basis-full sm:basis-1/5 justify-center items-center bg-palette-5" style={{color: "white"}}>
          Going
        </div>

        <button onClick={colourPalette} className="fixed sm:hidden bottom-0 m-4 p-4 px-6 rounded-lg bg-white border-[1px] border-slate-300 left-[calc(50%-60px)]">Space</button>

      </div>
    </>
  );
}

export default ColourPalette;
