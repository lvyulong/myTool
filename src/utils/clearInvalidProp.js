import isObject from './isObject';

export default function (src) {
    if (!isObject(src)) {
        throw new Error('clearInvalidProp参数必须是对象');
    }
    let result = JSON.parse(JSON.stringify(src));
    for (let key in result) {
        let item = result[key];
        if (JSON.stringify(item) === '{}' || JSON.stringify(item) === '[]' || item === '' || item === undefined || item === null) {
            delete result[key]
        }
    }
    return result;
}