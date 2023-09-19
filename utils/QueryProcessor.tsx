export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "I don't know, but it likely isn't bojunl." 
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "bojun" 
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
                      //Which of the following numbers is the largest: 35, 57, 47?
  const addMatch2 = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (addMatch2) {
    const x: number = parseInt(addMatch2[1]);
    const y: number = parseInt(addMatch2[2]);
    const z: number = parseInt(addMatch2[3]);
    if (x > y && x > z){
      return x.toString();
    }
    else if (y > z && y > x) {
      return y.toString();
    }
    else{
      return z.toString();
    }
  }

  //What is 66 multiplied by 13?	
  const addMatch3 = query.match(/What is (\d+) multiplied by (\d+)/);
  if (addMatch3) {
    const x: number = parseInt(addMatch3[1]);
    const y: number = parseInt(addMatch3[2]);
    return (x*y).toString();
  }

  //Which of the following numbers is both a square and a cube: 1331, 2291, 4755, 1871, 625, 64, 154?
  const addMatch4 = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (addMatch4) {
    var toReturn: number = parseInt(addMatch4[1]);
    for(let i = 1; i < 8; i ++){
      var x: number = parseInt(addMatch4[i]);
      if (Math.sqrt(x)*Math.sqrt(x) == x && Math.cbrt(x)*Math.cbrt(x)*Math.cbrt(x) == x){
        toReturn = x;
      }
    }
    return toReturn.toString();
  }

  const addMatch5 = query.match(/What is (\d+) minus (\d+)/);
  if (addMatch5) {
    return (parseInt(addMatch5[1]) - parseInt(addMatch5[2])).toString();
  }


  //Which of the following numbers are primes: 50, 68, 47, 69, 87?
  const add1 = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if(add1) {
    var toReturn: number = parseInt(add1[1]);
    var returnOrNot: number = 1;
    for(let i = 1; i < 6; i ++){
      var x: number = parseInt(add1[i]);
      for (var j = 2; j < x; j++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
        if(x % j === 0) returnOrNot = 1; // when parameter is divisible by i, it's not a prime number so return false
        else{
          returnOrNot = 0;
        }
      }
      if(returnOrNot == 0){
        return x.toString();
      }
      
    }
    return toReturn.toString();
  }

  //What is 30 to the power of 16?
  const add2 = query.match(/What is (\d+) to the power of (\d+)/);
  if(add2){
    return (Math.pow(parseInt(add2[1]), parseInt(add2[2]))).toString();
  }

  return "";

  
}
