const FunctionUtility = {

    delayExecute(executor) {
        setTimeout(executor, 500);
    },
    promise(params) {
        return new Promise(function (resolve) {
            resolve(params);
        });
    },
    promiseError(error) {
        return new Promise(function (resolve) {
            resolve(error);
        });
    }

};

export default FunctionUtility;
