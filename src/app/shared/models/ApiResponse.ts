  export interface ApiResponses<T> {
    status: number;
    message: string | null;
    total: number | null;
    success: T[];
    errors: any | null;
  }
  export interface ApiResponse<T> {
    status: number;
    message: string | null;
    total: number | null;
    success: T;
    errors: any | null;
  }