<template>
    <div class='centered-container'>
        <md-dialog-alert
            :md-active.sync="submitTaskPopUp"
            md-content="Your task has been submitted!"
            md-confirm-text="Cool!" 
            @md-closed="submitTask"
          />
        <div v-if="!loading">
          <md-content class='md-elevation-3' style="padding: 25px;width: 330px;">
              <div class="md-layout-item">
                  <md-field>
                      <md-select v-model="event" name="event" id="event" placeholder="Select Event">
                          <md-option value="birthday">Birthday</md-option>
                          <md-option value="office-party">Office Party</md-option>
                          <md-option value="farewell">Farewell</md-option>
                          <md-option value="family-party">Family Party</md-option>
                      </md-select>
                  </md-field>
                  <md-field>
                      <md-select v-model="task" name="task" id="task" placeholder="Select task">
                          <md-option value="sweeping">Sweeping</md-option>
                          <md-option value="washing">Washing</md-option>
                          <md-option value="decorations">Decorations</md-option>
                          <md-option value="food">Food</md-option>
                      </md-select>
                  </md-field>
                  <md-field>
                      <md-select v-model="worker" name="worker" id="worker" placeholder="Select From Workers">
                          <md-option value="ramesh">Ramesh</md-option>
                          <md-option value="suresh">Suresh</md-option>
                          <md-option value="rakesh">Rakesh</md-option>
                          <md-option value="prakash">Prakash</md-option>
                      </md-select>
                  </md-field>
              </div>
              <a href="#/add-worker">Add worker</a>
              <div class='actions md-layout md-alignment-center-space-between'>
                  <a href="#/task-management">Task Management</a>
                  <md-button class='md-raised md-primary' @click='showModal'>Submit</md-button>
              </div>
          </md-content>
        </div>
        <div class='loading-overlay' v-if='loading'>
            <md-progress-spinner md-mode='indeterminate' :md-stroke='2'></md-progress-spinner>
        </div>
  </div>
</template>
<script>
export default {
  name: 'AdminPanel',
  data () {
    return {
      loading: false,
      submitTaskPopUp: false,
      event: '',
      task: '',
      worker: ''
    }
  },
  methods: {
    showModal () {
      this.submitTaskPopUp = true
    },
    submitTask () {
      this.$router.replace('/task-management')
    }
  }
}
</script>
<style lang="css" scoped>
  .centered-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 85vh;
    .title {
        text-align: center;
        margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }    
}
</style>