<template>
    <div >
        <q-list>
            <q-item>
                <q-item-section>
                <q-item-label class="text-grey-7">Título</q-item-label>
                <q-item-label class="text-h6 text-grey-9"  lines="2">Fralda Pampers Confort-sec Tamanho Rn+</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label class="text-grey-7">Contato</q-item-label>
                <q-item-label class="text-h6 text-grey-9"  lines="2">Telefone - webset- whatsapp</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label class="text-grey-7">Redes Sociais</q-item-label>
                <q-item-label class="text-h6 text-grey-9"  lines="2">facebook.com - instagram.com - youtube.com</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label class="text-grey-7">Forma de Entrega</q-item-label>
                <q-item-label class="text-h6 text-grey-9"  lines="2">Mercado Envios | Pessoalmente</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label class="text-grey-7">Tipo de Anúncio</q-item-label>
                <q-item-label class="text-h6 text-grey-9"  lines="2">Clássico - Você pagará R$11,16 quando vender</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <div class="row" style="padding-left:16px">
            <div class="col-4 text-grey-7">Foto Principal</div>
            <div class="offset-3 col-4 text-grey-7">Foto de Capa</div>
        </div>
        <div class="row" style="padding-left:16px">
            <div class="col-4">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    spinner-color="white"
                    style="height: 70px; max-width: 150px"
                    />
            </div>
            <div class="offset-3 col-4">
                <q-img
                    src="https://placeimg.com/500/300/nature"
                    spinner-color="white"
                    style="height: 70px; max-width: 150px"
                    />
            </div>
        </div>
        <div class="row" style="padding:16px 0px 0px 16px">
            <div class="col-6 text-grey-7">Foto do Negócio</div>
        </div>
         <div class="row" style="padding-left:16px">
            <div class="col-3">
                <q-img
                src="https://placeimg.com/500/300/nature"
                spinner-color="white"
                style="height: 70px; max-width: 90px"
                />
            </div>
            <div class="col-3">
                <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                spinner-color="white"
                style="height: 70px; max-width: 90px"
                />
            </div>
            <div class="col-3">
                <q-img
                src="https://placeimg.com/500/300/nature"
                spinner-color="white"
                style="height: 70px; max-width: 90px"
                />
            </div>
            <div class="col-3">
                <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                spinner-color="white"
                style="height: 70px; max-width: 90px"
                />
            </div>
        </div>
        <div  >
            <q-list padding bordered class="rounded-borders" style="padding:16px 0px 0px 0px">
                <q-expansion-item
                    dense
                    dense-toggle
                    expand-separator
                    icon="perm_identity"
                    label="Ver Estatísticas"
                    header-class="text-blue text-h6"
                >
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    dense
                    dense-toggle
                    expand-separator
                    icon="signal_wifi_off"
                    label="Visualizar Negócio"
                    header-class="text-blue text-h6"
                >
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    dense
                    dense-toggle
                    expand-separator
                    icon="drafts"
                    label="Drafts"
                    header-class="text-blue text-h6"
                >
                    <q-card>
                    <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div>
    </div>
</template>
<script>


export default {

  data(){
    return{
        items:[1,2,3,4,5]
      }
  },
  methods:{
  
  }
}
</script>

<style>

</style>