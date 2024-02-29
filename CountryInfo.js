//Use the rest countries APi url and display all the countries names,region,sub-region and populations

let info = new XMLHttpRequest();
console.log(info);

info.open("GET","https://restcountries.com/v2/all");

info.send();

info.onload=function()
{
    const result=JSON.parse(info.response);
    for(let i = 0 ; i< result.length ; i++)
    
    {
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

    }
}