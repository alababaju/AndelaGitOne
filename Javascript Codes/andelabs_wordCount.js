var words = function(yourString)
{
  var toReturn = 0;
  yourString = yourString.replace("\n"," ");
  yourString = yourString.replace("\t"," ");
  yourString = yourString.replace("  "," ");
  var tempSortArray = yourString.split(" ");
  var senLength = tempSortArray.length;
  var tempWord = "";
  //var wordCount = 0;
  var word = new Object();
  
  for(i=0;i<senLength;i++)
  {
    var wordCount = 1;
    tempWord = tempSortArray[i];
    //I have picked one word, now I check how many times it occurs
    
    
    
    
    
    for(i2=0;i2<senLength;i2++)
    {
      if(tempWord === tempSortArray[i2] && i2 != i)
      {
        wordCount++;
      }
      //If it occurs and it's not the current copy, add it
    }
    
    
    word[tempWord] =  wordCount;


    
    
    /*var toPush = tempWord + ": " + wordCount;
    
    if(tempAnsArray.indexOf(toPush) === -1)
    {
      tempAnsArray.push(toPush);
    }
    
    tempAnsArray.push();*/
    
    
    
  }
  
  
  return(word);
};

//words("I am a boy am b");