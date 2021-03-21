<template>
  <div>
    <h1>Secret</h1>
  </div>
</template>

<script>
import { getUserFromCookie } from '@/helpers'
import firebase from "firebase/app";
import "firebase/auth";
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
        const user = getUserFromCookie(req);
        if(!user){
            redirect('/login')
        }
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
