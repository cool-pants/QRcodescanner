<template>
  <h1>{{ msg }}</h1>
  <button @click="inc">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => ({
      count: 0,
  }),
  methods: {
    inc() {
      this.count = this.count+1;
    }
  }
}
</script>
