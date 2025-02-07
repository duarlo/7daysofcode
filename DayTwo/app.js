const languageList = ['Java','JavaScript','Typescript','Go','C#','C++'];

// Message 
const captureData = (list) => {
let listUser = [];

for(let i = 0; i < list.length; i++) {
messageUser = `¿Te gusta estudiar ${list[i]}? Responde 1 para sí o 2 para no`
selectionUser = prompt(messageUser)

if(selectionUser === '1'){
    alert(`Sigue estudiando ${list[i]} y tendras exito`)
    listUser.push(list[i])
}
else
{
    alert(`No te preocupes... puedes intentar aprender otros`)
}

}
return listUser;
}

let likedLanguageUser = captureData(languageList);
alert(`Las lenguajes que te gustaron son:${likedLanguageUser}`);