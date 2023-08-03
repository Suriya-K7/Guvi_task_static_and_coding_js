const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.addEventListener("load", request);
console.log(`

`);
console.log(
  "on below All country flags & country name displayed using the rest countries API URL-> https://restcountries.com/v3.1/all"
);
function request() {
  let data = JSON.parse(this.responseText);
  for (i in data) {
    console.log(`${data[i].flag} - ${data[i].name.common}`);
  }
}
