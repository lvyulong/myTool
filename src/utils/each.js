import isObject from './isObject';
import isFunction from './isFunction';

export default function (src, cb) {
    if (!isObject(src) && !Array.isArray(src)) {
        throw new Error('each第1个参数必须是对象或者数组');
    }
    if (!isFunction(cb)) {
        throw new Error('each第2个参数必须是函数');
    }
    if (isObject(src)) {
        for (let key in src) {
            let isBreak = cb(src[key], key);
            if (isBreak) {
                break;
            }
        }
    }
    if (Array.isArray(src)) {
        for (let index = 0; index < src.length; index++) {
            let isBreak = cb(src[index], index);
            if (isBreak) {
                break;
            }
        }
    }
}