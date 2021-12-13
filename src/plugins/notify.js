import Vue from "vue";

class Notify {
  constructor() {}
  suc(message, title = "Success") {
    Vue.notify({
      type: "success",
      title: title,
      text: message,
    });
  }
  warn(message, title = "Warning") {
    Vue.notify({
      type: "warn",
      title: title,
      text: message,
    });
  }
  err(message, title = "Error Message") {
    Vue.notify({
      type: "error",
      title: title,
      text: message,
    });
  }
}

export default new Notify();
