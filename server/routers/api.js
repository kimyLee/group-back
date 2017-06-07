/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const taskController = require('./../controllers/task')

const routers = router
  .get('/user/getUserInfo', userInfoController.getLoginUserInfo)
  .get('/user/checkLogin', userInfoController.validateLogin)
  .post('/user/signIn', userInfoController.signIn)
  .post('/user/signUp', userInfoController.signUp)
  .get('/task/getTask', taskController.getTasks)
  .get('/task/getFlow', taskController.getFlow)
  .post('/task/addTask', taskController.addTasks)
  .post('/task/updateTask', taskController.updateTasks)

module.exports = routers
