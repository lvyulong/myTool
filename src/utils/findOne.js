import isObject from './isObject';
import each from './each';

export default function (list, condition) {
    if (!Array.isArray(list)) {
        throw new Error('findOne第1个参数必须是数组');
    }
    if (!isObject(condition)) {
        throw new Error('findOne第2个参数必须是对象');
    }

    let matchItem = null;
    each(list, item => {
        let match = true;
        each(condition, (condItem, condKey) => {
            if (item[condKey] !== condItem) {
                match = false;
                return true;
            }
        });

        if (match) {
            matchItem = item;
            return true;
        }
    });
    return matchItem;
}