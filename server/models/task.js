/**
 * Created by kimmy on 2017/6/7.
 */
const dbUtils = require('./../utils/db-util')

const task = {
  /**
   * 查找面板数据
   * @param
   * @return {}
   */
  async getTask() {
    let result = await dbUtils.select('task', '*')
    return result
  },
  /**
   * 查找面板流程
   * @param
   * @return {}
   */
  async getFlow() {
    let result = await dbUtils.select('flow', '*')
    return result
  },
  /**
   * 添加卡片
   * @param
   * @return {}
   */
  async addTask(model) {
    let result = await dbUtils.insertData('task', model)
    return result
  },
  /**
   * 编辑卡片
   * @param
   * @return {}
   */
  async updateTask(model, id) {
    let result = await dbUtils.updateData('task', model, id)
    return result
  }

}


module.exports = task
