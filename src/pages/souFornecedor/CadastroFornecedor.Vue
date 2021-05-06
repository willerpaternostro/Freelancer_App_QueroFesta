<template>
    <div>
        <div class="row justify-center" style="margin-bottom:20px;"> 
          <div class="col-4">
              <q-btn
                v-if="!foto"
                size="35px"
                round
                color="grey-5"
                :icon="foto?'':'add_a_photo'"
                @click="pegarFoto"
                />  
          </div>
      </div>
        <div class="row justify-center" v-if="foto">
        <q-avatar size="150px">
            <q-img  height="150px" v-if="foto"  :src="foto" />
        </q-avatar>
        </div>
        <div class="row justify-center" v-if="foto" style="margin-top:8px">
            <q-btn class="col-4" icon="fas fa-sync-alt" color="red"  flat no-caps @click="pegarFoto" />
        </div>

        <div class="row justify-center" v-show="false"> 
            <q-uploader
                @added="(files) => {this.mudou(files)}"
                url="http://localhost:4444/upload"
                style="max-width: 300px"
                ref="teste"
            />
        </div>
        <q-form @submit="validarInputs"  style="margin-top:10px">
            <div class="row justify-center" >
                <div class=" col-xs-11 col-sm-6" >
                    <q-input 
                        color="pink"
                        outlined 
                        input-class="text-pink"
                        v-model="nome" 
                        label="Nome do Responsável"
                        :error="checkErro_Nome"
                        :error-message="msgErro_Nome" 
                        @input="checkErro_Nome = false, msgErro_Nome=''" 
                    >
                    <template v-slot:prepend>
                        <q-icon name="fas fa-user" />
                    </template>
                </q-input>
                </div>
            </div> 

            <div class="row justify-center " style="padding-top:8px">
                <div class=" col-xs-11 col-sm-6" >
                    <q-input 
                        color="pink"
                        outlined 
                        input-class="text-pink"
                        v-model="cpf" 
                        label="CPF"  
                        style=" padding-bottom:0px"
                        mask="###.###.### - ##"
                        :error="checkErro_Cpf"
                        :error-message="msgErro_Cpf" 
                        @input="checkErro_Cpf = false, msgErro_Cpf=''"  >
                <template v-slot:prepend>
                        <q-icon name="fas fa-id-card" />
                    </template>
                </q-input>
                </div>
            </div>

            <div class="row justify-center " style="padding-top:8px">
                <div class=" col-xs-11 col-sm-6" >
                    <q-input 
                        color="pink"
                        outlined 
                        input-class="text-pink"
                        v-model="email" 
                        label="Email"
                        :error="checkErro_Email"
                        :error-message="msgErro_Email" 
                        @input="checkErro_Email = false, msgErro_Email=''"   >
                <template v-slot:prepend>
                        <q-icon name="fas fa-at" />
                    </template>
                </q-input>
            </div>
            </div>

            <div class="row justify-center" style="padding-top:8px">
                <div class=" col-xs-11 col-sm-6" >
                    <q-input 
                        color="pink"
                        outlined 
                        input-class="text-pink"
                        v-model="telefone" 
                        label="Telefone/ Whatsapp"
                        mask="(##) ##### - ####"
                        :error="checkErro_Telefone"
                        :error-message="msgErro_Telefone" 
                        @input="checkErro_Telefone = false, msgErro_Telefone=''"   >
                        <template v-slot:prepend>
                            <q-icon name="fab fa-whatsapp" />
                        </template>
                    </q-input>
            </div>
            </div>

            <div class="row justify-center " style="padding-top:8px">
                <div class=" col-xs-11 col-sm-6" >
                    <q-input 
                        color="pink"
                        outlined 
                        input-class="text-pink"
                        v-model="senha" 
                        label="Senha"  
                        :type="isPwd ? 'password' : 'text'"
                        :error="checkErro_Senha"
                        :error-message="msgErro_Senha" 
                        @input="checkErro_Senha = false, msgErro_Senha=''" 
                    >
                    <template v-slot:prepend>
                        <q-icon name="fas fa-lock" />
                    </template>
                    <template v-slot:append >
                        <q-icon
                        v-model="senha"
                        :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                        />
                    </template>
                </q-input>
                </div>
            </div>

            <div style="padding-top:8px;padding-left:8px"> 
                <q-checkbox v-model="termosUso" label="Aceito os termos xxx" color="pink" />
            </div>

            <div class="row justify-center" style="padding:20px 10px 20px 10px" >
                <q-btn 
                    type="submit"
                    rounded
                    text-color="white"
                    color="pink" 
                    label="Cadastrar"
                    no-caps
                    class="col-8"
                
                />
            </div> 
        </q-form>
        <div class="row justify-center" >
            <div class="col row justify-center">
                <p >Já possui uma conta?<span class="text-orange"> Entre aqui</span></p>
            </div>
        </div>
    </div> 
</template>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  data () {
    return {
        isPwd:true,
        nome:'',
        msgErro_Nome:'',
        checkErro_Nome:false,

        email:'',
        msgErro_Email:'',
        checkErro_Email:false,

        telefone:'',
        msgErro_Telefone:'',
        checkErro_Telefone:false,

        cpf:'',
        msgErro_Cpf:'',
        checkErro_Cpf:false,

        senha:'',
        msgErro_Senha:'',
        checkErro_Senha:false,

        uploader:'',
        foto:'',
        fotoEnviar:null,
        termosUso:false
    }
  },
    methods:{
        validarInputs(){
            this.checkErro_Nome = false
            this.checkErro_Email = false
            this.checkErro_Cpf = false
            this.checkErro_Telefone = false
            this.checkErro_Senha = false

            if(this.nome.length == 0){
                this.checkErro_Nome = true
                this.msgErro_Nome = 'Campo Obrigatório'
                return
            }
            if(this.cpf.length == 0 ){
                this.msgErro_Cpf = 'Campo obrigatório'
                this.checkErro_Cpf=true
                return
            }
            if(this.cpf.length < 16 ){
                this.msgErro_Cpf = 'Campo incompleto'
                this.checkErro_Cpf=true
                return
            }
             if(this.cpf.length == 16 ){
                if(!this.validarCPF(this.cpf)){
                    this.msgErro_Cpf = 'CPF inválido'
                    this.checkErro_Cpf=true
                    return
                } 
            }
            if(this.email.length == 0 ){
                this.msgErro_Email = 'Campo obrigatório'
                this.checkErro_Email=true
                return
            }
            if(this.email.length < 5 || !this.email.includes('@') || !this.email.includes('.')){
                this.msgErro_Email = 'E-mail inválido'
                this.checkErro_Email=true
                return
            }
            if(this.telefone.length == 0){
                this.checkErro_Telefone = true
                this.msgErro_Telefone = 'Campo Obrigatório'
                return
            }
            if(this.telefone.length < 13){
                this.checkErro_Telefone = true
                this.msgErro_Telefone = 'Telefone inválido, dígitos insuficiente'
                return
            }
            if(this.senha.length == 0){
                this.checkErro_Senha = true
                this.msgErro_Senha = 'Campo Obrigatório'
                return
            }
            if(this.senha.length < 6){
                this.checkErro_Senha = true
                this.msgErro_Senha = 'A senha deve ter no mínimo 6 caracteres'
                return
            }
            if(!this.termosUso){
                this.$q.notify({message:'Termos de uso obrigatório', color:'red', position:'top'})
                return
            }
            if(!this.checkErro_Nome && !this.checkErro_Email && !this.checkErro_Cpf && !this.checkErro_Telefone && !this.checkErro_Senha){
                this.cadastrarUsuario()
                return
            }
        },
        validarCPF(strCPF) {
        for (let i in strCPF){//Retirando caracteres que não são números
            if(strCPF[i] == ' ' || strCPF[i] == '.' || strCPF[i] == '-')
            strCPF = strCPF.replace(strCPF[i],'')
        }
        if(strCPF.includes('-')){
            strCPF = strCPF.replace('-','')
        }
            var Soma;
            var Resto;
            Soma = 0;
        if (strCPF == "00000000000" ||
            strCPF == "11111111111" ||
            strCPF == "22222222222" ||
            strCPF == "33333333333" ||
            strCPF == "44444444444" ||
            strCPF == "55555555555" ||
            strCPF == "66666666666" ||
            strCPF == "77777777777" ||
            strCPF == "88888888888" ||
            strCPF == "99999999999" ) return false;
            
        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
        
        Soma = 0;
            for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
        
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
            return true;
        },
        async cadastrarUsuario(){
            console.log("Cadastrar Usuário");
            let dados = {nome:this.nome, email:this.email, telefone:this.telefone, cpf:this.cpf, senha:this.senha, fotoPerfil:this.fotoEnviar}
            
            console.log('aguarde...')
            //this.$router.push({name:'CidadeNegocio'})
            return this.$store.dispatch('EuQueroFesta/cadastrarUsuario',dados)
        },

        pegarFoto(){
            console.log( this.$refs)
            if(this.foto){
                this.foto = ''
                this.$refs.teste.removeQueuedFiles()
            }
            this.$refs.teste.pickFiles()
            
        },
        mudou(files){
            console.log("MUDOY");
            console.log(files);
            this.fotoEnviar = files
            console.log(files[0])
            console.log(files[0]['__img'])
            console.log(files[0]['__img']['src'])
            this.foto = files[0]['__img']['src']
        },
    },
    beforeMount(){
        console.log("BEFORE-MOUNTED")
    },
    mounted(){
        console.log("MOUNTED")
        console.log(this.$refs.teste);
  }
}
</script>
<style>
.q-avatar__content{
    border-radius: inherit;
    height: auto !important; 
    width: inherit;
}
</style>