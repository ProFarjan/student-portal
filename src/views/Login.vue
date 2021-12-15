<template>
  <div class="login">
    <div
      class="auth-layout-wrap"
      :style="{ 'background-image': 'url(' + backgroudImage + ')' }"
    >
      <div class="auth-content">
        <div class="card o-hidden">
          <div class="row">
            <div class="col-md-12">
              <div class="p-4">
                <div class="auth-logo text-center">
                  <img :src="$root.$data.fontLogo" alt="WUB Student Portal Logo" />
                </div>
                <h1 class="mb-3 text-18">Sign In</h1>
                <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
                  <b-form @submit.stop.prevent="handleSubmit(loginHandler)">
                  <validation-provider
                    name="Username"
                    :rules="{ required: true, min: 3 }"
                    v-slot="validationContext">
                    <b-form-group id="username" label="Username" label-for="username">
                      <b-form-input
                        id="username"
                        name="username"
                        v-model="username"
                        :state="getValidationState(validationContext)"
                        aria-describedby="username-live-feedback"
                        autocomplete="off"
                      ></b-form-input>
                      <b-form-invalid-feedback id="username-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <validation-provider
                      name="Password"
                      :rules="{ required: true, min: 4 }"
                      v-slot="validationContext">
                      <b-form-group id="password" label="Password" label-for="password">
                        <b-form-input
                          type="password"
                          id="password"
                          name="password"
                          v-model="password"
                          autocomplete="off"
                          :state="getValidationState(validationContext)"
                          aria-describedby="password-live-feedback"
                        ></b-form-input>
                        <b-form-invalid-feedback id="password-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                    <vue-ladda
                      button-class="btn btn-primary"
                      data-size="l"
                      data-style="zoom-in"
                      :disabled="invalid"
                      :loading="isLogin">
                      Sign In
                    </vue-ladda>
                </b-form>
                </ValidationObserver>
                <div class="mt-3 text-center">
                  <router-link class="text-muted" to="/forgot">
                    Forgot Password?
                  </router-link>
                </div>
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
  name: "Login",
  data: () => ({
    isLogin: false,
    username: '',
    password: '',
    backgroudImage: require("@/assets/images/photo-wide-3.jpg"),
  }),
  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    loginHandler () {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res) {
          this.$root.$data.authorized = true;
          this.$msg.suc("Successfully Login");
          this.$router.push('/dashboard')
        }
      })
    }
  }
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
.div_txt {
  text-align: left;
  font-weight: 700;
}
.error-txt {
  text-align: center;
  padding: 4px 0 0;
  color: red;
}
</style>
