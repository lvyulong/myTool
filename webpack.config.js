const path = require('path');
global.CURRENT_VERSION = new Date().getTime();

const webpackBaseConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        // 指定js文件输出位置
        path: path.resolve(__dirname, './dist'),
        filename: 'myTool.min.js',
    },
    plugins: [

    ],
    resolve: {
        // 定义别名，方便在vue组件中引用
        alias: {
        },
        // 形如下列扩展名文件的引用，可以省略扩展名
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            // es6语法编译;node_modules目录下的文件除外
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
};
module.exports = webpackBaseConfig;
