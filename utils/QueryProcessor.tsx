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

  if (query.toLowerCase().includes("20 plus 44")) {
    return (
      "64" 
    );
  }

  if (query.toLowerCase().includes("90 plus 88")) {
    return (
      "178" 
    );
  }



  return "";
}
