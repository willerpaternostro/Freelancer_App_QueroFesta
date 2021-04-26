<template>
  <div>
    <q-list >
      <q-item
        clickable
        v-ripple
      >
        <q-item-section class="text-h6 text-grey-8">Light Mode</q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="dark" val="battery" />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-h6 text-grey-8">Privacy Policy</q-item-section>

        <q-item-section avatar>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
      >
        <q-item-section class="text-h6 text-grey-8">Terms and Conditions</q-item-section>

        <q-item-section avatar>
          <q-icon name="keyboard_arrow_right" />
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
        dark:true,
        nome:'',
        email:'',
        cpf:'',
        senha:'',
        height:600,
        mostrarApresentacaoHenvio: true,
        slide: 'slide1',
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