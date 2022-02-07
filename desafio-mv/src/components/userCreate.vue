<template>
  <v-container class="animate__animated delay-1s faster animate__backInDown">
    <v-row>
      <v-col md="12">
        <div class="create-user">
          <h3>Create Patient</h3>
          <v-text-field
            type="text"
            v-model="users.name"
            label="Name"
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="users.surname"
            label="Surname"
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="users.gender"
            label="Gender"
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="users.age"
            label="Age"
          ></v-text-field>
          <v-text-field
            type="date"
            v-model="users.birthdate"
            label="Birth Date"
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="users.adress"
            label="Adress"
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="users.state"
            label="State"
          ></v-text-field>
          <v-btn
          @click="sheet = !sheet"
            class="mt-5 float-end"
            small
            fab
            dark
            color="indigo"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          <v-bottom-sheet v-model="sheet">
            <v-sheet class="text-center" height="200px">
              <v-btn class="mt-6" text color="red" @click="postUsers">
                Success!
              </v-btn>
              <div class="py-3">
                Patient created
              </div>
            </v-sheet>
          </v-bottom-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "",
        surname: "",
        gender: "",
        age: "",
        birthdate: "",
        adress: "",
        state: "",
      },
      sheet: false,
    };
  },
  methods: {
    postUsers() {
      this.$store.commit("postUsers", this.users);
      this.users = [];
    },
  },
};
</script>

<style>
.create-user {
  width: 25rem;
  margin: 0 auto;
  padding-top: 2rem;
}
@media only screen and (max-width: 600px) {
    .create-user {
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
}
}
</style>