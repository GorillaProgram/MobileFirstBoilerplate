class DebugUtility {

    log() {
        arguments.forEach((argument, index, array) => {
            console.log(argument);
        });
    }

}

export default DebugUtility;
