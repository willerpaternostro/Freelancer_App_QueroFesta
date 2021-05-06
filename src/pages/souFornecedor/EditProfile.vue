<template>
  <div  >
      <div class="row justify-center" style="margin-bottom:20px"> 
          <div class="col-4">  
            <q-avatar size="100px" icon="fas fa-user" color="grey" text-color="grey-2" v-if="!user.usu_image" />
                <q-avatar size="100px" v-if="user.usu_image">
                  <q-img height="100px"  :src="'http://beta.prcweb.com.br/api/Users/getImg/1/'+user.usu_image" />
                </q-avatar>
          </div>
      </div>
        <q-page-sticky position="top" :offset="[0, 80]">
            <q-btn size="10px" round color="blue-5" icon="add_a_photo" class="" />
          </q-page-sticky>
        <q-form style="margin-top:20px">
            <div class="row justify-center " >
                <q-input 
                    color="pink"
                    class="campos col-xs-11 col-sm-6" 
                    outlined 
                    input-class="text-pink"
                    v-model="nome" 
                    label="Nome do Responsável"  
                    style=" ">
                    <template v-slot:prepend>
                    <q-icon name="fas fa-user" />
                </template>
                </q-input>
            </div>
            <div class="row justify-center " style="padding-top:8px">
            <q-input 
                color="pink"
                class="campos col-xs-11 col-sm-6" 
                outlined 
                input-class="text-pink"
                v-model="cpf" 
                label="CPF"  
                style=" padding-bottom:0px"
                >
             <template v-slot:prepend>
                    <q-icon name="fas fa-id-card" />
                </template>
            </q-input>
            </div>
            <div class="row justify-center " style="padding-top:8px" >
            <q-input 
                color="pink"
                class="campos col-xs-11 col-sm-6" 
                outlined 
                input-class="text-pink"
                v-model="email" 
                label="Email"  
                style=" padding-bottom:0px "
             >
              <template v-slot:prepend>
                    <q-icon name="fas fa-at" />
                </template>
            </q-input>
            </div>
            <div class="row justify-center" style="padding-top:8px">
            <div class=" col-xs-11 col-sm-6" >
            <q-input 
            color="pink"
            outlined 
            input-class="text-pink"
            v-model="telefone" 
            label="Telefone/ Whatsapp"  >
              <template v-slot:prepend>
                    <q-icon name="fab fa-whatsapp" />
                </template>
            </q-input>
        </div>
        </div>
            <div class="row justify-center " style="padding-top:8px">
            <q-input 
                color="pink"
                class="campos col-xs-11 col-sm-6" 
                outlined 
                input-class="text-pink"
                v-model="senha" 
                label="Senha nova"  
                style=" padding-bottom:0px "
           >
               <template v-slot:prepend>
                    <q-icon name="fas fa-lock" />
                </template>
            </q-input>
            </div><br/>
        </q-form>
       
    </div>
</template>

<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        nome:'',
        email:'',
        cpf:'',
        senha:'',
        telefone:'',
        height:600,
        mostrarApresentacaoHenvio: true,
        slide: 'slide1',
      }
  },
  computed:{
    user(){
      return this.$store.state.EuQueroFesta.user
    }
  },
  methods:{
    continuar(){
      console.log(this.slide)
      if(this.slide == 'slide1'){
        this.slide = 'slide2'
        return
      }
        
      if(this.slide == 'slide2'){
        this.slide = 'slide3'
        return
      }
      
      if(this.slide == 'slide3')
        this.$router.push({name:'Localizacao'})
    },
 
  },

  mounted(){
    console.log(this)
    this.height = this.$q.screen.height-50
    this.height = this.height.toString()
    this.nome = this.user.usu_name
    this.email = this.user.usu_email
    this.cpf = this.user.usu_document
    this.telefone = this.user.usu_celphone
    this.img = this.user.usu_image
  }
}
</script>

<style>
.shadow-1 {
  box-shadow: 0 0 0 !important;
}
.animated{
  animation-duration:0.8s;
}

</style>