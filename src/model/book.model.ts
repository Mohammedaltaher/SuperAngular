export interface Book {
    id?: number;
    name: string;
    nameAr: string;
  }

  export interface ApiResponse<T> {
    status: number;
    message: string | null;
    total: number | null;
    success: T[];
    errors: any | null;
  }
  
  export interface SuccessItem {
    id: string;
    name: string;
    nameAr: string;
    createdDate: string;
    updatedDate: string;
  }
  