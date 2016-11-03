/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../utilities/function/DebugUtility';
import Dimensions from '../utilities/userInterface/Dimensions';
import ImageCache from '../utilities/userInterface/ImageCache';
import JQMUtility from '../utilities/userInterface/JQMUtility';
import RouterUtility from '../utilities/userInterface/RouterUtility';

const UIManager = {
    ...Dimensions,
    ...ImageCache,
    ...JQMUtility,
    ...RouterUtility
};

export default UIManager;
