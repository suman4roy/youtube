const asyncHandler = (requestHandler) => {
    // 1. Create a new promise that will be resolved or rejected based on the result of the request handler
    return (req, res, next)=>{
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err)=> next(err))
    }
}

export {asyncHandler}