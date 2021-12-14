<template>
  <div id="app">
    <base-component v-if="$store.state.auth.authorized">
      <router-view />
    </base-component>
    <router-view v-else />
    <notifications animation-type="velocity" />
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
