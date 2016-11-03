/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../function/DebugUtility';

const DeviceUtility = {

    /* 返回键处理 start */
    eventBackButton() {
        // 调用Toast提示
        DebugUtility.toast('再次点击退出程序!');
        document.removeEventListener("backbutton", eventBackButton, false); // 注销返回键
        document.addEventListener("backbutton", exitApp, false);//绑定退出事件
        // 2秒后重新注册
        var intervalID = window.setInterval(function() {
            window.clearInterval(intervalID);
            document.removeEventListener("backbutton", exitApp, false); // 注销返回键
            document.addEventListener("backbutton", eventBackButton, false); // 返回键
        }, 2000);
    },
    exitApp() {
        navigator.app.exitApp();
    }
    /* 返回键处理 end */

};

export default DeviceUtility;
