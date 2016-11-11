/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Just from '../context/Just';

const AtomicTask = {

    function validateTellerTask(userID) {
        return Just.promiseTask('padAdapter', 'validateTeller', [userID])
            .then(function (result) {
                return Just.promise(result.responseJSON.bsadata);
            });
    },

};

export default AtomicTask;
