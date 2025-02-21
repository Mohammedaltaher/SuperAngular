// src/app/core/services/base.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, ApiResponses } from '../../../shared/models/ApiResponse';

export class BaseService<T> {
  constructor(protected http: HttpClient, private apiUrl: string) {}

  /**
   * 🟢 GET items from a custom endpoint with optional params
   */
  getList(endpoint: string, params?: { [param: string]: any }): Observable<ApiResponses<T>> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    return this.http.get<ApiResponses<T>>(`${this.apiUrl}${endpoint}`, { params: httpParams });
  }

  get(endpoint: string, params?: { [param: string]: any }): Observable<ApiResponse<T>> {
    const httpParams = new HttpParams({ fromObject: params || {} });
    return this.http.get<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, { params: httpParams });
  }

  /**
   * 🟩 POST (Create) item to a custom endpoint
   */
  create(endpoint: string, item: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, item);
  }

  /**
   * 🟠 PUT (Update) item to a custom endpoint
   */
  update(endpoint: string, id: string | number, item: T): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.apiUrl}${endpoint}/${id}`, item);
  }

  /**
   * 🔴 DELETE item by ID from a custom endpoint
   */
  delete(endpoint: string, id: string | number): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.apiUrl}${endpoint}/${id}`);
  }
}
