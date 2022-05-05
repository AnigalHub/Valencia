<template>
  <div id="object_guard" class="page services services_with_types">
    <b-container>
      <h1>{{name_page}}</h1>
      <img src="../../static/services/object_guard/object_guard.jpg" alt="охрана_объектов" class="first_img"/>
      <p class="text"><span class="emphasized">Охрана объектов </span>- комплексное обеспечение защиты производственного или коммерческого объекта, товарно-материальных ценностей и защиту здоровья сотрудников объекта. Для обеспечения безопасности объекта разрабатывается проект со всеми особенностями и характером деятельности бизнеса и его графиком работы.</p>
      <h4 class="text"><u>При составлении проекта работы охранников учитывается:</u></h4>
      <ul class="text">
        <li v-for="nuance in NuancesOfWork" :key="nuance.index">{{nuance.name}}</li>
      </ul>
      <h6 class="block_two">Разновидности охраны объектов:</h6>
      <div class="flex-container">
        <div class="beautiful_block"  v-for="guard in TypesOfGuard" :key="guard.index">
          <NuxtLink :to="guard.link">
            <p class="emphasized">{{guard.name}}</p>
            <b-row>
              <b-col cols="5">
                <img :src="guard.img_src" :alt="guard.img_alt"/>
              </b-col>
              <b-col>
                <ul class="text">
                  <li v-for="name_guard in guard.list" :key="name_guard.index">{{name_guard.guard}}</li>
                </ul>
              </b-col>
            </b-row>
          </NuxtLink>
        </div>
      </div>
      <Tariffs/>
    </b-container>
  </div>
</template>

<script>
  import Tariffs from "../tariffs";
    export default {
      name: "object_guard",
      components: {Tariffs},
      data() {
        return {
          name_page:"Охрана объектов",
          NuancesOfWork:[
            {name:"площадь вверенной территории;"},
            {name:"режим работы и количество персоналаобъекта;"},
            {name:"материальные ценности, хранящиеся на объекте;"},
            {name:"изучение оперативной обстановки;"},
            {name:"особенности расположения входов/выходов и въездов на территорию."},
          ],
          TypesOfGuard:[
            {
              link:"/services/_object_guard/guard_of_industrial_facilities",
              name:"Охрана промышленных объектов",
              img_src:"../object_guard/checkpoint.png",
              img_alt:"охрана_коммерческих_объектов",
              list:[
                {guard:"охрана предприятий;"},
                {guard:"охрана производства;"},
                {guard:"охрана заводов;"},
                {guard:"охрана строительных объектов;"},
                {guard:"охрана фабрик;"},
                {guard:"охрана складов и складских помещений."},
              ]
            },
            {
              link:"/services/_object_guard/guard_of_transport_facilities",
              name:"Охрана объектов транспорта",
              img_src:"../object_guard/barrier.jpg",
              img_alt:"охрана_частных_объектов",
              list:[
                {guard:"охрана вокзалов;"},
                {guard:"охрана железнодорожных объектов;"},
                {guard:"охрана автосервисов и АЗС;"},
                {guard:"охрана гаражных комплексов;"},
                {guard:"охрана автостоянок;"},
                {guard:"охрана аэропортов."},
              ]
            },
          ],
        }
      }
    }
</script>

<style scoped>

</style>
