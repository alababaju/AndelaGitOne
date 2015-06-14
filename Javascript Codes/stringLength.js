var stringLength = function (yourInput)
{
  var toReturn = 0;
  var tempArray = [];
  var tempString = "";
  
  if(Array.isArray(yourInput) === true)
  {
    for(i=0;i<yourInput.length;i++)
    {
      tempString = yourInput[i].toString();
      tempArray.push(tempString.length);
    }
    
  }
  else if(typeof(yourInput) === "string")
  {
    tempArray.push(yourInput.length);
  }
  else
  {
    for( var item in yourInput)
    {
      tempArray.push(yourInput[item].length)
    }
  }
  
  
  
  
  toReturn = tempArray;
  return(toReturn);
};