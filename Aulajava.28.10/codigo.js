const container = document.getElementById('container');

let conteudo = ''

for(let i=0;i < dados.length; i++){

    let atleta = dados[i];

    container.innerHTML += `
        <h1>${atleta.nome}</h1>
        <img src=${atleta.imagem}>
        <p>${atleta.detalhes}</p>
    `
}    



