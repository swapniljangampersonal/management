<template>
    <div class='centered-container'>
        <div v-if="!loading">
            <md-dialog-alert
                :md-active.sync="submitTaskPopUp"
                md-content="Worker Created!"
                md-confirm-text="Cool!" 
                @md-closed="submitTask"
            />
            <md-content class='md-elevation-3' style="padding: 25px;width: 330px;">
                <md-field>
                    <label>Worker Name:</label>
                    <md-input v-model='worker.name' autofocus @keyup.enter.native='auth'></md-input>
                </md-field>
                <label>Worker Pic</label>
                <input type="file">
                <md-button class='md-raised md-primary' @click='showModal'>Submit</md-button>
            </md-content>
        </div>
        <div class='loading-overlay' v-if='loading'>
            <md-progress-spinner md-mode='indeterminate' :md-stroke='2'></md-progress-spinner>
        </div>
    </div>    
</template>
<script>
export default {
  name: 'AddWorker',
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
      // Code to create worker
      this.$router.replace('/task-management')
    }
  }
}
</script>
<style>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
