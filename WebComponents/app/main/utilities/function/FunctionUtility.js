const FunctionUtility = {

    delayExecute(executor) {
        setTimeout(executor, 500);
    },
    promise(params) {
        return new Promise((resolve) => {
            resolve(params);
        });
    },
    promiseError(error) {
        return new Promise((resolve) => {
            resolve(error);
        });
    }

};

export default FunctionUtility;
