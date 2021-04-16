<template>
  <div id="special_equipment" class="page">
    <Name_page :name_page="name_page"/>
    <b-container>
      <img src="../static/special_equipment/special.jpg" class="first_img" alt="спецсредства">
      <p class="text">Для обеспечения безопасности охраняемого объекта, поддержания правопорядка и нейтрализации правонарушителей в частном охранном предприятии "ООО Валенсия" имеются специальные средства индивидуальной защиты - особая экипировка и оснащение охранника.</p>
      <p class="text">Личный состав частного охранного предприятия "ООО Валенсия" - охранники 5-го и 6-го разряда (работа со спецсредствами и оружием).</p>
      <p class="text">Исходя из рисков и угроз, для каждого охраняемого объекта подбирается своя экипировка и средства защиты охраны.</p>
      <h6 class="block_two">Перечень специальных средств, используемых в частном охранном предприятии "ООО Валенсия":</h6>
      <div class="flex-container">
        <div v-for="equipment in ListOfSpecialEquipments" :key="equipment.index">
            <img :src="equipment.img_src" :alt="equipment.img_alt"/>
            <p class="text emphasized">{{equipment.name_equipment}}</p>
            <p class="text">{{equipment.description_equipment}}</p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
    import Name_page from "../components/secondary_pages/name_page";
    export default {
      name: "special_equipment",
      components: {Name_page},
      data() {
        return {
          name_page:"Спецсредства",
          ListOfSpecialEquipments:[
            {
              name_equipment:"Радиостанция", img_src:"../special_equipment/radio_station.png", img_alt:"радиостанция",
              description_equipment:"Дистанционная связь между охранниками для координации действий и получения инструкций при выполнении служебных задач.",
            },
            {
              name_equipment:"Служебное и гражданское оружие", img_src:"../special_equipment/weapon.jpg", img_alt:"оружие",
              description_equipment:"Отражения вооруженного нападения на охраняемый объект, подача сигнала тревоги (выстрел в воздух).",
            },
            {
              name_equipment:"Металлодетектор", img_src:"../special_equipment/metal_detector.jpg", img_alt:"металлодетектор",
              description_equipment:"Обнаружение запрещенных металлических средств к внесению и выносу его на территорию охраняемого объекта.",
            },
            {
              name_equipment:"Бронежилет", img_src:"../special_equipment/bulletproof_vest.jpg", img_alt:"бронежилет",
              description_equipment:"Защита от вооруженного нападения: пули определенного калибра, ножа или заточки в область грудной клетки.",
            },
            {
              name_equipment:"Дубинка (резиновая палка)", img_src:"../special_equipment/baton.jpg", img_alt:"дубинка",
              description_equipment:"Оборона при угрозе жизни и здоровья охранника и пресечение преступного посягательства на охраняемую территорию.",
            },
            {
              name_equipment:"Шлем", img_src:"../special_equipment/helmet.jpg", img_alt:"шлем",
              description_equipment:"Защита от пулевых и осколочных ранений, различными видами оружия и другими поражающими факторами.",
            },
            {
              name_equipment:"Наручники", img_src:"../special_equipment/handcuffs.jpg", img_alt:"наручники",
              description_equipment:"Сковывание кистей рук правонарушителей для исключения буйного поведения при сопровождении и ковоировании.",
            },
            {
              name_equipment:"Электрошокер", img_src:"../special_equipment/stun_gun.jpg", img_alt:"электрошокер",
              description_equipment:"Активная самооборона, пресечение массовых беспорядков и задержание правонарушитеоей без нанесения увечий.",
            },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
