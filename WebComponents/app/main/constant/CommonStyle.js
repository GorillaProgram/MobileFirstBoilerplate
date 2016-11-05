/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Constant from './Constant';

const CommonStyles = {
    homeRightContainer: {
        overflow: 'auto',
        position: 'fixed',
        top: 10, left: Constant.defaultTabWidth + 20, bottom: 10, right: 10
    },
    fullScreenContainer: {
        backgroundColor: 'white',
        overflow: 'auto',
        position: 'fixed',
        top: 0, left: 0, bottom: 0, right: 0
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '35%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        overflow: 'auto'
    },
    centerLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#ddd'
    },
    rightPanel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '55%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        overflow: 'auto'
    },
    innerLayout: {
        flex: 1,
        width: '99%',
        marginTop: 80
    },
    arrow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Constant.squareWH,
        height: Constant.squareWH,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: '#333333',
        fontSize: Constant.defaultFontSize,
        borderRadius: 5
    },
};

export default CommonStyles;
