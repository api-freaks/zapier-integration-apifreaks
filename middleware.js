export const removeEmptyParams = (request, z, bundle) => {
    if (request.params && typeof request.params === 'object') {
      request.params = Object.fromEntries(
        Object.entries(request.params).filter(
          ([, value]) => value !== undefined && value !== null && value !== ''
        )
      );
    }
    return request;
  };
  
  export default removeEmptyParams;