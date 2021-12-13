<template>
  <div class="main-header">
    <div class="logo">
      <img :src="$root.$data.logo" alt="" />
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="d-flex align-items-center">
      <!-- Mega menu -->
      <!--      <div class="dropdown mega-menu d-none d-md-block">-->
      <!--        <a href="#" class="btn text-muted dropdown-toggle mr-3" id="dropdownMegaMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu</a>-->
      <!--        <div class="dropdown-menu text-left" aria-labelledby="dropdownMenuButton">-->
      <!--          <div class="row m-0">-->
      <!--            <div class="col-md-4 p-4 bg-img">-->
      <!--              <h2 class="title">Mega Menu <br> Sidebar</h2>-->
      <!--              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur.-->
      <!--              </p>-->
      <!--              <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.</p>-->
      <!--              <button class="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>-->
      <!--            </div>-->
      <!--            <div class="col-md-4 p-4">-->
      <!--              <p class="text-primary text&#45;&#45;cap border-bottom-primary d-inline-block">Features</p>-->
      <!--              <div class="menu-icon-grid w-auto p-0">-->
      <!--                <a href="#"><i class="i-Shop-4"></i> Home</a>-->
      <!--                <a href="#"><i class="i-Library"></i> UI Kits</a>-->
      <!--                <a href="#"><i class="i-Drop"></i> Apps</a>-->
      <!--                <a href="#"><i class="i-File-Clipboard-File&#45;&#45;Text"></i> Forms</a>-->
      <!--                <a href="#"><i class="i-Checked-User"></i> Sessions</a>-->
      <!--                <a href="#"><i class="i-Ambulance"></i> Support</a>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div class="col-md-4 p-4">-->
      <!--              <p class="text-primary text&#45;&#45;cap border-bottom-primary d-inline-block">Components</p>-->
      <!--              <ul class="links">-->
      <!--                <li><a href="accordion.html">Accordion</a></li>-->
      <!--                <li><a href="alerts.html">Alerts</a></li>-->
      <!--                <li><a href="buttons.html">Buttons</a></li>-->
      <!--                <li><a href="badges.html">Badges</a></li>-->
      <!--                <li><a href="carousel.html">Carousels</a></li>-->
      <!--                <li><a href="lists.html">Lists</a></li>-->
      <!--                <li><a href="popover.html">Popover</a></li>-->
      <!--                <li><a href="tables.html">Tables</a></li>-->
      <!--                <li><a href="datatables.html">Datatables</a></li>-->
      <!--                <li><a href="modals.html">Modals</a></li>-->
      <!--                <li><a href="nouislider.html">Sliders</a></li>-->
      <!--                <li><a href="tabs.html">Tabs</a></li>-->
      <!--              </ul>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!-- / Mega menu -->
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <i class="search-icon text-muted i-Magnifi-Glass1"></i>
      </div>
    </div>

    <div style="margin: auto">
      <h2>{{ $root.$data.university.name }}</h2>
    </div>
    <div class="header-part-right">
      <!-- Full screen toggle -->
      <i
        class="i-Full-Screen header-icon d-none d-sm-inline-block"
        @click="fullscreenApps"
        data-fullscreen
      ></i>
      <!-- Grid menu Dropdown -->

      <header-notification></header-notification>

      <!-- User avatar dropdown -->
      <div class="dropdown mr-2">
        <div class="user col align-self-end">
          <b-dropdown
            id="dropdown-right"
            right
            variant="link"
            toggle-class="text-decoration-none"
          >
            <b-dropdown-header id="dropdown-header-label">
              <i class="i-Lock-User mr-1"></i>
              {{ $root.$data.user.name.substr(0, 16) + "..." }}
            </b-dropdown-header>
            <template #button-content>
              <img
                :src="$root.$data.user.img"
                id="userDropdown"
                alt=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
            </template>
            <b-dropdown-item href="#">Profile Settings</b-dropdown-item>
            <b-dropdown-item href="#">Payment History</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign out</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNotification from "@/components/HeaderNotification";
export default {
  name: "HeaderComponent",
  components: { HeaderNotification },
  data: () => ({
    elem: document.documentElement,
    screenController: true,
  }),
  methods: {
    toggleMenu() {
      if (
        this.$root.$data.menu.divMain ==
        "main-content-wrap sidenav-open d-flex flex-column"
      ) {
        this.$root.$data.menu.divMain = "main-content-wrap d-flex flex-column";
        this.$root.$data.menu.divSideMain =
          "sidebar-left rtl-ps-none ps ps--active-y";
        console.log("close");
      } else {
        this.$root.$data.menu.divMain =
          "main-content-wrap sidenav-open d-flex flex-column";
        this.$root.$data.menu.divSideMain =
          "sidebar-left rtl-ps-none ps ps--active-y open";
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
    fullscreenApps() {
      if (document.fullscreenEnabled && this.screenController) {
        this.openFullscreen();
        this.screenController = false;
      } else {
        this.closeFullscreen();
        this.screenController = true;
      }
    },
    openFullscreen() {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Safari */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE11 */
        this.elem.msRequestFullscreen();
      }
    },
    closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    },
  },
};
</script>

<style scoped></style>
