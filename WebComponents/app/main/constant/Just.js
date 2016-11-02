import DataManager from '../manager/DataManager';
import FunctionManager from '../manager/FunctionManager';
import UIManager from '../manager/UIManager';
import TaskManager from '../manager/TaskManager';

const Just = {
    ...DataManager,
    ...FunctionManager,
    ...UIManager,
    ...TaskManager
};

export default Just;
