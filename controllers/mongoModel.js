/**
 * 操作数据库的方法
 * 如需要链式调用单独配置
 */
class MongoModel {
  constructor(model) {
    this.model = model;
  }
  /**
   * 创建数据
   * @param {*} option 
   */
  async create() {
    return new Promise(async (resolve, reject) => {
      try {
        const findRes = await this.model.create(...arguments)
        resolve(findRes)
      } catch (err) {
        reject(err)
      }
    })
  }
  /**
   * 更新数据
   * @param {*} option 
   */
  async updateOne() {
    return new Promise(async (resolve, reject) => {
      try {
        const findRes = await this.model.updateOne(...arguments)
        resolve(findRes)
      } catch (err) {
        reject(err)
      }
    })
  }
  /**
   * 查询单条
   * @param {} option 
   */
  async findOne() {
    return new Promise(async (resolve, reject) => {
      try {
        const findRes = await this.model.findOne(...arguments)
        resolve(findRes)
      } catch (err) {
        reject(err)
      }
    })
  }
  /**
   * 查询
   * @param {} option 
   */
  async find() {
    return new Promise(async (resolve, reject) => {
      try {
        const findRes = await this.model.find(...arguments)
        resolve(findRes)
      } catch (err) {
        reject(err)
      }
    })
  }
  /**
   * 删除一条数据
   * @param {} option 
   */
  async findOneAndRemove() {
    return new Promise(async (resolve, reject) => {
      try {
        const findRes = await this.model.findOneAndRemove(...arguments)
        resolve(findRes)
      } catch (err) {
        reject(err)
      }
    })
  }
}


module.exports = MongoModel