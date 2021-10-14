import isObject from './isObject';
import each from './each';

export default function (src, path, value) {
    if (!isObject(src)) {
        throw new Error('setProp第1个参数必须是对象');
    }

    if (typeof path !== 'string') {
        throw new Error('setProp第2个参数必须是对象');
    }

    let keys = path.split('.');
    let temp = src;

    each(keys, (key, index) => {
        if (index == keys.length - 1) {
            temp[key] = value;
        } else {
            if (!temp.hasOwnProperty(key) || !isObject(temp[key])) {
                temp[key] = {};
            }
            temp = temp[key];
        }
    });


    // let curKey = keys[0];
    // let newStr = keys.slice(1).join('.');
    // if (keys.length > 0) {
    //     if (keys.length == 1) {
    //         // 到达终点，设置值，结束
    //         origin[curKey] = value;
    //     } else if (!origin.hasOwnProperty(curKey) || !isObject(origin[curKey])) {
    //         // 还没到达终点，并且该层没有这个属性或者该属性不是一个对象，则设置该属性为空对象
    //         origin[curKey] = {};
    //         setProp(origin[curKey], newStr, value);
    //     } else {
    //         // 还没到达终点，但是该层有这个属性，则继续往下层找
    //         setProp(origin[curKey], newStr, value);
    //     }
    // }


}