<template>
    <div>
        <div class="row">
            <q-input class="col" filled bg-color="grey-2"  color="pink" bottom-slots v-model="text" label="Digite CEP, Cidade ou endereço" >
                <template v-slot:prepend>
                    <q-icon color="pink" name="search" />
                </template>
                <template v-slot:append>
                    <q-icon @click="$router.push({name:'Home'})" color="pink" name="send" />
                </template>
            </q-input>
        </div>
        <div class="row"><q-icon  color="pink" name="fas fa-map-marker-alt" /> <p> Você está em:<span class="text-weight-bold">São Carlos - SP</span></p> </div>
        <q-list >
            <q-item :to="{name:'Home'}" v-for="(item,index) in items" :key="index">
                <q-item-section>
                    <q-item-label>São Carlos</q-item-label>
                </q-item-section>
                <q-item-section side top>
                    <q-badge  color="pink-6" label="10" />
                </q-item-section>
                <q-separator />
            </q-item>
        </q-list>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        items:[1]
      }
  },
  methods:{
  
  },
  mounted(){
     
  }
}
</script>

<style>

</style>