/*
 * @Descripttion: js相关配置
 * @Author: 郑泳健
 * @Date: 2022-04-11 17:33:23
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-04-18 16:05:16
 */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:node/recommended",
        "./config/base",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        legacy: true,
                    },
                ],
            ],
        },
    }
};
