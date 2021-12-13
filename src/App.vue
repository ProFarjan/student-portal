<template>
  <div id="app">
    <base-component v-if="$store.state.auth.authorized">
      <router-view />
    </base-component>
    <router-view v-else />
    <notifications animation-type="velocity" />
  </div>
</template>

<style>
#nprogress .bar {
  height: 4px !important;
}
</style>
<script>
import BaseComponent from "@/components/BaseComponent";
export default {
  components: { BaseComponent },
};
</script>
