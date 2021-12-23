<template>
  <div class="side-content-wrap">
    <VuePerfectScrollbar
      :class="$root.$data.menu.divSideMain"
      :settings="settings"
    >
      <ul class="navigation-left">
        <li
          v-for="(menu, i) in menus"
          class="nav-item"
          :ref="menu.id"
          :key="i"
          @mouseover="showSubMenu(menu.id)"
          @mouseleave="leaveCursor()"
        >
          <router-link class="nav-item-hold" :to="menu.link">
            <i class="nav-icon" :class="menu.icon"></i>
            <span class="nav-text">{{ menu.label }}</span>
          </router-link>
          <div class="triangle"></div>
        </li>
      </ul>
    </VuePerfectScrollbar>

    <VuePerfectScrollbar :class="subMenuItem" :settings="settings">
      <!-- Submenu Dashboards-->
      <ul
        class="childNav"
        data-parent="dashboard"
        :style="{ display: sidebarOverlay ? 'block' : 'none' }"
      >
        <li class="nav-item" v-for="(sMenu, i) in subMenu" :key="i">
          <router-link :to="sMenu.link">
            <i class="nav-icon" :class="sMenu.icon"></i>
            <span class="item-name">{{ sMenu.label }}</span>
          </router-link>
        </li>
      </ul>
    </VuePerfectScrollbar>
    <div
      class="sidebar-overlay"
      :style="{ display: sidebarOverlay ? 'block' : 'none' }"
      @click="sidebarOverlay = !sidebarOverlay"
    ></div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "Sidebar",
  components: { VuePerfectScrollbar },
  data: () => ({
    subMenuItem: "sidebar-left-secondary rtl-ps-none",
    sidebarOverlay: false,
    settings: {
      maxScrollbarLength: 60,
    },
    subMenu: [],
    menus: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "i-Bar-Chart",
        link: "/dashboard",
        subMenu: [],
      },
      {
        id: "profile",
        label: "My Profile",
        icon: "i-Administrator",
        link: "/profile",
        subMenu: [],
      },
      {
        id: "result",
        label: "Semester Result",
        icon: "i-File-Horizontal-Text",
        link: "/result",
        subMenu: [],
      },
      {
        id: "payments",
        label: "Payment History",
        icon: "i-File-Chart",
        link: "/payments",
        subMenu: [],
      },
      {
        id: "registration",
        label: "Registration",
        icon: "i-Computer-Secure",
        link: "/registration",
        subMenu: [
          {
            label: "Course Registration",
            link: "/registration",
            icon: "i-Checked-User",
          },
          { label: "Re-Course", link: "/recourse", icon: "i-Double-Tap" },
          { label: "Retake Exam", link: "/retake", icon: "i-Double-Tap" },
        ],
      },
      {
        id: "ticket",
        label: "Support Ticket",
        icon: "i-File-Chart",
        link: "/ticket",
        subMenu: [],
      },
    ],
  }),
  watch: {
    sidebarOverlay() {
      if (!this.sidebarOverlay) {
        this.subMenuItem = "sidebar-left-secondary rtl-ps-none";
      }
    },
  },
  methods: {
    showSubMenu(el) {
      const menu = this.getMenu(el);
      if (menu.subMenu.length) {
        this.subMenu = menu.subMenu;
        this.subMenuItem = "sidebar-left-secondary rtl-ps-none ps open";
        this.sidebarOverlay = true;
      } else {
        this.subMenuItem = "sidebar-left-secondary rtl-ps-none";
        this.sidebarOverlay = false;
      }
      this.activateMenu(el);
    },
    leaveCursor() {
      this.activateMenu(this.$router.currentRoute.path.replace("/", ""));
    },
    getMenu(id) {
      return this.menus.filter((menu) => menu.id == id)[0];
    },
    activateMenu(activeMenu) {
      this.menus.filter((menu) => {
        if (menu.id == activeMenu) {
          this.$refs[menu.id][0].classList.add("active");
        } else {
          this.$refs[menu.id][0].classList.remove("active");
        }
      });
    },
  },
};
</script>

<style scoped></style>
