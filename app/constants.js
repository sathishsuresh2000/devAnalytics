"use strict";
module.exports = {
  httpCodes: {
    success: 200,
    successfulCreate: 201,
    redirect: 302,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    internalServerError: 500,
    notImplemented: 501
  },
  errorMessages: {
    filterQueryNotFound:"Filter By query string not found",
    invalidFilterType :"Filter type is invalid"
  }
};

