<template>
  <v-layout>
    <v-flex>
      <v-card v-if="$auth.loggedIn">
        <v-alert type="error" :value="error">{{ alert['message'] }}</v-alert>
        <v-card-text>
          Bem Vindo ao login, {{$auth.user.email}}
        </v-card-text>
        <v-card-actions>
          <v-btn @click.native="logout">Log out</v-btn>
        </v-card-actions>
          <NuxtLink to="/normas">Home page</NuxtLink>
      </v-card>
      <v-card v-else>
       <v-alert type="error" :value="error">{{error}}</v-alert>
        <v-card-text>
          <div class="login-wrapper border border-light">
            <v-form>
              <v-text-field v-model="email" label="Email" />
              <v-text-field v-model="password" label="Password" type="password" />
            </v-form>
            <v-card-actions>
              <v-btn @click.native="login">Log in</v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login: function () {
      this.$auth.login({
        data: {
          user: {
            email: this.email,
            password: this.password
          }
        }
      }).catch(e => {this.error = e + ''})
    },
    logout: function () {
      this.$auth.logout().catch(e => {this.error = e + ''})
    }
  }
}
</script>