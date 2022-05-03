let inputNovaTarefa = document.querySelector("#inputNovaTarefa");
let btnAddTarefa = document.querySelector("#btnAddTarefa");
let listaTarefa = document.querySelector("#listaTarefa");

inputNovaTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    //13 o codigo do enter no teclado
    let task = {
      name: inputNovaTarefa.value,
      id: randomId(),
    };
    //Add task in the HTML
    addTask(task);
  }
});

btnAddTarefa.addEventListener("click", (e) => {
  let task = {
    name: inputNovaTarefa.value,
    id: randomId(),
  };
  //Add task in the HTML
  addTask(task);
});

function randomId() {
  return Math.floor(Math.random() * 3000);
}

function addTask(task) {
  let li = createTagLi(task);
  listaTarefa.appendChild(li);
  inputNovaTarefa.value = '';
}

function createTagLi(task) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.classList.add('textoTarefa');
  span.innerHTML = task.name;

  let div = document.createElement("div");

  let btnEdit = document.createElement("button");
  btnEdit.classList.add('btnAcao');
  btnEdit.innerHTML = ' <i class="fa fa-pencil"></i>';

  let btnTrash = document.createElement("button");
  btnTrash.classList.add('btnAcao');
  btnTrash.innerHTML = ' <i class="fa fa-trash"></i>';

  div.appendChild(btnEdit);
  div.appendChild(btnTrash);

  li.appendChild(span);
  li.appendChild(div);

  return li;
}
