const req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v3.1/all");
req1.send();
req1.addEventListener("load", request);
function request() {
  let data = JSON.parse(this.responseText);
  console.log(`


`);
  console.log(
    "on below All country name, region, subregion & population displayed using the rest countries API URL-> https://restcountries.com/v3.1/all"
  );
  for (i in data) {
    console.log(
      `Country Name : ${data[i].name.common},
Region: ${data[i].region},
Sunregion: ${data[i].subregion},
Population: ${data[i].population}`
    );
  }
}
