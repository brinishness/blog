<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "hello world",
      required: true
    }
  },
  data () {

    return {
      // msg: 'Hello this is <Foo-Bar>'
    }
  }
}
</script>
