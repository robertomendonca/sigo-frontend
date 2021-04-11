<template>
  <v-layout>
    <v-flex>
      <v-card v-if="$auth.loggedIn">
        <v-card-text>
          Bem Vindo ao SIGO, {{$auth.state.user.email}}
        </v-card-text>
        <div v-if="$auth.state.user.auditor_role || $auth.state.user.superuser_role ">
              <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                        Acesso Liberado
                    </div>
                    <v-list-item-title class="headline mb-1">
                      Modulo de Normas
                    </v-list-item-title>
                    <v-list-item-subtitle>Manutencao de Normas Internas do Sistema</v-list-item-subtitle>
                  </v-list-item-content>
  
                  <v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
                </v-list-item>
  
                <v-card-actions>
                  <v-btn outlined rounded text to="/normas">Entrar</v-btn>
                </v-card-actions>
                </v-card>
        </div>
        <div v-if="$auth.state.user.controller_role || $auth.state.user.superuser_role ">
              <v-card class="mx-auto" max-width="344" >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                        Acesso Liberado
                    </div>
                    <v-list-item-title class="headline mb-1">
                      Consultorias
                    </v-list-item-title>
                    <v-list-item-subtitle>Modulo de Consultoria e Assessorias</v-list-item-subtitle>
                  </v-list-item-content>
  
                  <v-list-item-avatar tile size="80" color="red"></v-list-item-avatar>
                </v-list-item>
  
                <v-card-actions>
                  <v-btn outlined rounded text to="/assessorias">Entrar</v-btn>
                </v-card-actions>
                </v-card>
        </div>
        <div v-if="$auth.state.user.superuser_role ">
            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                        Acesso Liberado
                    </div>
                    <v-list-item-title class="headline mb-1">
                      Modulo Gestao de Usuario
                    </v-list-item-title>
                    <v-list-item-subtitle>Manutencao de Usuarios</v-list-item-subtitle>
                  </v-list-item-content>
  
                  <v-list-item-avatar tile size="80" color="green"></v-list-item-avatar>
                </v-list-item>
  
                <v-card-actions>
                  <v-btn outlined rounded text to="/normas">Entrar</v-btn>
                </v-card-actions>
                </v-card>
        </div>




        <v-card-actions>
          <v-btn @click.native="$auth.logout()">Log out</v-btn>
        </v-card-actions>
      </v-card>
      <v-list>

      </v-list>
    </v-flex>
  </v-layout>
</template>




<script>
export default {
  data () {
    return {
      examples: []
    }
  },
  middleware: 'auth',
  methods: {
    async updateExamples() {
      this.examples = await this.$axios.$get('/dashboards')
    }
  },
  mounted () {
    this.updateExamples()
  }
}
</script>