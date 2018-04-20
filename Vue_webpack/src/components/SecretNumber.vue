<template>
  <div>
    Lotery: {{ number }}
    <button @click="changeNumber">click!</button>
  </div>
</template>

<script>
export default {
  data(){
    return { number: 0 }
  },
  methods: {
    changeNumber() {
      this.number = Math.floor(Math.random() * 50) }
  }
}
</script>
