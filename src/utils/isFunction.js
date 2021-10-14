export default function (src) {
    return Object.prototype.toString.call(src) === '[object Function]';
}