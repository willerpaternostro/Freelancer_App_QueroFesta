<template>
    <div>
        <q-img
        src="~assets/home_primeira_fundo.png"
        style="max-width: 400px; height: 200px;"
        contain>
            <div class="absolute-bottom text-subtitle1 text-center">
            <q-input bg-color="white" color="orange" outlined  v-model="text" label="Encontre um fornecedor"  >
                <template v-slot:prepend>
                    <q-icon color="orange" name="search" />
                </template>
                <template v-slot:append>
                    <q-icon color="orange" name="more_horiz" />
                </template>
            </q-input>
            </div>
        </q-img>
        <q-carousel
            v-model="slides"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            arrows
            height="150px"
            class="bg-grey-1  rounded-borders"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders col-10 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders col-2 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-10 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
                <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders col-6 full-height"  src="https://cdn.quasar.dev/img/donuts.png" />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png" />
                <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            </div>
        </q-carousel-slide>
        </q-carousel>
        <div class="row" style="padding:16px">
            <span @click="irCategorias" class="text-h6 text-grey-9 text-weight-bold">
                Categorias
            </span>
        </div>
        <q-carousel
        v-model="categorias"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        height="150px"
        class="bg-grey-1  rounded-borders"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        </q-carousel>
        <!-- SUGESTÕES DE FORNECEDORES -->
        <div class="row" style="padding:16px">
            <span class="text-h6 text-grey-9 text-weight-bold">Sugestões</span>
        </div>
        <q-carousel
        v-model="categorias"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        height="150px"
        class="bg-grey-1  rounded-borders"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
           <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img  class="rounded-borders  col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img  class="rounded-borders offset-1 col-3 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"  />
            <q-img class="rounded-borders offset-1 col-3 full-height"  src="https://cdn.quasar.dev/img/donuts.png"  />
            </div>
        </q-carousel-slide>
        </q-carousel>
    </div>
</template>
<script>


export default {
  name: 'PageIndex',
  data(){
    return{
        text:'',
        slides:1,
        categorias:1
      }
  },
  methods:{
      irCategorias(){
          this.$router.push({name:'Categorias'})
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
</style>