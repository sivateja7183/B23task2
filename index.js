var request = new XMLHttpRequest();
request.open('GET', "https://restcountries.eu/rest/v2/all",true)
request.send();
request.onload = function(){
var data = JSON.parse(this.response)
var countries = data.length //250
for(var i=0;i<=countries;i++)
{
  console.log(data[i].name)
}}
