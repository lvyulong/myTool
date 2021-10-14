import isObject from './isObject';
import each from './each';

export default function (src, keys) {
    if (!isObject(src)) {
        throw new Error('deleteProp第1个参数必须是对象');
    }
    if (!Array.isArray(keys)) {
        throw new Error('deleteProp第2个参数必须是数组');
    }
    let result = JSON.parse(JSON.stringify(src));
    each(keys, key => {
        if (result.hasOwnProperty(key)) {
            delete result[key];
        }
    });
    
    return result;
}