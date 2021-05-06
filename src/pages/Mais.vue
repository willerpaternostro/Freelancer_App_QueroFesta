 <template>
    <div >
      <!-- ESTÁ LOGADO -->
      <div v-if="statusLogado" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <div>
        <q-list  padding class="rounded-borders  full-width">
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'LoginFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="account_circle" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Alterar Contas</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'MeusNegocios'})"
        >
          <q-item-section avatar>
            <q-icon name="business" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Meus Negócios</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'Home'})"
        >
          <q-item-section avatar>
            <q-icon name="shopping_cart" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Meu Plano</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'CobrancasFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="add_chart" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Cobranças</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
       
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'CallCenterFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="support_agent" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Fale conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'ConfiguracoesFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="settings" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Configurações</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="logout"
        >
          <q-item-section avatar>
            <q-icon name="logout" color="grey-9" />
          </q-item-section>

          <q-item-section  class="text-h6 text-grey-8">Sair</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
      </q-list>
      </div>

      <q-img @click="$router.push({name:'EditProfile'})" class="absolute-top " src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <q-btn :to="{name:'Home'}" text-color="white" class=" absolute-top-right" icon="keyboard_backspace" flat size="17px" />
        <div class="absolute-bottom bg-transparent">
          <q-avatar   size="80px" class="q-mb-sm">
            <q-img height="80px"  :src="'http://beta.prcweb.com.br/api/Users/getImg/1/'+user.usu_image" />
          <!--<q-img height="80px"  :src="user.usu_image?'http://beta.prcweb.com.br/api/Etc/anonGetImg/'+user.usu_image:'https://cdn.quasar.dev/img/boy-avatar.png'" /> -->
          </q-avatar>
        </div>
        <div class="absolute-center bg-transparent" style="margin-left:20px">
          <div class="text-h6">{{user.usu_name}}</div>
          <div>{{user.usu_email}}</div>
        </div>
      </q-img>
    </div>
    <!-- NÃO ESTÁ LOGADO -->
      <div  v-if="!statusLogado" >
        <q-btn :to="{name:'Home'}" class=" absolute-top-left" flat icon="keyboard_backspace" label="Voltar" no-caps  size="17px" /><br>
    
        <q-list   class="rounded-borders"   style="margin-top:20px">
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'InicioFornecedor'})"
          style="background-color:#FECC00;padding:10px"
        
        >
          <q-item-section avatar>
           <q-icon color="white" name="fas fa-plus" />
          </q-item-section>

          <q-item-section class="text-h6 text-white">FORNECEDOR</q-item-section>

          <q-item-section avatar>
            <q-icon color="white" name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'ConfiguracoesFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="settings" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Configurações</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'CallCenterFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="support_agent" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Fale conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          @click="$router.push({name:'CallCenterFornecedor'})"
        >
          <q-item-section avatar>
            <q-icon name="work" color="grey-9" />
          </q-item-section>

          <q-item-section class="text-h6 text-grey-8">Trabalhe conosco</q-item-section>

          <q-item-section avatar>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
        </q-item>

      </q-list>
    </div>
  </div>
</template>
<script>
import { axiosInstance } from 'boot/axios'
const config = { headers: { 'Content-Type': 'multipart/form-data'} };

export default {
  
  name: 'PageIndex',
  data(){
    return{
        text:'',
        items:[1,2,3,4,5]
      }
  },
  computed:{
     statusLogado(){
      return this.$store.state.EuQueroFesta.statusLogado
    },
   user(){
      return this.$store.state.EuQueroFesta.user
    }
    
  },
  methods:{
    irCategoriaNegocio(){
      this.$router.push({name:'Home'})
    },
    logout(){
      if(this.paginaAtual != 'Home')
        this.$router.push({name:'Home'})
      
      return this.$store.commit('EuQueroFesta/logout')
    }
  },
  mounted(){
    console.log("MOMUNTED");
    console.log(this.user);
  
  }
}
</script>

<style>

</style>