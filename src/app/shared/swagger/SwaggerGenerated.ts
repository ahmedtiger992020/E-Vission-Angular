/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class ProductServiceProxy {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    add(body: ProductAddInputDto | undefined): Observable<BooleanResultDto> {
        let url_ = this.baseUrl + "/api/Product/Add";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAdd(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAdd(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processAdd(response: HttpResponseBase): Observable<BooleanResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BooleanResultDto>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    update(body: ProductUpdateInputDto | undefined): Observable<BooleanResultDto> {
        let url_ = this.baseUrl + "/api/Product/Update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<BooleanResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BooleanResultDto>(<any>null);
    }

    /**
     * @param request (optional) 
     * @return Success
     */
    delete(request: number | undefined): Observable<BooleanResultDto> {
        let url_ = this.baseUrl + "/api/Product/Delete?";
        if (request === null)
            throw new Error("The parameter 'request' cannot be null.");
        else if (request !== undefined)
            url_ += "request=" + encodeURIComponent("" + request) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<BooleanResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BooleanResultDto>(<any>null);
    }

    /**
     * @param request (optional) 
     * @return Success
     */
    getById(request: number | undefined): Observable<ProductGetByIdOutputDtoResultDto> {
        let url_ = this.baseUrl + "/api/Product/GetById?";
        if (request === null)
            throw new Error("The parameter 'request' cannot be null.");
        else if (request !== undefined)
            url_ += "request=" + encodeURIComponent("" + request) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetById(<any>response_);
                } catch (e) {
                    return <Observable<ProductGetByIdOutputDtoResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<ProductGetByIdOutputDtoResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetById(response: HttpResponseBase): Observable<ProductGetByIdOutputDtoResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductGetByIdOutputDtoResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductGetByIdOutputDtoResultDto>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getAll(body: ProductGetAllInputDto | undefined): Observable<ProductGetAllOutputDtoListResultDto> {
        let url_ = this.baseUrl + "/api/Product/GetAll";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAll(<any>response_);
                } catch (e) {
                    return <Observable<ProductGetAllOutputDtoListResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<ProductGetAllOutputDtoListResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetAll(response: HttpResponseBase): Observable<ProductGetAllOutputDtoListResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductGetAllOutputDtoListResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductGetAllOutputDtoListResultDto>(<any>null);
    }

    /**
     * @return Success
     */
    getProductDDL(): Observable<IdNameDtoListResultDto> {
        let url_ = this.baseUrl + "/api/Product/GetProductDDL";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetProductDDL(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetProductDDL(<any>response_);
                } catch (e) {
                    return <Observable<IdNameDtoListResultDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<IdNameDtoListResultDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetProductDDL(response: HttpResponseBase): Observable<IdNameDtoListResultDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = IdNameDtoListResultDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<IdNameDtoListResultDto>(<any>null);
    }
}

export class ProductAddInputDto {
    name?: string | undefined;
    photo?: string | undefined;
    price?: number;

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.photo = _data["photo"];
            this.price = _data["price"];
        }
    }

    static fromJS(data: any): ProductAddInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductAddInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["photo"] = this.photo;
        data["price"] = this.price;
        return data; 
    }
}

export class BooleanResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: boolean;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            this.data = _data["data"];
        }
    }

    static fromJS(data: any): BooleanResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new BooleanResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        data["data"] = this.data;
        return data; 
    }
}

export class ProductUpdateInputDto {
    id?: number;
    name?: string | undefined;
    photo?: string | undefined;
    price?: number;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.photo = _data["photo"];
            this.price = _data["price"];
        }
    }

    static fromJS(data: any): ProductUpdateInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductUpdateInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["photo"] = this.photo;
        data["price"] = this.price;
        return data; 
    }
}

export class ProductGetByIdOutputDto {
    id?: number;
    name?: string | undefined;
    photo?: string | undefined;
    price?: number;
    lastUpdated?: Date | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.photo = _data["photo"];
            this.price = _data["price"];
            this.lastUpdated = _data["lastUpdated"] ? new Date(_data["lastUpdated"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductGetByIdOutputDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGetByIdOutputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["photo"] = this.photo;
        data["price"] = this.price;
        data["lastUpdated"] = this.lastUpdated ? this.lastUpdated.toISOString() : <any>undefined;
        return data; 
    }
}

export class ProductGetByIdOutputDtoResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: ProductGetByIdOutputDto;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            this.data = _data["data"] ? ProductGetByIdOutputDto.fromJS(_data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductGetByIdOutputDtoResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGetByIdOutputDtoResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        data["data"] = this.data ? this.data.toJSON() : <any>undefined;
        return data; 
    }
}

export class PagingModel {
    pageNumber?: number;
    pageSize?: number;

    init(_data?: any) {
        if (_data) {
            this.pageNumber = _data["pageNumber"];
            this.pageSize = _data["pageSize"];
        }
    }

    static fromJS(data: any): PagingModel {
        data = typeof data === 'object' ? data : {};
        let result = new PagingModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["pageNumber"] = this.pageNumber;
        data["pageSize"] = this.pageSize;
        return data; 
    }
}

export enum SortDirection {
    _0 = 0,
    _1 = 1,
}

export class SortingModel {
    sortingExpression?: string | undefined;
    sortingDirection?: SortDirection;

    init(_data?: any) {
        if (_data) {
            this.sortingExpression = _data["sortingExpression"];
            this.sortingDirection = _data["sortingDirection"];
        }
    }

    static fromJS(data: any): SortingModel {
        data = typeof data === 'object' ? data : {};
        let result = new SortingModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["sortingExpression"] = this.sortingExpression;
        data["sortingDirection"] = this.sortingDirection;
        return data; 
    }
}

export class ProductGetAllInputDto {
    paging?: PagingModel;
    sortingModel?: SortingModel;
    name?: string | undefined;
    price?: number;

    init(_data?: any) {
        if (_data) {
            this.paging = _data["paging"] ? PagingModel.fromJS(_data["paging"]) : <any>undefined;
            this.sortingModel = _data["sortingModel"] ? SortingModel.fromJS(_data["sortingModel"]) : <any>undefined;
            this.name = _data["name"];
            this.price = _data["price"];
        }
    }

    static fromJS(data: any): ProductGetAllInputDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGetAllInputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["paging"] = this.paging ? this.paging.toJSON() : <any>undefined;
        data["sortingModel"] = this.sortingModel ? this.sortingModel.toJSON() : <any>undefined;
        data["name"] = this.name;
        data["price"] = this.price;
        return data; 
    }
}

export class ProductGetAllOutputDto {
    id?: number;
    name?: string | undefined;
    photo?: string | undefined;
    price?: number;
    lastUpdated?: Date | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.photo = _data["photo"];
            this.price = _data["price"];
            this.lastUpdated = _data["lastUpdated"] ? new Date(_data["lastUpdated"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductGetAllOutputDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGetAllOutputDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["photo"] = this.photo;
        data["price"] = this.price;
        data["lastUpdated"] = this.lastUpdated ? this.lastUpdated.toISOString() : <any>undefined;
        return data; 
    }
}

export class ProductGetAllOutputDtoListResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: ProductGetAllOutputDto[] | undefined;
    totalCount?: number;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(ProductGetAllOutputDto.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): ProductGetAllOutputDtoListResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new ProductGetAllOutputDtoListResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        return data; 
    }
}

export class IdNameDto {
    id?: number;
    name?: string | undefined;

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): IdNameDto {
        data = typeof data === 'object' ? data : {};
        let result = new IdNameDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data; 
    }
}

export class IdNameDtoListResultDto {
    isSuccess?: boolean;
    message?: string | undefined;
    data?: IdNameDto[] | undefined;
    totalCount?: number;

    init(_data?: any) {
        if (_data) {
            this.isSuccess = _data["isSuccess"];
            this.message = _data["message"];
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(IdNameDto.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
        }
    }

    static fromJS(data: any): IdNameDtoListResultDto {
        data = typeof data === 'object' ? data : {};
        let result = new IdNameDtoListResultDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        return data; 
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}