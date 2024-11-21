const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click', () =>{

  const userInput = input.value;
  input.value = "";
  
  const listItem = document.createElement("li");
  list.appendChild(listItem);

  const span = document.createElement("span");
  span.textContent = userInput;
  listItem.appendChild(span);

  const btn2 = document.createElement("button");
  btn2.textContent = "delete";
  listItem.appendChild(btn2);

  btn2.addEventListener('click', () =>{
    list.removeChild(listItem);
  })

  input.focus();

})
