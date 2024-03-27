
function changeTabName (){
    if (document.visibilityState === 'hidden'){
        document.title = " | Não perca o seu horário 😬"
    } else {
        document.title = " | Horário de Brasília"
    }
}

document.addEventListener('visibilitychange', changeTabName)