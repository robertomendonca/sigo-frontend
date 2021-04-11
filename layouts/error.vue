<template>
  <div>
    <h1 v-if="error.statusCode === 403">Nao Autorizado!!!!</h1>
    <h1 v-else>
      <p>Nao Autorizado!!!!</p>
      <p>O usuário tentou realizar acesso a um módulo sem permissão</p>
      <p>Verifique se tem permissão de acesso ou contacte o administrador</p>
    </h1>

          <center><v-btn outlined rounded text to="/index">HomePage</v-btn></center> 

  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>