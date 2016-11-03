/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import DebugUtility from '../utilities/function/DebugUtility';
import Dimensions from '../utilities/userInterface/Dimensions';
import ImageCache from '../utilities/userInterface/ImageCache';
import JQMUtility from '../utilities/userInterface/JQMUtility';

const UIManager = {
    ...Dimensions,
    ...ImageCache,
    ...JQMUtility
};

export default UIManager;
