
/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../function/DebugUtility';
import NetworkUtility from '../data/NetworkUtility';
import JSONUtility from '../data/JSONUtility';
import StoreUtility from '../data/StoreUtility';
import CordovaUtility from '../function/CordovaUtility';

const PeripheralUtility = {

    /**
     * 连接设备
     */
     connectPeripheral() {
         return connectPeripheralExecutor('{"DeviceBleName": "SS"}');
     },
    /**
     * 拍照
     */
    fetchPhotoByCamera() {
        return new Promise((resolve, reject) => {
            navigator.camera.getPicture((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            }, {
                quality : 20,                                            // 图片质量【0-100】数字越大质量越大，但是开销时间越长
                destinationType : Camera.DestinationType.DATA_URL        // 以base64字符串返回
            });
        });
    },
    /**
     * 磁条卡
     */
    fetchMagneticStripeCardInfo() {
        return choosePeripheralExecutor('D001')
            .then((result) => {
                return readPeripheralExecutor(`{'ReadTrack': 23, 'TimeOut': 8}`);
            })
            .then((result) => {
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === SUCCESS_CODE_FROM_PERIPHERAL) {
                    var cardInfo = resultData.data.Track2 + '';
                    var cardNo = cardInfo.split('\'')[0];
                    return promise(cardNo);
                }
                return promiseError('error');
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * 密码键盘
     */
    fetchPasswordKeyboard(cardNo) {
        return choosePeripheralExecutor('D002')
            .then((result) => {
                return readPeripheralExecutor(`{'TimeOut': 8, 'VoiceID': 0, 'AccountNum': ${cardNo}, 'GetKeyMode': 1}`);
            })
            .then((result) => {
                return promise(JSONUtility.stringToJson(result).data.KeyInfo);
            }, (error) => {
                return promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return promiseError('error');
                }
                var bsaTranRequest = JSONUtility.stringToJson(StoreUtility.memoryCache('tranRequest'));
                bsaTranRequest.RQD.firstPassword = result;
                bsaTranRequest.RQD.CARD_NO = cardNo;
                bsaTranRequest.RQD.Key = 'pad.00000001.zpk'; //每台设备都有一个

                return NetworkUtility.silenceTask('padAdapter', 'rePinBlock', [bsaTranRequest], 'silence');
            })
            .then((result) => {
                return promise(result.responseJSON.bsadata);
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * IC卡
     */
    fetchICCardInfo() {
        return choosePeripheralExecutor('D003')
            .then((result) => {
                return readPeripheralExecutor(`{'ICTagList': 'A', 'TimeOut': 8}`);
            })
            .then((result) => {
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === SUCCESS_CODE_FROM_PERIPHERAL) {
                    var ICInfo = resultData.data.ICInfo + '';
                    var cardNo = ICInfo.substring(4);
                    return promise(cardNo);
                }
                return promiseError('error');
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * 指纹仪
     */
    fetchFingerPrint() {
        return choosePeripheralExecutor('D005')
            .then((result) => {
                return readPeripheralExecutor(`{'TimeOut': 8, 'VoiceID': 0}`);
            }, (error) => {
                return promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return promiseError('error');
                }
                var fingerprint = JSONUtility.stringToJson(result).data.FigInfo;
                return promise(fingerprint);
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * 身份证(ID卡)
     */
    fetchIDCardInfo() {
        return choosePeripheralExecutor('D007')
            .then((result) => {
                return readPeripheralExecutor('');
            }, (error) => {
                return promiseError('error');
            })
            .then((result) => {
                if (result === 'error') {
                    return promiseError('error');
                }
                var resultData = JSONUtility.stringToJson(result);
                if (resultData.retCode === SUCCESS_CODE_FROM_PERIPHERAL) {
                    return promise(resultData.data.IDInfo);
                }
                return promiseError('error');
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * 手写屏(电子签名?)
     */
    writeToPeripheral() {
        return choosePeripheralExecutor('D008')
            .then((result) => {
                return readPeripheralExecutor(`{"TimeOut": 8}`);
            }, (error) => {
                return promiseError('error');
            })
            .then((result) => {
                // TODO 封装外设获取的值
                var resultData = JSONUtility.stringToJson(result);
                var src = "data:image/jpeg;base64," + resultData.data.WRData;
                return promise(src);
            }, (error) => {
                return promiseError('error');
            });
    },
    /**
     * 关闭设备
     */
    closePeripheral() {
        return closePeripheralExecutor();
    },
    /* 禁止使用 start */
    connectPeripheralExecutor(connect) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'connect', [connect], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    closePeripheralExecutor() {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'close', [], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    choosePeripheralExecutor(deviceCode) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'choose', [deviceCode], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    /**
     * 读设备
     */
    readPeripheralExecutor(readParams) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'read', [readParams], (result) => {
                var resultData = JSONUtility.stringToJson(result);
                var deviceName = resultData.data.DeviceName + "";
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    },
    /**
     * 写设备
     */
    writePeripheralExecutor(writeParams) {
        return new Promise((resolve, reject) => {
            CordovaUtility.executor('SesPlugin', 'write', [writeParams], (result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            });
        });
    }
/* 禁止使用 end */

// 设备读取失败的回调
// deviceName一共7种1.ID 身份证 2.JCIC 芯片卡 3.KPD 密码键盘 4.WR 手写屏 5.FIG 指纹仪 6.MCR 磁条卡

};

export default PeripheralUtility;
