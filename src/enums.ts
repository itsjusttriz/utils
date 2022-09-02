export enum Status {
    OK = 200,
    CONFLICT = 409,
    DUPLICATE_REQUESTS = 400,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405
};

export enum HTTP_Methods {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    PUT = "PUT",
    DELETE = "DELETE"
};