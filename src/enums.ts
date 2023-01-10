export enum Status {
    OK = 200,
    DUPLICATE_REQUESTS = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409
};

export enum HTTP_Methods {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE"
};