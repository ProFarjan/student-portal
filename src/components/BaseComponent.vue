<template>
  <div class="app-admin-wrap layout-sidebar-large">
    <header-component></header-component>
    <sidebar></sidebar>
    <!-- =============== Left side End ================-->
    <div :class="$root.$data.menu.divMain">
      <!-- ============ Body content start ============= -->
      <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutRight"
        :duration="{ enter: 800, leave: 0 }"
      >
        <slot></slot>
      </transition>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/inc/HeaderComponent";
import Sidebar from "@/components/inc/Sidebar";
import FooterComponent from "@/components/inc/FooterComponent";
export default {
  name: "BaseComponent",
  components: { FooterComponent, Sidebar, HeaderComponent },
  data: () => ({}),
};
</script>

<style scoped></style>
