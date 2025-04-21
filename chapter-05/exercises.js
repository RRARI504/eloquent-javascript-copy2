// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //console.log(array)
  return array.reduce(function(acc, current){
    return acc.concat(current)
   
  }, [])

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, tstFunc, updFunc, bdyFunc) {
  for(let i = val; tstFunc(i); i = updFunc(i) ){
    //init val as current value
    //test function recieves current value and returns true or false
    //updFunc returns updated value for next iteration

    bdyFunc(i);//bdy gets called each iteration w current value 
  
}

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  for(var i = 0; i < array.length; i++){
    if(!func(array[i], i, array)){
      return false
    }

  }
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  const scriptCounts = {};
  //Initializes an empty object to track the number of times each direction appears
  let maxCount = 0;
  //keeps track of highest count 
  let dominantDir = "ltr"; // Default direction
  //set default position as lrt

  for (let char of string) {
    //loop through each charachter in string
    const script = characterScript(char.codePointAt(0));
    //make variable that converts char to unicode point
    //characterScript which returns info about the script (like name, direction)
    // or null if none is found.
    if (script) {//if dcript exsist
      const dir = script.direction;
      //Gets the writing direction of the script
      scriptCounts[dir] = (scriptCounts[dir] || 0) + 1;
      //Updates the count for that direction.

      if (scriptCounts[dir] > maxCount) {
        //if this direction now has the highest count, update the tracker.
        maxCount = scriptCounts[dir];
        //Update maxCount to the new highest value.
        dominantDir = dir;
        //Set dominantDir to the direction that now has the most occurrences.
      }
    }
  }
  return dominantDir;
  

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};