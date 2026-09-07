export interface SellerQueryBuyboxHuntingInfoRequest {
  HuntingQueryParam: Record<string, unknown>;
}

export type SellerGetPickUpStoreListRequest = Record<string, never>;

export type SellerQueryWarehouseDetailInfoBySellerIdRequest = Record<string, never>;

export type SellerGetWarehouseBySellerIdRequest = Record<string, never>;

export interface SellerGetCountryInfoRequest {
  type: string;
  seller_country?: string;
}

export interface SellerGetSubAddressRequest {
  location_id: string;
  level: number;
}

export interface SellerGetSellerRegisterInfoRequest {
  payload: Record<string, unknown>[];
}

export type SellerGetSellerRequest = Record<string, never>;

export type SellerGetSellerMetricsByIdRequest = Record<string, never>;

export interface SellerGetSellerPerformanceRequest {
  language?: string;
}

export interface SellerSellerPolicyFetchRequest {
  locale: string;
}

export interface SellerSaveSellerWarehouseInfoWarehouseContactDTO {
  phoneNumber: string;
  email: string;
}

export interface SellerSaveSellerWarehouseInfoWarehouseAddressInfoDTO {
  locationLevel2Label: string;
  address: string;
  locationLevel4Label: string;
  locationLevel3Label: string;
  postalCode: string;
  latitude?: number;
  countryIosCode: string;
  defaultAddress: number;
  longitude?: number;
}

export interface SellerSaveSellerWarehouseInfoRequest {
  ownerType: number;
  sellerId: number;
  warehouseOwnerType: string;
  warehouseContactDTO: SellerSaveSellerWarehouseInfoWarehouseContactDTO;
  siteId: string;
  warehouseAddressInfoDTO: SellerSaveSellerWarehouseInfoWarehouseAddressInfoDTO;
  warehouseType: number;
  ownerId: number;
  warehouseName: string;
  currencyCode: string;
  resourceType: number;
}

export interface SellerSynchronizeSellerItemArConfigRequest {
  siteId: string;
  source: string;
  uid: string;
  contents: string;
  synDate: string;
  business?: string;
}

export interface SellerPaymentBindingRequest {
  payload: string;
}

export interface SellerSellerFieldVerifyPayload {
  countryRegion: string;
  name: string;
  value: string;
}

export interface SellerSellerFieldVerifyRequest {
  payload: SellerSellerFieldVerifyPayload[];
}

export interface SellerSellerCenterMsgListRequest {
  language?: string;
  page?: string;
  pageSize?: string;
}

export interface SellerBatchQueryFollowStatusRequest {
  buyer_ids: string[];
}
