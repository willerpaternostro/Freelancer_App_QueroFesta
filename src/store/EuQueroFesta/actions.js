import { axiosInstance } from 'boot/axios'
import  {LocalStorage} from 'quasar'
import {Loading} from 'quasar'
import {Notify} from 'quasar'

export async function requisitarCategories ({commit}) {
    
}
export async function requisitarBanners({commit}) {
    axiosInstance.get('Banners/get/').then((response) => {
        console.log("Entrou API /Banners/get/")
        console.log(response);
        commit('atualizarCategorias',response.data.categories);
    }).catch((erro) => { console.log("Erro")})
}
export async function requisitarStores({commit}){
    await axiosInstance.get('Stores/list').then((response) => {
        console.log(response);
        LocalStorage.set('stores',response.data.stores)
        commit('atualizarStores',response.data.stores);
    }).catch((erro) => { console.log("Erro")})
    
}

//CADASTRO
export async function cadastrarLoja({commit}){
    const config = { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': LocalStorage.getItem('user').token} };
    const formdata = new FormData();
    formdata.set('users_id',LocalStorage.getItem('user').id)
    formdata.set('compananies_id',1)
    formdata.set('categories_id',2)
    //formdata.set('plans_id',null)
    formdata.set('sto_city',LocalStorage.getItem("cadastroNegocio_cidade")) 
    formdata.set('sto_categories',LocalStorage.getItem("cadastroNegocio_categoria")) 
    formdata.set('sto_title',LocalStorage.getItem("cadastroNegocio_nome")) 
    
    formdata.set('sto_address',LocalStorage.getItem("cadastroNegocio_endereco")) 
    formdata.set('sto_adnumber',LocalStorage.getItem("cadastroNegocio_numero")) 
    formdata.set('sto_phone',LocalStorage.getItem("cadastroNegocio_telefone"))
    formdata.set('sto_celphone',LocalStorage.getItem("cadastroNegocio_celular"))
    formdata.set('sto_website',LocalStorage.getItem("cadastroNegocio_site")) 
    
    formdata.set('sto_social_data',LocalStorage.getItem("cadastroNegocio_redesSociais"))
    formdata.set('sto_video',LocalStorage.getItem("cadastroNegocio_video"))
    formdata.append('sto_image',LocalStorage.getItem("cadastroNegocio_fotoPrincipal"))
    formdata.append('sto_cover',LocalStorage.getItem("cadastroNegocio_fotoCapa"))
    
    formdata.set('sto_photos_data',LocalStorage.getItem("cadastroNegocio_fotosNegocio"))
    formdata.set('sto_description',LocalStorage.getItem("cadastroNegocio_descricao"))
  
    //formdata.set('usu_fcm_token',LocalStorage.email)
    await axiosInstance.post("Stores/add/",formdata, config).then((response) => {
        console.log("Entrou API Store/add/")
        console.log(response);
        let idStore = response.data.stores[0]
        let idStores = []
        idStores.push(idStore)
        LocalStorage.set('idStores',idStores)
        
        let meuNegocio = {
            sto_city:LocalStorage.getItem("cadastroNegocio_cidade"),
            sto_categories:LocalStorage.getItem("cadastroNegocio_categoria"),
            sto_title:LocalStorage.getItem("cadastroNegocio_nome"),
            sto_address:LocalStorage.getItem("cadastroNegocio_endereco"),
            sto_adnumber:LocalStorage.getItem("cadastroNegocio_numero"),
            sto_phone:LocalStorage.getItem("cadastroNegocio_telefone"),
            sto_celphone:LocalStorage.getItem("cadastroNegocio_celular"),
            sto_website:LocalStorage.getItem("cadastroNegocio_site"),
            sto_social_data:LocalStorage.getItem("cadastroNegocio_redesSociais"),
            sto_video:LocalStorage.getItem("cadastroNegocio_video"),
            sto_image:LocalStorage.getItem("cadastroNegocio_fotoPrincipal"),
            sto_cover:LocalStorage.getItem("cadastroNegocio_fotoCapa"),
            sto_photos_data:LocalStorage.getItem("cadastroNegocio_fotosNegocio"),
            sto_description:LocalStorage.getItem("cadastroNegocio_descricao"),
        }
        this.$router.push({name:'InformacaoNegocio', params:{ meuNegocio:meuNegocio }})
       
        //commit('atualizarUsuario',response.data.user);
    }).catch((erro) => { 
        console.log("Erro")
        console.log(erro)
      
    })
  
}
export async function cadastrarUsuario({commit},dados) {
    const config = { headers: { 'Content-Type': 'multipart/form-data'} };
    const formdata = new FormData();
    console.log(dados.fotoPerfil)
    
    formdata.set('user_types_id',100)
    formdata.set('compananies_id',1)
    formdata.set('usu_name',dados.nome) 
    formdata.set('usu_email',dados.email) 
    formdata.set('usu_document',dados.cpf) 
    formdata.set('usu_celphone',dados.telefone)
    formdata.set('usu_password',dados.senha)
    if(dados.fotoPerfil)
        formdata.append('usu_image',dados.fotoPerfil[0])
    //formdata.set('usu_fcm_token',LocalStorage.email)
    await axiosInstance.post("Users/add/",formdata, config).then((response) => {
        console.log("Entrou API Users/add/")
        console.log(response);
        let user = response.data.user
        LocalStorage.set('token',user.token)
        LocalStorage.set('user',user)
        commit('atualizarUsuario',user)
        this.$router.push({name:'CidadeNegocio'})
        //commit('atualizarUsuario',response.data.user);
    }).catch((erro) => { 
        console.log("Erro")
        console.log(erro)
      
    })
}

//LOGIN
export async function login({commit},dados){
    const config = { headers: { 'Content-Type': 'multipart/form-data'} };
    const formdata = new FormData();
    formdata.set('usu_email',dados.email)
    formdata.set('usu_password',dados.senha)

    await axiosInstance.post("Users/Login/",formdata, config).then((response) => {
        console.log("Entrou API Users/Login/")
        console.log(response);
        let user = response.data.user
        LocalStorage.set('user',user)
        commit('atualizarUsuario',user)
        this.$router.push({name:'Home'})
    }).catch((erro) => { 
        console.log("Erro")
        console.log(erro)
    })
    
}
