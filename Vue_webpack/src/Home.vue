<template>
  <div>
    Lotery: {{ number }}
    <button @click="changeNumber">add 100</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number: 100
    }
  },
  methods: {
    changeNumber() {
      this.number += 100
    }
  }
}
</script>

<style lang="css">
</style>
