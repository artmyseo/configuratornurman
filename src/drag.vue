<template>
<div>
    <h4 v-if="activeItem === 'pdftab'" id="kptitlepage">Стоимость линии</h4>
      <draggable v-model="selectedProds" @end="dragEnd" ghost-class="ghost" class="list">
      <transition-group type="transition" name="flip-list">

      <div v-for="(item,index) in selectedProds" :key="item.id">
      <!--<div v-if="index == '5'" class="kp__logo-page"></div>
      <div v-if="index == '10'" class="kp__logo-page"></div>
      <div v-if="index == '15'" class="kp__logo-page"></div>-->
      <div class="list-item">
      <div class="indexblock" style="mardin-left:-30px;">{{ index + 1 }}</div>
        <div class="imgblock"><img :src="item.img"></div>
        <div style="width:100%;">
        <div class="selectprod_title"><h4>{{item.name}}</h4>   <div class="selectprod_startprice">{{item.price}}р.</div></div>
        <div class="selectprod_description">{{item.desc}}</div>
      <div class="optionblock"><span>Выбранные опции:</span>
      <div class="optionblockdesc" v-if="item.codename === 'namekonv'">
          <div v-for="opt in namekonv" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
          </div>
          <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv1 }}р.</span></div>
      </div>
      <div class="optionblockdesc" v-if="item.codename === 'namekonv2'">
        <div v-for="opt in namekonv2" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv2 }}р.</span></div>
      </div>
      <div class="optionblockdesc" v-if="item.codename === 'namekonv3'">
        <div v-for="opt in namekonv3" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumkonv3 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'nameperegruzshnek'">
        <div v-for="opt in nameperegruzshnek" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumperegruzshnek }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namevygruznoyblock'">
        <div v-for="opt in namevygruznoyblock" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumvygruznoyblock }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namevygruznoyblock2'">
        <div v-for="opt in namevygruznoyblock2" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumvygruznoyblock2 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namestolkip'">
        <div v-for="opt in namestolkip" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumstolkip }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namerazbivkipver'">
        <div v-for="opt in namerazbivkipver" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumrazbivkipver }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namerazbivkipgor'">
        <div v-for="opt in namerazbivkipgor" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumrazbivkipgor }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namesortuchast'">
        <div v-for="opt in namesortuchast" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsortuchast }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namelkonv'">
        <div v-for="opt in namelkonv" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumlkonv }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namesortpost'">
        <div v-for="opt in namesortpost" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsortpost }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namegrohotsmall'">
        <div v-for="opt in namegrohotsmall" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotsmall }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namegrohotbig'">
        <div v-for="opt in namegrohotbig" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotbig }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namegrohotnurman'">
        <div v-for="opt in namegrohotnurman" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumgrohotnurman }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'nameotdiretiket500'">
        <div v-for="opt in nameotdiretiket500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiket500 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'nameotdiretiket1000'">
        <div v-for="opt in nameotdiretiket1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiket1000 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'nameotdiretiketwash500'">
        <div v-for="opt in nameotdiretiketwash500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiketwash500 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'nameotdiretiketwash1000'">
        <div v-for="opt in nameotdiretiketwash1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotdiretiketwash1000 }}р.</span></div>
      </div>

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl500'">
        <div v-for="opt in namedrobilkacrl500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl500 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl5002'">
        <div v-for="opt in namedrobilkacrl5002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl5002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl600'">
        <div v-for="opt in namedrobilkacrl600" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl600 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl6002'">
        <div v-for="opt in namedrobilkacrl6002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl6002}}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl700'">
        <div v-for="opt in namedrobilkacrl700" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl700 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl7002'">
        <div v-for="opt in namedrobilkacrl7002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl7002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl800'">
        <div v-for="opt in namedrobilkacrl800" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl800 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl8002'">
        <div v-for="opt in namedrobilkacrl8002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl8002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl900'">
        <div v-for="opt in namedrobilkacrl900" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl900 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl9002'">
        <div v-for="opt in namedrobilkacrl9002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl9002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl1000'">
        <div v-for="opt in namedrobilkacrl1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl1000 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl10002'">
        <div v-for="opt in namedrobilkacrl10002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl10002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl1100'">
        <div v-for="opt in namedrobilkacrl1100" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl1100 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrl11002'">
        <div v-for="opt in namedrobilkacrl11002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrl11002 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrh30'">
        <div v-for="opt in namedrobilkacrh30" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh30 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrh37'">
        <div v-for="opt in namedrobilkacrh37" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh37 }}р.</span></div>
      </div>         

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrh45'">
        <div v-for="opt in namedrobilkacrh45" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh45 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrh55'">
        <div v-for="opt in namedrobilkacrh55" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh55 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namedrobilkacrh75'">
        <div v-for="opt in namedrobilkacrh75" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumdrobilkacrh75 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredoss2260'">
        <div v-for="opt in nameshredoss2260" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredoss2260 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredoss3080'">
        <div v-for="opt in nameshredoss3080" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredoss3080 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredtsfs2260'">
        <div v-for="opt in nameshredtsfs2260" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs2260 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredtsfs3080'">
        <div v-for="opt in nameshredtsfs3080" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs3080 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredtsfs40100'">
        <div v-for="opt in nameshredtsfs40100" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredtsfs40100 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredfss8040'">
        <div v-for="opt in nameshredfss8040" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8040 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredfss8060'">
        <div v-for="opt in nameshredfss8060" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8060 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredfss8080'">
        <div v-for="opt in nameshredfss8080" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss8080 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'nameshredfss80100'">
        <div v-for="opt in nameshredfss80100" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumshredfss80100 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namefrikcmojkaperegruz'">
        <div v-for="opt in namefrikcmojkaperegruz" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumfrikcmojkaperegruz }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namefrikcmojkaperegruzgilza'">
        <div v-for="opt in namefrikcmojkaperegruzgilza" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumfrikcmojkaperegruzgilza }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameotgimfrikс'">
        <div v-for="opt in nameotgimfrikс" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikс }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameotgimfrikсfom500'">
        <div v-for="opt in nameotgimfrikсfom500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсfom500 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameotgimfrikсfom1000'">
        <div v-for="opt in nameotgimfrikсfom1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсfom1000 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namemojkafrikсrfw500'">
        <div v-for="opt in namemojkafrikсrfw500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw500 }}р.</span></div>
      </div> 

      <div class="optionblockdesc" v-if="item.codename === 'namemojkafrikсrfw5002'">
        <div v-for="opt in namemojkafrikсrfw5002" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw5002 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namemojkafrikсrfw1000'">
        <div v-for="opt in namemojkafrikсrfw1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkafrikсrfw1000 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameotgimfrikсvert'">
        <div v-for="opt in nameotgimfrikсvert" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumotgimfrikсvert }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameustzamach'">
        <div v-for="opt in nameustzamach" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumustzamach }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namemojkaunivers'">
        <div v-for="opt in namemojkaunivers" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ summojkaunivers }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflottonkompakt'">
        <div v-for="opt in nameflottonkompakt" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonkompakt }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflottonpet500'">
        <div v-for="opt in nameflottonpet500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonpet500 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflottonpet1000'">
        <div v-for="opt in nameflottonpet1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflottonpet1000 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflotplav500kompakt'">
        <div v-for="opt in nameflotplav500kompakt" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav500kompakt }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflotplav1000kompakt'">
        <div v-for="opt in nameflotplav1000kompakt" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav1000kompakt }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflotplav500'">
        <div v-for="opt in nameflotplav500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav500 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflotplav1000'">
        <div v-for="opt in nameflotplav1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplav1000 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameflotplavnurman'">
        <div v-for="opt in nameflotplavnurman" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumflotplavnurman }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'nameustflotton'">
        <div v-for="opt in nameustflotton" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumustflotton }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namewashflotplav'">
        <div v-for="opt in namewashflotplav" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumwashflotplav }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namesushkatt500'">
        <div v-for="opt in namesushkatt500" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkatt500 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namesushkatt1000'">
        <div v-for="opt in namesushkatt1000" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkatt1000 }}р.</span></div>
      </div> 
      
      <div class="optionblockdesc" v-if="item.codename === 'namesushkaplen'">
        <div v-for="opt in namesushkaplen" :key="opt.name" class="optionstyle">
          <div class="optionname">{{opt.name}}</div><div class="optionprice">{{opt.price}}р.</div>
        </div>
        <div class="block-kp-line-sumprice">Стоимость с опциями: <span class="sumprice">{{ sumsushkaplen }}р.</span></div>
      </div> 
      

      </div>
    </div>
    <div class="pagebreak" @click="pagebreak(index)" :key="index" v-if="activeItem === 'pdftab'"><i class="fas fa-sign-out-alt fa-rotate-270"></i><br><i class="fas fa-sign-in-alt fa-rotate-270"></i><br>Добавить разрыв</div>
      </div>
          <div v-for="pb in pagebreakarr" :key="pb" class="equip__page-break">
            <div v-if="index === pb" class="html2pdf__page-break">  </div>
        </div>
    </div>
      </transition-group>
      </draggable>
</div>
</template>

<script>
export default {
  name: 'Drag',
}
</script>

<style>

</style>