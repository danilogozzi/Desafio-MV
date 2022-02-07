<template>
  <v-container>
    <v-row>
      <v-col
        md="6"
        class="animate__animated delay-1s faster animate__backInLeft"
      >
        <div v-for="(u, id) in users" :key="id" class="edit-user">
          <v-text-field
            v-if="id === user"
            v-model="u.name"
            type="text"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.surname"
            type="text"
            label="Surname"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.gender"
            type="text"
            label="Gender"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.age"
            type="number"
            label="Age"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.birthdate"
            type="date"
            label="Birth Date"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.adress"
            type="text"
            label="Adress"
          ></v-text-field>
          <v-text-field
            v-if="id === user"
            v-model="u.state"
            type="text"
            label="State"
          ></v-text-field>
            <v-btn
            @click="sheet = !sheet"
              v-if="id === user"
              class="mt-5 float-end"
              small
              fab
              dark
              color="cyan"
            >
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          <router-link to="/">
            <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" height="200px">
              <v-btn class="mt-6" text color="red">
                Success!
              </v-btn>
              <div class="py-3">Patient Edited</div>
            </v-sheet>
          </v-bottom-sheet>
          </router-link>
        </div>
      </v-col>
      <v-col
        md="6"
        class="animate__animated delay-1s faster animate__backInRight"
      >
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Surname</th>
              <th class="text-left">Gender</th>
              <th class="text-left">Age</th>
              <th class="text-left">Birthdate</th>
              <th class="text-left">Adress</th>
              <th class="text-left">State</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(u, id) in users" :key="id">
              <td v-if="id === user">{{ u.name }}</td>
              <td v-if="id === user">{{ u.surname }}</td>
              <td v-if="id === user">{{ u.gender }}</td>
              <td v-if="id === user">{{ u.age }}</td>
              <td v-if="id === user">{{ u.birthdate }}</td>
              <td v-if="id === user">{{ u.adress }}</td>
              <td v-if="id === user">{{ u.state }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sheet: false,
    };
  },
  methods: {},
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
.edit-user {
  width: 20rem;
  margin: 0 auto;
  padding-top: 2rem;
}
@media only screen and (max-width: 600px) {
  .edit-user {
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
}
}
</style>