async function handleinventory(event) {
  event.preventDefault();

  const formData = {
    item_name: event.target.item_name.value,
    description: event.target.description.value,
    price: event.target.price.value,
    qtn: event.target.qtn.value,
  };
  const data = await axios.post(
    "http://localhost:8000/api/inventory/",
    formData
  );
  console.log(data);
  getallbookings();
}

async function getallbookings() {
  const data = await axios.get("http://localhost:8000/api/inventory/");
  const finaldata = data.data;
  console.log(finaldata);

  const basebox = document.getElementById("main_bottom");
  basebox.innerHTML = "";
  for (let i = 0; i < finaldata.length; i++) {
    const eventBox = document.createElement("div");
    eventBox.className = "details_box";
    const p1 = document.createElement("p");
    p1.textContent = `${finaldata[i].item_name}`;
    const p2 = document.createElement("p");
    p2.textContent = `${finaldata[i].description}`;
    const p3 = document.createElement("p");
    p3.textContent = `${finaldata[i].price} rs`;
    const p4 = document.createElement("p");
    p4.textContent = `${finaldata[i].qtn}`;
    const b1 = document.createElement("button");
    b1.textContent = "Buy 1";
    b1.addEventListener("click", async () => {
      await axios.put(
        `http://localhost:8000/api/inventory/${finaldata[i].id}`,
        { qtn: finaldata[i].qtn - 1 }
      );
      getallbookings();
    });
    const b2 = document.createElement("button");
    b2.textContent = "Buy 2";
    b2.addEventListener("click", async () => {
      await axios.put(
        `http://localhost:8000/api/inventory/${finaldata[i].id}`,
        { qtn: finaldata[i].qtn - 2 }
      );
      getallbookings();
    });
    const b3 = document.createElement("button");
    b3.textContent = "Buy 3";
    b3.addEventListener("click", async () => {
      await axios.put(
        `http://localhost:8000/api/inventory/${finaldata[i].id}`,
        { qtn: finaldata[i].qtn - 3 }
      );
      getallbookings();
    });
    basebox.appendChild(eventBox);
    eventBox.appendChild(p1);
    eventBox.appendChild(p2);
    eventBox.appendChild(p3);
    eventBox.appendChild(p4);
    eventBox.appendChild(b1);
    eventBox.appendChild(b2);
    eventBox.appendChild(b3);

    if (finaldata[i].qtn < 1) {
      b1.disabled = true;
      b1.style.backgroundColor = "#606060";
      b1.style.color = "#000";
    }
    if (finaldata[i].qtn < 2) {
      b2.disabled = true;
      b2.style.backgroundColor = "#606060";
      b2.style.color = "#000";
    }
    if (finaldata[i].qtn < 3) {
      b3.disabled = true;
      b3.style.backgroundColor = "#606060";
      b3.style.color = "#000";
    }
  }
}

async function handleupdate(event) {
  event.preventDefault();
  console.log("hello");
  const formData = {
    username: event.target.username.value,
    email: event.target.emailid.value,
    phone: event.target.phone.value,
  };
  const data = await axios.put(
    `http://localhost:8000/api/booking/${updated_id}`,
    formData
  );
  console.log(data);
  updated_id = -1;
  getallbookings();
}

getallbookings();
