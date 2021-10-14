export default function (obj) {
    // 判断是否为object
    return Object.prototype.toString.call(obj) == '[object Object]';
}