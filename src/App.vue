<template>
  <div id="app" v-if="!$root.$data.devTook">
    <base-component v-if="$store.state.auth.authorized">
      <router-view />
    </base-component>
    <router-view v-else />
    <notifications animation-type="velocity" />
  </div>
  <div v-else>
    <h1 style="text-align: center;margin: 15% 0;font-weight: 900;font-size: 62px;">Please Close Your DevTools</h1>
  </div>
</template>

<script>
import BaseComponent from "@/components/BaseComponent";
export default {
  components: { BaseComponent },
};
</script>

<style>
#nprogress .bar {
  height: 4px !important;
}
.nav-tabs .nav-item {
  margin-bottom: 0px !important;
  font-size: 16px;
  font-weight: 600;
  color: #639;
}
</style>
