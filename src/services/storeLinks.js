//Buscar os links que foram salvos.

export async function getLinksSaved(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

//Salvar o link no localStorage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSaved(key);

//Caso tenha links salvos (id existente), nao pode duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('O link ja existe na lista!')
        return;
    }

    //Adicionar novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK foi salvo com sucesso!')
}


//Criar funcao de  deletar link
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log('LINK FOI DELETADO COM SUCESSO!')

    return myLinks;
}

