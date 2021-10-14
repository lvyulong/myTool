import isObject from './isObject';

export default function () {
    if (!isObject(arguments[0]) && !Array.isArray(arguments[0])) {
        throw new Error('trim第1个参数必须是对象或者数组');
    }
    if (!isObject(arguments[1])) {
        throw new Error('trim第2个参数必须是对象');
    }
    let src = JSON.parse(JSON.stringify(arguments[0]));
    let option = arguments[1];
    let result = null;
    if (isObject(src)) {
        result = {};
        for (let key in src) {
            if (option.hasOwnProperty(key)) {
                result[option[key]] = src[key];
            }
        }
    }
    if (Array.isArray(src)) {
        result = [];
        src.forEach(item => {
            if (!isObject(item)) {
                throw new Error('trim第一个参数如果是数组，则数组中每一项必须是对象');
            }
            let trimItem = {};
            for (let key in item) {
                if (option.hasOwnProperty(key)) {
                    trimItem[option[key]] = item[key];
                }
            }
            result.push(trimItem);
        });
    }
    return result;
}