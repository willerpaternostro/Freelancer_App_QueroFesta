<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">4 de 7</span>
        </div>
        <q-form class="text-grey-7">
            <div class="row">
                <label>Endereço</label>
                <q-input class="col-12" bottom-slots v-model="endereco" label="Digite o endereço "  :dense="true" >
                     <template v-slot:prepend>
                        <q-icon name="fas fa-map-marker-alt" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Telefone</label>
                <q-input class="col-12" bottom-slots v-model="telefone" label="Digite o telefone" mask="(##) # ####-####"  :dense="true" >
                    <template v-slot:prepend>
                        <q-icon name="fas fa-phone-alt" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Whatsapp</label>
                <q-input class="col-12" bottom-slots v-model="whatsapp" mask="(##) # ####-####"  label="Digite o número do whatsapp"  :dense="true" >
                 <template v-slot:prepend>
                        <q-icon name="fab fa-whatsapp" />
                    </template>
                </q-input>
            </div>
            <div class="row">
                <label>Website</label>
                <q-input class="col-12" bottom-slots v-model="website" label="Digite a url do site"  :dense="true" >
                 <template v-slot:prepend>
                        <q-icon name="place" />
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

        endereco:'',
        telefone:'',
        whatsapp:'',
        website:'',
        items:[1,2,3,4,5]
      }
  },
   methods:{
    validarInputs(){
        this.prosseguirCadastroLoja();
    },
    prosseguirCadastroLoja(){   
        if(!this.editar){
            this.$q.localStorage.set('cadastroNegocio_endereco',this.endereco)
            this.$q.localStorage.set('cadastroNegocio_numero',this.numero)
            this.$q.localStorage.set('cadastroNegocio_telefone',this.telefone)
            this.$q.localStorage.set('cadastroNegocio_celular',this.whatsapp)
            this.$q.localStorage.set('cadastroNegocio_site',this.website)
            this.$router.push({name:'RedesSociaisNegocio'})
            }else{
                this.editarLoja()
            }
    },
    editarLoja(){
        let dados = {
            enderecoNegocio:this.endereco,
            telefoneNegocio:this.telefone,
            whatsappNegocio:this.whatsapp,
            siteNegocio:this.website,
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
            this.endereco = this.$route.params.negocioAlterar['sto_address'];
            this.telefone = this.$route.params.negocioAlterar['sto_phone'];
            this.whatsapp = this.$route.params.negocioAlterar['sto_celphone'];
            this.website = this.$route.params.negocioAlterar['sto_website'];
            
        }else{
            if(this.$q.localStorage.getItem('cadastroNegocio_endereco')){
                this.endereco = this.$q.localStorage.getItem('cadastroNegocio_endereco')
            }
            if(this.$q.localStorage.getItem('cadastroNegocio_numero')){
                this.numero = this.$q.localStorage.getItem('cadastroNegocio_numero')
            }
            if(this.$q.localStorage.getItem('cadastroNegocio_telefone')){
                this.telefone = this.$q.localStorage.getItem('cadastroNegocio_telefone')
            }
            if(this.$q.localStorage.getItem('cadastroNegocio_celular')){
                this.whatsapp = this.$q.localStorage.getItem('cadastroNegocio_celular')
            }
            if(this.$q.localStorage.getItem('cadastroNegocio_site')){
                this.website = this.$q.localStorage.getItem('cadastroNegocio_site')
            }
        }
  }
}
</script>

<style>

</style>