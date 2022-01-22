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
}

document.querySelector("#submit").addEventListener("click", () => {
  const color = document.querySelector("#color").value;
  const brand = document.querySelector("#brand").value;
  const type = document.querySelector("#type").value;

  const paint = new Paint(color, brand, type);

  //   UI.addPaintToInventory();
  UI.addPaintToInventory(paint);
});
