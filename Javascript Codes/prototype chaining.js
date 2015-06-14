Array.prototype.toTwenty = function() 
{
	return [4,6];
};
Array.prototype.search = function (lb)
{
    
		if(lb >2)
		{
		    //This doesn't work
		    this.push(4000);
		    return this;
		}
};

var man = [];
console.log(man.toTwenty().search(6));