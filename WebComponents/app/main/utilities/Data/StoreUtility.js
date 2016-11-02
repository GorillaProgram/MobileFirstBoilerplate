/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
const StoreUtility = {

    /**
     * 内存缓存, 存取方法(一个参数: getter; 两个参数: setter | remove)
     *
     * @param key 键
     * @param value 值
     * @return
     *      getter时, 返回获取的值
     */
    memoryCache(key, value) {
        if (value) {
            // setter | remove
            key === 'remove' ? memoryCacheRemove(value) : memoryCacheSetter(key, value);
        } else {
            // getter
            return memoryCacheGetter(key);
        }
    },

    /**
     * 私有方法, 禁止使用
     */
    memoryCacheSetter(key, value) {
        sessionStorage.setItem(key, value);
    },
    /**
     * 私有方法, 禁止使用
     */
    memoryCacheGetter(key) {
        return sessionStorage.getItem(key) !== null ? sessionStorage.getItem(key) : 'error: no value for key ~';
    },
    /**
     * 私有方法, 禁止使用
     */
    memoryCacheRemove(key) {
        sessionStorage.removeItem(key);
    },

    /**
     * 本地缓存, 存取方法(一个参数: getter; 两个参数: setter | remove)
     *
     * @param key 键
     * @param value 值
     * @return
     *      getter时, 返回获取的值
     */
    diskCache(key, value) {
        if (value) {
            // setter | remove
            key === 'remove' ? diskCacheRemove(value) : diskCacheSetter(key, value);
        } else {
            // getter
            return diskCacheGetter(key);
        }
    },

    /**
     * 私有方法, 禁止使用
     */
    diskCacheSetter(key, value) {
        localStorage.setItem(key, value);
    },
    /**
     * 私有方法, 禁止使用
     */
    diskCacheGetter(key) {
        return localStorage.getItem(key) !== null ? localStorage.getItem(key) : 'error: no value for key ~';
    },
    /**
     * 私有方法, 禁止使用
     */
    diskCacheRemove(key) {
        localStorage.removeItem(key);
    }

};

export default StoreUtility;
