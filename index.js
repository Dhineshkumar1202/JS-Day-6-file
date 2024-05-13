


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // a.Get all the countries from Asia continent/region
    const asiaCountries = data.filter(country => country.region === 'Asia');

    
    // b.Get all the countries with a population of less than 2 lakhs
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    
    // c.Print the following details: name, capital, flag
    asiaCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    
    // d.Print the total population of countries
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total population of countries: ${totalPopulation}`);
    



    // e.Print the country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      return country.currencies && country.currencies.USD;
    });



    if (countryWithUSD) {
      console.log(`Country that uses US dollars: ${countryWithUSD.name.common}`);
    } 
    else {
      console.log('No country uses US dollars as currency.');
    }


  })
  .catch(error => console.log('Error fetching data:', error));
