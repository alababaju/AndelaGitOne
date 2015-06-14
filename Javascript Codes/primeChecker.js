
var PrimeChecker = function ()
{
  this.isPrime = function (yourNumber)
  {
    var toReturn = true;
    for(i=0;i<yourNumber;i++)
    {
      if(yourNumber%i === 0 && i !== yourNumber && i !== 1 )
      {
        toReturn = false;
      }
    }
   
  return(toReturn);
};
};

var myPrime = new PrimeChecker();
myPrime.isPrime(68);
myPrime.isPrime(17);
