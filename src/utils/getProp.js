import isObject from './isObject';

export default function (src, path) {
    if (!isObject(src)) {
        throw new Error('getProp第1个参数必须是对象');
    }

    if (typeof path !== 'string') {
        throw new Error('getProp第2个参数必须是字符串');
    }

    let result = JSON.parse(JSON.stringify(src));
    let pathArray = path.split('.');
    for (let i = 0; i < pathArray.length; i++) {
        result = result[pathArray[i]];
        if (!result) {
            break;
        }
    }
    return result;
}