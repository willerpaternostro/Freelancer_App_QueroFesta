<template>
    <div>
        <q-card flat v-for="(item,index) in items" :key="index" class="my-card" style="margin-top:20px">
            
            <q-card-section horizontal>
                <q-img
                height="200  px"
                class="col-5"
                src="https://cdn.quasar.dev/img/chicken-salad.jpg"
                />
                <q-card-section >
                    <div class="row justify-end">
                <q-btn flat round icon="close" />
            </div>
                    <div class="row">
                        <span class="text-h6 col" >
                            The Cheeses Guide Spaghetti
                        </span>
                    </div>
                    <div class="row" style="margin-top:10px">
                        <span class=" text-grey-6" >
                            <q-icon name="room" color="grey-6" />    87 Botsford
                        </span><br><br>
                    </div>
                    <span class=" text-black text-subtitle1 text-weight-bold">
                        <q-icon size="19px" name="grade" color="red-6" />  4.3
                    </span><br>
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
      irFavoritos(){

      }
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