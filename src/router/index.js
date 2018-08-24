import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AdminPanel from '@/components/AdminPanel'
import TaskManagement from '@/components/TaskManagement'
import WorkerTasklist from '@/components/WorkerTasklist'
import AddWorker from '@/components/AddWorker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin-panel',
      name: 'AdminPanel',
      component: AdminPanel
    },
    {
      path: '/task-management',
      name: 'TaskManagement',
      component: TaskManagement
    },
    {
      path: '/worker-tasklist',
      name: 'WorkerTasklist',
      component: WorkerTasklist
    },
    {
      path: '/add-worker',
      name: 'AddWorker',
      component: AddWorker
    }
  ]
})
