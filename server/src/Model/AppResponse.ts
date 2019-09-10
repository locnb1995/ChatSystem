export default class AppResponse{
    status: String;
    result: Array<Object>;

    static getSuccessResponse(result: Array<Object>): AppResponse{
        return {
            status: 'Success' ,
            result: result
        };
    }

    static getFailedResponse(result: Array<Object>): AppResponse{
        return {
            status: 'Fail' ,
            result: result
        };
    }
}