<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <konv />
  </div>
</template>

<script>
import Konv from './components/Konv.vue'
import gsap from "gsap";

export default {
  name: 'App',
  components: {
    Konv
  },
  data: function () {
    return {
      checked: [],
      tweenedNumber: 0,
      selectedProds: [],
      selectedKonv: [],
      nameOnly: [],

      namekonv: [],

      calc: 0,
      calckonv: 0,

      konv1: [
        { name: "Конвейер ленточный 1", price: "500000", class: "konv1block", id: 1, codename: 'namekonv', img:'https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG', desc:'Для повышения удобства загрузки и перегрузки неизмельченных сухих материалов в линию может быть включен «Конвейер ленточный».'},
      ],
      konv1opt: [
        { name: "+ Оснащение частотным регулятором", price: "41000"},
        { name: "+ Оснащение сепаратором металла", price: "70500"},
        { name: "+ Колеса маневровые", price: "15000"},
        { name: "+ Изготовление в «цепном» исполнении", price: "95000"},
      ],

    }
  },
  computed: {

    sumpro: function () {
      return parseFloat(this.calc) + parseFloat(this.calckonv);
      //+ parseFloat(this.calckonv2) + parseFloat(this.calckonv3) + parseFloat(this.calcperegruzshnek) + parseFloat(this.calcvygruznoyblock) + parseFloat(this.calcvygruznoyblock2) + parseFloat(this.calcstolkip) + parseFloat(this.calcrazbivkipver) + parseFloat(this.calcrazbivkipgor) + parseFloat(this.calcsortuchast) + parseFloat(this.calclkonv) + parseFloat(this.calcsortpost) + parseFloat(this.calcgrohotsmall) + parseFloat(this.calcgrohotbig) + parseFloat(this.calcgrohotnurman) + parseFloat(this.calcotdiretiket500) + parseFloat(this.calcotdiretiket1000) + parseFloat(this.calcotdiretiketwash500) + parseFloat(this.calcotdiretiketwash1000) + parseFloat(this.calcdrobilkacrl500) + parseFloat(this.calcdrobilkacrl5002) + parseFloat(this.calcdrobilkacrl600) + parseFloat(this.calcdrobilkacrl6002) + parseFloat(this.calcdrobilkacrl700) + parseFloat(this.calcdrobilkacrl7002) + parseFloat(this.calcdrobilkacrl800) + parseFloat(this.calcdrobilkacrl8002) + parseFloat(this.calcdrobilkacrl900) + parseFloat(this.calcdrobilkacrl9002) + parseFloat(this.calcdrobilkacrl1000) + parseFloat(this.calcdrobilkacrl10002) + parseFloat(this.calcdrobilkacrl1100) + parseFloat(this.calcdrobilkacrl11002) + parseFloat(this.calcdrobilkacrh30) + parseFloat(this.calcdrobilkacrh37) + parseFloat(this.calcdrobilkacrh45) + parseFloat(this.calcdrobilkacrh55) + parseFloat(this.calcdrobilkacrh75) + parseFloat(this.calcdrobilkacrh160) + parseFloat(this.calcshredoss2260) + parseFloat(this.calcshredoss3080) + parseFloat(this.calcshredtsfs2260) + parseFloat(this.calcshredtsfs3080) + parseFloat(this.calcshredtsfs40100) + parseFloat(this.calcshredfss8040) + parseFloat(this.calcshredfss8060) + parseFloat(this.calcshredfss8080) + parseFloat(this.calcshredfss80100) + parseFloat(this.calcfrikcmojkaperegruz) + parseFloat(this.calcfrikcmojkaperegruzgilza) + parseFloat(this.calcotgimfrikс) + parseFloat(this.calcotgimfrikсfom500) + parseFloat(this.calcotgimfrikсfom1000) + parseFloat(this.calcmojkafrikсrfw500) + parseFloat(this.calcmojkafrikсrfw5002) + parseFloat(this.calcmojkafrikсrfw1000) + parseFloat(this.calcotgimfrikсvert) + parseFloat(this.calcustzamach) + parseFloat(this.calcmojkaunivers) + parseFloat(this.calcflottonkompakt) + parseFloat(this.calcflottonpet500) + parseFloat(this.calcflottonpet1000) + parseFloat(this.calcflotplav500kompakt) + parseFloat(this.calcflotplav1000kompakt) + parseFloat(this.calcflotplav500) + parseFloat(this.calcflotplav1000) + parseFloat(this.calcflotplavnurman) + parseFloat(this.calcustflotton) + parseFloat(this.calcwashflotplav) + parseFloat(this.calcsushkatt500) + parseFloat(this.calcsushkatt1000) + parseFloat(this.calcsushkaplen)
      //return 1375000 + parseFloat(this.mojkiselected) + parseFloat(this.drobselected) + parseFloat(this.raspakselected) + parseFloat(this.ochistselected) + parseFloat(this.drob2selected) + parseFloat(this.calc)
    },

    sumkonv1: function () {
      return parseFloat(this.calckonv)
    },



    sumprototal: function () {
      return Intl.NumberFormat('ru-RU').format(this.tweenedNumber.toFixed(0));
    }

  },

  methods: {
    selected(prod) {
      if (event.target.checked) {
        this.selectedProds.push(prod);
        this.nameOnly.push(prod.name);

        this.calc += parseFloat(prod.price);
      } else {
        var item = this.selectedProds.indexOf(prod);
        this.selectedProds.splice(item, 1);

        var index = this.nameOnly.indexOf(prod.name);
        this.nameOnly.splice(index, 1);

        this.calc -= parseFloat(prod.price);
      }
    },
    selectedkonv(prod) {
      if (event.target.checked) {
        this.selectedProds.push(prod);
        this.nameOnly.push(prod.name);
        this.calckonv += parseFloat(prod.price);
      } else {
        var item = this.selectedProds.indexOf(prod);
        this.selectedProds.splice(item, 1);
        var index = this.nameOnly.indexOf(prod.name);
        this.nameOnly.splice(index, 1);

        this.calckonv -= parseFloat(prod.price);
      }
    },


    selectedkonvopt(prod) {
      if (event.target.checked) {
        this.namekonv.push(prod);
        this.calckonv += parseFloat(prod.price);
      } else {
        var item = this.namekonv.indexOf(prod);
        this.namekonv.splice(item, 1);

        this.calckonv -= parseFloat(prod.price);
      }
    },


  },
  watch: {
    sumpro: function (newValue) {
      gsap.to(this.$data, {duration: 0.5, tweenedNumber: newValue});
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
