<template>
<div class='centered-container'>
  <div v-if="!loading">
    <md-content class='md-elevation-3' style="width: 370px;">
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
                  <input style="width: 200px" type="file" @change="onFileSelected" ref="fileInput">
                  <md-button @click="uploadImage(task.event)">Upload Image</md-button>
              </md-card-actions>
              
          </md-card>
      </div>
      <span v-if="tasks.length == 0">No assigned tasks yet</span>
    </md-content> 
  </div>
  <div class='loading-overlay' v-if='loading'>
    <md-progress-spinner md-mode='indeterminate' :md-stroke='2'></md-progress-spinner>
  </div>
</div>
</template>
<script>
export default {
  name: 'WorkerTasklist',
  data () {
    return {
      loading: false,
      showDialog: false,
      modalImage: '',
      selectedFile: null,
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
          task: 'Sweeping Floor',
          worker: 'Prakash',
          worker_pic: '../static/img/worker.png',
          image: '../static/img/worker.png'
        }
      ]
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    uploadImage () {
    }
  }
}
</script>
<style>
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
