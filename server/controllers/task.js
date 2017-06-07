/**
 * Created by kimmy on 2017/6/7.
 */
const taskModel = require('./../models/task')
const code = require('./../codes/user')
const _ = require('lodash')

module.exports = {
  /**
   * 获取流程
   * @param
   */
  async getFlow( ctx ) {
    let result = Object.assign({}, code.commonFail)

    let res = await taskModel.getFlow()
    if (res) {
      result.data = res
      result = Object.assign(result, code.commonSuccess)
    }
    ctx.body = result
  },
  /**
   * 获取数据操作
   * @param
   */
  async getTasks( ctx ) {
    let result = Object.assign({}, code.commonFail)
    // 获取流程
    let flow = await taskModel.getFlow()
    if (!flow || !flow.length) {
      result.message = '无相关流程信息'
      ctx.body = result
      return false
    }

    let res = await taskModel.getTask()
    if (res) {
      // 获取流程字典
      let flowMap = {}
      for (let i = flow.length; i--;) {
        flowMap[flow[i].step] = flow[i].stepname
      }
      // 给任务列表添加流程名
      for (let i = res.length; i--;) {
        res[i].stepname = flowMap[res[i].step]
      }
      let res_group = _.groupBy(res, 'step')
      result.data = res_group
      result = Object.assign(result, code.commonSuccess)
    }
    ctx.body = result
  },
  /**
   * 添加卡片任务
   * @param
   */
  async addTasks( ctx ) {
    let formData = ctx.request.body
    let result = Object.assign({}, code.commonFail)
    result.message = '添加失败'
    // 插入卡片数据
    if (!formData.title) {
      result.message = '标题不能为空'
      ctx.body = result
      return false
    }
    let taskResult = await taskModel.addTask({
      step: formData.step || 0,
      title: formData.title,
      member: formData.member || null,  // 多个逗号隔开
      priority: formData.priority || null,  // 多个逗号隔开
      createtime: new Date().getTime(),
      creator: ctx.session.userName,
      comment: formData.comment || '',
      deadline: formData.deadline || null
    })

    if ( taskResult && taskResult.insertId * 1 > 0) {
      result = Object.assign({}, code.commonSuccess)
      result.message = '添加成功'
    }
    ctx.body = result
  },
  async updateTasks( ctx ) {
    let formData = ctx.request.body
    let result = Object.assign({}, code.commonFail)
    result.message = '修改失败'
    // 添加卡片数据
    if (!formData.title) {
      result.message = '标题不能为空'
      ctx.body = result
      return false
    }
    if (!formData.id) {
      result.message = '找不到卡片id'
      ctx.body = result
      return false
    }
    let taskResult = await taskModel.updateTask({
      step: formData.step || 0,
      title: formData.title,
      member: formData.member || null,  // 多个逗号隔开
      priority: formData.priority || null,  // 多个逗号隔开
      creator: ctx.session.userName,
      comment: formData.comment || '',
      deadline: formData.deadline || null
    }, formData.id)
    if ( taskResult ) {
      result = Object.assign({}, code.commonSuccess)
      result.message = '修改成功'
    }
    ctx.body = result
  }
}
