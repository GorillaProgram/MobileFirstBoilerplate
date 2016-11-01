const DataUtility = {

    isNull(arg) {
        return (arg === undefined || arg === null || arg === '' || arg === 'null' || arg === ' ' || arg === 'undefined' || arg === 'error: no value for key ~');
    },
    isNotNull(arg) {
        return !isNull(arg);
    },
    /**
     * 判断是否为空, 为空的话, 返回空字符串
     */
    nullToEmptyString(arg) {
        return isNull(arg) ? '' : arg;
    },
    /**
     * 转换日期格式 19900101为1991-01-01
     */
    getDateUtil(date) {
        var newDate = '';
        if (isNotNull(date)) {
            if (date.length == 8) {
                newDate = date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
            }
        }
        return newDate;
    }


};

export default DataUtility;
