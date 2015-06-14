
var findMissing = function (array1, array2)
{
    array1 = array1.sort();
    array2 = array2.sort();
  var looplength = 0;
  var missingNumber = 0;
  if(array1.length < array2.length)
  {
    looplength = array1.length;
  }
  else
  {
    looplength = array2.length;
  }
  
  for(i=0;i<looplength;i++)
  {
    if(array1[i] !== array2[i])
    {
      if(array1.length > array2.length)
      {
        missingNumber = array1[i+1];
      }
      else
      {
        missingNumber = array2[i+1];
      }
    }

    if(i === looplength && missingNumber === 0)
    {
      if(array1.length > array2.length)
      {
        missingNumber = array1[i+1];
      }
      else
      {
        missingNumber = array2[i+1];
      }
    }
    
  }

  
  return(missingNumber);
};

findMissing([1,2],[1,2,5]);