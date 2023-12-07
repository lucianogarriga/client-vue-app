<template>
  <v-container :fluid="true">
    <h1 class="text-green-darken-4">Card</h1>
    <v-row>
      <v-col>
        <!-- Forma 1 trabajar con Cards -->
        <!-- Cards con Props/Atributos -->
        <v-card
          width="400"
          class="mt-4"
          title="Forma 1 de trabajar con Cards"
          subtitle="Props"
          text="Cards con Props/Atributos en el componente v-card"
        ></v-card>
        <!-- Forma 2 / With markup -->
        <v-card width="400" class="mt-5">
          <template v-slot:title> Forma 2 de trabajar con Cards </template>

          <template v-slot:subtitle> Markup </template>

          <template v-slot:text>Con marcado/etiquetas HTML</template>
        </v-card>
        <!-- Forma 3 -->
        <v-card class="mt-5" max-width="400" variant="tonal">
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Card with variant "Tonal"</div>
              <div class="text-h6 mb-1">Forma 3 de trabajar con Cards</div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="outlined"> Button Outlined</v-btn>
          </v-card-actions>
        </v-card>

        <!-- Forma 4 -->
        <v-card
          class="mt-5"
          max-width="400"
          color="indigo-darken-3"
          variant="flat"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Variante</div>
              <div class="text-h6 mb-1">Headline</div>
              <div class="text-caption">
                Greyhound divisely hello coldly fonwderfully
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="elevated" color="blue-darken-2" class="mb-2">
              Button
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Card con link a Github -->
        <v-card
          class="mt-5"
          max-width="400"
          title="View my GitHub Profile"
          prepend-icon="mdi-github"
          append-icon="mdi-open-in-new"
          href="https://github.com/lucianogarriga"
          target="_blank"
          rel="noopener"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardView",
};
</script>

<style scoped>
.v-container {
  max-width: 890px;
}
</style>