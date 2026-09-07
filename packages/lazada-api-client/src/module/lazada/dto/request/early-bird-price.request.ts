export interface EarlyBirdPriceEarlyBirdActivityAddSkusSkuList {
  product_id: number;
  order_total_budget: number;
  discount_price: number;
  sku_id: number;
}

export interface EarlyBirdPriceEarlyBirdActivityAddSkusRequest {
  sku_list: EarlyBirdPriceEarlyBirdActivityAddSkusSkuList[];
  page_no?: number;
  name?: string;
  page_size?: number;
  id: number;
  source?: string;
  buyer_code?: string;
}

export interface EarlyBirdPriceCreateEarlyBirdActivitySkuList {
  product_id: number;
  order_total_budget: number;
  discount_price: Record<string, unknown>;
  sku_id: number;
}

export interface EarlyBirdPriceCreateEarlyBirdActivityRequest {
  sku_list: EarlyBirdPriceCreateEarlyBirdActivitySkuList[];
  page_no?: number;
  name?: string;
  page_size?: number;
  id?: number;
  source?: string;
  buyer_code?: string;
}

export interface EarlyBirdPriceEarlyBirdActivityDeactivateSkusSkuList {
  product_id: number;
  order_total_budget?: number;
  discount_price?: Record<string, unknown>;
  sku_id: number;
}

export interface EarlyBirdPriceEarlyBirdActivityDeactivateSkusRequest {
  sku_list: EarlyBirdPriceEarlyBirdActivityDeactivateSkusSkuList[];
  page_no?: number;
  name?: string;
  page_size?: number;
  id: number;
  source?: string;
  buyer_code?: string;
}
