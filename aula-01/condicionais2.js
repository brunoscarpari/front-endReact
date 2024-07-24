const permissoes = 'aluno'

switch(permissoes){
    case 'aluno':
        console.log('voce so pode vizualizar as aulas')
    break
    case 'professor':
        console.log('voce pode alterar as aulas')
    break
    case 'adm':
        console.log('voce pode fazer qualquer alteracao') 
    break
    default:
        console.log('voce nao tem acesso a esse site')
    break
}