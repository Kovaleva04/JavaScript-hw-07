function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createBtn = controls.querySelector("[data-create]");
  const destroyBtn = controls.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");
  
  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add("box");
      fragment.appendChild(box);
    }
  
    boxesContainer.appendChild(fragment);
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
  
  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = "";
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });
  
  destroyBtn.addEventListener("click", destroyBoxes);