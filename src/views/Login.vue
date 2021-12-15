<template>
  <div class="container">
    <div class="middle-container">
      <div class="middle">
        <div class="card-container">
          <div class="card-title">Iniciar Sesión</div>
          <div class="card">
            <form class="form" @submit.prevent="submitData()">
              <div class="form-group" :class="{ error: $v.user.email.$error }">
                <label>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    class="form-control"
                    v-model="$v.user.email.$model"
                    @blur="$v.user.email.$touch()"
                  />
                  <span>Correo electrónico</span>
                </label>
              </div>
              <span
                v-if="!$v.user.email.required && $v.user.email.$error"
                class="error-message"
              >
                El correo es requisito
              </span>
              <span
                v-if="!$v.user.email.email && $v.user.email.$error"
                class="error-message"
              >
                El correo es inválido
              </span>
              <div
                class="form-group"
                :class="{ error: $v.user.password.$error }"
              >
                <label>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    class="form-control"
                    v-model="$v.user.password.$model"
                    @blur="$v.user.password.$touch()"
                  />
                  <span>Contraseña</span>
                </label>
              </div>
              <span
                v-if="!$v.user.password.required && $v.user.password.$error"
                class="error-message"
              >
                La contraseña es requisito
              </span>
              <div class="card-actions">
                <button type="submit" class="button">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["updateLoginTokens"]),
    isFormDataValid() {
      this.$v.$reset();
      this.$v.$touch();

      return !this.$v.$error;
    },
    submitData() {
      if (this.isFormDataValid()) {
        this.$api.auth
          .login(this.user)
          .then((res) => {
            if (!res.data.token) return;
            this.updateLoginTokens(res.data.token);
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  computed: {
    ...mapGetters(["getAuthStep"]),
  },
};
</script>
