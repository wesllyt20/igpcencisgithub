<template>
    <v-card class="mx-auto" max-width="344" outlined elevation="24">
        <v-list-item three-line>
            <v-list-item-content>
                <div class="text-overline mb-4">
                    ¡BIENVENIDO!
                </div>
                <v-list-item-title class="text-h5 mb-1">
                    {{ user }}
                </v-list-item-title>

                <v-list-item-subtitle>{{ range }}</v-list-item-subtitle>

            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"><v-img
                    v-bind:src="require('@/assets/images/' + myFilename)"></v-img></v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            user: localStorage.getItem('user'),
            range: localStorage.getItem('range'),
            myFilename: "igp.png"

        };
    },
    mounted() {
        if (localStorage.getItem('user') == "Jacob Baños") {
            this.myFilename = "developer.png"
        }
        if (localStorage.getItem('user') == "Efrain Fernandez") {
            this.myFilename = "trabajador1.png"
        }
        if (localStorage.getItem('user') == "Rolando Kcaña") {
            this.myFilename = "trabajador2.png"
        }
    }
};
</script>

<style>

</style>