/**
 * Request parameters for add_top_picks
 *
 * add one collection
 */
export interface ShopeeAddTopPicksRequest {
  name: string;
  item_id_list: number[];
  is_activated: boolean;
}

/**
 * Request parameters for delete_top_picks
 *
 * delete a collection
 */
export interface ShopeeDeleteTopPicksRequest {
  /**
   * collection id
   */
  top_picks_id: number;
}

/**
 * Request parameters for get_top_picks_list
 *
 * get one TopPicks
 */
export type ShopeeGetTopPicksListRequest = Record<string, never>;

/**
 * Request parameters for update_top_picks
 *
 * update a collection info
 */
export interface ShopeeUpdateTopPicksRequest {
  /**
   * collection id
   */
  top_picks_id: number;
  /**
   * collection name
   */
  name?: string;
  /**
   * a list of item id, and we will cover old item_ids by new_item_ids
   */
  item_id_list?: number[];
  /**
   * if true, we will close other collection and open this collection
   */
  is_activated?: boolean;
}
