<template>
    <v-layout>
        <v-flex>
            <v-card-text>
                NAO AUTORIZADO, {{$auth.state.user.email}}
                Retorne pagina principal
                <NuxtLink to="/">Home page</NuxtLink>
            </v-card-text>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  components: true,
  middleware: 'auth'
}
</script>