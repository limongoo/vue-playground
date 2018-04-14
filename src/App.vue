<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    'app-header': Header,
    'app-body': Body,
    'app-footer': Footer
  },
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