// 操作对象
import getProp from './src/utils/getProp';
import setProp from './src/utils/setProp';
import clearInvalidProp from './src/utils/clearInvalidProp';
import deleteProp from './src/utils/deleteProp';

// 操作数组
import findAll from './src/utils/findAll';
import findOne from './src/utils/findOne';
import deleteItems from './src/utils/deleteItems';

// 对象和数组都支持
import each from './src/utils/each';
import trim from './src/utils/trim';

// 数据类型判断
import isFunction from './src/utils/isFunction';
import isObject from './src/utils/isObject';

// 数据转换
import jsonToSearch from './src/utils/jsonToSearch';
import parseUrl from './src/utils/parseUrl';
// 解析webpack的require.context返回值
import parseModules from './src/utils/parseModules';

// 其他
import copy from './src/utils/copy';

export default {
    getProp,
    setProp,
    clearInvalidProp,
    deleteProp,
    findAll,
    findOne,
    deleteItems,
    each,
    trim,
    isFunction,
    isObject,
    jsonToSearch,
    parseModules,
    parseUrl,
    copy,
};