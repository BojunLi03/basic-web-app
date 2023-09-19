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


  return "";
}
