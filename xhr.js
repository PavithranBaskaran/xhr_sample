const getCountries = () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        const countries = xhr.response;
        for( let a of countries)
        {
            console.log("Country:", a.name.common);
            console.log("Population:", a.population);
            
        }
    }
}

getCountries();
