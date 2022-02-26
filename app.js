const loadData = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayData(data))
}



const searchCountry = () =>{
    const searchField =  document.getElementById("searchbar");
    const searchText = searchField.value;
    // console.log(searchText);
    // searchField.value = "";

    const url = `https://restcountries.com/v2/name/${searchText}
    `;
    fetch(url).then(response => response.json()).then(data => displayData(data));

}



const displayData = (data) =>{
    const displayCountires = document.getElementById("display-countries");
    const searchField =  document.getElementById("searchbar");
    if(searchField.value == ""){
        for(const country in data){
            const countyName = data[country];
            // const currency = countyName.currencies;
            // const courrencyArray = Object.entries(currency);
            // console.log(courrencyArray);
    
            // console.log(currency);
    
            console.log(countyName);
            div = document.createElement("div");
            div.classList.add("col-sm-12");
            div.classList.add("col-md-4");
            div.classList.add("col-lg-4");
            div.innerHTML = `
            
            <div class="card h-100">
                <img src="${countyName.flags.png}" class="card-img-top" alt="country flag">
                <div class="card-body">
                    <h5 class="card-title fw-bold country-name">${countyName.name.common} (${countyName.cca2})</h5>
                    <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
                    <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
                    <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
                    <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
                </div>
            </div>
            `;
            
            displayCountires.appendChild(div);
        }

    }
    else{
        displayCountires.innerHTML = "";
        for(const country in data){
            const countyName = data[country];
            // const currency = countyName.currencies;
            // const courrencyArray = Object.entries(currency);
            // console.log(courrencyArray);
    
            // console.log(currency);
    
            console.log(countyName);
            div = document.createElement("div");
            div.classList.add("col-sm-12");
            div.classList.add("col-md-4");
            div.classList.add("col-lg-4");
            div.innerHTML = `
            
            <div class="card h-100">
                <img src="${countyName.flags.png}" class="card-img-top" alt="country flag">
                <div class="card-body">
                    <h5 class="card-title fw-bold country-name">${countyName.name} (${countyName.alpha3Code})</h5>
                    <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
                    <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
                    <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
                    <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
                </div>
            </div>
            `;
            
            displayCountires.appendChild(div);
        }
    }

    

    
}

loadData()


// const searchCountry = () =>{
    
// }
 



// const searchCountry = () =>{
//     const countryname = document.getElementsByClassName("country-name");
//     const searchedField = document.getElementById("searchbar");
//     const searchValue = searchedField.value;

//     for(const name in countryname){
//         const Cname = countryname[name].innerText;
//         if(searchValue.includes(Cname)){
//             document.getElementById("display-countries").innerHTML = "";
//             displayCountires.appendChild(div);

//                 }

//         // console.log(Cname);
//     }

// }




/*
will talk about it letter
<p class ="mb-1"><span class = "fw-bold">currencies:</span> ${courrencyArray[0][1].name} </p>*/