// @ts-check
/** @type {import('build.react/build/interface').Options} */
module.exports.options = {
  remUnit: 100
}

/** 端口 */
module.exports.port = 10191

/** 接口 */
module.exports.apiList = {
  /** 调试环境 */
  watch: {
    1: '/api'
  },
  /** 开发环境 */
  dev: {
    1: process.env.npm_config_set_url1 || '/api'
  },
  /** 测试环境 */
  test: {
    1: process.env.npm_config_set_url1 || '/api'
  },
  /** 生产环境 */
  prod: {
    1: '/api'
  },
}
