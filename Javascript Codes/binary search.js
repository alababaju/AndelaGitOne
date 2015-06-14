var numberGen = function (startNum, increaseBy, endNum)
{
	var toReturn = [];
	for(i=startNum;i<endNum+increaseBy;i=i+increaseBy)
	{
		toReturn.push(i);
	}
	//start looping at startNum, looop till endNum and increase by increaseBy variable
	//push each number to the array as it's created.

	return toReturn;
};

Array.prototype.toTwenty = function() 
{
	return numberGen(1,1,20);
};

Array.prototype.toForty = function()
{
	return numberGen(2,2,40);
};

Array.prototype.toOneThousand = function() 
{
	return numberGen(10,10,1000);
};

Array.prototype.search = function (numToFind)
{
		var myObject = 
		{
			count: 0,
			index: 0,
			length: 0

		};

	//now for the bin search
	var theArray = this;
	//whatever you do to theArray would be done to 'this' by the way.
	//but it wouldn't change the function that called it. so 'this' is probably
	// a local copy of the caller function
	myBinarySearch(theArray, numToFind);

	myObject.count = myBinarySearch[0];
	myObject.index = myBinarySearch[1];
	myObject.length = this.length;


	return myObject;
};

var myBinarySearch = function(array1, lucozadeBoost)
{
	var arrayIndexMax = array1.length-1;
	var midNumIndex = floor(arrayIndexMax/2);
	var midNum = array1[midNumIndex];
	var myIndex = 0;
	var myCount = 0;

	for(1===1)// the loop will exit with the break statement
	{
		if(midNum === lucozadeBoost)
		{
			myIndex = array1.indexOf(midNum);
			myCount++;
			break;
		}
		else if(midNum > lucozadeBoost)//guess lower
		{
			midNumIndex = floor(midNum/2);
			midNum = array1[midNumIndex];
			myCount++;

		}
		else if (midNum < lucozadeBoost)//guess higher
		{
			midNum = (ceil(arrayIndexMax - midNumIndex))
			myCount++;
			//myBinarySearch(array1, lucozadeBoost);
		}	

	}
	var toRetArray = [myCount, myIndex];


}