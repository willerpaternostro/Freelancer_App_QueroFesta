import { axiosInstance } from 'boot/axios'
import  {LocalStorage} from 'quasar'
import {Loading} from 'quasar'
import {Notify} from 'quasar'

export async function requisitarCategorias ({commit}) {

    await axiosInstance.get('categories/get').then((response) => {
        console.log("Entrou API Categories/get")
        console.log(response);
        commit('atualizarCategorias',response.data.categories);
    }).catch((erro) => { console.log("Erro")})
}
export function requisitarBanners({commit}) {

    axiosInstance.get('Banners/get/').then((response) => {
        console.log("Entrou API /Banners/get/")
        console.log(response);
        commit('atualizarCategorias',response.data.categories);
    }).catch((erro) => { console.log("Erro")})
}
export async function cadastrarLoja({commit}){
    const config = { headers: { 'Content-Type': 'multipart/form-data', 'Authorization':'Bearer '} };
    const formdata = new FormData();
    formdata.set('user_types_id',100)
    formdata.set('compananies_id',1)
    formdata.set('sto_title',LocalStorage.getItem("cadastroNegocio_")) 
    formdata.set('sto_categories',LocalStorage.getItem("cadastroNegocio_")) 
    formdata.set('sto_city',LocalStorage.getItem("cadastroNegocio_")) 
    formdata.set('sto_celphone',LocalStorage.getItem("cadastroNegocio_"))
    formdata.set('sto_phone',LocalStorage.getItem("cadastroNegocio_"))
    formdata.set('sto_description',LocalStorage.getItem("cadastroNegocio_"))
    formdata.set('sto_phone',LocalStorage.getItem("cadastroNegocio_"))
    //formdata.set('usu_fcm_token',LocalStorage.email)
    await axiosInstance.post("Stores/add/",formdata, config).then((response) => {
        console.log("Entrou API Store/add/")
        console.log(response);
        let user = response.data.users[0]
        commit('atualizarUsuario',user)
        this.$router.push({name:'CidadeNegocio'})
        //commit('atualizarUsuario',response.data.user);
    }).catch((erro) => { 
        console.log("Erro")
        console.log(erro)
      
    })
  
}
export async function cadastrarUsuario({commit},dados) {
    const config = { headers: { 'Content-Type': 'multipart/form-data'} };//, 'Authorization':'Bearer '
    const formdata = new FormData();
    console.log(dados.fotoPerfil)
    formdata.set('user_types_id',100)
    formdata.set('compananies_id',1)
    formdata.set('usu_name',dados.nome) 
    formdata.set('usu_email',dados.email) 
    formdata.set('usu_document',dados.cpf) 
    formdata.set('usu_celphone',dados.telefone)
    formdata.set('usu_password',dados.senha)
    formdata.append('usu_image',dados.fotoPerfil)
    //formdata.set('usu_fcm_token',LocalStorage.email)
    await axiosInstance.post("Users/add/",formdata, config).then((response) => {
        console.log("Entrou API Users/add/")
        console.log(response);
        let user = response.data.users[0]
        commit('atualizarUsuario',user)
        this.$router.push({name:'CidadeNegocio'})
        //commit('atualizarUsuario',response.data.user);
    }).catch((erro) => { 
        console.log("Erro")
        console.log(erro)
      
    })
}
