<template>
    <div >
        <div class="row justify-end">
           <span v-if="!editar" class="col-2 text-gre-7" style="font-size:16px">5 de 7</span>
        </div>
        <q-form class="text-grey-7">
            <div class="row">
                <label>Facebook</label>
                <q-input class="col-12" bottom-slots v-model="facebook" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="blue" name="fab fa-facebook" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Instagram</label>
                <q-input class="col-12" bottom-slots v-model="instagram" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="pink" name="fab fa-instagram" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Linkedin</label>
                <q-input class="col-12" bottom-slots v-model="linkedin" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="blue-9" name="fab fa-linkedin" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Youtube</label>
                <q-input class="col-12" bottom-slots v-model="youtube" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="red" name="fab fa-youtube" />
                    </template>
                </q-input>
            </div>
             <div class="row">
                <label>TikTok</label>
                <q-input class="col-12" bottom-slots v-model="tiktok" label="Insira o link"  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon color="black" name="fab fa-tiktok" />
                    </template>
                </q-input>
            </div>
            <q-footer class="bg-white" >
            <div class="row justify-center" style="padding:8px 0px 8px">
                <q-btn class="col-6" color="pink" :label="editar?'Editar':'Salvar'" @click="validarInputs" />
            </div>
        </q-footer> 
        </q-form>
        
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
         //EDIT
        editar:false,
        idLojaEditar:'',

        facebook:'',
        instagram:'',
        linkedin:'',
        youtube:'',
        tiktok:'',
        items:[1,2,3,4,5],
      }
  },
  methods:{
    validarInputs(){
        this.prosseguirCadastroLoja()
    },
    prosseguirCadastroLoja(){
        if(!this.editar){
            let redesSociaisNegocio = { facebook:this.facebook, instagram:this.instagram, linkedin:this.linkedin, youtube:this.youtube, tiktok:this.tiktok}
            redesSociaisNegocio = JSON.stringify(redesSociaisNegocio)
            this.$q.localStorage.set('cadastroNegocio_redesSociais',redesSociaisNegocio)
            this.$router.push({name:'FotosVideosNegocio'})
        }else{
            this.editarLoja()
        }
    },
    editarLoja(){
    let redesNegocio = {
        facebook:this.facebook,
        linkedin:this.linkedin,
        instagram:this.instagram,
        youtube:this.youtube,
        tiktok:this.tiktok,
    }
    let dados = {
        redesNegocio:JSON.stringify(redesNegocio),
        idLojaEditar:this.idLojaEditar
        }
        return this.$store.dispatch('EuQueroFesta/editarLoja',dados)
    },
  },
  mounted(){
    if(this.$route.params.editar){
        console.log(this.$route.params);
        this.editar = true;
        this.idLojaEditar = this.$route.params.negocioAlterar['id'];
        let redes = JSON.parse(this.$route.params.negocioAlterar['sto_social_data']);
        this.facebook = redes.facebook;
        this.instagram = redes.instagram;
        this.linkedin = redes.linkedin;
        this.youtube = redes.youtube; 
        this.tiktok = redes.tiktok;
    }else{
        if(this.$q.localStorage.getItem('cadastroNegocio_redesSociais')){
            let redesSociaisNegocio = this.$q.localStorage.getItem('cadastroNegocio_redesSociais');
            redesSociaisNegocio = JSON.parse(redesSociaisNegocio);
            this.facebook = redesSociaisNegocio.facebook;
            this.instagram = redesSociaisNegocio.instagram;
            this.linkedin = redesSociaisNegocio.linkedin;
            this.youtube = redesSociaisNegocio.youtube;
        }
    }
  }
}
</script>

<style>

</style>