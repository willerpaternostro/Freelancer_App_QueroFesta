<template>
    <div >
        <div class="row justify-end">
           <span class="col-2 text-gre-7" style="font-size:16px">2 de 7</span>
        </div>
        <div class="row">
            <q-input 
                @input="procurarCategorias"
                class="col-12" 
                bg-color="grey-2" 
                filled 
                color="pink" 
                bottom-slots 
                v-model="nomeCategoriaNegocio" 
                label="Digite o nome da categoria..." 
            >
                <template v-slot:prepend>
                    <q-icon color="pink" name="search" />
                </template>
               
            </q-input>
        </div>
        <q-list dense>
            <q-item clickable @click="prosseguirCadastroLoja(categoria)" v-for="(categoria,index) in items" :key="index">
                 <q-item-section avatar>
                  <q-img :src="'./iconesCategoria/'+categoria['imagem']" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{categoria['nome']}}</q-item-label>
                </q-item-section>
               
            </q-item>
            
        </q-list>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        nomeCategoriaNegocio:'',
        items:[]
      }
  },
  computed:{
    CATEGORIAS(){
      return this.$store.state.EuQueroFesta.CATEGORIAS
    }
  },
  watch:{
      nomeCategoriaNegocio:function(val){
          if(val.length == 0){
              this.items = []
          }
      }
  },
  methods:{

    prosseguirCadastroLoja(item){
        this.$q.localStorage.set('cadastroNegocio_categoria',item.nome)
            this.$router.push({name:'NomeNegocio'})
    },
    procurarCategorias(nomeBusca){
        nomeBusca = nomeBusca.toUpperCase()
        this.items = this.CATEGORIAS.filter(element => {return element.nome.toUpperCase().includes(nomeBusca)})
    }
   
  },
  mounted(){
      if(this.$q.localStorage.getItem('cadastroNegocio_categoria')){
          this.nomeCategoriaNegocio = this.$q.localStorage.getItem('cadastroNegocio_categoria')
      }
  }
}
</script>

<style>

</style>