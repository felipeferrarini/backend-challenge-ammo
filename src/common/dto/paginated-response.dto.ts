import { ApiProperty } from '@nestjs/swagger';

class PaginatedMeta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemsPerPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  currentPage: number;
}

export class PaginatedResponseDto<T> {
  @ApiProperty({ type: Array<T> })
  items: T[];

  @ApiProperty({ type: PaginatedMeta })
  meta: PaginatedMeta;
}
