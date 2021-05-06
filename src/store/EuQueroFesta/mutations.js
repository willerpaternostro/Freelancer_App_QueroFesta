import  {LocalStorage} from 'quasar'


export const  mudarDialogPagamento = (state,dado ) => {
    state.dialogPagamento = dado
}

export const  mudarStatusLogado = (state,dado ) => {
    state.statusLogado = dado
}

export const  atualizarCategorias = (state,dado ) => {
    state.categorias = dado
}

export const atualizarUsuario = (state,dado) => {
    state.user = dado
    state.statusLogado = true
    console.log("Usuário logado!!")
}

export const atualizarStores = (state,dado) => {
    state.stores = dado
}

export const logout = (state) => {
    LocalStorage.set('user',null)
    state.user = null
    state.statusLogado = false
}
