<template>
  <div>
    <q-list >
      <q-item :to="{name:'CobrancaDetalhes'}" v-for="(item,index) in 10" :key="index">
          <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
          </q-item-section>

          <q-item-section>
          <q-item-label class="">PROCION INFORMÁTICA</q-item-label>
          <q-item-label caption lines="2">Vencida em 15/07/2020</q-item-label>
          </q-item-section>

          <q-item-section side top>
          <q-item-label caption>à vista</q-item-label>
          <span class="text-weight-bold">R$ 2,50</span>
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
       
        height:600,
       
      }
  },
  methods:{
 
  },

  mounted(){
    console.log(this)
    this.height = this.$q.screen.height-50
    this.height = this.height.toString()
  }
}
</script>

<style>


</style>