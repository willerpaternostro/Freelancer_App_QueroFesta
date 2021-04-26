<template>
    <div>
        <div class="row">
            <q-input class="col" bg-color="grey-2" filled color="pink" bottom-slots v-model="text" label="Find a food recipient" >
                <template v-slot:append>
                    <q-icon color="pink" name="search" />
                </template>
            </q-input>
        </div>
        <q-card @click="irFornecedor" flat v-for="(item,index) in items" :key="index" class="my-card">
            <q-card-section horizontal class="row">
                <q-img
                style="border-radius:10px"
                height="90px"
                class="col-5"
                src="https://cdn.quasar.dev/img/chicken-salad.jpg"
                />
                <q-card-section class="col-7">
                    <div class="row">
                        <span class="text-h6 col" >
                            Título fornecedor {{index}}
                        </span>
                    </div>
                    <div class="row" style="margin-top:10px">
                        <span class=" text-grey-6" >
                            Categoria {{index}}
                        </span><br>
                    </div>
                    <span class=" text-black text-subtitle1 text-weight-bold row justify-end">
                        <q-icon size="19px" name="far fa-heart" color="pink" />  
                    </span>
                </q-card-section>
            </q-card-section>
        </q-card>
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
    irFornecedor(){
        this.$router.push({name:'Fornecedor'})
    },
  }
}
</script>

<style>
.q-img__content > div {
    background: rgba(0,0,0,0);
}
input#f_2fac663e-5f38-4461-89e1-55c43f7fa20f.q-field__native.q-placeholder{
    color: orange !important;
    font-size: 18px;
}
div.q-card__section.q-card__section--vert{
    padding-top: 0px !important;
    padding-right: 0px !important;
}
</style>