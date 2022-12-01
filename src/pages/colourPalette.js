import $ from 'jquery';

function ColourPalette() {

  function textValidation() {
    //initiate array
    var colourValues = [];
    for (var i = 1; i < 6; i++) {
      //get the hsl value from css
      colourValues[i] = getComputedStyle(document.documentElement).getPropertyValue('--colour-palette-'+i);
      //create a temp array to store the segments
      var tempArray = colourValues[i].split(",", 3);
      //break each segment down into its pure numerical value
      colourValues[i] = tempArray[2].replace(/\D/g,'');
      //check what the contrast of the colour is, set text color accordingly
      if (colourValues[i] < 50) {
        $('#colour-'+i)[0].style.color = "white";
      } else {
        $('#colour-'+i)[0].style.color = "black";
      }
      //use temp array values to run through the hsl to hex convertor
      var hexValue = hslToHex(tempArray[0].replace(/\D/g,''), tempArray[1].replace(/\D/g,''), tempArray[2].replace(/\D/g,''))
      //print relevant hex colour to each section
      $('#colour-'+i).html(hexValue)
    }
  }

  function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  $(window).keypress(function(e) {
    if (e.which === 32) {
      colourPalette();
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
      
      
      //update the text to the new values
      textValidation();

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
