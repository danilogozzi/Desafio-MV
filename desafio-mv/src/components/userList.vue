<template>
  <v-container class="animate__animated delay-1s faster animate__rubberBand text-center">
    <v-row>
      <v-col md="12">
        <div class="list-users">
          <h3>Patient List</h3>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Adress</th>
                <th class="text-left">State</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(u, id) in users" :key="id">
                <td>{{ u.name }}</td>
                <td>{{ u.adress }}</td>
                <td>{{ u.state }}</td>
                <td>
                  <router-link to="/edit">
                    <v-btn
                      @click="setUsers(id)"
                      class="float-end"
                      fab
                      dark
                      x-small
                      color="cyan"
                    >
                      <v-icon dark> mdi-pencil </v-icon>
                    </v-btn>
                  </router-link>
                </td>
                <td>
                  <v-btn
                    @click="deleteUsers(id)"
                    class="float-end"
                    fab
                    dark
                    x-small
                    color="primary"
                  >
                    <v-icon dark> mdi-minus </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <hr />
          <router-link to="/create">
            <v-btn class="mt-5 float-end" small fab dark color="indigo">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    deleteUsers(id) {
      this.$store.commit("deleteUsers", id);
    },
    setUsers(id) {
      this.$store.commit("setUsers", id);
    },
  },
     computed:{
        ...mapGetters(['users']),
        ...mapState(['users'])
       }
};
</script>

<style>
.list-users {
  width: max-content;
  margin: 0 auto;
  padding-top: 2rem;
}
@media only screen and (max-width: 600px) {
  .list-users {
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
}
}
</style>