/**
* Created by MeePwn
* https://github.com/maybewaityou
*/
import Just from '../context/Just';

const AtomicTask = {

    validateTellerTask(userID) {
        return Just.promiseTask('padAdapter', 'validateTeller', [userID])
            .then((result) => {
                return Just.promise(result.responseJSON.bsadata);
            });
    },

};

export default AtomicTask;
