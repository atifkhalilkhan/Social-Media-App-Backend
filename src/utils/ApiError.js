

class  ApiError extends Error {
    constructor(
        statusCode,
        message = "Internal Server Error",
        errors = [],
        statck = ""

    ){
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = statck;
        this.success = false;
        this.errors = errors;

        
        if(statck){
            this.stack = statck;
            
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export default ApiError;