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

    const url = `https://restcountries.com/v3.1/name/${searchText}
    `;
    fetch(url).then(response => response.json()).then(data => displayData(data));

}

const displayData = (data) =>{
    const displayCountires = document.getElementById("display-countries");
    const searchField =  document.getElementById("searchbar");
    
    if(searchField.value == ""){
        displayCountires.innerHTML = "";
        for(const country in data){
            const countyName = data[country];
    
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
                    <div class="card-text">
                    <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
                    <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
                    <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
                    <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
                    </div>
                </div>
                <div class="d-grid gap-2 card-footer">
                <button class="btn btn-primary mb-0" type="button" data-toggle="modal" data-target="#myModal">Learn More</button>
                </div>
            </div>
            `;
            const modal = document.getElementById("display-details");
            modal.innerHTML = "";
            const detailsDiv = document.createElement('div');

            detailsDiv.classList.add("modal-content");

            detailsDiv.innerHTML = `

            <div class="modal-header">
            <h5 class="modal-title">${countyName.name.official}</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
        <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
        <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
        <p class ="mb-1"><span class = "fw-bold">Area:</span> ${countyName.area}</p>
        <p class ="mb-1"><span class = "fw-bold">Continents:</span> ${countyName.continents[0]}</p>
        <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
        <p class ="mb-1"><span class = "fw-bold">Sub Region:</span> ${countyName.subregion}</p>
        <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
        <p class ="mb-1"><span class = "fw-bold">Start of Week:</span> ${countyName.startOfWeek}</p>
        </div>
        <div class="modal-footer">
            <p class="text-center m-auto">For any editorial, feel free to email: abc@def.com</p>
        </div>
            `;

            modal.appendChild(detailsDiv);
            displayCountires.appendChild(div);
        }

    }
    else{
        displayCountires.innerHTML = "";
        for(const country in data){
            const countyName = data[country];
    
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
                    <div class="card-text">
                    <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
                    <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
                    <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
                    <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
                    </div>
                </div>
                <div class="d-grid gap-2 card-footer">
                    <button class="btn btn-primary mb-0" type="button" data-toggle="modal" data-target="#myModal">Learn More</button>
                </div>
            `;
            const modal = document.getElementById("display-details");
            modal.innerHTML = "";
            const detailsDiv = document.createElement('div');

            detailsDiv.classList.add("modal-content");

            detailsDiv.innerHTML = `

            <div class="modal-header">
            <h5 class="modal-title">${countyName.name.official}</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
        <p class ="mb-1"><span class = "fw-bold">Capital:</span> ${countyName.capital}</p>
        <p class ="mb-1"><span class = "fw-bold">Population:</span> ${countyName.population}</p>
        <p class ="mb-1"><span class = "fw-bold">Area:</span> ${countyName.area}</p>
        <p class ="mb-1"><span class = "fw-bold">Continents:</span> ${countyName.continents[0]}</p>
        <p class ="mb-1"><span class = "fw-bold">Region:</span> ${countyName.region}</p>
        <p class ="mb-1"><span class = "fw-bold">Sub Region:</span> ${countyName.subregion}</p>
        <p class ="mb-1"><span class = "fw-bold">Time Zone:</span> ${countyName.timezones[0]}</p>
        <p class ="mb-1"><span class = "fw-bold">Start of Week:</span> ${countyName.startOfWeek}</p>
        </div>
        <div class="modal-footer">
        <p class="text-center m-auto">For any editorial, feel free to email: abc@def.com</p>
        </div>
            `;

            modal.appendChild(detailsDiv);
            displayCountires.appendChild(div);
        }
    }

        
}



// const displayDetails = () =>{


    


loadData()
















/*
will talk about it letter
<p class ="mb-1"><span class = "fw-bold">currencies:</span> ${courrencyArray[0][1].name} </p>*/