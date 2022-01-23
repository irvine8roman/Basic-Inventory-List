// Create Paint
class Paint {
  constructor(color, brand, type) {
    this.color = color;
    this.brand = brand;
    this.type = type;
  }
}

class UI {
  // Add Paint to Table
  static addPaintToInventory(paint) {
    const row = document.createElement("tr");
    const color = document.createTextNode(`paint.color`);
    row.innerHTML = `
    
    <td>${paint.color}</td>
    <td>${paint.brand}</td>
    <td>${paint.type}<td>
    <td><button class="btn btn-danger danger">Delete</button></td>
    
    `;
    document.querySelector("#paints-list").appendChild(row);
  }

  static clearValues() {
    document.querySelector("#color").value = "";
    document.querySelector("#brand").value = "";
    document.querySelector("#type").value = "";
  }
}

document.querySelector("#submit").addEventListener("click", () => {
  const color = document.querySelector("#color").value;
  const brand = document.querySelector("#brand").value;
  const type = document.querySelector("#type").value;

  if (color === "" || brand === "" || type === "") {
    alert("Please fill out all fields");
  } else {
    const paint = new Paint(color, brand, type);

    UI.addPaintToInventory(paint);

    UI.clearValues();
  }
});

document.querySelector("#paints-list").addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  if (e.target.classList.contains("danger")) {
    e.target.parentElement.parentElement.remove();
  }
});
