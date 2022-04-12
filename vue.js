/*
 * @Descripttion: vue 相关配置
 * @Author: 郑泳健
 * @Date: 2022-04-11 17:34:49
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-04-12 17:40:32
 */

module.exports = {
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:vue/recommended',
        './config/base'
    ],
    plugins: ['vue'],
    rules: {

    },
    globals: {
        define: true,
        module: true
    }
}
