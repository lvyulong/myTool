import isObject from './isObject';

export default function (src) {
    if (!isObject(src)) {
        throw new Error('jsonToSearch参数必须是对象');
    }
    let searchStr = '';
    for (let key in src) {
        searchStr += key + '=' + src[key] + '&';
    }
    searchStr = searchStr.substr(0, searchStr.length - 1);
    return searchStr;
}