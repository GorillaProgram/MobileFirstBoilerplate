import ImgCache from 'imgcache';
import Constant from '../../constant/Constant';
import DebugUtility from '../Data/DebugUtility';

const ImageCache = {

    /**
     * 初始化图片缓存
     */
    imageCacheInitConfig(successExecutor, failureExecutor) {
        // 是否打印日志
        ImgCache.options.debug = true;

        // 设置图片缓存大小 50MB, 默认 10MB
        ImgCache.options.chromeQuota = Constant.IMAGE_CACHE_SIZE;

        ImgCache.init(function() {
            DebugUtility.log('ImgCache init: success!');
            if (exist(successExecutor)) {
                successExecutor();
            }
        }, function() {
            DebugUtility.log('ImgCache init: error! Check the log for errors');
            if (exist(failureExecutor)) {
                failureExecutor();
            }
        });
    },
    /**
     * 设置图片
     */
    setImage(target) {
        ImgCache.isCached(target.attr('src'), function(path, success) {
            DebugUtility.log(target.attr('src'));
            if (success) {
                // already cached
                ImgCache.useCachedFile(target);
            } else {
                // not there, need to cache the image
                ImgCache.cacheFile(target.attr('src'), function() {
                    ImgCache.useCachedFile(target);
                });
            }
        });
    },
    /**
     * 设置图片
     */
    setImageWithURL(target, targetURL) {
        target.attr('src', targetURL);
        ImgCache.isCached(target.attr('src'), function(path, success) {
            // DebugUtility.log(target.attr('src'));
            if (success) {
                // already cached
                DebugUtility.log(path);
                ImgCache.useCachedFile(target);
            } else {
                // not there, need to cache the image
                DebugUtility.log('重新下载');
                ImgCache.cacheFile(target.attr('src'), function() {
                    ImgCache.useCachedFile(target);
                });
            }
        });
    },
    /**
     * 缓存图片
     */
    cacheFile(URLs) {
        for (var i=0; i<URLs.length; i++) {
            var url = URLs[i];
            ImgCache.isCached(url, function(path, success) {
                if (success) {
                } else {
                    ImgCache.cacheFile(path, function (path, success) {
                        DebugUtility.log('缓存成功====' + path);
                    });
                }
            });
        }
    },
    /**
     * 当前缓存大小
     */
    getCurrentSize() {
        return ImgCache.getCurrentSize();
    },
    /**
     * 全部缓存大小
     */
    allImageCacheSize() {
        return Constant.IMAGE_CACHE_SIZE;
    },
    /**
     * 清除缓存
     */
    clearImageCache(clearSuccess, clearError) {
        ImgCache.clearCache(clearSuccess, clearError);
    }

};

export default ImageCache;
