<template>
  <section class="profile">
    <div class="profile__photo">
      <img src="../assets/logo.png"/>
    </div>
    <div class="profile__detail">
      <input v-model="userData.name" placeholder="name"/>
      <input v-model="userData.bio" placeholder="bio"/>
      <textarea v-model="userData.description" placeholder="description" rows="4"/>
    </div>
  </section>
</template>

<script src="./js/user.js"></script>


<style lang="scss" scoped>
  .profile{
    display: flex;
    align-items: center;
    justify-content: center;
    &__photo{
      padding-right: 20px;
      img{
        max-width: 100px;
        height: 100%;
      }
    }
    &__detail{
      input, textarea{
        display: block;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 5px;
        margin-bottom: 10px;
      }
    }
  }
</style>
