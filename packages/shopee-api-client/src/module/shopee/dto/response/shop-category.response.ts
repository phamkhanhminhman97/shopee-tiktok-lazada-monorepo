import { ShopeeResponseCommon } from './config.response';

interface AddShopCategory {
  shop_category_id?: number;
}

interface ResponseAddShopCategory extends ShopeeResponseCommon<AddShopCategory> {}

interface UpdateShopCategory {
  shop_category_id?: number;
  name?: string;
  sort_weight?: number;
  status?: string;
}

interface ResponseUpdateShopCategory extends ShopeeResponseCommon<UpdateShopCategory> {}

interface DeleteShopCategory {
  shop_category_id?: number;
  msg?: string;
}

interface ResponseDeleteShopCategory extends ShopeeResponseCommon<DeleteShopCategory> {}

interface ShopCategoryListItem {
  shop_category_id?: number;
  /** 1 NORMAL, 2 INACTIVE, 0 DELETED. */
  status?: number;
  name?: string;
  sort_weight?: number;
}

interface GetShopCategoryList {
  shop_categorys?: ShopCategoryListItem[];
  total_count?: number;
  more?: boolean;
}

interface ResponseGetShopCategoryList extends ShopeeResponseCommon<GetShopCategoryList> {}

interface InvalidShopCategoryItem {
  item_id?: number;
  fail_error?: string;
  fail_message?: string;
}

interface AddShopCategoryItemList {
  invalid_item_id_list?: InvalidShopCategoryItem[];
  shop_category_id?: number;
  current_count?: number;
}

interface ResponseAddShopCategoryItemList extends ShopeeResponseCommon<AddShopCategoryItemList> {}

interface DeleteShopCategoryItemList {
  shop_category_id?: number;
  invalid_item_id?: number[];
  current_count?: number;
}

interface ResponseDeleteShopCategoryItemList extends ShopeeResponseCommon<DeleteShopCategoryItemList> {}

interface GetShopCategoryItemList {
  item_list?: number[];
  total_count?: number;
  more?: boolean;
}

interface ResponseGetShopCategoryItemList extends ShopeeResponseCommon<GetShopCategoryItemList> {}

export {
  ResponseAddShopCategory as ShopeeResponseAddShopCategory,
  ResponseUpdateShopCategory as ShopeeResponseUpdateShopCategory,
  ResponseDeleteShopCategory as ShopeeResponseDeleteShopCategory,
  ShopCategoryListItem as ShopeeShopCategoryListItem,
  ResponseGetShopCategoryList as ShopeeResponseGetShopCategoryList,
  InvalidShopCategoryItem as ShopeeInvalidShopCategoryItem,
  ResponseAddShopCategoryItemList as ShopeeResponseAddShopCategoryItemList,
  ResponseDeleteShopCategoryItemList as ShopeeResponseDeleteShopCategoryItemList,
  ResponseGetShopCategoryItemList as ShopeeResponseGetShopCategoryItemList,
};
