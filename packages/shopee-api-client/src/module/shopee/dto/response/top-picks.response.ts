import { ShopeeResponseCommon } from './config.response';

/**
 * ShopeeAddTopPicksItem sub-interface for ShopeeAddTopPicksCollection
 */
export interface ShopeeAddTopPicksItem {
  /**
   * The name of item.
   */
  item_name?: string;
  /**
   * The id of item.
   */
  item_id?: number;
  /**
   * The price before tax of item.
   */
  current_price?: number;
  /**
   * The price after tax of item.
   */
  inflated_price_of_current_price?: number;
  /**
   * The sales of item.
   */
  sales?: number;
}

/**
 * ShopeeAddTopPicksCollection sub-interface for ShopeeAddTopPicksResponseData
 */
export interface ShopeeAddTopPicksCollection {
  /**
   * whether collection is activated.
   */
  is_activated?: boolean;
  /**
   * The items of top picks
   */
  item_list?: ShopeeAddTopPicksItem[];
  /**
   * Collection id.
   */
  top_picks_id?: number;
  /**
   * The title of top picks.
   */
  name?: string;
}

/**
 * ShopeeAddTopPicksResponseData sub-interface for ShopeeAddTopPicksResponse
 */
export interface ShopeeAddTopPicksResponseData {
  /**
   * The top picks list in this shop.
   */
  collection_list?: ShopeeAddTopPicksCollection[];
}

/**
 * Response payload for add_top_picks
 *
 * add one collection
 */
export type ShopeeAddTopPicksResponse = ShopeeResponseCommon<ShopeeAddTopPicksResponseData>;

/**
 * ShopeeDeleteTopPicksResponseData sub-interface for ShopeeDeleteTopPicksResponse
 */
export interface ShopeeDeleteTopPicksResponseData {
  /**
   * collection id
   */
  top_picks_id?: number;
}

/**
 * Response payload for delete_top_picks
 *
 * delete a collection
 */
export type ShopeeDeleteTopPicksResponse = ShopeeResponseCommon<ShopeeDeleteTopPicksResponseData>;

/**
 * ShopeeGetTopPicksListItem sub-interface for ShopeeGetTopPicksListCollection
 */
export interface ShopeeGetTopPicksListItem {
  /**
   * The name of item.
   */
  item_name?: string;
  /**
   * The id of item.
   */
  item_id?: number;
  /**
   * The price before tax of item.
   */
  current_price?: number;
  /**
   * The price after tax of item.
   */
  inflated_price_of_current_price?: number;
  /**
   * The sales of  item.
   */
  sales?: number;
}

/**
 * ShopeeGetTopPicksListCollection sub-interface for ShopeeGetTopPicksListResponseData
 */
export interface ShopeeGetTopPicksListCollection {
  /**
   * whether collection is activated.
   */
  is_activated?: boolean;
  /**
   * The items of top picks
   */
  item_list?: ShopeeGetTopPicksListItem[];
  /**
   * collection id.
   */
  top_picks_id?: number;
  /**
   * The title of  top picks.
   */
  name?: string;
}

/**
 * ShopeeGetTopPicksListResponseData sub-interface for ShopeeGetTopPicksListResponse
 */
export interface ShopeeGetTopPicksListResponseData {
  /**
   * The top picks list in this shop.
   */
  collection_list?: ShopeeGetTopPicksListCollection[];
}

/**
 * Response payload for get_top_picks_list
 *
 * get one TopPicks
 */
export type ShopeeGetTopPicksListResponse = ShopeeResponseCommon<ShopeeGetTopPicksListResponseData>;

/**
 * ShopeeUpdateTopPicksItem sub-interface for ShopeeUpdateTopPicksCollection
 */
export interface ShopeeUpdateTopPicksItem {
  /**
   * The name of item.
   */
  item_name?: string;
  /**
   * The id of item.
   */
  item_id?: number;
  /**
   * The price before tax of item.
   */
  current_price?: number;
  /**
   * The price after tax of item.
   */
  inflated_price_of_current_price?: number;
  /**
   * The sales of item.
   */
  sales?: number;
}

/**
 * ShopeeUpdateTopPicksCollection sub-interface for ShopeeUpdateTopPicksResponseData
 */
export interface ShopeeUpdateTopPicksCollection {
  /**
   * whether is activated
   */
  is_activated?: boolean;
  /**
   * a list of item
   */
  item_list?: ShopeeUpdateTopPicksItem[];
  /**
   * collection id
   */
  top_picks_id?: number;
  /**
   * collection name
   */
  name?: string;
}

/**
 * ShopeeUpdateTopPicksResponseData sub-interface for ShopeeUpdateTopPicksResponse
 */
export interface ShopeeUpdateTopPicksResponseData {
  /**
   * The top picks list in this shop.
   */
  collection_list?: ShopeeUpdateTopPicksCollection[];
}

/**
 * Response payload for update_top_picks
 *
 * update a collection info
 */
export type ShopeeUpdateTopPicksResponse = ShopeeResponseCommon<ShopeeUpdateTopPicksResponseData>;
