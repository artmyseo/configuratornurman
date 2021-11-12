<template>
<div id="sortblock">
  <h3 class="titlecategory">Оборудование для сортировки</h3>

  <!--Добавляем конвейер-->
  <div id="slidecheckblock" v-for="prod in konv1"
       :key="prod.name"
       :class="prod.class"
  >

    <input type="checkbox"
           class="slide-checkbox"
           name="products[]"
           :id="prod.name"
           :value="prod.price"
           @change="selectedkonv(prod)"><label :for="prod.name" class="checkbox mb20">Конвейер ленточный</label> <i class="far fa-question-circle"></i>
  </div>

  <div class="confmainequipblock" v-if="nameOnly.includes('Конвейер ленточный 1')">
    <div class="confelemblock">
      <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG"></div>
        <div class="block-equip-line-desc">
          <h3>Конвейер ленточный</h3>
          <div class="block-kp-line-price">
            <div v-for="prod in konv1"
                 :key="prod.name">
              <h4>{{prod.price}}р.</h4>
            </div>
          </div>
          <div v-for="prod in konv1opt"
               :class="prod.name"
               :key="prod.name">

            <input type="checkbox"
                   name="products[]"
                   :id="prod.name"
                   :value="prod.price"
                   @change="selectedkonvopt(prod)"
            ><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
          </div>

        </div>
      </div>
      <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv1 }}р.</span></div>
    </div>



  </div>
</div>
  <!--/Добавляем конвейер-->
</template>

<script>
export default {
  name: 'Konv',
  data: function () {
    return {
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

  methods: {
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
