<template>
  <div class="dashboard-container">
    我是Dashboard
    <!--<component :is="currentRole"/>-->
  </div>
</template>

<script>
// import adminDashboard from 'admin';
// import editorDashboard from 'editor';

export default {
  name: 'Dashboard',
  components: {
    // adminDashboard,
    // editorDashboard
  },
  data() {
    return {
      currentRole: 'adminDashboard',
    };
  },
  computed: {

  },
  created() {
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'editorDashboard';
    // }
  },
};
</script>

<style scoped>

</style>
