const loadData = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayData(data))
}

const displayData = (data) =>{
    const displayCountires = document.getElementById("display-countries");

    for(const country in data){
        const countyName = data[country];
        // const currency = countyName.currencies;
        // const courrencyArray = Object.entries(currency);
        // console.log(courrencyArray);

        // console.log(currency);
        console.log(countyName);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        
        <div class="card h-100">
            <img src="${countyName.flags.png}" class="card-img-top" alt="country flag">
            <div class="card-body">
                <h5 class="card-title fw-bold">${countyName.name.common} (${countyName.cca2})</h5>
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

loadData()



/*
will talk about it letter
<p class ="mb-1"><span class = "fw-bold">currencies:</span> ${courrencyArray[0][1].name} </p>*/