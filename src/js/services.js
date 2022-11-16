const services = [
  { title: "painting", price: 3.4 },
  { title: "nails", price: 5.4 },
  { title: "painting roots", price: 33.4 },
  { title: "haircut", price: 5.5 },
  { title: "eyelashes", price: 11.0 },
  { title: "brows", price: 12.4 },
  { title: "depilation", price: 13.4 },
  { title: "Eyebrow lamination", price: 9.4 },
  { title: "Botox eyelashes", price: 34 },
];

const table = document.getElementById("table");
console.log(table);

const populateTable = () => {
  const thead = table.createTHead();
  let headRow = thead.insertRow();
  for (let key of Object.keys(services[0])) {
    let th = document.createElement("th");
    let text = document.createTextNode(key.toUpperCase());
    th.appendChild(text);
    headRow.appendChild(th);
  }
  const tbody = table.createTBody();
  services.forEach((service) => {
    const row = tbody.insertRow();

    let title = row.insertCell();
    let price = row.insertCell();
    let titleText = document.createTextNode(`${service.title}`);
    let priceText = document.createTextNode(`${service.price}$`);

    title.appendChild(titleText);
    price.appendChild(priceText);
  });
};
populateTable();
