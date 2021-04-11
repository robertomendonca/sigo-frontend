
<template>
  <v-layout>
    <v-flex>
      <v-card v-if="$auth.state.user.auditor_role">
        <v-card-text>
          Bem Vindo ao Modulo de Normas, {{$auth.state.user.email}}
        </v-card-text>

 

        <NuxtLink to="/">Home page</NuxtLink>
        <v-card-actions>
          <NuxtLink to="/cadastranorma">Cadastra Norma</NuxtLink>
        </v-card-actions>
        </v-card>
      <v-list>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  components: true,
  middleware: 'auth'
}
</script>