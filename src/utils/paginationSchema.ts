import { IsOptional, IsString } from 'class-validator';

export type TPagination = {
  page: number;
  limit: number;
  search?: string;
};

export type TPaginationResponse<T> = {
  data: T[];
  pages: {
    limit: number;
    total: number;
    current: number;
    hasNext: Boolean;
    hasPrev: Boolean;
    totalPages: number;
    next: number | null;
    prev: number | null;
  };
};

export class PaginationDTO {
  @IsString()
  page: string;

  @IsString()
  limit: string;

  @IsOptional()
  @IsString()
  search?: string;
}
