<template>
  <div v-if="$auth.state.user.auditor_role || $auth.state.user.superuser_role">
   <v-card>
      <v-card-title>
        Normas
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="normas" :search="search">
      </v-data-table>
    </v-card>

  </div>
  <div v-else>
    <unauthorized />
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
        headers: [
          {
            text: 'Descricao da Norma',
            align: 'start',
            filterable: false,
            value: 'descricao',
          },
          { text: 'Codigo', value: 'codigo' },
          { text: 'idioma', value: 'idioma' },
          { text: 'URL', value: 'url' },
          { text: 'Data da Criacao', value: 'created_at' },
          { text: 'Data da Ultima Atualizacao', value: 'updated_at' },
        ]
    }
  },
  middleware: 'auth',
  methods: {
    async updateNormas() {
      try {
        this.normas = await this.$axios.$get('/normas')
        this.headers = [{
            text: 'Descricao da Norma',
            align: 'start',
            filterable: false,
            value: 'descricao',
          },
          { text: 'Codigo', value: 'codigo' },
          { text: 'idioma', value: 'idioma' },
          { text: 'URL', value: 'url' },
          { text: 'Data da Criacao', value: 'created_at' },
          { text: 'Data da Ultima Atualizacao', value: 'updated_at' },]
      } catch (error) {
        <unauthorized />
      }
    },
    
  },
  mounted () {
    this.updateNormas()
  }
}
</script>