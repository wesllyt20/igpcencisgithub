 <template>
  <v-container fluid>
    <div v-for="item in data" :key="item.id">
      <v-row>
        <v-col cols="2" class="pr-0 ml-auto">
        <!--Grupo 1-->
        <v-btn-toggle >
        <v-btn largue color="primary" dark> <v-icon> mdi-share</v-icon></v-btn>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][0]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][0]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][1]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][1]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][2]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][2]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][3]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][3]["descripcion"]}}</template>
      </btninstitute>
    </v-btn-toggle>
    </v-col>
    <v-col cols="2" class="pr-0">
        <!--Grupo 2-->
        <v-btn-toggle >
        <v-btn largue color="primary" dark> <v-icon> mdi-share</v-icon></v-btn>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][4]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][4]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][5]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][5]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][6]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][6]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][7]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][7]["descripcion"]}}</template>
      </btninstitute>
    </v-btn-toggle>
    </v-col>
    <v-col cols="2" class="pr-0">
        <!--Grupo 3-->
        <v-btn-toggle >
        <v-btn largue color="primary" dark> <v-icon> mdi-share</v-icon></v-btn>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][8]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][8]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][9]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][9]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][10]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][10]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][11]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][11]["descripcion"]}}</template>
      </btninstitute>
    </v-btn-toggle>
    </v-col>
    <v-col cols="2" class="pr-0">
        <!--Grupo 4-->
        <v-btn-toggle >
        <v-btn largue color="primary" dark> <v-icon> mdi-share</v-icon></v-btn>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][12]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][12]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][13]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][13]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][14]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][14]["descripcion"]}}</template>
      </btninstitute>
      <btninstitute>
        <template slot="iconos">
          <img v-bind:src="'./img/' + data['botones'][15]['img']" width="35px" />
        </template>
        <template slot="tooltip">{{data["botones"][15]["descripcion"]}}</template>
      </btninstitute>
    </v-btn-toggle>
    </v-col>
    </v-row>
    </div>
  </v-container>
</template>
<script>
import btninst from "@/assets/data/btninst.json";
import btninstitute from "../buttons/btninstitute.vue";
export default {
  data() {
    return {
      data: btninst,
      btninstitute,
    };
  },
  components: { btninstitute },
};
</script>