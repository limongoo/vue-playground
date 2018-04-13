<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Testing'
    }
  }
}
</script>

<style>
.clip {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
</style>