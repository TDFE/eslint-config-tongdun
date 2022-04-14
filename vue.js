/*
 * @Descripttion: vue 相关配置
 * @Author: 郑泳健
 * @Date: 2022-04-11 17:34:49
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-04-14 16:37:43
 */

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        './config/base'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        "legacy": true
                    }
                ]
            ]
        },
    },
    plugins: ['vue'],
    rules: {

    }
}
