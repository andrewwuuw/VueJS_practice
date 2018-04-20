<template>
  <div>
    <my-number v-for="n in 5"></my-number>
  </div>
</template>

<script>
import MyNumber from './SecretNumber.vue'

export default {
  components: {
    'my-number' : MyNumber
  }
}
</script>
