// JavaScript source code
var lostAndFound;

var findMissing = function (array1, array2)
{
    if(array1 === "" || array2.length === "" )
    {
        lostAndFound = 0;
    }
    else if(array1.length === array2.length)
    {
        lostAndFound = 0;
    }

    else if (array1.length > array2.length)
    {
        cycleFn(array1, array2);
    }
    else
    {
        cycleFn(array2,array1);
    } 

    return lostAndFound;
};

var cycleFn = function(longArray, shortArray)
{
    for(i=0;i<longArray.length;i++)
    {
        for(i2=0;i2<shortArray.length;i2++)
        {
            if(longArray[i] === shortArray[i2])
            {
                break;//do something?
            }
            if(i2 === shortArray.length-1)
            {
                lostAndFound = longArray[i];
                break;
            }

        }
    }
};
