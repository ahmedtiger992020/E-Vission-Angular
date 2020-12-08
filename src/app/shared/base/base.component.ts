import { MatPaginator, MatSort } from '@angular/material';
import { SortingDirectionEnum } from '../Enums/sorting-direction-enum';
export abstract class BaseComponent {
  constructor() {
  }
  prepareSearchObject(paginator: MatPaginator, sort: MatSort, searchDto: any) {
    searchDto.paging.pageNumber = paginator.pageIndex + 1;
    // 
    //if(paginator.pageSize)
        searchDto.paging.pageSize = paginator.pageSize;
    // else
    //     searchDto.paging.pageSize =  Utils.DEFUALT_PAGE_SIZE;
    searchDto.sortingModel.sortingExpression = sort.active;

    if (sort.direction === 'desc') {
      searchDto.sortingModel.sortingDirection = SortingDirectionEnum.Descending as number;
    } else {
      searchDto.sortingModel.sortingDirection = SortingDirectionEnum.Ascending as number;
    }
  }
}

