<template>
  <div id="app">
    <v-app>
      <v-app-bar app dark>
        <div v-if="$device.isDesktop">
          <v-app-bar-title>SIGO - Sistema Integrado de Gestão e Operação</v-app-bar-title>
        </div>
        <div v-if="$device.isMobile">
          <v-app-bar-title>SIGO</v-app-bar-title>
        </div>
        <v-spacer />
        <div v-if="$auth.loggedIn">
          <v-btn icon nuxt to="/"><v-icon>mdi-home</v-icon></v-btn>
          <span v-if="$auth.state.user.auditor_role || $auth.state.user.superuser_role ">
            <v-btn icon nuxt to="/normas"><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
          </span>
          <span v-if="$auth.state.user.controller_role || $auth.state.user.superuser_role ">
            <v-btn icon nuxt href="/assessorias"><v-icon>mdi-folder</v-icon></v-btn>
          </span>
          <span v-if="$auth.state.user.superuser_role ">
            <v-btn icon nuxt to="/"><v-icon>mdi-view-dashboard</v-icon></v-btn>
          </span>
          
          <v-btn icon nuxt @click.native="$auth.logout()"><v-icon>mdi-logout</v-icon></v-btn>
        </div>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
