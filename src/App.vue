<template>
  <div id="app">
        <img alt="Vue logo" src="./assets/logo.png"> 
    <b-container>
      <b-row>
    <b-col cols="8">
<div id="equiplist">
    <div class="tab-content py-3" id="myTabContent" :class="[{ 'kpformat': isActive('all-cat') }]">
      <div class="tab-pane" :class="[{ 'active show': isActive('sortcat') }, { 'active show': isActive('all-cat') }]" id="sortcat">
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
      <div class="addequip" @click="addkonv" v-show="!konvadded">+ Добавить ещё один конвейер</div>
    </div>

<!--/Добавляем конвейер-->
<div v-if="konvadded">
<!--Добавляем конвейер-->
<div id="slidecheckblock" v-for="prod in konv2"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedkonv2(prod)"><label :for="prod.name" class="checkbox mb20">Конвейер ленточный</label> <i class="far fa-question-circle"></i> 
  </div>

 <div class="confmainequipblock" v-if="nameOnly.includes('Конвейер ленточный 2')"> 
      <div class="confelemblock">
        <div class="block-equip-line">
          <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG"></div>
            <div class="block-equip-line-desc">
            <h3>Конвейер ленточный</h3>
                <div class="block-kp-line-price">
                  <div v-for="prod in konv2"
                  :key="prod.name">
                  <h4>{{prod.price}}р.</h4>
                  </div>
                </div>
    <div v-for="prod in konv2opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedkonv2opt(prod)"
             ><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
    </div>

            </div>
          </div>  
          <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv2 }}р.</span></div>
      </div>  
      <div class="addequip" @click="addkonv2" v-show="!konvadded2">+ Добавить ещё один конвейер</div>
    </div>
<!--/Добавляем конвейер-->
</div>

<div v-if="konvadded2">
<!--Добавляем конвейер-->
<div id="slidecheckblock" v-for="prod in konv3"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedkonv3(prod)"><label :for="prod.name" class="checkbox mb20">Конвейер ленточный</label> <i class="far fa-question-circle"></i> 
  </div>

 <div class="confmainequipblock" v-if="nameOnly.includes('+ Конвейер ленточный 3')"> 
      <div class="confelemblock">
        <div class="block-equip-line">
          <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG"></div>
            <div class="block-equip-line-desc">
            <h3>Конвейер ленточный</h3>
                <div class="block-kp-line-price">
                  <div v-for="prod in konv3"
                  :key="prod.name">
                  <h4>{{prod.price}}р.</h4>
                  </div>
                </div>
    <div v-for="prod in konv3opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedkonv3opt(prod)"
             ><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
    </div>

            </div>
          </div>  
          <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv2 }}р.</span></div>
      </div>  
    </div>

<!--/Добавляем конвейер-->
</div>

<div id="slidecheckblock" v-for="prod in peregruzshnek"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedperegruzshnek(prod)"><label :for="prod.name" class="checkbox mb20"> Перегрузчик шнековый</label><i class="far fa-question-circle"></i> 
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Перегрузчик шнековый')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="http://nur-man.ru/upload/resize_cache/iblock/c13/160_160_1/c13eba24bd0d07602c9665fbd995c714.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Перегрузчик шнековый</h3>
                <div class="block-kp-line-price">
                  <div v-for="prod in peregruzshnek"
                  :key="prod.name">
                  <h4>{{prod.price}}р.</h4>
                  </div>
                </div>
          <div v-for="prod in peregruzshnekopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedperegruzshnekopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumperegruzshnek }}р.</span></div>
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in vygruznoyblock"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedvygruznoyblock(prod)"><label :for="prod.name" class="checkbox mb20"> Выгрузной блок</label><i class="far fa-question-circle"></i> 
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Выгрузной блок')">
  <div class="confelemblock">
        <div class="block-equip-line">
          <div class="block-equip-line-img"><img src="http://nur-man.ru/upload/resize_cache/iblock/6dd/160_160_1/6dda81c98906bd5d95f574fe75950838.jpg"></div>
            <div class="block-equip-line-desc">
            <h3>Выгрузной блок</h3>
                <div class="block-kp-line-price">
                  <div v-for="prod in vygruznoyblock"
                  :key="prod.name">
                  <h4>{{prod.price}}р.</h4>
                  </div>
                </div>
            <div v-for="prod in vygruznoyblockopt"
           :class="prod.name" 
           :key="prod.name">
      
            <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedvygruznoyblockopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
            </div>
          </div>  
          <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumvygruznoyblock}}р.</span></div>
      </div>  
      <div class="addequip" @click="addvygruzblock" v-show="!vygruzblockadded">+ Добавить ещё один выгрузной блок</div>
</div>

<div v-if="vygruzblockadded">
<div id="slidecheckblock" v-for="prod in vygruznoyblock2"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedvygruznoyblock2(prod)"><label :for="prod.name" class="checkbox mb20"> Выгрузной блок</label><i class="far fa-question-circle"></i> 
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Выгрузной блок (2)')">
  <div class="confelemblock">
        <div class="block-equip-line">
          <div class="block-equip-line-img"><img src="http://nur-man.ru/upload/resize_cache/iblock/6dd/160_160_1/6dda81c98906bd5d95f574fe75950838.jpg"></div>
            <div class="block-equip-line-desc">
            <h3>Выгрузной блок</h3>
                <div class="block-kp-line-price">
                  <div v-for="prod in vygruznoyblock"
                  :key="prod.name">
                  <h4>{{prod.price}}р.</h4>
                  </div>
                </div>
            <div v-for="prod in vygruznoyblock2opt"
           :class="prod.name" 
           :key="prod.name">
      
            <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedvygruznoyblock2opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
            </div>
          </div>  
          <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumvygruznoyblock2}}р.</span></div>
      </div>  
  </div>
</div>

<div id="slidecheckblock" v-for="prod in stolkip"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedstolkip(prod)"><label :for="prod.name" class="checkbox mb20"> Стол для раскрытия пресованных кип с конвейером</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('Стол для раскрытия пресованных кип с конвейером')">
<div class="confelemblock">
            <div class="stolraskkipblock">

                <!--Стол для раскрытия кип-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img class="testimg_2" src="http://nur-man.ru/upload/resize_cache/iblock/75b/160_160_1/75b6694ef8dcdf3946d52b1c1c2ea7d5.jpg"></div>
                    <div class="block-equip-line-desc">
                        <h3>Стол для раскрытия кип</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in stolkip"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in stolkipopt1"
                        :class="prod.name" 
                        :key="prod.name">
      
                        <input type="checkbox" 
                         name="products[]" 
                         :id="prod.name" 
                         :value="prod.price" 
                         @change="selectedstolkipopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumstolkip}}р.</span></div>
                <!--/Стол для раскрытия кип-->

            </div>
</div>
</div>

<div id="slidecheckblock" v-for="prod in razbivkipver"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedrazbivkipver(prod)"><label :for="prod.name" class="checkbox mb20"> Устройство разбивания прессованных кип (вертикальное)</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство разбивания прессованных кип (вертикальное)')">  
      <div class="confelemblock">
            <div class="razbivkipvertblock">

                <!--Устройство разбивания прессованных кип вертикальное-->
                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img src="http://nur-man.ru/upload/resize_cache/iblock/097/160_160_1/097315b16bc1b32b3461a337dc9a3fa5.jpg"></div>
                    <div class="block-equip-line-desc">
                        <h3>Устройство разбивания прессованных кип вертикальное</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in razbivkipver"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in razbivkipveropt"
                        :class="prod.name" 
                        :key="prod.name">
      
                        <input type="checkbox" 
                         name="products[]" 
                         :id="prod.name" 
                         :value="prod.price" 
                         @change="selectedrazbivkipveropt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumrazbivkipver}}р.</span></div>
                <!--/Устройство разбивания прессованных кип вертикальное-->

            </div>
      </div>      
</div>  

<div id="slidecheckblock" v-for="prod in razbivkipgor"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedrazbivkipgor(prod)"><label :for="prod.name" class="checkbox mb20"> {{prod.name}}</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство разбивания прессованных кип (горизонтальное)')">  

        <div class="confelemblock">
            <div class="razbivkipgorblock">
                <!--Устройство разбивания прессованных кип горизонтальное-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/b48/160_160_1/b48b632ccb475030e7d49cf4cc63a7fd.png"></div>
                    <div class="block-equip-line-desc">
                            <h3>Устройство разбивания прессованных кип горизонтальное</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in razbivkipgor"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in razbivkipgoropt"
                        :key="prod.name">
      
                        <input type="checkbox" 
                        :key="prod.name"
                         name="products[]" 
                         :value="prod.price" 
                         @change="selectedrazbivkipgoropt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>    
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumrazbivkipgor}}р.</span></div>
                <!--/Устройство разбивания прессованных кип горизонтальное-->

            </div>

        </div>
</div>  


<div id="slidecheckblock" v-for="prod in sortuchast"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsortuchast(prod)"><label :for="prod.name" class="checkbox mb20"> {{prod.name}}</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('Сортировочный участок горизонтальный')">  

        <div class="confelemblock">
            <div class="razbivkipgorblock">
                <!--Устройство разбивания прессованных кип горизонтальное-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/f79/160_160_1/f796719a56f21701359e842f2f5cd6c3.jpg"></div>
                    <div class="block-equip-line-desc">
                            <h3>Сортировочный участок горизонтальный</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in sortuchast"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in sortuchastopt"
                        :key="prod.name">
      
                        <input type="checkbox" 
                        :key="prod.name"
                         name="products[]" 
                         :value="prod.price" 
                         @change="selectedsortuchastopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>    
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumsortuchast}}р.</span></div>
                <!--/Устройство разбивания прессованных кип горизонтальное-->

            </div>

        </div>
</div>  

<div id="slidecheckblock" v-for="prod in lkonv"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedlkonv(prod)"><label :for="prod.name" class="checkbox mb20"> {{prod.name}}</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('L-образный конвейер с участком сортировки')">  

        <div class="confelemblock">
            <div class="razbivkipgorblock">
                <!--L-образный конвейер с участком сортировки-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/713/160_160_1/713e01b5afd0d0cf6e23feaae949df1b.jpg"></div>
                    <div class="block-equip-line-desc">
                            <h3>L-образный конвейер с участком сортировки</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in lkonv"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in lkonvopt"
                        :key="prod.name">
      
                        <input type="checkbox" 
                        :key="prod.name"
                         name="products[]" 
                         :value="prod.price" 
                         @change="selectedlkonvopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>    
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumlkonv}}р.</span></div>
                <!--/L-образный конвейер с участком сортировки-->

            </div>

        </div>
</div>  

<div id="slidecheckblock" v-for="prod in sortpost"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsortpost(prod)"><label :for="prod.name" class="checkbox mb20"> {{prod.name}}</label><i class="far fa-question-circle"></i> 
</div>

<div class="confmainequipblock" v-if="nameOnly.includes('Сортировочный комплекс (на 6-30 постов)')">  

        <div class="confelemblock">
            <div class="razbivkipgorblock">
                <!--L-образный конвейер с участком сортировки-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/998/160_160_1/99852b432d611236ec9d5bd12ec36392.jpg"></div>
                    <div class="block-equip-line-desc">
                            <h3>Сортировочный комплекс (на 6-30 постов)</h3>
                        <div class="block-kp-line-price">
                          <div v-for="prod in sortpost"
                          :key="prod.name">
                          <h4>{{prod.price}}р.</h4>
                          </div>
                        </div>
                        <div v-for="prod in sortpostopt"
                        :key="prod.name">
      
                        <input type="checkbox" 
                        :key="prod.name"
                         name="products[]" 
                         :value="prod.price" 
                         @change="selectedsortpostopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
                        </div>
                    </div>    
                </div>
                <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{sumsortpost}}р.</span></div>
                <!--/L-образный конвейер с участком сортировки-->
        </div> 
      </div> 
    </div>
  </div>
       <div class="tab-pane" :class="[{ 'active show': isActive('ochist-cat') }, { 'active show': isActive('all-cat') }]" id="ochist-cat">
        <h3 class="titlecategory">Оборудование для обработки (очистки)</h3>
<div id="slidecheckblock" v-for="prod in grohotsmall"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotsmall(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Грохот моющий (малый)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png"></div>
          <div class="block-equip-line-desc">
        <h3>Грохот моющий (малый)</h3>
          <div v-for="prod in grohotsmallopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotsmallopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotsmall }}р.</span></div>
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in grohotbig"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotbig(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Грохот моющий (большой)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/09b/160_160_1/09b76f5b1bd7c5ceed6ae6653e5b9f0a.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Грохот моющий (большой)</h3>
          <div v-for="prod in grohotbigopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotbigopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotbig }}р.</span></div>  
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in grohotnurman"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotnurman(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Грохот моющий. Серия NURMAN')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png"></div>
          <div>
        <h3>Грохот моющий. Серия NURMAN</h3>
          <div v-for="prod in grohotnurmanopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedgrohotnurmanopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotnurman }}р.</span></div> 
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in otdiretiket500"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiket500(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство отдирания этикетки. Модель LR-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/iblock/483/483e943ac6e4961e4f558a03b8623293.png"></div>
          <div class="block-equip-line-desc">
        <h3>Устройство отдирания этикетки. Модель LR-500</h3>
          <div v-for="prod in otdiretiket500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiket500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiket500 }}р.</span></div> 
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in otdiretiket1000"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiket1000(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство отдирания этикетки. Модель LR-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/iblock/483/483e943ac6e4961e4f558a03b8623293.png"></div>
          <div>
        <h3>Устройство отдирания этикетки. Модель LR-1000</h3>
          <div v-for="prod in otdiretiket1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiket1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiket1000 }}р.</span></div> 
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in otdiretiketwash500"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiketwash500(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство отдирания этикетки (моющее). Модель LR-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/6c6/160_160_1/6c665934b1c92a1c131d8e7d65ba7725.png"></div>
          <div class="block-equip-line-desc">
        <h3>Устройство отдирания этикетки (моющее). Модель LR-500</h3>
          <div v-for="prod in otdiretiketwash500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiketwash500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiketwash500 }}р.</span></div> 
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in otdiretiketwash1000"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiketwash1000(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Устройство отдирания этикетки (моющее). Модель LR-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/6c6/160_160_1/6c665934b1c92a1c131d8e7d65ba7725.png"></div>
          <div>
        <h3>Устройство отдирания этикетки (моющее). Модель LR-1000</h3>
          <div v-for="prod in otdiretiketwash1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotdiretiketwash1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiketwash1000 }}р.</span></div>   
      </div>  
</div>
      </div>

           <div class="tab-pane" :class="[{ 'active show': isActive('izmelch-cat') }, { 'active show': isActive('all-cat') }]" id="izmelch-cat">
      <h3 class="titlecategory">Измельчители</h3>
      
<div id="slidecheckblock" v-for="prod in drobilkacrl500"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl500(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-500')">
<div class="confelemblock" v-for="prod in drobilkacrl500"
           :key="prod.name"
          :class="prod.class">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img :src="prod.img"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-500 </h3>
          <div v-for="prod in drobilkacrl500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl500 }}р.</span></div> 
      </div>  
      <div class="addequip" @click="adddrob500" v-show="!drob500added">+ Добавить ещё один конвейер</div>
  </div>

<div v-if="drob500added">
  <div id="slidecheckblock" v-for="prod in drobilkacrl5002"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl5002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-500 (2)')">
<div class="confelemblock" v-for="prod in drobilkacrl5002"
           :key="prod.name"
          :class="prod.class">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img :src="prod.img"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-500 (2)</h3>
          <div v-for="prod in drobilkacrl5002opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl5002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl5002 }}р.</span></div> 
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in drobilkacrl600"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl600(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-600')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div>
        <h3>Дробилка универсальная (моющая). Модель - CRL-600</h3>
          <div v-for="prod in drobilkacrl600opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl600opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl600 }}р.</span></div>   
      </div>  
      <div class="addequip" @click="adddrob600" v-show="!drob600added">+ Добавить ещё один конвейер</div>
  </div>

<div v-if="drob600added">
  <div id="slidecheckblock" v-for="prod in drobilkacrl6002"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl6002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-600 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div>
        <h3>Дробилка универсальная (моющая). Модель - CRL-600 (2)</h3>
          <div v-for="prod in drobilkacrl6002opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl6002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl6002 }}р.</span></div>   
      </div>  
  </div>
</div>

<div id="slidecheckblock" v-for="prod in drobilkacrl700"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl700(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-700')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-700</h3>
          <div v-for="prod in drobilkacrl700opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl700opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl700 }}р.</span></div> 
      </div>  
      <div class="addequip" @click="adddrob700" v-show="!drob700added">+ Добавить ещё одну дробилку</div>
  </div>

<div v-if="drob700added">
  <div id="slidecheckblock" v-for="prod in drobilkacrl7002"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl7002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-700 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-700 (2)</h3>
          <div v-for="prod in drobilkacrl7002opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl7002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl7002 }}р.</span></div> 
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in drobilkacrl800"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl800(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-800')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-800</h3>
          <div v-for="prod in drobilkacrl800opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl800opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl800 }}р.</span></div>   
      </div>  
      <div class="addequip" @click="adddrob800" v-show="!drob800added">+ Добавить ещё одну дробилку</div>
  </div>

<div v-if="drob800added">  
  <div id="slidecheckblock" v-for="prod in drobilkacrl8002"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl8002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-800 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-800 (2)</h3>
          <div v-for="prod in drobilkacrl8002opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl8002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl8002 }}р.</span></div>   
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in drobilkacrl900"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl900(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-900')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-900</h3>
          <div v-for="prod in drobilkacrl900opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl900opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl900 }}р.</span></div>   
      </div>  
      <div class="addequip" @click="adddrob900" v-show="!drob900added">+ Добавить ещё одну дробилку</div>
  </div>

<div v-if="drob900added">  
  <div id="slidecheckblock" v-for="prod in drobilkacrl9002"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl9002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-900 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-900 (2)</h3>
          <div v-for="prod in drobilkacrl9002opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl9002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl9002 }}р.</span></div>   
      </div>  
  </div>
</div>  

  <div id="slidecheckblock" v-for="prod in drobilkacrl1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl1000(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-1000</h3>
          <div v-for="prod in drobilkacrl1000opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl1000 }}р.</span></div>    
      </div>  
      <div class="addequip" @click="adddrob1000" v-show="!drob1000added">+ Добавить ещё одну дробилку</div>
  </div>


<div v-if="drob1000added">  
  <div id="slidecheckblock" v-for="prod in drobilkacrl10002"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl10002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-1000 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-1000</h3>
          <div v-for="prod in drobilkacrl10002opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl10002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl10002 }}р.</span></div>    
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in drobilkacrl1100"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl1100(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-1100')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-1100</h3>
          <div v-for="prod in drobilkacrl1100opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl1100opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl1100 }}р.</span></div> 
      </div>  
      <div class="addequip" @click="adddrob1100" v-show="!drob1100added">+ Добавить ещё одну дробилку</div>
  </div>

<div v-if="drob1100added">  
  <div id="slidecheckblock" v-for="prod in drobilkacrl11002"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl11002(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная (моющая). Модель - CRL-1100 (2)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная (моющая). Модель - CRL-1100 (2)</h3>
          <div v-for="prod in drobilkacrl11002opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrl11002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl11002 }}р.</span></div> 
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in drobilkacrh30"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh30(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRH-30')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRH-30</h3>
          <div v-for="prod in drobilkacrh30opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh30opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>        
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh30 }}р.</span></div>  
      </div>  
  </div>


<div id="slidecheckblock" v-for="prod in drobilkacrh37"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh37(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRH-37')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRH-37</h3>
          <div v-for="prod in drobilkacrh37opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh37opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>   
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh37 }}р.</span></div>  
      </div>  
  </div>


      
  <div id="slidecheckblock" v-for="prod in drobilkacrh45"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh45(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRH-45')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRH-45</h3>
          <div v-for="prod in drobilkacrh45opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh45opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>   
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh45 }}р.</span></div>  
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in drobilkacrh55"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh55(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRH-55')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRH-55</h3>
          <div v-for="prod in drobilkacrh55opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh55opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>     
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh55 }}р.</span></div>  
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in drobilkacrh75"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh75(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRH-75')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRH-75</h3>
          <div v-for="prod in drobilkacrh75opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh75opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh75 }}р.</span></div>     
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in drobilkacrsh160"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh160(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Дробилка универсальная тяжелая (моющая). Модель - CRSH-160')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Дробилка универсальная тяжелая (моющая). Модель - CRSH-160</h3>
          <div v-for="prod in drobilkacrsh160opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selecteddrobilkacrh160(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh160 }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in shredoss2260"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredoss2260(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-2260-300')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/217/160_160_1/217c733ba1315af6e1c45e659f67f5d7.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-2260-300</h3>
          <div v-for="prod in shredoss2260opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredoss2260opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredoss2260 }}р.</span></div> 
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in shredoss3080"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredoss3080(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-3080-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/217/160_160_1/217c733ba1315af6e1c45e659f67f5d7.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-3080-500</h3>
          <div v-for="prod in shredoss3080opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredoss3080opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredoss3080 }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in shredtsfs2260"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs2260(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-2260')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-2260</h3>
          <div v-for="prod in shredtsfs2260opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs2260opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs2260 }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in shredtsfs3080"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs3080(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-3080')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-3080</h3>
          <div v-for="prod in shredtsfs3080opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs3080opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs3080 }}р.</span></div> 
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in shredtsfs40100"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs40100(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-40100')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-40100</h3>
          <div v-for="prod in shredtsfs40100opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredtsfs40100opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs40100 }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in shredfss8040"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8040(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8040')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8040</h3>
          <div v-for="prod in shredfss8040opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8040opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8040 }}р.</span></div> 
      </div>  
  </div>


  
  <div id="slidecheckblock" v-for="prod in shredfss8060"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8060(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8060')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8060</h3>
          <div v-for="prod in shredfss8060opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8060opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8060 }}р.</span></div> 
      </div>  
  </div>


    
  <div id="slidecheckblock" v-for="prod in shredfss8080"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8080(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8080')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8080</h3>
          <div v-for="prod in shredfss8080opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss8080opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8080 }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in shredfss80100"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss80100(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-80100')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-80100</h3>
          <div v-for="prod in shredfss80100opt"
           :class="prod.name" 
           :key="prod.name">
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedshredfss80100opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss80100 }}р.</span></div> 
      </div>  
  </div>
      </div>
     <div class="tab-pane" :class="[{ 'active show': isActive('mojki-cat') }, { 'active show': isActive('all-cat') }]" id="mojki-cat">
        <h3 class="titlecategory">Моечное оборудование</h3>

  <div id="slidecheckblock" v-for="prod in frikcmojkaperegruz"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedfrikcmojkaperegruz(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Фрикционная мойка (с функцией перегрузки)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/830/160_160_1/8303a5d2771ccdbb6fb9723d31846495.png"></div>
          <div class="block-equip-line-desc">
        <h3>Фрикционная мойка (с функцией перегрузки)</h3>
          <div v-for="prod in frikcmojkaperegruzopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedfrikcmojkaperegruzopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumfrikcmojkaperegruz }}р.</span></div> 
      </div>  
  </div>



  <div id="slidecheckblock" v-for="prod in frikcmojkaperegruzgilza"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedfrikcmojkaperegruzgilza(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Фрикционная мойка с перфорированной гильзой (с функцией перегрузки)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/0b7/160_160_1/0b7b352f2dc5b49a89b6207ac8737a31.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Фрикционная мойка с перфорированной гильзой (с функцией перегрузки)</h3>
          <div v-for="prod in frikcmojkaperegruzgilzaopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedfrikcmojkaperegruzgilzaopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>            
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumfrikcmojkaperegruzgilza }}р.</span></div> 
      </div>  
  </div>




  <div id="slidecheckblock" v-for="prod in otgimfrikс"
           :key="prod.name"
          :class="prod.class"
          >
      
      <input type="checkbox" 
            class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikс(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>

<div class="confmainequipblock" v-if="nameOnly.includes('Отжим фрикционный (барабанного типа, с одной центрифугой)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/8c8/160_160_1/8c8d597529fd8ce8686051bdd591d07e.png"></div>
          <div class="block-equip-line-desc">
        <h3>Отжим фрикционный (барабанного типа, с одной центрифугой)</h3>
          <div v-for="prod in otgimfrikсopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>         
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikс }}р.</span></div>    
      </div>  
  </div>


<div id="slidecheckblock" v-for="prod in otgimfrikсfom500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсfom500(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/be9/160_160_1/be919bae46d4552e6a3b3a5174f51c59.png"></div>
          <div class="block-equip-line-desc">
        <h3>Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-500</h3>
          <div v-for="prod in otgimfrikсfom500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсfom500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>       
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсfom500 }}р.</span></div>   
      </div>  
  </div>

  <div id="slidecheckblock" v-for="prod in otgimfrikсfom1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсfom1000(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/be9/160_160_1/be919bae46d4552e6a3b3a5174f51c59.png"></div>
          <div class="block-equip-line-desc">
        <h3>Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-1000</h3>
          <div v-for="prod in otgimfrikсfom1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсfom1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>        
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсfom1000 }}р.</span></div>   
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in mojkafrikсrfw500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw500(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Мойка фрикционная (роторного типа). Модель-RFW-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg"></div>
          <div class="block-equip-line-desc">
        <h3>Мойка фрикционная (роторного типа). Модель-RFW-500</h3>
          <div v-for="prod in mojkafrikсrfw500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>       
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw500 }}р.</span></div> 
      </div>  
      <div class="addequip" @click="addmojka" v-show="!mojkaadded">+ Добавить ещё одну мойку</div>
  </div>

<div v-if="mojkaadded">  
  <div id="slidecheckblock" v-for="prod in mojkafrikсrfw500_2"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw5002(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Мойка фрикционная (роторного типа) (2). Модель-RFW-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg"></div>
          <div class="block-equip-line-desc">
        <h3>Мойка фрикционная (роторного типа). Модель-RFW-500</h3>
          <div v-for="prod in mojkafrikсrfw500_2opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw5002opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>       
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw5002 }}р.</span></div> 
      </div>  
  </div>
</div>

  <div id="slidecheckblock" v-for="prod in mojkafrikсrfw1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw1000(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Мойка фрикционная (роторного типа). Модель-RFW-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg"></div>
          <div class="block-equip-line-desc">
        <h3>Мойка фрикционная (роторного типа). Модель-RFW-1000</h3>
          <div v-for="prod in mojkafrikсrfw1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkafrikсrfw1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>     
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw1000 }}р.</span></div> 
      </div>  
  </div>

<div id="slidecheckblock" v-for="prod in otgimfrikсvert"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсvert(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Отжим фрикционный (вертикальный)')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/405/160_160_1/405712fc0ad051c24a9de1eb6338d744.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Отжим фрикционный (вертикальный)</h3>
          <div v-for="prod in otgimfrikсvertopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedotgimfrikсvertopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсvert }}р.</span></div>      
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in ustzamach"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedustzamach(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Установка замачивания')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/fc2/160_160_1/fc27de28c1875f3bf35f58e64d75f469.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Установка замачивания</h3>
          <div v-for="prod in ustzamachopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedustzamachopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>      
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumustzamach }}р.</span></div> 
      </div>  
  </div>


  <div id="slidecheckblock" v-for="prod in mojkaunivers"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkaunivers(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Мойка универсальная с автономной системой очистки воды')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/9c6/160_160_1/9c63df4eb4e3e8c795711c74dcad0269.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Мойка универсальная с автономной системой очистки воды</h3>
          <div v-for="prod in mojkauniversopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedmojkauniversopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>   
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkaunivers }}р.</span></div>  
      </div>  
  </div>
</div>

     <div class="tab-pane" :class="[{ 'active show': isActive('flot-cat') }, { 'active show': isActive('all-cat') }]" id="flot-cat">
        <h3 class="titlecategory">Флотационное оборудование</h3>
      
      
<div id="slidecheckblock" v-for="prod in flottonkompakt"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonkompakt(prod)"> <label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для тонущих полимеров. Модель FL-Pet-500 Компактная')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/20f/160_160_1/20f4b7e3b3b717a0c725461903154baf.png"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для тонущих полимеров. Модель FL-Pet-500 Компактная</h3>
          <div v-for="prod in flottonkompaktopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonkompaktopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>       
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonkompakt }}р.</span></div>  
      </div>  
  </div>

<div id="slidecheckblock" v-for="prod in flottonpet500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonpet500(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для тонущих полимеров. Модель FL-Pet-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/0cd/160_160_1/0cda2064ded7c6ec02cfd3be31c269f8.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для тонущих полимеров. Модель FL-Pet-500</h3>
          <div v-for="prod in flottonpet500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonpet500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonpet500 }}р.</span></div>  
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in flottonpet1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonpet1000(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для тонущих полимеров. Модель FL-Pet-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/0cd/160_160_1/0cda2064ded7c6ec02cfd3be31c269f8.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для тонущих полимеров. Модель FL-Pet-1000</h3>
          <div v-for="prod in flottonpet1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflottonpet1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonpet1000 }}р.</span></div> 
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in flotplav500kompakt"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav500kompakt(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500 Компактная')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/417/160_160_1/417c630647404f30837d5b31eebc0c2c.png"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500 Компактная</h3>
          <div v-for="prod in flotplav500kompaktopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav500kompaktopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav500kompakt }}р.</span></div>  
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in flotplav1000kompakt"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav1000kompakt(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000 Компактная')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/417/160_160_1/417c630647404f30837d5b31eebc0c2c.png"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000 Компактная</h3>
          <div v-for="prod in flotplav1000kompaktopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav1000kompaktopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav1000kompakt }}р.</span></div> 
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in flotplav500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav500(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500</h3>
          <div v-for="prod in flotplav500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav500 }}р.</span></div>  
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in flotplav1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav1000(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png"></div>
          <div class="block-equip-line-desc">
        <h3>Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000</h3>
          <div v-for="prod in flotplav1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplav1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav1000 }}р.</span></div>   
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in flotplavnurman"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplavnurman(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Ванна флотации для плавающих полимеров. Серия NURMAN')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png"></div>
          <div>
        <h3>Ванна флотации для плавающих полимеров. Серия NURMAN</h3>
          <div v-for="prod in flotplavnurmanopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedflotplavnurmanopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div> 
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplavnurman }}р.</span></div>  
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in ustflotton"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedustflotton(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Установка флотирования для тонущих полимеров')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/7da/160_160_1/7da68c6a5cb38153f6644f592a317f35.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Установка флотирования для тонущих полимеров</h3>
          <div v-for="prod in ustflottonopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedustflottonopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumustflotton }}р.</span></div>   
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in washflotplav"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedwashflotplav(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Моющая флотационная машина для плавающих материалов')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/134/160_160_1/13469175b946b08707666a33ef6a798d.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Моющая флотационная машина для плавающих материалов</h3>
          <div v-for="prod in washflotplavopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedwashflotplavopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumwashflotplav }}р.</span></div>   
      </div>  
  </div>     
</div>
     <div class="tab-pane" :class="[{ 'active show': isActive('sush-cat') }, { 'active show': isActive('all-cat') }]" id="sush-cat">
        <h3 class="titlecategory">Сушильное оборудование</h3>

<div id="slidecheckblock" v-for="prod in sushkatt500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkatt500(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Сушка для твёрдых пластмасс. Модель С-ТТ-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/1a2/160_160_1/1a25930656378db359e9ea8078cdd12b.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Сушка для твёрдых пластмасс. Модель С-ТТ-500</h3>
          <div v-for="prod in sushkatt500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkatt500opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkatt500 }}р.</span></div> 
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in sushkatt1000"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkatt1000(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Сушка для твёрдых пластмасс. Модель С-ТТ-1000')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/1a2/160_160_1/1a25930656378db359e9ea8078cdd12b.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Сушка для твёрдых пластмасс. Модель С-ТТ-1000</h3>
          <div v-for="prod in sushkatt1000opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkatt1000opt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>  
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkatt1000 }}р.</span></div>   
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in sushkaplen"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkaplen(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Сушка для пленок')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/2fc/160_160_1/2fc5f9227d26251a3aaf24bec0511992.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Сушка для пленок</h3>
          <div v-for="prod in sushkaplenopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selectedsushkaplenopt(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>    
          </div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkaplen }}р.</span></div> 
      </div>  
</div>
</div>

     <div class="tab-pane" :class="[{ 'active show': isActive('aglomerat-cat') }, { 'active show': isActive('all-cat') }]" id="aglomerat-cat">
        <h3 class="titlecategory">Оборудование для повышения насыпной плотности</h3>

  <div id="slidecheckblock" v-for="prod in pa22"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Пресс агломератор. Модель ПА-22')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Пресс агломератор. Модель ПА-22</h3>
          <div v-for="prod in pa22opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in pa30"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Пресс агломератор. Модель ПА-30')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Пресс агломератор. Модель ПА-30</h3>
          <div v-for="prod in pa30opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in pa37"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Пресс агломератор. Модель ПА-37')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Пресс агломератор. Модель ПА-37</h3>
          <div v-for="prod in pa37opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in opa300"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Отжимной пресс-агломератор. Модель ОПА-300')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/c8d/160_160_1/c8d5ee31b6992d14592ef9baa733cafa.jpg"></div>
          <div>
        <h3>Отжимной пресс-агломератор. Модель ОПА-300</h3>
          <div v-for="prod in opa300opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in opa500"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Отжимной пресс-агломератор. Модель ОПА-500')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/c8d/160_160_1/c8d5ee31b6992d14592ef9baa733cafa.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Отжимной пресс-агломератор. Модель ОПА-500</h3>
          <div v-for="prod in opa500opt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="optionclass"> {{prod.name}}</label>
            </div>
          </div>
        </div>
      </div>  
</div>

      </div>
      <div class="tab-pane" :class="[{ 'active show': isActive('othet-cat') }, { 'active show': isActive('all-cat') }]" id="othet-cat">
        <h3 class="titlecategory">Вспомогательное оборудование</h3>

<div id="slidecheckblock" v-for="prod in zatochstan"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Заточной станок')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/bd8/160_160_1/bd81c198ba2a44ff032de9deadf7e13b.jpg"></div>
          <div class="block-equip-line-desc">
        <h3>Заточной станок</h3>
         
          </div>
        </div>
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in sortoptical"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Установка оптической сортировки измельченного материала')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/acc/160_160_1/acc8689e285e8020438c28592b12bd12.jpg"></div>
          <div>
        <h3>Установка оптической сортировки измельченного материала</h3>
         
          </div>
        </div>
      </div>  
</div>
      </div>
      <div class="tab-pane" :class="[{ 'active show': isActive('system-water-cat') }, { 'active show': isActive('all-cat') }]" id="system-water-cat">
        <h3 class="titlecategory">Системы очистки воды</h3>

<div id="slidecheckblock" v-for="prod in systemfreshwater25"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Система очистки воды централизованная. Вариант произодительностью 2,5 м3/час')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4cc/160_160_1/4ccd145e7268b84af6d6f68a02366005.png"></div>
          <div>
        <h3>Система очистки воды централизованная. Вариант произодительностью 2,5 м3/час</h3>
         
          </div>
        </div>
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in systemfreshwater5"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Система очистки воды централизованная. Вариант произодительностью 5 м3/час')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4cc/160_160_1/4ccd145e7268b84af6d6f68a02366005.png"></div>
          <div>
        <h3>Система очистки воды централизованная. Вариант произодительностью 5 м3/час</h3>
         
          </div>
        </div>
      </div>  
</div>

<div id="slidecheckblock" v-for="prod in systemfreshwater10"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Система очистки воды централизованная. Вариант произодительностью 10 м3/час')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4cc/160_160_1/4ccd145e7268b84af6d6f68a02366005.png"></div>
          <div>
        <h3>Система очистки воды централизованная. Вариант произодительностью 10 м3/час</h3>
         
          </div>
        </div>
      </div>  
</div>


<div id="slidecheckblock" v-for="prod in systemfreshwater15"
           :key="prod.name"
          :class="prod.class"
          >
      <input type="checkbox" 
             class="slide-checkbox"
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"><label :for="prod.name" class="checkbox">{{prod.name}}</label>
    </div>
<div class="confmainequipblock" v-if="nameOnly.includes('Система очистки воды централизованная. Вариант произодительностью 15 м3/час')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-equip-line-img"><img src="https://nur-man.ru/upload/resize_cache/iblock/4cc/160_160_1/4ccd145e7268b84af6d6f68a02366005.png"></div>
          <div>
        <h3>Система очистки воды централизованная. Вариант произодительностью 15 м3/час</h3>
         
          </div>
        </div>
      </div>  
</div>

      
      </div>
      <div class="tab-pane" :class="{ 'active show': isActive('line-granul-cat') }" id="line-granul-cat">
       <h3 class="titlecategory">Линии грануляции</h3>
       <div class="confmainequipblock" v-if="nameOnly.includes('Перегрузчик шнековый')">
<div class="confelemblock">
        <div class="block-equip-line">
        <div class="block-kp-line-img"><img src="http://nur-man.ru/upload/resize_cache/iblock/c13/160_160_1/c13eba24bd0d07602c9665fbd995c714.jpg"></div>
        <div>
        <h4>Перегрузчик шнековый</h4>
          <div v-for="prod in peregruzshnekopt"
           :class="prod.name" 
           :key="prod.name">
      
      <input type="checkbox" 
             name="products[]" 
             :id="prod.name" 
             :value="prod.price" 
             @change="selected(prod)"> {{prod.name}}{{prod.price}}
        </div>
        </div> 
        <div class="block-kp-line-price">
        <div v-for="prod in peregruzshnek"
           :key="prod.name">
           <h4>{{prod.price}}р.</h4>
        </div>
        </div>
        </div>
      </div>  
  </div>
</div>
  </div> 
  </div>
  </b-col>
  <b-col>
  <div id="right-block" :class="[{ 'kppanel-rightblock': isActive('kp-conf') }, { 'kppanel-rightblock': isActive('kp-name') }, { 'kppanel-rightblock': isActive('pdftab') }]">
  

<div class="totalpriceblock"><p>Цена оборудования (линии):</p> <h4>{{ sumprototal }} <i class="fas fa-ruble-sign"></i></h4>
<a @click.prevent="setActive('kp-conf')" :class="{ active: isActive('kp-conf') }" href="#kp-conf">
  <div class="totalpriceblock_info">
  <i class="fas fa-file-invoice-dollar"></i> </div>
  <div class="totalpriceblock_link">Сконфигурировать линию</div>
</a>
</div>

  <div class="dopelemblock">
    
    <h3>Категории</h3>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('sortcat')" :class="{ active: isActive('sortcat') }" href="#sortcat'">Оборудование для сортировки</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('ochist-cat')" :class="{ active: isActive('ochist-cat') }" href="#ochist-cat">Оборудование для обработки (очистки)</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('izmelch-cat')" :class="{ active: isActive('izmelch-cat') }" href="#izmelch-cat">Измельчители</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('mojki-cat')" :class="{ active: isActive('mojki-cat') }" href="#mojki-cat">Моечное оборудование</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('flot-cat')" :class="{ active: isActive('flot-cat') }" href="#flot-cat">Флотационное оборудование</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('sush-cat')" :class="{ active: isActive('sush-cat') }" href="#sush-cat">Сушильное оборудование</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('aglomerat-cat')" :class="{ active: isActive('aglomerat-cat') }" href="#aglomerat-cat">Оборудование для повышения насыпной плотности</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('othet-cat')" :class="{ active: isActive('othet-cat') }" href="#othet-cat">Вспомогательное оборудование</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('system-water-cat')" :class="{ active: isActive('system-water-cat') }" href="#system-water-cat">Системы очистки воды</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('line-granul-cat')" :class="{ active: isActive('line-granul-cat') }" href="#line-granul-cat">Линии грануляции</a>
      </li>
    </ul>

   <br> 

     </div>

<!--
    <hr> 
    <pre>{{ selectedProds }}</pre>
    
    <hr>
    <pre>{{ nameOnly }}</pre>

    <hr>
    <pre>{{ dopProds }}</pre>
-->
    
 
      </div>
   
    </b-col>
    </b-row>
  </b-container>
</div>

</template>

<script>

import gsap from "gsap";

export default {
  name: 'App',

  data: function () {
    return {
      namekp: 'Коммерческое предложение на:',
  proizvoditelnost: '500',
  electroest: '388',
  electroreal: '250',
  waterconsumption: '6',
  productiontime: '90',
  discounted: false,
  konvadded: false,
  konvadded2: false,
  mojkaadded: false,
  vygruzblockadded: false,
  drob500added: false,
  drob600added: false,
  drob700added: false,
  drob800added: false,
  drob900added: false,
  drob1000added: false,
  drob1100added: false,
  foldpageadd: false,
  pagebreakarr: [],
  fullDate: "",
  checked: [],
  imglinesel: [],
  activeItem: 'mojki-cat',
   tweenedNumber: 0, 

   materialselected: 'отходы ПЭТ',
   material: [
     { name: "отходы ПЭТ", id: "001"},
     { name: "твердые тонкостенные отходы ПЭ/ПП", id: "002"},
     { name: "пленочные и нитевидные отходы ПЭ/ПП", id: "003"},
     { name: "отходы твёрдых тонкостенных ПЭ/ПП/ПЭТ и прочие отходы пластмасс", id: "004"}
   ],
    drobselected: '625000',
    discount: [
      { name: "Скидки",price: "0", id: 99},
    ],

    drobilkacrl500: [
      { name: "Дробилка универсальная (моющая). Модель - CRL-500", price: "1415000", id: 16, codename: 'namedrobilkacrl500', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
    ],
    drobilkacrl500opt: [
      { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
      { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
      { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
      { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
      { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
      { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
      { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
      { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
    ],

    drobilkacrl5002: [
      { name: "Дробилка универсальная (моющая). Модель - CRL-500 (2)", price: "1415000", id: 116, codename: 'namedrobilkacrl5002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
    ],
    drobilkacrl5002opt: [
      { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
      { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
      { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
      { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
      { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
      { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
      { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
      { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
    ],

      drobilkacrl600: [
        { name: "Дробилка универсальная (моющая). Модель - CRL-600", price: "1575000", id: 17, codename: 'namedrobilkacrl600', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
      ],
      drobilkacrl600opt: [
          { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
          { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
          { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
          { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
          { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
          { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
          { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
          { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
        ],

        drobilkacrl6002: [
          { name: "Дробилка универсальная (моющая). Модель - CRL-600 (2)", price: "1575000", id: 117, codename: 'namedrobilkacrl6002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
        ],
        drobilkacrl6002opt: [
            { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
            { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
            { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
            { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
            { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
            { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
            { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
            { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
          ],

        drobilkacrl700: [
          { name: "Дробилка универсальная (моющая). Модель - CRL-700", price: "1750000", id: 18, codename: 'namedrobilkacrl700', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
        ],
        drobilkacrl700opt: [
            { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
            { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
            { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
            { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
            { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
            { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
            { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
            { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
          ],    

          drobilkacrl7002: [
            { name: "Дробилка универсальная (моющая). Модель - CRL-700 (2)", price: "1750000", id: 118, codename: 'namedrobilkacrl7002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
          ],
          drobilkacrl7002opt: [
              { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
              { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
              { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
              { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
              { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
              { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "235000"},
              { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
              { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
            ],  

      drobilkacrl800: [
            { name: "Дробилка универсальная (моющая). Модель - CRL-800", price: "1945000", id: 19, codename: 'namedrobilkacrl800', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
        ],
      drobilkacrl800opt: [
              { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
              { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
              { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
              { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
              { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
              { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
              { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
              { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
        ],    

        drobilkacrl8002: [
          { name: "Дробилка универсальная (моющая). Модель - CRL-800 (2)", price: "1945000", id: 119, codename: 'namedrobilkacrl8002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
      ],
    drobilkacrl8002opt: [
            { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
            { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
            { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
            { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
            { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
            { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
            { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
            { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
      ],    


      drobilkacrl900: [
          { name: "Дробилка универсальная (моющая). Модель - CRL-900", price: "2160000", id: 20, codename: 'namedrobilkacrl900', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
        ],
      drobilkacrl900opt: [
            { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
            { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
            { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
            { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
            { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
            { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
            { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
            { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
      ],

      drobilkacrl9002: [
        { name: "Дробилка универсальная (моющая). Модель - CRL-900 (2)", price: "2160000", id: 120, codename: 'namedrobilkacrl9002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
      ],
    drobilkacrl9002opt: [
          { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
          { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
          { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
          { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
          { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
          { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
          { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
          { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
    ],

      drobilkacrl1000: [
        { name: "Дробилка универсальная (моющая). Модель - CRL-1000", price: "2400000", id: 21, codename: 'namedrobilkacrl1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
      ],
    drobilkacrl1000opt: [
          { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
          { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
          { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
          { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
          { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
          { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
          { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
          { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
    ],

    drobilkacrl10002: [
      { name: "Дробилка универсальная (моющая). Модель - CRL-1000 (2)", price: "2400000", id: 121, codename: 'namedrobilkacrl10002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
    ],
  drobilkacrl10002opt: [
        { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
        { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
        { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
        { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
        { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
        { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
        { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
        { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
  ],

    drobilkacrl1100: [
      { name: "Дробилка универсальная (моющая). Модель - CRL-1100", price: "2665000", id: 22, codename: 'namedrobilkacrl1100', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
    ],
    drobilkacrl1100opt: [
        { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
        { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
        { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
        { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
        { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
        { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
        { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
        { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
  ],

  drobilkacrl11002: [
    { name: "Дробилка универсальная (моющая). Модель - CRL-1100 (2)", price: "2665000", id: 122, codename: 'namedrobilkacrl11002', img: 'https://nur-man.ru/upload/resize_cache/iblock/a0d/160_160_1/a0d5359c335cd888248f2516f99d40a0.png', desc: 'Для измельчения материала в товарную фракцию в линии используется «Универсальная моющая дробилка». Дробилка является высокоскоростным роторным измельчителем. Данный тип измельчителя наиболее универсален. Для повышения качества отмывки в дробилку может подаваться вода.'},
  ],
  drobilkacrl11002opt: [
      { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
      { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
      { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
      { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
      { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
      { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
      { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
      { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

  drobilkacrh30: [
    { name: "Дробилка универсальная тяжелая (моющая). Модель - CRH-30", price: "1822000", id: 23, codename: 'namedrobilkacrh30', img: 'https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg'},
  ],
  drobilkacrh30opt: [
      { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
      { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
      { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
      { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
      { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
      { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
      { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
      { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],


drobilkacrh37: [
  { name: "Дробилка универсальная тяжелая (моющая). Модель - CRH-37", price: "2025000", id: 24, codename: 'namedrobilkacrh37', img: 'https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg'},
],
drobilkacrh37opt: [
    { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
    { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

drobilkacrh45: [
  { name: "Дробилка универсальная тяжелая (моющая). Модель - CRH-45", price: "2250000", id: 25, codename: 'namedrobilkacrh45', img: 'https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg'},
],
drobilkacrh45opt: [
    { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
    { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

drobilkacrh55: [
  { name: "Дробилка универсальная тяжелая (моющая). Модель - CRH-55", price: "2500000", id: 26, codename: 'namedrobilkacrh55', img: 'https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg'},
],
drobilkacrh55opt: [
    { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
    { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

drobilkacrh75: [
  { name: "Дробилка универсальная тяжелая (моющая). Модель - CRH-75", price: "2800000", id: 27, codename: 'namedrobilkacrh75', img: 'https://nur-man.ru/upload/resize_cache/iblock/847/160_160_1/847db1f7f4d0eab136cecd1d6d670447.jpg'},
],
drobilkacrh75opt: [
    { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
    { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

drobilkacrsh160: [
  { name: "Дробилка универсальная тяжелая (моющая). Модель - CRSH-160", price: "3100000", id: 28},
],
drobilkacrsh160opt: [
    { name: "+ Изготовление штатной калибровочной решетки с отверстиями диаметром 14 мм ", price: "8000"},
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "15000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
    { name: "+ Оснащение измельчителя предохранительной муфтой «Феродо»", price: "388000"},
],

rubilnayamashina: [
  { name: "Рубильная машина Nurman", price: "2900000", id: 29},
],

shredoss2260: [
  { name: "Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-2260-300", price: "2655000", id: 91, codename:'nameshredoss2260', img:'https://nur-man.ru/upload/resize_cache/iblock/217/160_160_1/217c733ba1315af6e1c45e659f67f5d7.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredoss2260opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
],

shredoss3080: [
  { name: "Измельчитель роторный (низкоскоростной) «Однороторный шредер». Модель - OSS-3080-500", price: "3360000", id: 92, codename:'nameshredoss3080', img:'https://nur-man.ru/upload/resize_cache/iblock/217/160_160_1/217c733ba1315af6e1c45e659f67f5d7.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredoss3080opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "280000"},
],

shredtsfs2260: [
  { name: "Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-2260", price: "3125000", id: 93, codename:'nameshredtsfs2260', img:'https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredtsfs2260opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredtsfs3080: [
  { name: "Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-3080", price: "4060000", id: 94, codename:'nameshredtsfs3080', img:'https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredtsfs3080opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredtsfs40100: [
  { name: "Измельчитель роторный (низкоскоростной) «Двухроторный шредер». Модель - TSFS-40100", price: "6175000", id: 95, codename:'nameshredtsfs40100', img:'https://nur-man.ru/upload/resize_cache/iblock/3ba/160_160_1/3ba0a681f1de33f71fafea7ab8f6be52.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredtsfs40100opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredfss8040: [
  { name: "Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8040", price: "3960000", id: 96, codename:'nameshredfss8040', img:'https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredfss8040opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredfss8060: [
  { name: "Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8060", price: "4400000", id: 97, codename:'nameshredfss8060', img:'https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredfss8060opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredfss8080: [
  { name: "Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-8080", price: "4890000", id: 98, codename:'nameshredfss8080', img:'https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredfss8080opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],

shredfss80100: [
  { name: "Измельчитель роторный (низкоскоростной) «Четырёхроторный шредер». Модель - FFS-80100", price: "5430000", id: 99, codename:'nameshredfss80100', img:'https://nur-man.ru/upload/resize_cache/iblock/4c3/160_160_1/4c3af84c47b5855ed9830c82be9e1455.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
],
shredfss80100opt: [
    { name: "+ Оснащение измельчителя корзиной приемной ", price: "20000"},
    { name: "+ Оснащение измельчителя корзиной приемной сдвоенной ", price: "25000"},
    { name: "+ Оснащение измельчителя корзиной приемной с разделением на два потока", price: "32000"},
    { name: "+ Оснащение измельчителя пневмотранспортом", price: "120000"},
    { name: "+ Оснащение измельчителя выгребным шнеком однонаправленным", price: "238000"},
    { name: "+ Оснащение измельчителя выгребным шнеком двунаправленным", price: "288000"},
],
    
    mojkiselected: '300000',
    mojki: [
      { name: "Фрикционный моечно-сушильный перегрузчик", price: "300000", class: "frikcionperegruzblock" },
      { name: "Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)", price: "700000", class: "frikcionperegruzgilzablock" },
      { name: "Фрикционная мойка (роторного типа)", price: "900000", class: "frikcionrotorblock"}
    ],
    raspak: [
      { name: "Выберите один из вариантов", price: "0", },
      { name: "Устройство разбивания прессованных кип горизонтальное", price: "1500000", img:"/upload/resize_cache/iblock/b48/160_160_1/b48b632ccb475030e7d49cf4cc63a7fd.png"},
      { name: "Устройство разбивания прессованных кип вертикальное", price: "1200000", img:"/upload/resize_cache/iblock/097/160_160_1/097315b16bc1b32b3461a337dc9a3fa5.jpg"},
      { name: "Стол для раскрытия кип", price: "520000", img:"/upload/resize_cache/iblock/75b/160_160_1/75b6694ef8dcdf3946d52b1c1c2ea7d5.jpg"},
    ],
   raspakselected: '0',
    
    flot: [
      { name: "Ванна флотации для тонущих полимеров", price: "990000", class: "flottonblock"},
    ],
    konv1: [
      { name: "Конвейер ленточный 1", price: "500000", class: "konv1block", id: 1, codename: 'namekonv', img:'https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG', desc:'Для повышения удобства загрузки и перегрузки неизмельченных сухих материалов в линию может быть включен «Конвейер ленточный».'},
    ],
    konv1opt: [
          { name: "+ Оснащение частотным регулятором", price: "41000"},
          { name: "+ Оснащение сепаратором металла", price: "70500"},
          { name: "+ Колеса маневровые", price: "15000"},
          { name: "+ Изготовление в «цепном» исполнении", price: "95000"},
          ],
                 
    konv2: [
      { name: "Конвейер ленточный 2", price: "500000", id: 2, codename: 'namekonv2', img:'https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG'},
    ],
    konv2opt: [
            { name: "+ Оснащение частотным регулятором (Конвейер ленточный 2)", price: "41000"},
            { name: "+ Оснащение сепаратором металла (Конвейер ленточный 2)", price: "70500"},
            { name: "+ Колеса маневровые (Конвейер ленточный 2)", price: "15000"},
            { name: "+ Изготовление в «цепном» исполнении (Конвейер ленточный 2)", price: "95000"},
          ],

    konv3: [
      { name: "+ Конвейер ленточный 3", price: "500000", id: 73, codename: 'namekonv3', img:'https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG'},
    ],
    konv3opt: [
      { name: "+ Оснащение частотным регулятором (Конвейер ленточный 3)", price: "41000"},
      { name: "+ Оснащение сепаратором металла (Конвейер ленточный 3)", price: "70500"},
      { name: "+ Колеса маневровые (Конвейер ленточный 3)", price: "15000"},
      { name: "+ Изготовление в «цепном» исполнении (Конвейер ленточный 3)", price: "95000"},
          ],

    konv4: [
      { name: "+ Конвейер ленточный 4", price: "500000"},
    ],
        konv4opt: [
      { name: "+ Оснащение частотным регулятором (Конвейер ленточный 4)", price: "41000"},
      { name: "+ Оснащение сепаратором металла (Конвейер ленточный 4)", price: "70500"},
      { name: "+ Колеса маневровые (Конвейер ленточный 4)", price: "15000"},
      { name: "+ Изготовление в «цепном» исполнении (Конвейер ленточный 4)", price: "95000"},
          ],

      peregruzshnek: [
        { name: "Перегрузчик шнековый", price: "412000", id: 3, codename: 'nameperegruzshnek', img:'http://nur-man.ru/upload/resize_cache/iblock/c13/160_160_1/c13eba24bd0d07602c9665fbd995c714.jpg'},
      ],
      peregruzshnekopt: [
          { name: "+ Оснащение частотным регулятором (Перегрузчик шнековый)", price: "41000"},
          { name: "+ Колеса маневровые (Перегрузчик шнековый)", price: "41000"},
        ],


      vygruznoyblock: [
          { name: "Выгрузной блок", price: "95000", id: 4, codename: 'namevygruznoyblock', img:'http://nur-man.ru/upload/resize_cache/iblock/6dd/160_160_1/6dda81c98906bd5d95f574fe75950838.jpg', desc: 'Выгрузной блок представляет собой систему элементов, используемую для перегрузки измельченных материалов. В зависимости от компоновки и решаемых задач он может включать в себя: пневмотранспорт, воздуховоды, циклон-успокоитель и опорную раму с креплениями под биг-бэг, в который будет выгружаться материал.'},
        ],
      vygruznoyblockopt: [
            { name: "+ Оснащение циклоном-успокоителем", price: "100000"},
            { name: "+ Оснащение Пневмотранспортом", price: "120000"},
            { name: "+ Оснащение системой перемещения циклона-успокоителя в горизонтальной плоскости", price: "40000"},
        ],

        
      vygruznoyblock2: [
        { name: "Выгрузной блок (2)", price: "95000", id: 83, codename: 'namevygruznoyblock2', img:'http://nur-man.ru/upload/resize_cache/iblock/6dd/160_160_1/6dda81c98906bd5d95f574fe75950838.jpg', desc: 'Выгрузной блок представляет собой систему элементов, используемую для перегрузки измельченных материалов. В зависимости от компоновки и решаемых задач он может включать в себя: пневмотранспорт, воздуховоды, циклон-успокоитель и опорную раму с креплениями под биг-бэг, в который будет выгружаться материал.'},
      ],
    vygruznoyblock2opt: [
          { name: "+ Оснащение циклоном-успокоителем", price: "100000"},
          { name: "+ Оснащение Пневмотранспортом", price: "120000"},
          { name: "+ Оснащение системой перемещения циклона-успокоителя в горизонтальной плоскости", price: "40000"},
      ],

      sortuchast: [
          { name: "Сортировочный участок горизонтальный", price: "705000", id: 80, codename: 'namesortuchast', img:'https://nur-man.ru/upload/resize_cache/iblock/f79/160_160_1/f796719a56f21701359e842f2f5cd6c3.jpg', desc: 'Используется для сортировки перерабатываемых материалов. Может применяться как для удаления инородных включений из готовящихся к переработке отходов, которые не проходили никакой сортировки, так и для промежуточной сортировки материала при его перемещении между соседними устройствами в перерабатывающей линии. '},
      ],    

      sortuchastopt: [
        { name: "+ Оснащение привода устройства частотным регулятором", price: "50000"},
        { name: "+ Регулировка столешнице по высоте", price: "110000"},
      ],

      lkonv: [
        { name: "L-образный конвейер с участком сортировки", price: "1020000", id: 81, codename: 'namelkonv', img:'https://nur-man.ru/upload/resize_cache/iblock/713/160_160_1/713e01b5afd0d0cf6e23feaae949df1b.jpg', desc: 'Используется для сортировки перерабатываемых материалов. Кроме сортировочной части имеет также загрузочную, которая позволяет сразу подавать материал в следующее за сортировочным участком устройство. '},
        ],    

      lkonvopt: [
      { name: "+ Оснащение привода устройства частотным регулятором", price: "50000"},
      { name: "+ Регулировка  по высоте", price: "110000"},
      ],

      sortpost: [
        { name: "Сортировочный комплекс (на 6-30 постов)", price: "3125000", id: 82, codename: 'namesortpost', img:'https://nur-man.ru/upload/resize_cache/iblock/998/160_160_1/99852b432d611236ec9d5bd12ec36392.jpg', desc: 'Как правило применяется для первичной сортировки перерабатываемых материалов. Главной задачей данного комплекса является удаление относительно крупных инородных включений, которые могут повредить оборудование перерабатывающей линии (комплекса). Чаще всего устанавливается в начале технологической цепочки переработки для обработки тех отходов, которые еще не проходили никакой сортировки. '},
        ],    

      sortpostopt: [
      { name: "+ Оснащение привода устройства частотным регулятором", price: "50000"},
      { name: "+ Регулировка  по высоте", price: "110000"},
      ],

    ochist: [
      { name: "Выберите грохот", price: "0", },
      { name: "Моющий грохот (малый)", price: "600000", img:"/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png"},
      { name: "Моющий грохот (Большой)", price: "1800000", img:"/upload/resize_cache/iblock/09b/160_160_1/09b76f5b1bd7c5ceed6ae6653e5b9f0a.jpg"}
    ],
    ochistselected: '0',

    grohotsmall: [
      { name: "Грохот моющий (малый)", price: "1250000", id: 8, codename: 'namegrohotsmall', img:'https://nur-man.ru/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png', desc: '«Моющий грохот» применятся для удаления с поверхности не дробленной тары (ПЭТ-бутылка, канистра и т.п.) абразивных загрязнений и мелких инородны включений до 50 мм, которые могут привести или к повреждению оборудования, или к быстрому износу его трущихся элементов.'},
    ],
    grohotsmallopt: [
        { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
        { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
        { name: "+ Система циклической циркуляции воды", price: "95000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
        { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
        { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
        { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
      ],

      grohotbig: [
        { name: "Грохот моющий (большой)", price: "2810000", id: 9, codename: 'namegrohotbig', img:'https://nur-man.ru/upload/resize_cache/iblock/09b/160_160_1/09b76f5b1bd7c5ceed6ae6653e5b9f0a.jpg', desc: 'Для уменьшения количества находящихся на поверхности перерабатываемого полимера абразивных частиц (песок), а также других инородных включений размером до 50 мм (мелкие камни, болты, гайки и т.п.) применяется Большой моющий грохот. Данная модель грохота имеет значительный запас по производительности.'},
      ],
      grohotbigopt: [
          { name: "+ Бак для воды", price: "1875000"},
          { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
          { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "87000"},
          { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
          { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
          { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
        ],

      grohotnurman: [
          { name: "Грохот моющий. Серия NURMAN", price: "5935000", id: 10, codename: 'namegrohotnurman', img:'https://nur-man.ru/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png', desc: '«Моющий грохот» применятся для удаления с поверхности не дробленной тары (ПЭТ-бутылка, канистра и т.п.) абразивных загрязнений и мелких инородны включений до 50 мм, которые могут привести или к повреждению оборудования, или к быстрому износу его трущихся элементов. '},
        ],
      grohotnurmanopt: [
            { name: "+ Изготовление элементов, соприкасающихся с перерабатываемым материалом или жидкостью, из нержавеющей стали", price: "4925000"},
          ],  

    otdiretiket500: [
            { name: "Устройство отдирания этикетки. Модель LR-500", price: "1485000", id: 11, codename: 'nameotdiretiket500', img:'https://nur-man.ru/upload/iblock/483/483e943ac6e4961e4f558a03b8623293.png'},
          ],
    otdiretiket500opt: [
              { name: "+ Оснащение системой быстрой замены ножей", price: "468000"},
            ],      

    otdiretiket1000: [
              { name: "Устройство отдирания этикетки. Модель LR-1000", price: "1930000", id: 12, codename: 'nameotdiretiket1000', img:'https://nur-man.ru/upload/iblock/483/483e943ac6e4961e4f558a03b8623293.png'},
            ],
    otdiretiket1000opt: [
                { name: "+ Оснащение системой быстрой замены ножей", price: "468000"},
              ],         

    otdiretiketwash500: [
              { name: "Устройство отдирания этикетки (моющее). Модель LR-500", price: "1930000", id: 13, codename: 'nameotdiretiketwash500', img:'https://nur-man.ru/upload/resize_cache/iblock/6c6/160_160_1/6c665934b1c92a1c131d8e7d65ba7725.png'},
          ],
    otdiretiketwash500opt: [
              { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
              { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
              { name: "+ Система циклической циркуляции воды", price: "95000"},
              { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
              { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "87000"},
              { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
              { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
              { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
              { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
              { name: "+ Оснащение системой быстрой замены ножей", price: "468000"},
          ],     
    
    otdiretiketwash1000: [
            { name: "Устройство отдирания этикетки (моющее). Модель LR-1000", price: "1930000", id: 14, codename: 'nameotdiretiketwash1000', img:'https://nur-man.ru/upload/resize_cache/iblock/6c6/160_160_1/6c665934b1c92a1c131d8e7d65ba7725.png'},
        ],
    otdiretiketwash1000opt: [
            { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
            { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
            { name: "+ Система циклической циркуляции воды", price: "95000"},
            { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
            { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "87000"},
            { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
            { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
            { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
            { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
            { name: "+ Оснащение системой быстрой замены ножей", price: "468000"},
        ],      
    
    dopoborud: [
      { name: "Агрегат отдирания этикетки", price: "950000", },
      { name: "Универсальная мойка", price: "3480000", },
      { name: "Установка замачивания", price: "1400000", }
    ],
    drobilka2: [
      { name: "Выберите один из вариантов", price: "0", },
      { name: "Дробилка. Серия Varang", price: "625000", },
      { name: "Дробилка. Серия Nurman", price: "1680000", },
      { name: "Шредер", price: "3300000", },
    ],
    drob2selected: '0',

    razbivkipgor: [
      { name: "Устройство разбивания прессованных кип (горизонтальное)", price: "2030000", id: 7, codename: 'namerazbivkipgor', img:'https://nur-man.ru/upload/resize_cache/iblock/b48/160_160_1/b48b632ccb475030e7d49cf4cc63a7fd.png', desc: 'В линию включен Разбиватель кип горизонтальный, который позволяет разбивать кипы прессованных крупных отходов, включая такие, как бочки. Таким образом данный тип разбивателя позволяет работать с более широким спектром отходов.'},
    ],
    razbivkipgoropt: [
      { name: "+ Оснащение привода устройства частотным регулятором", price: "50000"},
      { name: "+ Оснащение роликовым столом для снятия обвязочного материала", price: "625000"},
      { name: "+ Оснащение удлиненной системой подачи кип", price: "1250000"},
    ],

    razbivkipver: [
      { name: "Устройство разбивания прессованных кип (вертикальное)", price: "1875000", id: 6, codename: 'namerazbivkipver', img:'http://nur-man.ru/upload/resize_cache/iblock/097/160_160_1/097315b16bc1b32b3461a337dc9a3fa5.jpg'},
    ],
    razbivkipveropt: [
      { name: "+ Оснащение привода устройства частотным регулятором", price: "50000"},
      { name: "+ Оснащение устройства лифтом", price: "780000"},
    ],

    stolkip: [
      { name: "Стол для раскрытия пресованных кип с конвейером", price: "810000", id: 5, codename: 'namestolkip', img:'http://nur-man.ru/upload/resize_cache/iblock/75b/160_160_1/75b6694ef8dcdf3946d52b1c1c2ea7d5.jpg', desc: 'Для повышения удобства работы с кипованным (прессованным) материалом – раскрытия кип, предварительного осмотра и сортировки материала перед его подачей на переработку, а также загрузи материала, в линию может быть включен «Распаковочный стол с конвейером».'},
    ],
    stolkipopt1: [
      { name: "+ Оснащение частотными регуляторами", price: "41000"},
      { name: "+ Оснащение стола цепным конвейером", price: "93000"},
      { name: "+ Оснащение стола шнековым перегрузчиком со сдвоенными шнеками ", price: "162000"},
      { name: "+ Оснащение конвейера сепаратором металла  ", price: "705000"},
      { name: "+ Ролики в столешнице (с электроприводом) ", price: "187000"},
      { name: "+ Колеса маневровые ", price: "37000"},
      { name: "+ Регулировка столешницы по высоте  ", price: "110000"},
    ],


    frikcmojkaperegruz: [
      { name: "Фрикционная мойка (с функцией перегрузки)", price: "1500000", id: 31, codename: 'namefrikcmojkaperegruz', img: 'https://nur-man.ru/upload/resize_cache/iblock/830/160_160_1/8303a5d2771ccdbb6fb9723d31846495.png'},
    ],
    frikcmojkaperegruzopt: [
            { name: "+ Оснащение частотным регулятором", price: "50000"},
            { name: "Оснащение циклоном-успокоителем", price: "195000"},
            { name: "Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
            { name: "Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
            { name: "Система циклической циркуляции воды", price: "95000"},
            { name: "Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
            { name: "Оснащение устройства Системой автоматического поддержания уровня воды", price: "87000"},
            { name: "Оснащение устройства Системой автоматического контроля температуры воды", price: "78000"},
            { name: "Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
            { name: "Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "300000"},
            { name: "Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "300000"},
            { name: "Колеса маневровые", price: "300000"},
      ],

      frikcmojkaperegruzgilza: [
        { name: "Фрикционная мойка с перфорированной гильзой (с функцией перегрузки)", price: "1700000", id: 32, codename: 'namefrikcmojkaperegruzgilza', img: 'https://nur-man.ru/upload/resize_cache/iblock/0b7/160_160_1/0b7b352f2dc5b49a89b6207ac8737a31.jpg', desc:'В случае если требуется промывка перерабатываемого материала большим количеством воды, и/или имеющиеся загрязнения не допускающих циклического использования воды (цемент, мука, сахар и т.п.), то основное моющее устройство в лини может быть заменено на «Фрикционная мойка с перфориро-ванной гильзой». Также данное устройство может быть включено в линию как дополнительное, например, для двойной промывки или полоскания материала.'},
      ],
      frikcmojkaperegruzgilzaopt: [
              { name: "+ Оснащение частотным регулятором", price: "77000"},
              { name: "Оснащение циклоном-успокоителем", price: "155000"},
              { name: "Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
              { name: "Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
              { name: "Система циклической циркуляции воды", price: "95000"},
              { name: "Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
              { name: "Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
              { name: "Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
              { name: "Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
              { name: "Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
              { name: "Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
        ],

      otgimfrikс: [
        { name: "Отжим фрикционный (барабанного типа, с одной центрифугой)", price: "250000", id: 33, codename: 'nameotgimfrikс', img: 'https://nur-man.ru/upload/resize_cache/iblock/8c8/160_160_1/8c8d597529fd8ce8686051bdd591d07e.png'},
      ],

      otgimfrikсopt: [
        { name: "+ Оснащение устройства баком-приёмником для сбора воды", price: "130000"},
      ],  

      otgimfrikсfom500: [
        { name: "Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-500", price: "565000", id: 34, codename: 'nameotgimfrikсfom500', img: 'https://nur-man.ru/upload/resize_cache/iblock/be9/160_160_1/be919bae46d4552e6a3b3a5174f51c59.png', desc: 'После того, как от полимера были отделены инородные включения, он должен быть осушен. На первом этапе осушения полимер пропускается через высокоскоростной «Фрикционный отжим», который за счет мощных центробежных сил в его трех центрифугах отбросит от материала основную часть воды. Кроме того, отжим окажет на материал значительное моющее воздействие'},
      ],

      otgimfrikсfom500opt: [
        { name: "+ Оснащение устройства баком-приёмником для сбора воды", price: "268000"},
      ],  

      otgimfrikсfom1000: [
        { name: "Отжим фрикционный (барабанного типа, с тремя центрифугами) Модель-FDM-1000", price: "730000", id: 35, codename: 'nameotgimfrikсfom1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/be9/160_160_1/be919bae46d4552e6a3b3a5174f51c59.png', desc: 'После того, как от полимера были отделены инородные включения, он должен быть осушен. На первом этапе осушения полимер пропускается через высокоскоростной «Фрикционный отжим», который за счет мощных центробежных сил в его трех центрифугах отбросит от материала основную часть воды. Кроме того, отжим окажет на материал значительное моющее воздействие'},
      ],

      otgimfrikсfom1000opt: [
        { name: "+ Оснащение устройства баком-приёмником для сбора воды", price: "268000"},
      ], 

      mojkafrikсrfw500: [
        { name: "Мойка фрикционная (роторного типа). Модель-RFW-500", price: "730000", id: 36, codename: 'namemojkafrikсrfw500', img: 'https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg', desc: 'В случае если перерабатываемый материал содержит сложноотмываемые загрязнения и/или требует промывки большим объемом горячей воды, с использованием моющих средств, то в качестве основного моечного устройства целесообразно использовать «Фрикционную мойку роторного типа».'},
      ],

      mojkafrikсrfw500opt: [
        { name: "+ Оснащение циклоном-успокоителем", price: "195000"},
        { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
        { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
        { name: "+ Система циклической циркуляции воды", price: "95000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
        { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
        { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
        { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
      ], 

      mojkafrikсrfw500_2: [
        { name: "Мойка фрикционная (роторного типа) (2). Модель-RFW-500", price: "730000", id: 91, codename: 'namemojkafrikсrfw5002', img: 'https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg'},
      ],

      mojkafrikсrfw500_2opt: [
        { name: "+ Оснащение циклоном-успокоителем", price: "195000"},
        { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
        { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
        { name: "+ Система циклической циркуляции воды", price: "95000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
        { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
        { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
        { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
      ], 

      mojkafrikсrfw1000: [
        { name: "Мойка фрикционная (роторного типа). Модель-RFW-1000", price: "1830000", id: 37, codename: 'namemojkafrikсrfw1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/b93/160_160_1/b93049badbaadf6e0d28decdb6b59205.jpeg'},
      ],

      mojkafrikсrfw1000opt: [
        { name: "+ Оснащение циклоном-успокоителем", price: "195000"},
        { name: "+ Оснащение устройства баком для воды объемом 1 м3 (с функцией очистки воды от механических загрязнений) ", price: "388000"},
        { name: "+ Оснащение устройства баком для воды объемом 3 м3 (с функцией очистки воды от механических загрязнений) ", price: "780000"},
        { name: "+ Система циклической циркуляции воды", price: "95000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
        { name: "+ Оснащение бака для воды Системой выгрузки инородных включений", price: "300000"},
        { name: "+ Оснащение устройства автономной Системой грубой очистки воды от механических загрязнений", price: "200000"},
        { name: "+ Оснащение устройства автономной Системой тонкой очистки воды от механических загрязнений ", price: "800000"},
      ], 

      otgimfrikсvert: [
        { name: "Отжим фрикционный (вертикальный)", price: "1330000", id: 38, codename: 'nameotgimfrikсvert', img: 'https://nur-man.ru/upload/resize_cache/iblock/405/160_160_1/405712fc0ad051c24a9de1eb6338d744.jpg'},
      ],

      otgimfrikсvertopt: [
        { name: "+ Изготовление элементов, соприкасающихся с перерабатываемым материалом или жидкостью, из нержавеющей стали", price: "1055000"},
      ], 

      ustzamach: [
        { name: "Установка замачивания", price: "1330000", id: 39, codename: 'nameustzamach', img: 'https://nur-man.ru/upload/resize_cache/iblock/fc2/160_160_1/fc27de28c1875f3bf35f58e64d75f469.jpg', desc:'В случае если на полимере присутствуют какие-то сложноотмываемые загрязнения, для повышения каче-ства их отмывки в линию включена Установка замачивания. Данное устройство позволит ослабить «сцепление» загрязнений с поверхностью полимера за счет нахождения полимера в горячем растворе моющих средств.'},
      ],

      ustzamachopt: [
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "155000"},
      ], 

      mojkaunivers: [
        { name: "Мойка универсальная с автономной системой очистки воды", price: "5440000", id: 40, codename: 'namemojkaunivers', img: 'https://nur-man.ru/upload/resize_cache/iblock/9c6/160_160_1/9c63df4eb4e3e8c795711c74dcad0269.jpg'},
      ],

      mojkauniversopt: [
        { name: "+ Изготовление элементов, соприкасающихся с перерабатываемым материалом или жидкостью, из нержавеющей стали", price: "2040000"},
        { name: "+ Оснащение устройства загрузочным циклоном-успокоителем", price: "100000"},
      ], 

      flottonkompakt: [
        { name: "Ванна флотации для тонущих полимеров. Модель FL-Pet-500 Компактная", price: "940000", id: 41, codename: 'nameflottonkompakt', img: 'https://nur-man.ru/upload/resize_cache/iblock/20f/160_160_1/20f4b7e3b3b717a0c725461903154baf.png'},
      ],

      flottonkompaktopt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "388000"},
        { name: "+ Шнековая система выгрузки паразитного материала", price: "187000"},
        { name: "+ Устройство принудительного притапливания материала", price: "218000"},
      ], 

      flottonpet500: [
        { name: "Ванна флотации для тонущих полимеров. Модель FL-Pet-500", price: "1545000", id: 42, codename: 'nameflottonpet500', img: 'https://nur-man.ru/upload/resize_cache/iblock/0cd/160_160_1/0cda2064ded7c6ec02cfd3be31c269f8.jpg'},
      ],

      flottonpet500opt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "388000"},
        { name: "+ Шнековая система выгрузки паразитного материала", price: "187000"},
        { name: "+ Устройство принудительного притапливания материала", price: "218000"},
      ], 

      flottonpet1000: [
        { name: "Ванна флотации для тонущих полимеров. Модель FL-Pet-1000", price: "2320000", id: 43, codename: 'nameflottonpet1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/0cd/160_160_1/0cda2064ded7c6ec02cfd3be31c269f8.jpg'},
      ],

      flottonpet1000opt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "388000"},
        { name: "+ Шнековая система выгрузки паразитного материала", price: "187000"},
        { name: "+ Устройство принудительного притапливания материала", price: "218000"},
      ], 

      flotplav500kompakt: [
        { name: "Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500 Компактная", price: "925000", id: 44, codename: 'nameflotplav500kompakt', img: 'https://nur-man.ru/upload/resize_cache/iblock/417/160_160_1/417c630647404f30837d5b31eebc0c2c.png'},
      ],

      flotplav500kompaktopt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение системой перегрузки всплывающих материалов", price: "415000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "193000"},
        { name: "+ Оснащение системой выгрузки тонущих материалов", price: "875000"},
        { name: "+ Бак-уловитель для паразитного материала", price: "145000"},
      ], 

      flotplav1000kompakt: [
        { name: "Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000 Компактная", price: "1150000", id: 45, codename: 'nameflotplav1000kompakt', img: 'https://nur-man.ru/upload/resize_cache/iblock/417/160_160_1/417c630647404f30837d5b31eebc0c2c.png'},
      ],

      flotplav1000kompaktopt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение системой перегрузки всплывающих материалов", price: "415000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "193000"},
        { name: "+ Оснащение системой выгрузки тонущих материалов", price: "875000"},
        { name: "+ Бак-уловитель для паразитного материала", price: "145000"},
      ], 

      flotplav500: [
        { name: "Ванна флотации для плавающих полимеров. Модель FL-PE/PP-500", price: "1280000", id: 46, codename: 'nameflotplav500', img: 'https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png', desc:'Часто от плавающего полимера необходимо отделить тонущие инородные включения, близкие к воде по плотности и, соответственно тонущие медленно. Для этих целей применяется «Ванна флотации для плавающих полимеров».'},
      ],

      flotplav500opt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение системой перегрузки всплывающих материалов", price: "415000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "193000"},
        { name: "+ Оснащение системой выгрузки тонущих материалов", price: "875000"},
        { name: "+ Бак-уловитель для паразитного материала", price: "145000"},
      ], 

      flotplav1000: [
        { name: "Ванна флотации для плавающих полимеров. Модель FL-PE/PP-1000", price: "1280000", id: 47, codename: 'nameflotplav1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png', desc: 'Часто от плавающего полимера необходимо отделить тонущие инородные включения, близкие к воде по плотности и, соответственно тонущие медленно. Для этих целей применяется «Ванна флотации для плавающих полимеров».'},
      ],

      flotplav1000opt: [
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
        { name: "+ Оснащение системой перегрузки всплывающих материалов", price: "415000"},
        { name: "+ Оснащение устройства Системой нагрева воды в объеме мощностью 60 кВт", price: "140000"},
        { name: "+ Изготовление устройства в виде «термоса»", price: "193000"},
        { name: "+ Оснащение системой выгрузки тонущих материалов", price: "875000"},
        { name: "+ Бак-уловитель для паразитного материала", price: "145000"},
      ], 

      flotplavnurman: [
        { name: "Ванна флотации для плавающих полимеров. Серия NURMAN", price: "3030000", id: 48, codename: 'nameflotplavnurman', img: 'https://nur-man.ru/upload/resize_cache/iblock/a88/160_160_1/a88a419fdca5dacf010d6d3f9fe99a54.png'},
      ],

      flotplavnurmanopt: [
        { name: "+ Изготовление элементов, соприкасающихся с перерабатываемым материалом или жидкостью, из нержавеющей стали", price: "1755000"},
        { name: "+ Оснащение загрузочным циклоном-успокоителем", price: "100000"},
      ], 

      ustflotton: [
        { name: "Установка флотирования для тонущих полимеров", price: "3030000", id: 49, codename: 'nameustflotton', img: 'https://nur-man.ru/upload/resize_cache/iblock/7da/160_160_1/7da68c6a5cb38153f6644f592a317f35.jpg'},
      ],

      ustflottonopt: [
        { name: "+ Изготовление элементов, соприкасающихся с перерабатываемым материалом или жидкостью, из нержавеющей стали", price: "1405000"},
      ], 

      washflotplav: [
        { name: "Моющая флотационная машина для плавающих материалов", price: "2110000", id: 50, codename: 'namewashflotplav', img: 'https://nur-man.ru/upload/resize_cache/iblock/134/160_160_1/13469175b946b08707666a33ef6a798d.jpg'},
      ],

      washflotplavopt: [
        { name: "+ Оснащение устройства Системой нагрева воды в объеме", price: "140000"},
        { name: "+ Оснащение устройства системой выгрузки тонущих материалов", price: "875000"},
        { name: "+ Бак-уловитель для паразитного материала", price: "145000"},
        { name: "+ Оснащение устройства Системой автоматического поддержания уровня воды", price: "88000"},
        { name: "+ Оснащение устройства Системой автоматического контроля температуры воды", price: "62000"},
      ], 

      sushkatt500: [
        { name: "Сушка для твёрдых пластмасс. Модель С-ТТ-500", price: "500000", id: 51, codename: 'namesushkatt500', img: 'https://nur-man.ru/upload/resize_cache/iblock/1a2/160_160_1/1a25930656378db359e9ea8078cdd12b.jpg', desc: 'Для окончательной сушки измельченного твердого полимера применяется «Сушка воздушная для твердых пластмасс». По желанию Заказчика данная сушка может оснащаться встроенным сепаратором эти-кетки, который позволит повысить степень удаления из конечного продукта как этикетки, так и полимерной пыли.'},
      ],

      sushkatt500opt: [
        { name: "+ Входной циклон-успокоитель", price: "100000"},
        { name: "+ Оснащение устройства калориферами", price: "250000"},
        { name: "+ Подключаемый воздушный сепаратор этикетки", price: "200000"},
        { name: "+ Система выгрузки сечки и пыли (шнековая)", price: "187000"},
      ], 

      sushkatt1000: [
        { name: "Сушка для твёрдых пластмасс. Модель С-ТТ-1000", price: "750000", id: 52, codename: 'namesushkatt1000', img: 'https://nur-man.ru/upload/resize_cache/iblock/1a2/160_160_1/1a25930656378db359e9ea8078cdd12b.jpg', desc: 'Для окончательной сушки измельченного твердого полимера применяется «Сушка воздушная для твердых пластмасс». По желанию Заказчика данная сушка может оснащаться встроенным сепаратором этикетки, который позволит повысить степень удаления из конечного продукта как этикетки, так и полимерной пыли.'},
      ],

      sushkatt1000opt: [
        { name: "+ Входной циклон-успокоитель", price: "100000"},
        { name: "+ Оснащение устройства калориферами", price: "250000"},
        { name: "+ Подключаемый воздушный сепаратор этикетки", price: "200000"},
        { name: "+ Система выгрузки сечки и пыли (шнековая)", price: "187000"},
      ], 

      sushkaplen: [
        { name: "Сушка для пленок", price: "920000", id: 53, codename: 'namesushkaplen', img: 'https://nur-man.ru/upload/resize_cache/iblock/2fc/160_160_1/2fc5f9227d26251a3aaf24bec0511992.jpg'},
      ],

      sushkaplenopt: [
        { name: "+ Оснащение устройства калориферами", price: "250000"},
      ], 
 
      pa22: [
        { name: "Пресс агломератор. Модель ПА-22", price: "1296000", id: 54, codename: 'namepa22', img: 'https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg'},
      ],

      pa22opt: [
        { name: "+ Оснащение устройства системой разогрева матрицы", price: "30000"},
      ], 

      pa30: [
        { name: "Пресс агломератор. Модель ПА-30", price: "1440000", id: 55, codename: 'namepa30', img: 'https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg'},
      ],

      pa30opt: [
        { name: "+ Оснащение устройства системой разогрева матрицы", price: "30000"},
      ], 

      pa37: [
        { name: "Пресс агломератор. Модель ПА-37", price: "1600000", id: 56, codename: 'namepa37', img: 'https://nur-man.ru/upload/resize_cache/iblock/ad8/160_160_1/ad80d1c2480113ab1855a0433a9e0efc.jpg'},
      ],

      pa37opt: [
        { name: "+ Оснащение устройства системой разогрева матрицы", price: "30000"},
      ], 

      opa300: [
        { name: "Отжимной пресс-агломератор. Модель ОПА-300", price: "3000000", id: 57, codename: 'nameopa300', img: 'https://nur-man.ru/upload/resize_cache/iblock/c8d/160_160_1/c8d5ee31b6992d14592ef9baa733cafa.jpg', desc: '«Отжимной пресс-агломератор (ОПА)» может заменить в линии для переработки плёночных и ните-видных отходов несколько устройств – отжим, сушку, пресс-агломератор. На выходе из ОПА переработчик получит высокоплотные частицы с минимальной остаточной влажностью независимо от того, какая влажность была на входе.'},
      ],

      opa300opt: [
        { name: "+ Оснащение устройства Системой предпускового разогрева «головы» индукционная", price: "150000"},
        { name: "+ Оснащение устройства Баком-дозатором для подачи перерабатываемого материала", price: "220000"},
        { name: "+ Оснащение устройства Баком-приемником для отжатой воды", price: "100000"},
      ], 

      opa500: [
        { name: "Отжимной пресс-агломератор. Модель ОПА-500", price: "3500000", id: 58, codename: 'nameopa500', img: 'https://nur-man.ru/upload/resize_cache/iblock/c8d/160_160_1/c8d5ee31b6992d14592ef9baa733cafa.jpg', desc: '«Отжимной пресс-агломератор (ОПА)» может заменить в линии для переработки плёночных и ните-видных отходов несколько устройств – отжим, сушку, пресс-агломератор. На выходе из ОПА переработчик получит высокоплотные частицы с минимальной остаточной влажностью независимо от того, какая влажность была на входе.'},
      ],

      opa500opt: [
        { name: "+ Оснащение устройства Системой предпускового разогрева «головы» индукционная", price: "150000"},
        { name: "+ Оснащение устройства Баком-дозатором для подачи перерабатываемого материала", price: "220000"},
        { name: "+ Оснащение устройства Баком-приемником для отжатой воды", price: "100000"},
      ], 

      zatochstan: [
        { name: "Заточной станок", price: "405000", id: 59, codename: 'namezatochstan', img: 'https://nur-man.ru/upload/resize_cache/iblock/bd8/160_160_1/bd81c198ba2a44ff032de9deadf7e13b.jpg', desc:'Заточный станок применяется для затачивания плоских ножей роторных дробилок.'},
      ],

      sortoptical: [
        { name: "Установка оптической сортировки измельченного материала", price: "9690000", id: 60, codename: 'namesortoptical', img: 'https://nur-man.ru/upload/resize_cache/iblock/acc/160_160_1/acc8689e285e8020438c28592b12bd12.jpg', desc:'Инновационное, энергоэффективное оборудование, предназначенное для электронно-оптической сортировки сыпучего сырья различного назначения от трудноотделимых примесей по визуальным признакам таким как: цвет, форма, текстура. Эффективность установки составляет 95-98%.'},
      ], 

      systemfreshwater25: [
        { name: "Система очистки воды централизованная. Вариант произодительностью 2,5 м3/час", price: "3600000"},
      ],

      systemfreshwater5: [
        { name: "Система очистки воды централизованная. Вариант произодительностью 5 м3/час", price: "4600000"},
      ],

      systemfreshwater10: [
        { name: "Система очистки воды централизованная. Вариант произодительностью 10 м3/час", price: "6200000"},
      ],

      systemfreshwater15: [
        { name: "Система очистки воды централизованная. Вариант произодительностью 15 м3/час", price: "24300000"},
      ],

      lineimg: [
        { id: 1 , img: 'background-image: url("https://nur-man.ru/upload/iblock/51f/51f754c324cecbcfe28432f71357e33b.jpg")'},
        { id: 2 , img: 'background-image: url("https://nur-man.ru/upload/iblock/c04/c04ab0ca58110925f12fff5d691b19d8.jpg")'},
        { id: 3 , img: 'background-image: url("https://nur-man.ru/upload/iblock/3cc/3cc08c39b1f37b538f0583a7fc757780.jpg")'},
        { id: 4 , img: 'background-image: url("https://nur-man.ru/upload/iblock/5a1/5a10a66c2ef005ab680268121976b73a.png")'},
        { id: 5 , img: 'background-image: url("https://nur-man.ru/upload/iblock/608/60802d8160bcdc9c1b43809f0ea16ce3.png")'},
        { id: 6 , img: 'background-image: url("https://nur-man.ru/upload/iblock/366/366fba4779a3bbe1c3e77c91b51aa983.jpg")'},
        { id: 7 , img: 'background-image: url("https://nur-man.ru/upload/iblock/c19/c199482b9fb1bad9a601d36c00f8321b.jpg")'},
        { id: 8 , img: 'background-image: url("https://nur-man.ru/upload/iblock/6cd/6cd3c8361731cf5c6e5c006a0221fbdd.jpg")'},
      ],

    selectedProds: [],
    selectedKonv: [],
    nameOnly: [],
    dopProds: [  
    { name: "Устройство разбивания прессованных кип (горизонтальное)", price: "2030000", id: 7, codename: 'namerazbivkipgor', img:'https://nur-man.ru/upload/resize_cache/iblock/b48/160_160_1/b48b632ccb475030e7d49cf4cc63a7fd.png', desc: 'В линию может быть включен Разбиватель кип горизонтальный, который позволяет разбивать кипы прессованных крупных отходов, включая такие, как бочки. Таким образом данный тип разбивателя позволяет работать с более широким спектром отходов.'},
    { name: "Конвейер ленточный", price: "500000", class: "konv1block", id: 1, codename: 'namekonv', img:'https://nur-man.ru/upload/resize_cache/iblock/02e/160_160_1/02e70183a19d6c6694e2b8bca9829c26.JPG', desc:'Для повышения удобства загрузки и перегрузки неизмельченных сухих материалов в линию может быть включен «Конвейер ленточный».'},  
    { name: "Грохот моющий (малый)", price: "1250000", id: 8, codename: 'namegrohotsmall', img:'https://nur-man.ru/upload/resize_cache/iblock/abf/160_160_1/abfeeadc7f14cfa70d7ca51999fa4e16.png', desc: '«Моющий грохот» применятся для удаления с поверхности не дробленной тары (ПЭТ-бутылка, канистра и т.п.) абразивных загрязнений и мелких инородны включений до 50 мм, которые могут привести или к повреждению оборудования, или к быстрому износу его трущихся элементов.'},
    { name: "Сортировочный участок горизонтальный", price: "705000", id: 80, codename: 'namesortuchast', img:'https://nur-man.ru/upload/resize_cache/iblock/f79/160_160_1/f796719a56f21701359e842f2f5cd6c3.jpg', desc: 'Используется для сортировки перерабатываемых материалов. Может применяться как для удаления инородных включений из готовящихся к переработке отходов, которые не проходили никакой сортировки, так и для промежуточной сортировки материала при его перемещении между соседними устройствами в перерабатывающей линии. '},
    { name: "Фрикционная мойка с перфорированной гильзой (с функцией перегрузки)", price: "1700000", id: 32, codename: 'namefrikcmojkaperegruzgilza', img: 'https://nur-man.ru/upload/resize_cache/iblock/0b7/160_160_1/0b7b352f2dc5b49a89b6207ac8737a31.jpg', desc:'В случае если требуется промывка перерабатываемого материала большим количеством воды, и/или имеющиеся загрязнения не допускающих циклического использования воды (цемент, мука, сахар и т.п.), то основное моющее устройство в лини может быть заменено на «Фрикционная мойка с перфориро-ванной гильзой». Также данное устройство может быть включено в линию как дополнительное, например, для двойной промывки или полоскания материала.'},
    { name: "Измельчитель роторный (низкоскоростной) «Шредер»", price: "2655000", id: 91, codename:'nameshredoss2260', img:'https://nur-man.ru/upload/resize_cache/iblock/217/160_160_1/217c733ba1315af6e1c45e659f67f5d7.jpg', desc:'Для предварительного измельчения перерабатываемого материала в линию включен низкоскоростной роторный измельчитель Шредер. Основная его задача разорвать материал с целью исключения попадания на следующий этап переработки инородных включений, находящихся внутри перерабатываемого материала (например, внутри ПЭТ-бутылки, канистры и т.д.). Материал в шредере измельчается в частицы размером ~40 мм.'},
    { name: "Выгрузной блок", price: "95000", id: 4, codename: 'namevygruznoyblock', img:'http://nur-man.ru/upload/resize_cache/iblock/6dd/160_160_1/6dda81c98906bd5d95f574fe75950838.jpg', desc: 'Выгрузной блок представляет собой систему элементов, используемую для перегрузки измельченных материалов. В зависимости от компоновки и решаемых задач он может включать в себя: пневмотранспорт, воздуховоды, циклон-успокоитель и опорную раму с креплениями под биг-бэг, в который будет выгружаться материал.'},
    { name: "Заточной станок", price: "405000", id: 59, codename: 'namezatochstan', img: 'https://nur-man.ru/upload/resize_cache/iblock/bd8/160_160_1/bd81c198ba2a44ff032de9deadf7e13b.jpg', desc:'Заточный станок применяется для затачивания плоских ножей роторных дробилок.'},
    { name: "Установка оптической сортировки измельченного материала", price: "9690000", id: 60, codename: 'namesortoptical', img: 'https://nur-man.ru/upload/resize_cache/iblock/acc/160_160_1/acc8689e285e8020438c28592b12bd12.jpg', desc:'Инновационное, энергоэффективное оборудование, предназначенное для электронно-оптической сортировки сыпучего сырья различного назначения от трудноотделимых примесей по визуальным признакам таким как: цвет, форма, текстура. Эффективность установки составляет 95-98%.'},
    { name: "Установка замачивания", price: "1330000", id: 39, codename: 'nameustzamach', img: 'https://nur-man.ru/upload/resize_cache/iblock/fc2/160_160_1/fc27de28c1875f3bf35f58e64d75f469.jpg', desc:'В случае если на полимере присутствуют какие-то сложноотмываемые загрязнения, для повышения каче-ства их отмывки в линию включена Установка замачивания. Данное устройство позволит ослабить «сцепление» загрязнений с поверхностью полимера за счет нахождения полимера в горячем растворе моющих средств.'},
    ],
    namekonv: [],
    namekonv2: [],
    namekonv3: [],
    nameperegruzshnek: [],
    namevygruznoyblock: [],
    namevygruznoyblock2: [],
    namestolkip: [],
    namerazbivkipver: [],
    namerazbivkipgor: [],
    namesortuchast: [],
    namelkonv: [],
    namesortpost: [],
    namegrohotsmall: [],
    namegrohotbig: [],
    namegrohotnurman: [],
    nameotdiretiket500: [],
    nameotdiretiket1000: [],
    nameotdiretiketwash500: [],
    nameotdiretiketwash1000: [],
    namedrobilkacrl500: [],
    namedrobilkacrl5002: [],
    namedrobilkacrl600: [],
    namedrobilkacrl6002: [],
    namedrobilkacrl700: [],
    namedrobilkacrl7002: [],
    namedrobilkacrl800: [],
    namedrobilkacrl8002: [],
    namedrobilkacrl900: [],
    namedrobilkacrl9002: [],
    namedrobilkacrl1000: [],
    namedrobilkacrl10002: [],
    namedrobilkacrl1100: [],
    namedrobilkacrl11002: [],
    namedrobilkacrh30: [],
    namedrobilkacrh37: [],
    namedrobilkacrh45: [],
    namedrobilkacrh55: [],
    namedrobilkacrh75: [],
    nameshredoss2260: [],
    nameshredoss3080: [],
    nameshredtsfs2260: [],
    nameshredtsfs3080: [],
    nameshredtsfs40100: [],
    nameshredfss8040: [],
    nameshredfss8060: [],
    nameshredfss8080: [],
    nameshredfss80100: [],
    namefrikcmojkaperegruz: [],
    namefrikcmojkaperegruzgilza: [],
    nameotgimfrikс: [],
    nameotgimfrikсfom500: [],
    nameotgimfrikсfom1000: [],
    namemojkafrikсrfw500: [],
    namemojkafrikсrfw5002: [],
    namemojkafrikсrfw1000: [],
    nameotgimfrikсvert: [],
    nameustzamach: [],
    namemojkaunivers: [],
    nameflottonkompakt: [],
    nameflottonpet500: [],
    nameflottonpet1000: [],
    nameflotplav500kompakt: [],
    nameflotplav1000kompakt: [],
    nameflotplav500: [],
    nameflotplav1000: [],
    nameflotplavnurman: [],
    nameustflotton: [],
    namewashflotplav: [],
    namesushkatt500: [],
    namesushkatt1000: [],
    namesushkaplen: [],
    namepa22: [],
    namepa30: [],
    namepa37: [],
    nameopa300: [],
    nameopa500: [],
    namezatochstan: [],
    namesortoptical: [],
    calc: 0,
    calckonv: 0,
    calckonv2: 0,
    calckonv3: 0,
    calcperegruzshnek: 0,
    calcvygruznoyblock: 0,
    calcvygruznoyblock2: 0,
    calcstolkip: 0,
    calcrazbivkipver: 0,
    calcrazbivkipgor: 0,
    calcsortuchast: 0,
    calclkonv: 0,
    calcsortpost: 0,
    calcgrohotsmall: 0,
    calcgrohotbig: 0,
    calcgrohotnurman: 0,
    calcotdiretiket500: 0,
    calcotdiretiket1000: 0,
    calcotdiretiketwash500: 0,
    calcotdiretiketwash1000: 0,
    calcdrobilkacrl500: 0,
    calcdrobilkacrl5002: 0,
    calcdrobilkacrl600: 0,
    calcdrobilkacrl6002: 0,
    calcdrobilkacrl700: 0,
    calcdrobilkacrl7002: 0,
    calcdrobilkacrl800: 0,
    calcdrobilkacrl8002: 0,
    calcdrobilkacrl900: 0,
    calcdrobilkacrl9002: 0,
    calcdrobilkacrl1000: 0,
    calcdrobilkacrl10002: 0,
    calcdrobilkacrl1100: 0,
    calcdrobilkacrl11002: 0,
    calcdrobilkacrh30: 0,
    calcdrobilkacrh37: 0,
    calcdrobilkacrh45: 0,
    calcdrobilkacrh55: 0,
    calcdrobilkacrh75: 0,
    calcdrobilkacrh160: 0,
    calcshredoss2260: 0,
    calcshredoss3080: 0,
    calcshredtsfs2260: 0,
    calcshredtsfs3080: 0,
    calcshredtsfs40100: 0,
    calcshredfss8040: 0,
    calcshredfss8060: 0,
    calcshredfss8080: 0,
    calcshredfss80100: 0,
    calcfrikcmojkaperegruz: 0,
    calcfrikcmojkaperegruzgilza: 0,
    calcotgimfrikс: 0,
    calcotgimfrikсfom500: 0,
    calcotgimfrikсfom1000: 0,
    calcmojkafrikсrfw500: 0,
    calcmojkafrikсrfw5002: 0,
    calcmojkafrikсrfw1000: 0,
    calcotgimfrikсvert: 0,
    calcustzamach: 0,
    calcmojkaunivers: 0,
    calcflottonkompakt: 0,
    calcflottonpet500: 0,
    calcflottonpet1000: 0,
    calcflotplav500kompakt: 0,
    calcflotplav1000kompakt: 0,
    calcflotplav500: 0,
    calcflotplav1000: 0,
    calcflotplavnurman: 0,
    calcustflotton: 0,
    calcwashflotplav: 0,
    calcsushkatt500: 0,
    calcsushkatt1000: 0,
    calcsushkaplen: 0,
  }
  },
  computed: {

    sumpro: function () {
      return parseFloat(this.calc) + parseFloat(this.calckonv) + parseFloat(this.calckonv2) + parseFloat(this.calckonv3) + parseFloat(this.calcperegruzshnek) + parseFloat(this.calcvygruznoyblock) + parseFloat(this.calcvygruznoyblock2) + parseFloat(this.calcstolkip) + parseFloat(this.calcrazbivkipver) + parseFloat(this.calcrazbivkipgor) + parseFloat(this.calcsortuchast) + parseFloat(this.calclkonv) + parseFloat(this.calcsortpost) + parseFloat(this.calcgrohotsmall) + parseFloat(this.calcgrohotbig) + parseFloat(this.calcgrohotnurman) + parseFloat(this.calcotdiretiket500) + parseFloat(this.calcotdiretiket1000) + parseFloat(this.calcotdiretiketwash500) + parseFloat(this.calcotdiretiketwash1000) + parseFloat(this.calcdrobilkacrl500) + parseFloat(this.calcdrobilkacrl5002) + parseFloat(this.calcdrobilkacrl600) + parseFloat(this.calcdrobilkacrl6002) + parseFloat(this.calcdrobilkacrl700) + parseFloat(this.calcdrobilkacrl7002) + parseFloat(this.calcdrobilkacrl800) + parseFloat(this.calcdrobilkacrl8002) + parseFloat(this.calcdrobilkacrl900) + parseFloat(this.calcdrobilkacrl9002) + parseFloat(this.calcdrobilkacrl1000) + parseFloat(this.calcdrobilkacrl10002) + parseFloat(this.calcdrobilkacrl1100) + parseFloat(this.calcdrobilkacrl11002) + parseFloat(this.calcdrobilkacrh30) + parseFloat(this.calcdrobilkacrh37) + parseFloat(this.calcdrobilkacrh45) + parseFloat(this.calcdrobilkacrh55) + parseFloat(this.calcdrobilkacrh75) + parseFloat(this.calcdrobilkacrh160) + parseFloat(this.calcshredoss2260) + parseFloat(this.calcshredoss3080) + parseFloat(this.calcshredtsfs2260) + parseFloat(this.calcshredtsfs3080) + parseFloat(this.calcshredtsfs40100) + parseFloat(this.calcshredfss8040) + parseFloat(this.calcshredfss8060) + parseFloat(this.calcshredfss8080) + parseFloat(this.calcshredfss80100) + parseFloat(this.calcfrikcmojkaperegruz) + parseFloat(this.calcfrikcmojkaperegruzgilza) + parseFloat(this.calcotgimfrikс) + parseFloat(this.calcotgimfrikсfom500) + parseFloat(this.calcotgimfrikсfom1000) + parseFloat(this.calcmojkafrikсrfw500) + parseFloat(this.calcmojkafrikсrfw5002) + parseFloat(this.calcmojkafrikсrfw1000) + parseFloat(this.calcotgimfrikсvert) + parseFloat(this.calcustzamach) + parseFloat(this.calcmojkaunivers) + parseFloat(this.calcflottonkompakt) + parseFloat(this.calcflottonpet500) + parseFloat(this.calcflottonpet1000) + parseFloat(this.calcflotplav500kompakt) + parseFloat(this.calcflotplav1000kompakt) + parseFloat(this.calcflotplav500) + parseFloat(this.calcflotplav1000) + parseFloat(this.calcflotplavnurman) + parseFloat(this.calcustflotton) + parseFloat(this.calcwashflotplav) + parseFloat(this.calcsushkatt500) + parseFloat(this.calcsushkatt1000) + parseFloat(this.calcsushkaplen)
      //return 1375000 + parseFloat(this.mojkiselected) + parseFloat(this.drobselected) + parseFloat(this.raspakselected) + parseFloat(this.ochistselected) + parseFloat(this.drob2selected) + parseFloat(this.calc)
    },

    sumkonv1: function () {
      return parseFloat(this.calckonv)
    },

    sumkonv2: function () {
      return parseFloat(this.calckonv2)
    },

    sumkonv3: function () {
      return parseFloat(this.calckonv3)
    },

    sumperegruzshnek: function () {
      return parseFloat(this.calcperegruzshnek)
    },

    sumvygruznoyblock: function () {
      return parseFloat(this.calcvygruznoyblock)
    },

    sumvygruznoyblock2: function () {
      return parseFloat(this.calcvygruznoyblock2)
    },

    sumstolkip: function () {
      return parseFloat(this.calcstolkip)
    },

    sumrazbivkipver: function () {
      return parseFloat(this.calcrazbivkipver)
    },

    sumrazbivkipgor: function () {
      return parseFloat(this.calcrazbivkipgor)
    },

    sumsortuchast: function () {
      return parseFloat(this.calcsortuchast)
    },

    sumlkonv: function () {
      return parseFloat(this.calclkonv)
    },

    sumsortpost: function () {
      return parseFloat(this.calcsortpost)
    },

    sumgrohotsmall: function () {
      return parseFloat(this.calcgrohotsmall)
    },

    sumgrohotbig: function () {
      return parseFloat(this.calcgrohotbig)
    },

    sumgrohotnurman: function () {
      return parseFloat(this.calcgrohotnurman)
    },

    sumotdiretiket500: function () {
      return parseFloat(this.calcotdiretiket500)
    },

    sumotdiretiket1000: function () {
      return parseFloat(this.calcotdiretiket1000)
    },

    sumotdiretiketwash500: function () {
      return parseFloat(this.calcotdiretiketwash500)
    },

    sumotdiretiketwash1000: function () {
      return parseFloat(this.calcotdiretiketwash1000)
    },

    sumdrobilkacrl500: function () {
      return parseFloat(this.calcdrobilkacrl500)
    },

    sumdrobilkacrl5002: function () {
      return parseFloat(this.calcdrobilkacrl5002)
    },

    sumdrobilkacrl600: function () {
      return parseFloat(this.calcdrobilkacrl600)
    },

    sumdrobilkacrl6002: function () {
      return parseFloat(this.calcdrobilkacrl6002)
    },

    sumdrobilkacrl700: function () {
      return parseFloat(this.calcdrobilkacrl700)
    },

    sumdrobilkacrl7002: function () {
      return parseFloat(this.calcdrobilkacrl7002)
    },

    sumdrobilkacrl800: function () {
      return parseFloat(this.calcdrobilkacrl800)
    },     

    sumdrobilkacrl8002: function () {
      return parseFloat(this.calcdrobilkacrl8002)
    },   
    
    sumdrobilkacrl900: function () {
      return parseFloat(this.calcdrobilkacrl900)
    },

    sumdrobilkacrl9002: function () {
      return parseFloat(this.calcdrobilkacrl9002)
    },
    
    sumdrobilkacrl1000: function () {
      return parseFloat(this.calcdrobilkacrl1000)
    },

    sumdrobilkacrl10002: function () {
      return parseFloat(this.calcdrobilkacrl10002)
    },

    sumdrobilkacrl1100: function () {
      return parseFloat(this.calcdrobilkacrl1100)
    },

    sumdrobilkacrl11002: function () {
      return parseFloat(this.calcdrobilkacrl11002)
    },

    sumdrobilkacrh30: function () {
      return parseFloat(this.calcdrobilkacrh30)
    },

    sumdrobilkacrh37: function () {
      return parseFloat(this.calcdrobilkacrh37)
    },

    sumdrobilkacrh45: function () {
      return parseFloat(this.calcdrobilkacrh45)
    },

    sumdrobilkacrh55: function () {
      return parseFloat(this.calcdrobilkacrh55)
    },

    sumdrobilkacrh75: function () {
      return parseFloat(this.calcdrobilkacrh75)
    },
    
    sumshredoss2260: function () {
      return parseFloat(this.calcshredoss2260)
    },

    sumshredoss3080: function () {
      return parseFloat(this.calcshredoss3080)
    },

    sumshredtsfs2260: function () {
      return parseFloat(this.calcshredtsfs2260)
    },

    sumshredtsfs3080: function () {
      return parseFloat(this.calcshredtsfs3080)
    },

    sumshredtsfs40100: function () {
      return parseFloat(this.calcshredtsfs40100)
    },

    sumshredfss8040: function () {
      return parseFloat(this.calcshredfss8040)
    },

    sumshredfss8060: function () {
      return parseFloat(this.calcshredfss8060)
    },

    sumshredfss8080: function () {
      return parseFloat(this.calcshredfss8080)
    },

    sumshredfss80100: function () {
      return parseFloat(this.calcshredfss80100)
    },

    sumdrobilkacrh160: function () {
      return parseFloat(this.calcdrobilkacrh160)
    },

    sumfrikcmojkaperegruz: function () {
      return parseFloat(this.calcfrikcmojkaperegruz)
    },

    sumfrikcmojkaperegruzgilza: function () {
      return parseFloat(this.calcfrikcmojkaperegruzgilza)
    },
        
    sumotgimfrikс: function () {
      return parseFloat(this.calcotgimfrikс)
    },
        
    sumotgimfrikсfom500: function () {
      return parseFloat(this.calcotgimfrikсfom500)
    },
        
    sumotgimfrikсfom1000: function () {
      return parseFloat(this.calcotgimfrikсfom1000)
    },
        
    summojkafrikсrfw500: function () {
      return parseFloat(this.calcmojkafrikсrfw500)
    },

    summojkafrikсrfw5002: function () {
      return parseFloat(this.calcmojkafrikсrfw5002)
    },
        
    summojkafrikсrfw1000: function () {
      return parseFloat(this.calcmojkafrikсrfw1000)
    },
        
    sumotgimfrikсvert: function () {
      return parseFloat(this.calcotgimfrikсvert)
    },
        
    sumustzamach: function () {
      return parseFloat(this.calcustzamach)
    },
        
    summojkaunivers: function () {
      return parseFloat(this.calcmojkaunivers)
    },

    sumflottonkompakt: function () {
      return parseFloat(this.calcflottonkompakt)
    },

    sumflottonpet500: function () {
      return parseFloat(this.calcflottonpet500)
    },
    
    sumflottonpet1000: function () {
      return parseFloat(this.calcflottonpet1000)
    },
    
    sumflotplav500kompakt: function () {
      return parseFloat(this.calcflotplav500kompakt)
    },
    
    sumflotplav1000kompakt: function () {
      return parseFloat(this.calcflotplav1000kompakt)
    },
    
    sumflotplav500: function () {
      return parseFloat(this.calcflotplav500)
    },
    
    sumflotplav1000: function () {
      return parseFloat(this.calcflotplav1000)
    },
    
    sumflotplavnurman: function () {
      return parseFloat(this.calcflotplavnurman)
    },
    
    sumustflotton: function () {
      return parseFloat(this.calcustflotton)
    },

    sumwashflotplav: function () {
      return parseFloat(this.calcwashflotplav)
    },

    sumsushkatt500: function () {
      return parseFloat(this.calcsushkatt500)
    },

    sumsushkatt1000: function () {
      return parseFloat(this.calcsushkatt1000)
    },

    sumsushkaplen: function () {
      return parseFloat(this.calcsushkaplen)
    },

    sumprototal: function () {
      return Intl.NumberFormat('ru-RU').format(this.tweenedNumber.toFixed(0));
    }

  },

  methods: {
     selected(prod) {
        if (event.target.checked){
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
      if (event.target.checked){
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
    if (event.target.checked){
    this.namekonv.push(prod);
    this.calckonv += parseFloat(prod.price);
   } else {
    var item = this.namekonv.indexOf(prod);
    this.namekonv.splice(item, 1);

    this.calckonv -= parseFloat(prod.price);
  }
},

  selectedkonv2(prod) {
    if (event.target.checked){
    this.selectedProds.push(prod);
    this.nameOnly.push(prod.name);
    this.calckonv2 += parseFloat(prod.price);
   } else {
    var item = this.selectedProds.indexOf(prod);
    this.selectedProds.splice(item, 1);
     var index = this.nameOnly.indexOf(prod.name);
     this.nameOnly.splice(index, 1);

    this.calckonv2 -= parseFloat(prod.price);
  }
},

selectedkonv2opt(prod) {
  if (event.target.checked){
  this.namekonv2.push(prod);
  this.calckonv2 += parseFloat(prod.price);
  } else {
    var item = this.namekonv2.indexOf(prod);
    this.namekonv2.splice(item, 1);

   this.calckonv2 -= parseFloat(prod.price);
  }
  },

  selectedkonv3(prod) {
    if (event.target.checked){
    this.selectedProds.push(prod);
    this.nameOnly.push(prod.name);
    this.calckonv3 += parseFloat(prod.price);
   } else {
    var item = this.selectedProds.indexOf(prod);
    this.selectedProds.splice(item, 1);
     var index = this.nameOnly.indexOf(prod.name);
     this.nameOnly.splice(index, 1);

    this.calckonv3 -= parseFloat(prod.price);
  }
},

selectedkonv3opt(prod) {
  if (event.target.checked){
  this.namekonv3.push(prod);
  this.calckonv3 += parseFloat(prod.price);
  } else {
    var item = this.namekonv3.indexOf(prod);
    this.namekonv3.splice(item, 1);

   this.calckonv3 -= parseFloat(prod.price);
  }
  },

    selectedperegruzshnek(prod) {
    if (event.target.checked){
    this.selectedProds.push(prod);
    this.nameOnly.push(prod.name);
    this.calcperegruzshnek += parseFloat(prod.price);
     } else {
    var item = this.selectedProds.indexOf(prod);
    this.selectedProds.splice(item, 1);
     var index = this.nameOnly.indexOf(prod.name);
     this.nameOnly.splice(index, 1);

    this.calcperegruzshnek -= parseFloat(prod.price);
      }
    },

    selectedperegruzshnekopt(prod) {
      if (event.target.checked){
      this.nameperegruzshnek.push(prod);
      this.calcperegruzshnek += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.nameperegruzshnek.splice(item, 1);
      this.calcperegruzshnek -= parseFloat(prod.price);
        }
      },
      
    selectedvygruznoyblock(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcvygruznoyblock += parseFloat(prod.price);

      var dopdel = this.dopProds.indexOf('Выгрузной блок');
      console.log(dopdel);
      this.dopProds.splice(dopdel, 1);

       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcvygruznoyblock -= parseFloat(prod.price);
      }
    },


    selectedvygruznoyblockopt(prod) {
      if (event.target.checked){
      this.namevygruznoyblock.push(prod);
      this.calcvygruznoyblock += parseFloat(prod.price);
       } else {
      var item = this.namevygruznoyblock.indexOf(prod);
      this.namevygruznoyblock.splice(item, 1);
  
      this.calcvygruznoyblock -= parseFloat(prod.price);
      }
    },

    selectedvygruznoyblock2(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcvygruznoyblock2 += parseFloat(prod.price);

       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcvygruznoyblock2 -= parseFloat(prod.price);
      }
    },

    selectedvygruznoyblock2opt(prod) {
      if (event.target.checked){
      this.namevygruznoyblock2.push(prod);
      this.calcvygruznoyblock2 += parseFloat(prod.price);
       } else {
      var item = this.namevygruznoyblock2.indexOf(prod);
      this.namevygruznoyblock2.splice(item, 1);
  
      this.calcvygruznoyblock2 -= parseFloat(prod.price);
      }
    },


    selectedstolkip(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcstolkip += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcstolkip -= parseFloat(prod.price);
      }
    },

    selectedstolkipopt(prod) {
      if (event.target.checked){
      this.namestolkip.push(prod);
      this.calcstolkip += parseFloat(prod.price);
       } else {
      var item = this.namestolkip.indexOf(prod);
      this.selectedProds.splice(item, 1);

  
      this.namestolkip -= parseFloat(prod.price);
      }
    },

    selectedrazbivkipver(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcrazbivkipver += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcrazbivkipver -= parseFloat(prod.price);
      }
    },

    selectedrazbivkipveropt(prod) {
      if (event.target.checked){
      this.namerazbivkipver.push(prod);
      this.calcrazbivkipver += parseFloat(prod.price);
       } else {
      var item = this.namerazbivkipver.indexOf(prod);
      this.namerazbivkipver.splice(item, 1);
  
      this.calcrazbivkipver -= parseFloat(prod.price);
      }
    },

    selectedrazbivkipgor(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcrazbivkipgor += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcrazbivkipgor -= parseFloat(prod.price);
      }
    },

    selectedrazbivkipgoropt(prod) {
      if (event.target.checked){
      this.namerazbivkipgor.push(prod);
      this.calcrazbivkipgor += parseFloat(prod.price);
       } else {
      var item = this.namerazbivkipgor.indexOf(prod);
      this.namerazbivkipgor.splice(item, 1);
  
      this.calcrazbivkipgor -= parseFloat(prod.price);
      }
    },

    selectedsortuchast(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcsortuchast += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcsortuchast -= parseFloat(prod.price);
      }
    },

    selectedsortuchastopt(prod) {
      if (event.target.checked){
      this.namesortuchast.push(prod);
      this.calcsortuchast += parseFloat(prod.price);
       } else {
      var item = this.namesortuchast.indexOf(prod);
      this.namesortuchast.splice(item, 1);
  
      this.calcsortuchast -= parseFloat(prod.price);
      }
    },

    selectedlkonv(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calclkonv += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calclkonv -= parseFloat(prod.price);
      }
    },

    selectedlkonvopt(prod) {
      if (event.target.checked){
      this.namelkonv.push(prod);
      this.calclkonv += parseFloat(prod.price);
       } else {
      var item = this.namelkonv.indexOf(prod);
      this.namelkonv.splice(item, 1);
  
      this.calclkonv -= parseFloat(prod.price);
      }
    },

    selectedsortpost(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcsortpost += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcsortpost -= parseFloat(prod.price);
      }
    },

    selectedsortpostopt(prod) {
      if (event.target.checked){
      this.namesortpost.push(prod);
      this.calcsortpost += parseFloat(prod.price);
       } else {
      var item = this.namesortpost.indexOf(prod);
      this.namesortpost.splice(item, 1);
  
      this.calcsortpost -= parseFloat(prod.price);
      }
    },

    selectedgrohotsmall(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcgrohotsmall += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcgrohotsmall -= parseFloat(prod.price);
      }
    },

    selectedgrohotsmallopt(prod) {
      if (event.target.checked){
      this.namegrohotsmall.push(prod);
      this.calcgrohotsmall += parseFloat(prod.price);
       } else {
      var item = this.namegrohotsmall.indexOf(prod);
      this.namegrohotsmall.splice(item, 1);
  
      this.calcgrohotsmall -= parseFloat(prod.price);
      }
    },

    selectedgrohotbig(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcgrohotbig += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcgrohotbig -= parseFloat(prod.price);
      }
    },

    selectedgrohotbigopt(prod) {
      if (event.target.checked){
      this.namegrohotbig.push(prod);
      this.calcgrohotbig += parseFloat(prod.price);
       } else {
      var item = this.namegrohotbig.indexOf(prod);
      this.namegrohotbig.splice(item, 1);
  
      this.calcgrohotbig -= parseFloat(prod.price);
      }
    },

    selectedgrohotnurman(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcgrohotnurman += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcgrohotnurman -= parseFloat(prod.price);
      }
    },

    selectedgrohotnurmanopt(prod) {
      if (event.target.checked){
      this.namegrohotnurman.push(prod);
      this.calcgrohotnurman += parseFloat(prod.price);
       } else {
      var item = this.namegrohotnurman.indexOf(prod);
      this.namegrohotnurman.splice(item, 1);
  
      this.calcgrohotnurman -= parseFloat(prod.price);
      }
    },

    
    selectedotdiretiket500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotdiretiket500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotdiretiket500 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiket500opt(prod) {
      if (event.target.checked){
      this.nameotdiretiket500.push(prod);
      this.calcotdiretiket500 += parseFloat(prod.price);
       } else {
      var item = this.nameotdiretiket500.indexOf(prod);
      this.nameotdiretiket500.splice(item, 1);
  
      this.calcotdiretiket500 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiket1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotdiretiket1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotdiretiket1000 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiket1000opt(prod) {
      if (event.target.checked){
      this.nameotdiretiket1000.push(prod);
      this.calcotdiretiket1000 += parseFloat(prod.price);
       } else {
      var item = this.nameotdiretiket1000.indexOf(prod);
      this.nameotdiretiket1000.splice(item, 1);
  
      this.calcotdiretiket1000 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiketwash500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotdiretiketwash500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotdiretiketwash500 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiketwash500opt(prod) {
      if (event.target.checked){
      this.nameotdiretiketwash500.push(prod);
      this.calcotdiretiketwash500 += parseFloat(prod.price);
       } else {
      var item = this.nameotdiretiketwash500.indexOf(prod);
      this.nameotdiretiketwash500.splice(item, 1);
  
      this.calcotdiretiketwash500 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiketwash1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotdiretiketwash1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotdiretiketwash1000 -= parseFloat(prod.price);
      }
    },

    selectedotdiretiketwash1000opt(prod) {
      if (event.target.checked){
      this.nameotdiretiketwash1000.push(prod);
      this.calcotdiretiketwash1000 += parseFloat(prod.price);
       } else {
      var item = this.nameotdiretiketwash1000.indexOf(prod);
      this.nameotdiretiketwash1000.splice(item, 1);
  
      this.calcotdiretiketwash1000 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl500 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl5002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl5002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl5002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl500opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl500.push(prod);
      this.calcdrobilkacrl500 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl500.indexOf(prod);
      this.namedrobilkacrl500.splice(item, 1);
  
      this.calcdrobilkacrl500 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl5002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl5002.push(prod);
      this.calcdrobilkacrl5002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl5002.indexOf(prod);
      this.namedrobilkacrl5002.splice(item, 1);
  
      this.calcdrobilkacrl5002 -= parseFloat(prod.price);
      }
    },


    selecteddrobilkacrl600(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl600 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl600 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl6002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl6002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl6002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl600opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl600.push(prod);
      this.calcdrobilkacrl600 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl600.indexOf(prod);
      this.namedrobilkacrl600.splice(item, 1);
  
      this.calcdrobilkacrl600 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl6002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl6002.push(prod);
      this.calcdrobilkacrl6002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl6002.indexOf(prod);
      this.namedrobilkacrl6002.splice(item, 1);
  
      this.calcdrobilkacrl6002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl700(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl700 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl700 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl7002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl7002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl7002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl700opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl700.push(prod);
      this.calcdrobilkacrl700 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl700.indexOf(prod);
      this.namedrobilkacrl700.splice(item, 1);
  
      this.calcdrobilkacrl700 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl7002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl7002.push(prod);
      this.calcdrobilkacrl7002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl7002.indexOf(prod);
      this.namedrobilkacrl7002.splice(item, 1);
  
      this.calcdrobilkacrl7002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl800(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl800 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl800 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl8002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl8002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl8002 -= parseFloat(prod.price);
      }
    },

    
    selecteddrobilkacrl800opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl800.push(prod);
      this.calcdrobilkacrl800 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl800.indexOf(prod);
      this.namedrobilkacrl800.splice(item, 1);
  
      this.calcdrobilkacrl800 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl8002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl8002.push(prod);
      this.calcdrobilkacrl8002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl8002.indexOf(prod);
      this.namedrobilkacrl8002.splice(item, 1);
  
      this.calcdrobilkacrl8002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl900(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl900 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl900 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl9002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl9002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl9002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl900opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl900.push(prod);
      this.calcdrobilkacrl900 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl900.indexOf(prod);
      this.namedrobilkacrl900.splice(item, 1);
  
      this.calcdrobilkacrl900 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl9002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl9002.push(prod);
      this.calcdrobilkacrl9002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl9002.indexOf(prod);
      this.namedrobilkacrl9002.splice(item, 1);
  
      this.calcdrobilkacrl9002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl1000 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl10002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl10002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl10002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl1000opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl1000.push(prod);
      this.calcdrobilkacrl1000 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl1000.indexOf(prod);
      this.namedrobilkacrl1000.splice(item, 1);
  
      this.calcdrobilkacrl1000 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl10002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl10002.push(prod);
      this.calcdrobilkacrl10002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl10002.indexOf(prod);
      this.namedrobilkacrl10002.splice(item, 1);
  
      this.calcdrobilkacrl10002 -= parseFloat(prod.price);
      }
    },


    selecteddrobilkacrl1100(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl1100 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl1100 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl11002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrl11002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrl11002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl1100opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl1100.push(prod);
      this.calcdrobilkacrl1100 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl1000.indexOf(prod);
      this.namedrobilkacrl1100.splice(item, 1);
  
      this.calcdrobilkacrl1100 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrl11002opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrl11002.push(prod);
      this.calcdrobilkacrl11002 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrl11002.indexOf(prod);
      this.namedrobilkacrl11002.splice(item, 1);
  
      this.calcdrobilkacrl11002 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh30(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh30 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh30 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh30opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrh30.push(prod);
      this.calcdrobilkacrh30 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrh30.indexOf(prod);
      this.namedrobilkacrh30.splice(item, 1);
  
      this.calcdrobilkacrh30 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh37(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh37 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh37 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh37opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrh37.push(prod);
      this.calcdrobilkacrh37 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrh37.indexOf(prod);
      this.namedrobilkacrh37.splice(item, 1);
  
      this.calcdrobilkacrh37 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh45(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh45 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh45 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh45opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrh45.push(prod);
      this.calcdrobilkacrh45 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrh45.indexOf(prod);
      this.namedrobilkacrh45.splice(item, 1);
  
      this.calcdrobilkacrh45 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh55(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh55 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh55 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh55opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrh55.push(prod);
      this.calcdrobilkacrh55 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrh55.indexOf(prod);
      this.namedrobilkacrh55.splice(item, 1);
  
      this.calcdrobilkacrh55 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh75(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh75 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh75 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh75opt(prod) {
      if (event.target.checked){
      this.namedrobilkacrh75.push(prod);
      this.calcdrobilkacrh75 += parseFloat(prod.price);
       } else {
      var item = this.namedrobilkacrh75.indexOf(prod);
      this.namedrobilkacrh75.splice(item, 1);
  
      this.calcdrobilkacrh75 -= parseFloat(prod.price);
      }
    },

    selecteddrobilkacrh160(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcdrobilkacrh160 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcdrobilkacrh160 -= parseFloat(prod.price);
      }
    },

    selectedshredoss2260(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredoss2260 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredoss2260 -= parseFloat(prod.price);
      }
    },

    selectedshredoss2260opt(prod) {
      if (event.target.checked){
      this.nameshredoss2260.push(prod);
      this.calcshredoss2260 += parseFloat(prod.price);
       } else {
      var item = this.nameshredoss2260.indexOf(prod);
      this.nameshredoss2260.splice(item, 1);
  
      this.calcshredoss2260 -= parseFloat(prod.price);
      }
    },

    selectedshredoss3080(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredoss3080 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredoss3080 -= parseFloat(prod.price);
      }
    },

    selectedshredoss3080opt(prod) {
      if (event.target.checked){
      this.nameshredoss3080.push(prod);
      this.calcshredoss3080 += parseFloat(prod.price);
       } else {
      var item = this.nameshredoss3080.indexOf(prod);
      this.nameshredoss3080.splice(item, 1);
  
      this.calcshredoss3080 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs2260(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredtsfs2260 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredtsfs2260 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs2260opt(prod) {
      if (event.target.checked){
      this.nameshredtsfs2260.push(prod);
      this.calcshredtsfs2260 += parseFloat(prod.price);
       } else {
      var item = this.nameshredtsfs2260.indexOf(prod);
      this.nameshredtsfs2260.splice(item, 1);
  
      this.calcshredtsfs2260 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs3080(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredtsfs3080 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredtsfs3080 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs3080opt(prod) {
      if (event.target.checked){
      this.nameshredtsfs3080.push(prod);
      this.calcshredtsfs3080 += parseFloat(prod.price);
       } else {
      var item = this.nameshredtsfs3080.indexOf(prod);
      this.nameshredtsfs3080.splice(item, 1);
  
      this.calcshredtsfs3080 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs40100(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredtsfs40100 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredtsfs40100 -= parseFloat(prod.price);
      }
    },

    selectedshredtsfs40100opt(prod) {
      if (event.target.checked){
      this.nameshredtsfs40100.push(prod);
      this.calcshredtsfs40100 += parseFloat(prod.price);
       } else {
      var item = this.nameshredtsfs40100.indexOf(prod);
      this.nameshredtsfs40100.splice(item, 1);
  
      this.calcshredtsfs40100 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8040(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredfss8040 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredfss8040 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8040opt(prod) {
      if (event.target.checked){
      this.nameshredfss8040.push(prod);
      this.calcshredfss8040 += parseFloat(prod.price);
       } else {
      var item = this.nameshredfss8040.indexOf(prod);
      this.nameshredfss8040.splice(item, 1);
  
      this.calcshredfss8040 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8060(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredfss8060 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredfss8060 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8060opt(prod) {
      if (event.target.checked){
      this.nameshredfss8060.push(prod);
      this.calcshredfss8060 += parseFloat(prod.price);
       } else {
      var item = this.nameshredfss8060.indexOf(prod);
      this.nameshredfss8060.splice(item, 1);
  
      this.calcshredfss8060 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8080(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredfss8080 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredfss8080 -= parseFloat(prod.price);
      }
    },

    selectedshredfss8080opt(prod) {
      if (event.target.checked){
      this.nameshredfss8080.push(prod);
      this.calcshredfss8080 += parseFloat(prod.price);
       } else {
      var item = this.nameshredfss8080.indexOf(prod);
      this.nameshredfss8080.splice(item, 1);
  
      this.calcshredfss8080 -= parseFloat(prod.price);
      }
    },

    
    selectedshredfss80100(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcshredfss80100 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcshredfss80100 -= parseFloat(prod.price);
      }
    },

    selectedshredfss80100opt(prod) {
      if (event.target.checked){
      this.nameshredfss80100.push(prod);
      this.calcshredfss80100 += parseFloat(prod.price);
       } else {
      var item = this.nameshredfss80100.indexOf(prod);
      this.nameshredfss80100.splice(item, 1);
  
      this.calcshredfss80100 -= parseFloat(prod.price);
      }
    },


    selectedfrikcmojkaperegruz(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcfrikcmojkaperegruz += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcfrikcmojkaperegruz -= parseFloat(prod.price);
      }
    },

    selectedfrikcmojkaperegruzopt(prod) {
      if (event.target.checked){
      this.namefrikcmojkaperegruz.push(prod);
      this.calcfrikcmojkaperegruz += parseFloat(prod.price);
       } else {
      var item = this.namefrikcmojkaperegruz.indexOf(prod);
      this.namefrikcmojkaperegruz.splice(item, 1);
  
      this.calcfrikcmojkaperegruz -= parseFloat(prod.price);
      }
    },

    selectedfrikcmojkaperegruzgilza(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcfrikcmojkaperegruzgilza += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcfrikcmojkaperegruzgilza -= parseFloat(prod.price);
      }
    },

    selectedfrikcmojkaperegruzgilzaopt(prod) {
      if (event.target.checked){
      this.namefrikcmojkaperegruzgilza.push(prod);
      this.calcfrikcmojkaperegruzgilza += parseFloat(prod.price);
       } else {
      var item = this.namefrikcmojkaperegruzgilza.indexOf(prod);
      this.namefrikcmojkaperegruzgilza.splice(item, 1);
  
      this.calcfrikcmojkaperegruzgilza -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikс(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotgimfrikс += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotgimfrikс -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсopt(prod) {
      if (event.target.checked){
      this.nameotgimfrikс.push(prod);
      this.calcotgimfrikс += parseFloat(prod.price);
       } else {
      var item = this.nameotgimfrikс.indexOf(prod);
      this.nameotgimfrikс.splice(item, 1);
  
      this.calcotgimfrikс -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсfom500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotgimfrikсfom500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotgimfrikсfom500 -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсfom500opt(prod) {
      if (event.target.checked){
      this.nameotgimfrikсfom500.push(prod);
      this.calcotgimfrikсfom500 += parseFloat(prod.price);
       } else {
      var item = this.nameotgimfrikсfom500.indexOf(prod);
      this.nameotgimfrikсfom500.splice(item, 1);
  
      this.calcotgimfrikсfom500 -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсfom1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotgimfrikсfom1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotgimfrikсfom1000 -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсfom1000opt(prod) {
      if (event.target.checked){
      this.nameotgimfrikсfom1000.push(prod);
      this.calcotgimfrikсfom1000 += parseFloat(prod.price);
       } else {
      var item = this.nameotgimfrikсfom1000.indexOf(prod);
      this.nameotgimfrikсfom1000.splice(item, 1);
  
      this.calcotgimfrikсfom1000 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcmojkafrikсrfw500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcmojkafrikсrfw500 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw500opt(prod) {
      if (event.target.checked){
      this.namemojkafrikсrfw500.push(prod);
      this.calcmojkafrikсrfw500 += parseFloat(prod.price);
       } else {
      var item = this.namemojkafrikсrfw500.indexOf(prod);
      this.namemojkafrikсrfw500.splice(item, 1);
  
      this.calcmojkafrikсrfw500 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw5002(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcmojkafrikсrfw5002 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcmojkafrikсrfw5002 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw5002opt(prod) {
      if (event.target.checked){
      this.namemojkafrikсrfw5002.push(prod);
      this.calcmojkafrikсrfw5002 += parseFloat(prod.price);
       } else {
      var item = this.namemojkafrikсrfw5002.indexOf(prod);
      this.namemojkafrikсrfw5002.splice(item, 1);
  
      this.calcmojkafrikсrfw5002 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcmojkafrikсrfw1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcmojkafrikсrfw1000 -= parseFloat(prod.price);
      }
    },

    selectedmojkafrikсrfw1000opt(prod) {
      if (event.target.checked){
      this.namemojkafrikсrfw1000.push(prod);
      this.calcmojkafrikсrfw1000 += parseFloat(prod.price);
       } else {
      var item = this.namemojkafrikсrfw1000.indexOf(prod);
      this.namemojkafrikсrfw1000.splice(item, 1);
  
      this.calcmojkafrikсrfw1000 -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсvert(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcotgimfrikсvert += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcotgimfrikсvert -= parseFloat(prod.price);
      }
    },

    selectedotgimfrikсvertopt(prod) {
      if (event.target.checked){
      this.nameotgimfrikсvert.push(prod);
      this.calcotgimfrikсvert += parseFloat(prod.price);
       } else {
      var item = this.nameotgimfrikсvert.indexOf(prod);
      this.nameotgimfrikсvert.splice(item, 1);
  
      this.calcotgimfrikсvert -= parseFloat(prod.price);
      }
    },

    selectedustzamach(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcustzamach += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcustzamach -= parseFloat(prod.price);
      }
    },

    selectedustzamachopt(prod) {
      if (event.target.checked){
      this.nameustzamach.push(prod);
      this.calcustzamach += parseFloat(prod.price);
       } else {
      var item = this.nameustzamach.indexOf(prod);
      this.nameustzamach.splice(item, 1);
  
      this.calcustzamach -= parseFloat(prod.price);
      }
    },

    selectedmojkaunivers(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcmojkaunivers += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcmojkaunivers -= parseFloat(prod.price);
      }
    },

    selectedmojkauniversopt(prod) {
      if (event.target.checked){
      this.namemojkaunivers.push(prod);
      this.calcmojkaunivers += parseFloat(prod.price);
       } else {
      var item = this.namemojkaunivers.indexOf(prod);
      this.namemojkaunivers.splice(item, 1);
  
      this.calcmojkaunivers -= parseFloat(prod.price);
      }
    },

    selectedflottonkompakt(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflottonkompakt += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflottonkompakt -= parseFloat(prod.price);
      }
    },

    selectedflottonkompaktopt(prod) {
      if (event.target.checked){
      this.nameflottonkompakt.push(prod);
      this.calcflottonkompakt += parseFloat(prod.price);
       } else {
      var item = this.nameflottonkompakt.indexOf(prod);
      this.nameflottonkompakt.splice(item, 1);
  
      this.calcflottonkompakt -= parseFloat(prod.price);
      }
    },

    selectedflottonpet500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflottonpet500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflottonpet500 -= parseFloat(prod.price);
      }
    },

    selectedflottonpet500opt(prod) {
      if (event.target.checked){
      this.nameflottonpet500.push(prod);
      this.calcflottonpet500 += parseFloat(prod.price);
       } else {
      var item = this.nameflottonpet500.indexOf(prod);
      this.nameflottonpet500.splice(item, 1);
  
      this.calcflottonpet500 -= parseFloat(prod.price);
      }
    },

    selectedflottonpet1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflottonpet1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflottonpet1000 -= parseFloat(prod.price);
      }
    },

    selectedflottonpet1000opt(prod) {
      if (event.target.checked){
      this.nameflottonpet1000.push(prod);
      this.calcflottonpet1000 += parseFloat(prod.price);
       } else {
      var item = this.nameflottonpet1000.indexOf(prod);
      this.nameflottonpet1000.splice(item, 1);
  
      this.calcflottonpet1000 -= parseFloat(prod.price);
      }
    },

    selectedflotplav500kompakt(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflotplav500kompakt += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflotplav500kompakt -= parseFloat(prod.price);
      }
    },

    selectedflotplav500kompaktopt(prod) {
      if (event.target.checked){
      this.nameflotplav500kompakt.push(prod);
      this.calcflotplav500kompakt += parseFloat(prod.price);
       } else {
      var item = this.nameflotplav500kompakt.indexOf(prod);
      this.nameflotplav500kompakt.splice(item, 1);
  
      this.calcflotplav500kompakt -= parseFloat(prod.price);
      }
    },

    selectedflotplav1000kompakt(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflotplav1000kompakt += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflotplav1000kompakt -= parseFloat(prod.price);
      }
    },

    selectedflotplav1000kompaktopt(prod) {
      if (event.target.checked){
      this.nameflotplav1000kompakt.push(prod);
      this.calcflotplav1000kompakt += parseFloat(prod.price);
       } else {
      var item = this.nameflotplav1000kompakt.indexOf(prod);
      this.nameflotplav1000kompakt.splice(item, 1);
  
      this.calcflotplav1000kompakt -= parseFloat(prod.price);
      }
    },

    selectedflotplav500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflotplav500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflotplav500 -= parseFloat(prod.price);
      }
    },

    selectedflotplav500opt(prod) {
      if (event.target.checked){
      this.nameflotplav500.push(prod);
      this.calcflotplav500 += parseFloat(prod.price);
       } else {
      var item = this.nameflotplav500.indexOf(prod);
      this.nameflotplav500.splice(item, 1);
  
      this.calcflotplav500 -= parseFloat(prod.price);
      }
    },

    selectedflotplav1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflotplav1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflotplav1000 -= parseFloat(prod.price);
      }
    },

    selectedflotplav1000opt(prod) {
      if (event.target.checked){
      this.nameflotplav1000.push(prod);
      this.calcflotplav1000 += parseFloat(prod.price);
       } else {
      var item = this.nameflotplav1000.indexOf(prod);
      this.nameflotplav1000.splice(item, 1);
  
      this.calcflotplav1000 -= parseFloat(prod.price);
      }
    },

    selectedflotplavnurman(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcflotplavnurman += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcflotplavnurman -= parseFloat(prod.price);
      }
    },

    selectedflotplavnurmanopt(prod) {
      if (event.target.checked){
      this.nameflotplavnurman.push(prod);
      this.calcflotplavnurman += parseFloat(prod.price);
       } else {
      var item = this.nameflotplavnurman.indexOf(prod);
      this.nameflotplavnurman.splice(item, 1);
  
      this.calcflotplavnurman -= parseFloat(prod.price);
      }
    },

    selectedustflotton(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcustflotton += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcustflotton -= parseFloat(prod.price);
      }
    },

    selectedustflottonopt(prod) {
      if (event.target.checked){
      this.nameustflotton.push(prod);
      this.calcustflotton += parseFloat(prod.price);
       } else {
      var item = this.nameustflotton.indexOf(prod);
      this.nameustflotton.splice(item, 1);
  
      this.calcustflotton -= parseFloat(prod.price);
      }
    },

    selectedwashflotplav(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcwashflotplav += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcwashflotplav -= parseFloat(prod.price);
      }
    },

    selectedwashflotplavopt(prod) {
      if (event.target.checked){
      this.namewashflotplav.push(prod);
      this.calcwashflotplav += parseFloat(prod.price);
       } else {
      var item = this.namewashflotplav.indexOf(prod);
      this.namewashflotplav.splice(item, 1);
  
      this.calcwashflotplav -= parseFloat(prod.price);
      }
    },

    selectedsushkatt500(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcsushkatt500 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcsushkatt500 -= parseFloat(prod.price);
      }
    },

    selectedsushkatt500opt(prod) {
      if (event.target.checked){
      this.namesushkatt500.push(prod);
      this.calcsushkatt500 += parseFloat(prod.price);
       } else {
      var item = this.namesushkatt500.indexOf(prod);
      this.namesushkatt500.splice(item, 1);
  
      this.calcsushkatt500 -= parseFloat(prod.price);
      }
    },

    selectedsushkatt1000(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcsushkatt1000 += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcsushkatt1000 -= parseFloat(prod.price);
      }
    },

    selectedsushkatt1000opt(prod) {
      if (event.target.checked){
      this.namesushkatt1000.push(prod);
      this.calcsushkatt1000 += parseFloat(prod.price);
       } else {
      var item = this.namesushkatt1000.indexOf(prod);
      this.namesushkatt1000.splice(item, 1);
  
      this.calcsushkatt1000 -= parseFloat(prod.price);
      }
    },

    selectedsushkaplen(prod) {
      if (event.target.checked){
      this.selectedProds.push(prod);
      this.nameOnly.push(prod.name);
      this.calcsushkaplen += parseFloat(prod.price);
       } else {
      var item = this.selectedProds.indexOf(prod);
      this.selectedProds.splice(item, 1);
       var index = this.nameOnly.indexOf(prod.name);
       this.nameOnly.splice(index, 1);
  
      this.calcsushkaplen -= parseFloat(prod.price);
      }
    },

    selectedsushkaplenopt(prod) {
      if (event.target.checked){
      this.namesushkaplen.push(prod);
      this.calcsushkaplen += parseFloat(prod.price);
       } else {
      var item = this.namesushkaplen.indexOf(prod);
      this.namesushkaplen.splice(item, 1);
  
      this.calcsushkaplen -= parseFloat(prod.price);
      }
    },

    selectedimgline(item) {
      if (event.target.checked){
      this.imglinesel.push(item);

       } else {
      var index = this.imglinesel.indexOf(item);
      this.imglinesel.splice(index, 1);
      }
    },


    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },

    dragEnd(e) {
      this.oldIndex = e.oldIndex;
      this.newIndex = e.newIndex;
    },

    addkonv(){
      this.konvadded = !this.konvadded
    },

    addkonv2(){
      this.konvadded2 = !this.konvadded2
    },

    addmojka(){
      this.mojkaadded = !this.mojkaadded
    },

    addvygruzblock(){
      this.vygruzblockadded = !this.vygruzblockadded
    },

    adddrob500(){
      this.drob500added = !this.drob500added
    },

    adddrob600(){
      this.drob600added = !this.drob600added
    },

    adddrob700(){
      this.drob700added = !this.drob700added
    },

    adddrob800(){
      this.drob800added = !this.drob800added
    },

    adddrob900(){
      this.drob900added = !this.drob900added
    },

    adddrob1000(){
      this.drob1000added = !this.drob1000added
    },

    adddrob1100(){
      this.drob1100added = !this.drob1100added
    },

    delequip(index){
      console.log(index);
      this.dopProds.splice(index, 1);
    },

    pagebreak(index){
      console.log(index);
      this.pagebreakarr.push(index);
    }

  },
  watch: {
    sumpro: function (newValue) {
      gsap.to(this.$data, {duration: 0.5, tweenedNumber: newValue});
    }
  },
}
</script>

<style>
body{
  background: #f2f2f7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 15px auto 0;
  padding: 15px 25px;
  max-width: 1120px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 32px rgb(0 0 0 / 8%);
}

.totalpriceblock{
   position: sticky;
   top: 70px;
    width: 100%;
    height: 100px;
    background-color: #f6f6f6;
    border: 1px solid #F7761F;
    color: #444;
    box-shadow: 0 4px 30px rgba(50,50,66,.5);
    border-radius: 4px;
    padding: 10px 10px 5px;
z-index:999;
}
.totalpriceblock p{
    font-weight: bold;
}

.totalpriceblock_link{
text-align:right;
margin-top: -10px;
font-family: 'Exo 2', sans-serif;
font-size: 14px;
color: #f7761f;
}

.confelemblock{
    border: 1px solid #f6f6f6;
    background: #FFF;
    padding: 0px 5px 25px;
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 4px 30px rgba(50,50,66,.12);
    border-radius: 4px;
}

#right-block{
    min-height: 1700px;
}

.addequip{
    float: right;
    cursor: pointer;
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    color: #f7761f;
    border-bottom: 1px dashed #f7761f;
}

.dopelemblock{
   position: sticky;
   top: 185px;
    background-color: #f6f6f6;
    padding: 5px 10px 25px;
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 4px 30px rgba(50,50,66,.30);
    border-radius: 4px;
z-index:99;
}

.dopelemblock p{
    font-weight: 700;
}

.dopelemblock label{
    font-weight: 300;
}

.selectstyle{
    height: 40px;
    max-width: 348px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    padding: 5px 15px;
    background: #fff;
    color: #1a3b5d;
}

.block-equip-line-img {
  width: 200px;
  margin: 10px 10px 0 10px;
}

.dispnone{
    display: none !important;
  }
.totalpriceblock_info{

position: absolute;
top: 30px;
right: 60px;
line-height:1;
font-family: 'Exo 2', sans-serif;
font-size: 13px;
color: #7c7c7c;
padding: 1px 2px 1px 5px;
}

.totalpriceblock_info i{
float:left;
font-size:38px;
margin: 5px 2px 0 0;
color: #F7761F;
}
</style>
