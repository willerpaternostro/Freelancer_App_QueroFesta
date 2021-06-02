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
export const atualizarStore = (state, dado) =>{
    console.log(dado);
    if(dado){
        let posicao = state.stores.findIndex (element => {return element['id'] === dado['id']})
        console.log(posicao);
        if(posicao > 0){
            state.stores.splice(posicao,1,dado)
        }
    }
   
}
export const excluirLojaFornecedores = (state,dado) => {
    let lojas = state.stores;
    console.log(lojas);
    console.log(dado);
    let posicao = lojas.findIndex(element => {return element['id'] === dado['id']})
    console.log(posicao);
    if(posicao > 0){
        state.stores.splice(posicao,1)
    }
    
}
export const logout = (state) => {
    LocalStorage.set('user',null)
    state.user = null
    state.statusLogado = false
}

export const salvarFotosNegocios = (state, dados) => {
   
    if(dados.nomeFoto === 'fotoPrincipal'){
        if(state.fotoPrincipal.length > 0)
            state.fotoPrincipal.pop()
        state.fotoPrincipal.push(dados.imagem)
    }
    if(dados.nomeFoto === 'fotoCapa'){
        if(state.fotoCapa.length > 0)
            state.fotoCapa.pop()
        state.fotoCapa.push(dados.imagem)
    }
    if(dados.nomeFoto === 'fotosNegocio'){
        state.fotosNegocio = []
        dados.imagem.forEach(element => {
            state.fotosNegocio.push(element)
        });
       
    }
}

export const limparDadosNegocio = (state) => {
    state.fotoPrincipal = []
    state.fotoCapa = []
    state.fotosNegocio = []
    LocalStorage.set("cadastroNegocio_cidade",'')
    LocalStorage.set("cadastroNegocio_categoria",'')
    LocalStorage.set("cadastroNegocio_nome",'')
    LocalStorage.set("cadastroNegocio_endereco",'')
    LocalStorage.set("cadastroNegocio_numero",'')
    LocalStorage.set("cadastroNegocio_telefone",'')
    LocalStorage.set("cadastroNegocio_celular",'')
    LocalStorage.set("cadastroNegocio_site",'')
    LocalStorage.set("cadastroNegocio_redesSociais",'')
    LocalStorage.set("cadastroNegocio_video",'')
    LocalStorage.set("cadastroNegocio_descricao",'')
    console.log(state.fotoPrincipal);
    console.log(state.fotoCapa);
    console.log(state.fotosNegocio);    
}