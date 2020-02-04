export default {
    methods: {
        checkNullAndExist(targetObject, targetAttribute) {
            if(targetObject) {
                if(targetObject[targetAttribute]) {
                    return targetObject[targetAttribute]
                }
                return "-";
            }
            return "";
        }
    }
}