//to create paragraph tag
let para = document.createElement("p");
para.innerText = "Find Your Nationality ";
para.setAttribute("class", "text-center display-4");
document.body.append(para);

//to create a header
let value = document.createElement("h3");
value.innerText = "Kindly Enter your name to find the Nationality";
value.setAttribute("class", "text-center");
document.body.append(value);

//to create a input box
let input = document.createElement("div");
input.setAttribute("id", "input-box");
input.innerHTML = `<div class="input-group mb-3">
<input type="text" class="form-control" id="fill" placeholder="Enter Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2">
<div class="input-group-append">
<button type="button" onclick="findCountry()" class="btn btn-primary">Search</button>
</div>
</div>`;
document.body.append(input);

//to get the details of the api
let details = document.createElement("div");
details.setAttribute("id", "size");
findCountry = async () => {
  let name = await document.getElementById("fill").value;
  api = `https://api.nationalize.io?name=${name}`;
  let responses = await fetch(api, {
    method: "GET",
  });

  //to convert the data into json
  let data = await responses.json();

  //to display the top two country details
  for (let i = 0; i < 2; i++) {
    let name = data.name;
    var countryid = data.country[i].country_id;
    var prob = data.country[i].probability;
    details.innerHTML += `<div class="card text-white bg-danger mb-3" style="max-width: 12rem;">
     <div class="card-header">Name:${name}</div>
     <div class="card-body">
     <h6 class="card-title">Countryid:${countryid}</h6>
     <h6 class="card-title">probabilityy:${prob}</h6>
     </div>
   </div>`;
  }
};

document.body.append(details);
