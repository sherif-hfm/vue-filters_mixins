<template>
  <div>
    {{globalData}}<br>
   {{message | toUpper}}<br>
   {{message | toLower}}<br>
   <hr>
   filter: 
   <input type="text" v-model="filter">
   <u>
     <li v-for="user in filteredUser">
        {{user}}
     </li>
   </u>

  </div>
</template>

<script>
import toUpper from '../Filters/toUpper.js'
import {userMinxins} from '../userMinxins.js'
export default {
  name: 'Filters',
  props: {
  },
  data:function(){
    return {
      message:'Hello Fillters',
    }
  },
  mixins:[userMinxins],
  filters:{toUpper}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
