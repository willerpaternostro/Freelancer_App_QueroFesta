<template>
    <div> 
        <div class=" row justify-center">  
            <img src="~assets/logo_euquero.png"  style="width:200px;  margin-bottom:40px" />
        </div>
        <div class=" row justify-center">  
            <span class="col-12 text-h6 text-center"> We're Happy to Help You!</span>
            <span class="col-8 text-center"> If you have complain about the product chat me </span>
        </div>
        <div class=" row justify-center" style="padding:16px">  
            <q-btn  class="col-8" label="Chat Me" color="pink" rounded no-caps />
        </div>
        <div class="row"> 
        <q-list  padding class="rounded-borders  full-width ">
            <q-item
            clickable
            v-ripple
            :to="{name:'CallCenterFornecedor'}"
            >
                <q-item-section class="text-h6 text-grey-7">
                    Fale Conosco
                </q-item-section>
                <q-item-section avatar>
                    <q-icon color="grey-7"  name="keyboard_arrow_right" />
                </q-item-section>
            </q-item>
            <q-item
            clickable
            v-ripple
            :to="{name:'CallCenterFornecedor'}"
            >
                <q-item-section class="text-h6 text-grey-7">
                    Trabalhe Conosco
                </q-item-section>
                <q-item-section avatar>
                    <q-icon color="grey-7"  name="keyboard_arrow_right" />
                </q-item-section>
            </q-item>
            <q-item
            clickable
            v-ripple
            :to="{name:'CallCenterFornecedor'}"
            >
                <q-item-section class="text-h6 text-grey-7">
                    https://web.whatsapp.com/
                </q-item-section>
                <q-item-section avatar>
                    <q-icon color="grey-7" name="keyboard_arrow_right" />
                </q-item-section>
            </q-item>
    </q-list>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     
      height:600
    }
  },
    methods:{
   
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
