import DebugUtility from '../utilities/Function/DebugUtility';
import DataUtility from '../utilities/Data/DataUtility';
import JSONUtility from '../utilities/Data/JSONUtility';
import NetworkUtility from '../utilities/Data/NetworkUtility';
import StoreUtility from '../utilities/Data/StoreUtility';

const DataManager = {
    ...DebugUtility,
    ...DataUtility,
    ...JSONUtility,
    ...NetworkUtility,
    ...StoreUtility
};

export default DataManager;
