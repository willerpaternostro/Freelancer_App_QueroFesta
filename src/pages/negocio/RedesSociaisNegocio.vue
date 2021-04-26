<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">5 de 7</span>
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
            <q-footer class="bg-white" >
            <div class="row justify-center" style="padding:8px 0px 8px">
                <q-btn class="col-6" color="pink" label="Salvar" @click="validarInputs" />
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
        facebook:'',
        instagram:'',
        linkedin:'',
        youtube:'',
        items:[1,2,3,4,5],
      }
  },
  methods:{
    validarInputs(){
        this.prosseguirCadastroLoja()
    },
    prosseguirCadastroLoja(){
        let redesSociaisNegocio = { facebook:this.facebook, instagram:this.instagram, linkedin:this.linkedin, youtube:this.youtube}
        this.$q.localStorage.set('cadastroNegocio_redesSociaisNegocio',redesSociaisNegocio)
        this.$router.push({name:'FotosVideosNegocio'})
    },
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_redesSociaisNegocio')){
        //  this.redesSociaisNegocio = this.$q.localStorage.getItem('cadastroNegocio_nomeNegocio')
      }
  }
}
</script>

<style>

</style>