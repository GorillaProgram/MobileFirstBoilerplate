const NetworkUtils = {
    sendRequest: (adapter, procedure, params, onSuccess, onFailure) => {
        try {
            const invocationData = {
                adapter: adapter,
                procedure: procedure,
                parameters: [...params]
            };
            WL.Client.invokeProcedure(invocationData, {
                onSuccess: onSuccess,
                onFailure: onFailure
            });
        } catch (e) {
            alert("系统错误" + e.message.toString());
        }
    },
    fetchDatas: (adapter, procedure, params) => {
        return new Promise((resolve, reject) => {
            console.log({adapter, procedure, params});
            try {
                const invocationData = {
                    adapter: adapter,
                    procedure: procedure,
                    parameters: [...params]
                };
                WL.Client.invokeProcedure(invocationData, {
                    onSuccess: (response) => {
                        console.log({response});
                        resolve(response);
                    },
                    onFailure: (error) => {
                        console.log({error});
                        reject(error);
                    }
                });
            } catch (error) {
                console.log({error});
                reject(error);
            }
        });
    }
}

export default NetworkUtils;
