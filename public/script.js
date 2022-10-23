const url = "http://localhost:3000/getData";

async function data(){
    const d = await fetch(url);
    const data = await d.json();
    console.log(data);

    document.getElementById("title").textContent = data[0].title;
    document.querySelector(".location").textContent = data[0].country;
    document.querySelector(".sec_name").textContent = data[0].sector;
    document.querySelector(".topic").textContent = data[0].topic;
    document.querySelector(".insight").textContent = data[0].insight;
    document.querySelector(".url").textContent = data[0].url;
    document.querySelector(".region").textContent = data[0].region;
    document.querySelector(".pestle").textContent = data[0].pestle;
    document.querySelector(".intensity").textContent = data[0].intensity;
    document.querySelector(".likelihood").textContent = data[0].likelihood;
    document.querySelector(".start_year").textContent = data[0].start_year;
    document.querySelector(".end_year").textContent = data[0].end_year;
    document.querySelector(".relevance").textContent = data[0].relevance;
    document.querySelector(".impact").textContent = data[0].impact;
    document.querySelector(".source").textContent = data[0].source;
    document.querySelector(".year").textContent = data[0].year;

}

data();