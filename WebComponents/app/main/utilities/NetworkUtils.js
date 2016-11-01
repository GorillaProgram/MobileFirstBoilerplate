import DebugUtility from './DebugUtility';

class NetworkUtils {

    fetchDatas(adapter, procedure, params) {
        return new Promise((resolve, reject) => {
            log(adapter, procedure, params);
            try {
                const invocationData = {
                    adapter: adapter,
                    procedure: procedure,
                    parameters: [params]
                };
                WL.Client.invokeProcedure(invocationData, {
                    onSuccess: (response) => {
                        log(response);
                        resolve(response);
                    },
                    onFailure: (error) => {
                        log(error);
                        reject(error);
                    }
                });
            } catch (error) {
                log(error);
                reject(error);
            }
        });
    }

}

export default NetworkUtils;
