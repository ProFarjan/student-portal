import devTools from 'devtools-detect';
import { isMobile } from "mobile-device-detect";

export default {
  data: () => ({
    logo: require("@/assets/logo.png"),
    fontLogo: require("@/assets/images/logo.png"),
    devTook: devTools.isOpen,
    university: {
      name: isMobile ? "WUB" : "World University of Bangladesh",
    },
    user: {
      name: "Farjan Hasan",
      img: require("@/assets/images/faces/1.jpg"),
    },
    author: {
      name: "CIS",
      company: "CIS",
      license: "",
      logo: require("@/assets/images/faces/1.jpg"),
      url: "#",
      title: "",
      description: "",
    },
    menu: {
      divMain: "main-content-wrap sidenav-open d-flex flex-column",
      divSideMain: isMobile ? "sidebar-left rtl-ps-none ps ps--active-y open" : "sidebar-left rtl-ps-none ps ps--active-y open",
    },
  }),
  created() {
    let vm = this;
    window.addEventListener('devtoolschange', function (e) {
      vm.devTook = e.detail.isOpen;
    });
  }
};