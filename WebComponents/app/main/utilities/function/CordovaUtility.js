/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../function/DebugUtility';

const CordovaUtility = {

    executor(pluginName, action, params, onSuccess, onFailure) {
        cordova.exec(onSuccess, onFailure, pluginName, action, params);
    }
    
};

export default CordovaUtility;
