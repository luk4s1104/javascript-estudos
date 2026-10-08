function adicionarTarefa(){ // funcao criada para criar uma lista de tarefas
    let mensagem = "Tarefa adicionada com sucesso!"  // crio uma variavel "mensagem" = ...

    let inputTarefa = document.getElementById("inputTarefa") // crio a variavel inputTarefa = elemento com o id = inputTarefa no index.html
    let tarefa = inputTarefa.value    // crio a variavel tafera = o que foi escrito pelo usuario
    document.getElementById("mensagem").textContent = mensagem   // busco o elemento com id = mensagem, e escrevo o que mensagem significa 

    let listaTarefas = document.getElementById("listaTarefas")  // crio a variavel e igualo ao elemento com o id "listaTarefas"
    let novaTarefa = document.createElement("li")   // crio uma variavel e crio um elemento "li"

    novaTarefa.textContent = tarefa  // novaTarefa vai escrever "tarefa" = o que o usuario digitou 

    listaTarefas.appendChild(novaTarefa) // crio um elemento 'filho' "novaTarefa"
    
    inputTarefa.value = "" // limpo o input, para o usuario digitar 
}