function getSearch(searchStr) {
    if (!searchStr) {
        return null;
    }
    // 转成数组
    let searchArray = searchStr.split('&');
    let searchObj = {};
    searchArray.forEach(item => {
        let equalIndex = item.indexOf('=');
        if (equalIndex > 0) {
            let key = item.slice(0, equalIndex);
            let value = item.slice(equalIndex + 1);
            searchObj[key] = value || '';
        } else {
            // 格式有误，不解析
            searchObj[item] = '';
        }
    });
    return searchObj;
}

export default function (url) {

    if (!url) {
        throw new Error('parseUrl参数错误');
    }

    // 解析hash
    let hash = '';
    let hashStartIndex = url.indexOf('#');
    if (hashStartIndex >= 0) {
        hash = url.slice(hashStartIndex + 1);
        url = url.substring(0, hashStartIndex);
    }

    let hashSearch = null;
    if (hash) {
        let hashSearchIndex = hash.indexOf('?');
        if (hashSearchIndex >= 0) {
            let hasSearchStr = hash.slice(hashSearchIndex + 1);
            hashSearch = getSearch(hasSearchStr);
            hash = hash.substring(0, hashSearchIndex);
        }
    }

    // 解析search
    let search = null;
    let searchStartIndex = url.indexOf('?');
    if (searchStartIndex >= 0) {
        let searchStr = url.slice(searchStartIndex + 1);
        search = getSearch(searchStr);
        url = url.substring(0, searchStartIndex);
    }

    return {
        url,
        search,
        hash,
        hashSearch,
    }
}