request=require('request');

const url="http://api.weatherstack.com/current?access_key=5465c0ac85977390e3883fbdfd2debe8&query=%20Yakutsk";

request({url:url},(err,response)=>
{
    const data=JSON.parse(response.body);
  
    console.log("The current temperatrue is ",data.current.temperature);
    console.log("Country is",data.location.country);
   
});
