<template>
  <div class='centered-container'>
    <div v-if="!loading">
      <md-content class='md-elevation-3' style="width: 330px;">
          <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Worker Uploaded Image</md-dialog-title>
            <img :src="modalImage" alt="Worker uploaded image">
            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
          </md-dialog>
          <div>
            <div v-for='task in tasks' v-bind:key="task.worker" class="task-list">
                <md-card>
                    <md-card-header>
                        <md-card-header-text>
                        <div class='md-title'>{{task.event}}</div>
                        <div class='md-subhead'>{{task.task}}:{{task.worker}}</div>
                        </md-card-header-text>

                        <md-card-media>
                          <img :src='task.worker_pic' alt='People'>
                        </md-card-media>
                    </md-card-header>

                    <md-card-actions>
                        <md-button @click="showWorkerImage(task.image)">View Image</md-button>
                        <md-button>Delete Task</md-button>
                    </md-card-actions>
                    
                </md-card>
            </div>
            <span v-if="tasks.length == 0">No worker completed tasks yet</span>
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
  name: 'TaskManagement',
  data () {
    return {
      loading: false,
      showDialog: false,
      modalImage: '',
      tasks: [
        {
          event: 'Birthday Party',
          task: 'Sweeping Floor',
          worker: 'Prakash',
          worker_pic: '../static/img/worker.png',
          image: '../static/img/worker.png'
        },
        {
          event: 'Birthday Party',
          task: 'Washing Dishes',
          worker: 'Rakesh',
          worker_pic: '../static/img/worker.png',
          image: '../static/img/worker.png'
        },
        {
          event: 'Birthday Party',
          task: 'Preparing Food',
          worker: 'Ramesh',
          worker_pic: '../static/img/worker.png',
          image: '../static/img/worker.png'
        },
        {
          event: 'Birthday Party',
          task: 'Decorations',
          worker: 'Suresh',
          worker_pic: '../static/img/worker.png',
          image: '../static/img/worker.png'
        }
      ]
    }
  },
  methods: {
    gotoAdminPanel () {
      this.$router.replace('/admin-panel')
    },
    showWorkerImage (el) {
      this.modalImage = el
      this.showDialog = true
    }
  }
}
</script>

<style lang='css' scoped>
.task-list {
    padding: 10px;
}
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