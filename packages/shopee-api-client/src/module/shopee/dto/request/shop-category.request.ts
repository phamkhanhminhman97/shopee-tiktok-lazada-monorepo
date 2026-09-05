interface RequestAddShopCategory {
  name: string;
  /** Sort weight; maximum 2147483546. */
  sort_weight?: number;
}

interface RequestUpdateShopCategory {
  shop_category_id: number;
  name?: string;
  sort_weight?: number;
  /** Applicable values: NORMAL, INACTIVE, DELETED. */
  status?: 'NORMAL' | 'INACTIVE' | 'DELETED' | string;
}

interface RequestDeleteShopCategory {
  shop_category_id: number;
}

interface RequestGetShopCategoryList {
  /** Range [1, 2147483647]. */
  page_size: number;
  /** Range [1, 100]. */
  page_no: number;
}

interface RequestAddShopCategoryItemList {
  shop_category_id: number;
  /** Item IDs to add. Max 100 items per request. */
  item_list: number[];
}

interface RequestDeleteShopCategoryItemList {
  shop_category_id: number;
  item_list: number[];
}

interface RequestGetShopCategoryItemList {
  shop_category_id: number;
  /** Range [0, 1000]. Default 1000. */
  page_size?: number;
  /** `page_size * page_no` must be within [0, 2147483446]. Default 0. */
  page_no?: number;
}

export {
  RequestAddShopCategory as ShopeeRequestAddShopCategory,
  RequestUpdateShopCategory as ShopeeRequestUpdateShopCategory,
  RequestDeleteShopCategory as ShopeeRequestDeleteShopCategory,
  RequestGetShopCategoryList as ShopeeRequestGetShopCategoryList,
  RequestAddShopCategoryItemList as ShopeeRequestAddShopCategoryItemList,
  RequestDeleteShopCategoryItemList as ShopeeRequestDeleteShopCategoryItemList,
  RequestGetShopCategoryItemList as ShopeeRequestGetShopCategoryItemList,
};
