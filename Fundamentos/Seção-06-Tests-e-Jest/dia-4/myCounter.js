const myCounter = () => {
    var myArray = [];
    for (var counter = 0; counter <= 3; counter += 1) {
      myArray.push(counter);
      for (var counters = 2; counters <= 3; counters += 1) {
        myArray.push(counters);
      }
    }
    return myArray;
  };
  console.log(myCounter())