import { HttpStatusCode } from "@angular/common/http";

export interface ServerApiResponse {
    StatusCode: HttpStatusCode;
    IsError: boolean;
    Message: string;
}
