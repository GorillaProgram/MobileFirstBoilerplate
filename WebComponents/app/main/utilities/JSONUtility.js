class JSONUtility {
    /**
     * JSON -> String
     *
     * @param json
     * @return sting
     */
    function jsonToString(json) {
        return JSON.stringify(json);
    }

    /**
     * String -> JSON
     *
     * @param string
     * @returns json
     */
    function stringToJson(string) {
        return JSON.parse(string);
    }

}

export default JSONUtility;
