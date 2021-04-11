<template>
  <v-layout>
    <v-flex>
      <v-card v-if="$auth.state.user.auditor_role">
        <v-card-text>
          Bem Vindo ao normas, {{$auth.state.user.email}}
        </v-card-text>

        <NuxtLink to="/">Home page</NuxtLink>
        <v-card-text>
          <div class="login-wrapper border border-light">
            <v-form>
              <v-text-field v-model="Norma" label="Descricao da Norma" />
              <v-text-field v-model="idioma" label="Password" />
              <v-text-field v-model="codigo" label="codigo" />
              <v-text-field v-model="repositorio" label="repositorio" />
            </v-form>
          </div>
       </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

