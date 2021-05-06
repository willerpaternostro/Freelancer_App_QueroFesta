<template>

  <div class="row justify-center " :style="' width:100%; max-width: 100%;height:'+height">
    <div class="col-xs-11 col-sm-11 col-md-6">
      
    <div class=" row justify-center">  
      <img src="~assets/logo_euquero.png"  style="width:200px;  margin-bottom:40px" />
    </div>
    
    <div class="row justify-center" >
      <q-input 

      :error="checkErro_Email"
      :error-message="msgErro_Email"
      color="pink"
      ref="email"
      class="campos col-xs-10 col-sm-6" 
      outlined 
      input-class="text-pink"
      v-model="email" 
      label="E-mail"  
      style=" padding-bottom:0px "
      />
    </div>
    
      <br/>
    <div class="row justify-center">
      <q-input 

        :type="isPwd ? 'password' : 'text'" 
        :error="checkErro_Senha"
        :error-message="msgErro_Senha"
        ref="name"
        class="campos col-xs-10 col-sm-6" 
        input-class="text-pink" 
        color="pink"
        outlined v-model="senha" label="Senha"  

      >
        <template v-slot:append >
          <q-icon
            v-model="senha"
            :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
            class="cursor-pointer"
           
          />
        </template>
      </q-input>
    </div>
    
      <div class="row justify-center">
         <span  class="text-orange col-xs-10 col-sm-6 "> Esqueceu a senha?  </span>
      </div>
      <br/>

    <div class="row justify-center">
      <q-btn 
        @click="login"
        rounded
        text-color="white"
        color="pink" 
        class="col-8" 
        label="Entrar"
        /> 
    </div>
     
       <br>
         <div class="row justify-center" v-if="!statusLogado">
             <div class="col row justify-center">
                 <p >Não tem uma conta?<span class="text-orange" @click="$router.push({name:'CadastroFornecedor'})"> Cadastre-se aqui</span></p>
             </div><br>
        </div>
  </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msgErro_Email:'',
      msgErro_Senha:'',
      checkErro_Email:false,
      checkErro_Senha:false,
      isPwd:true,
      email:'',
      senha:'',
      existeEmail:'white',
      buttonHide:false,
      height:600
    }
  },
    computed:{
      statusLogado(){
        return this.$store.state.EuQueroFesta.statusLogado
      }
    },
    methods:{
      login(){
        let dados = {email:this.email, senha:this.senha}
        return this.$store.dispatch('EuQueroFesta/login',dados)
       
      },
      mudarStatusLogado(val){
        this.$store.commit('EuQueroFesta/mudarStatusLogado',val)
      },
    },
    beforeMount(){
      console.log("BEFORE-MOUNTED")
    },
    mounted(){
      console.log("MOUNTED")
  }
}
</script>
<style>

</style>
