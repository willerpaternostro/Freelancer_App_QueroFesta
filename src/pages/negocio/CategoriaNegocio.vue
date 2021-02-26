<template>
       <div style="padding:8px">
        <div class="row">
            <q-input class="col" standout bottom-slots v-model="text" label="Digite CEP, Cidade ou endereço" >
                <template v-slot:prepend>
                    <q-icon color="pink" name="search" />
                </template>
                <template v-slot:append>
                    <q-icon @click="irNomeNegocio" color="pink" name="send" />
                </template>
            </q-input>
        </div>
        <q-list >
            <q-item>
                <q-item-section>
                    <q-item-label>São Carlos</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-badge  color="blue" label="10k" />
                </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
                <q-item-section>
                    <q-item-label>Araraquara</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-badge  color="blue" label="10k" />
                </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
                <q-item-section>
                    <q-item-label>Campinas</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-badge  color="blue" label="10k" />
                </q-item-section>
            </q-item>
            <q-separator />
        </q-list>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        items:[1,2,3,4,5]
      }
  },
  methods:{
   irNomeNegocio(){
       this.$router.push({name:'NomeNegocio'})
   }
  }
}
</script>

<style>

</style>