export default function (files, isArray) {
    // 处理webpack的requre.context方法返回的files，返回一个对象，key是module名
    let modules = {};
    let keys = files.keys();

    if (isArray) {
        modules = [];
        keys.forEach(key => {
            let module = files(key).default;
            modules.push(module);
        });
    } else {
        keys.forEach(key => {
            let module = files(key).default;
            let reg = /[\.\/]/;
            let names = key.split(reg);
            modules[names[names.length - 2]] = module;
        });
    }
    return modules;
}