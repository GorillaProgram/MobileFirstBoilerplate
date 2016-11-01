const DataUtility = {

    isNull(arg) {
        return !(arg === undefined || arg === null || arg === '' || arg === 'null' || arg === ' ' || arg === 'undefined' || arg === 'error: no value for key ~');
    },
    

};

export default DataUtility;
