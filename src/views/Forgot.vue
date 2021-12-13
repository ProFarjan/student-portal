<template>
  <div
    class="auth-layout-wrap"
    :style="{ 'background-image': 'url(' + background + ')' }"
  >
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-4">
                <img :src="$root.$data.fontLogo" alt="" />
              </div>
              <h1 class="mb-3 text-18">Forgot Password</h1>
              <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
                <b-form @submit.stop.prevent="handleSubmit(forgotHandler)">
                  <validation-provider
                    name="Email"
                    :rules="{ required: true, email: true }"
                    v-slot="validationContext">
                    <b-form-group id="email" label="Email" label-for="email">
                      <b-form-input
                        id="email"
                        name="email"
                        type="email"
                        v-model="email"
                        :state="getValidationState(validationContext)"
                        aria-describedby="email-live-feedback"
                        autocomplete="off"
                      ></b-form-input>
                      <b-form-invalid-feedback id="email-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <vue-ladda
                    button-class="btn btn-primary"
                    data-size="l"
                    data-style="zoom-in"
                    :disabled="invalid"
                    :loading="isForgot">
                    Request
                  </vue-ladda>
                </b-form>
              </ValidationObserver>
              <div class="mt-3 text-center">
                <router-link class="text-muted" to="/"> Sign in?</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forgot",
  data: () => ({
    background: require("@/assets/images/photo-wide-4.jpg"),
    logo: require("@/assets/images/logo.png"),
    email: "",
    isForgot: false,
  }),
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    forgotHandler() {},
  },
};
</script>

<style scoped>
.auth-layout-wrap .auth-content {
  min-width: 360px !important;
}
.auth-layout-wrap .auth-content {
  max-width: 360px;
}
.auth-logo img {
  width: 100% !important;
}
.btn {
  padding: 0.375rem 0.75rem !important;
  font-size: 0.813rem !important;
}
.btn-primary {
  color: #fff !important;
  background-color: #663399 !important;
  border-color: #663399 !important;
}
</style>
