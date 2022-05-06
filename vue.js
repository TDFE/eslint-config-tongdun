/*
 * @Descripttion: vue 相关配置
 * @Author: 郑泳健
 * @Date: 2022-04-11 17:34:49
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-04-14 16:37:43
 */

module.exports = {
    extends: [
        "plugin:vue/essential",
        'eslint:recommended',
        './config/base'
    ],
    plugins: ['vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        "parser": "@babel/eslint-parser",
        sourceType: 'module',
        "ecmaVersion": 2021,
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
    globals: {
        "__WEEX__": true,
        "WXEnvironment": true
    }
}
