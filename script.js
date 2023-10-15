console.log("JavaScript - Day -5 ES5 vs ES6");

//Q1:For a given below JSON iterate overall for loops such as (for,for in ,forof,foreach)

//Solution:

//I have taken restcountry API to do the above task


var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    var reslen=result.length;

//Iteration using for loop and diplaying the area
    for(var i=0;i<reslen;i++){
        console.log(result[i].area);
    }

//Iteration using for in loop and diplaying the capital
    for(var a in result)
    {
        console.log(a.capital);
    }

//  Iteration using for of loop and diplaying the



//Iteration using for each loop and diplaying the 


}
