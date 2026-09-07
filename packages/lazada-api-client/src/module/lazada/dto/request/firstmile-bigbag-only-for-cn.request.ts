export interface FirstmileBigbagOnlyForCnGetChannelcodeByFirstMileNoRequest {
  firstMileNos: string[];
}

export interface FirstmileBigbagOnlyForCnQueryAddressInformaitonRequest {
  country: string;
  zipCode?: string;
  userInfo: Record<string, unknown>;
  city: string;
  remark?: string;
  locale?: string;
  province: string;
  street: string;
  district: string;
  detailAddress: string;
  client?: string;
}

export interface FirstmileBigbagOnlyForCnGetLazadaBigbagPDFLableRequest {
  userInfo: Record<string, unknown>;
  client: string;
  orderCode?: string;
  remark?: string;
  locale?: string;
  trackingNumber?: string;
}

export interface FirstmileBigbagOnlyForCnQueryLazadaBigbagInfoRequest {
  userInfo: Record<string, unknown>;
  client: string;
  orderCode?: string;
  remark?: string;
  locale?: string;
  trackingNumber?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaSellerAccountBindUserInfo {
  appUserKey: string;
}

export interface FirstmileBigbagOnlyForCnLazadaSellerAccountBindSellerList {
  country: string;
  sellerId?: string;
  shortCode?: string;
  sellerName?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaSellerAccountBindRequest {
  userInfo: FirstmileBigbagOnlyForCnLazadaSellerAccountBindUserInfo;
  client?: string;
  remark?: string;
  sellerList: FirstmileBigbagOnlyForCnLazadaSellerAccountBindSellerList[];
  locale?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCancelUserInfo {
  appUserKey: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCancelRequest {
  userInfo: FirstmileBigbagOnlyForCnLazadaBigbagCancelUserInfo;
  client: string;
  orderCode?: string;
  remark?: string;
  locale?: string;
  trackingNumber?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitUserInfo {
  appUserKey: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitCollectionInfo {
  pickUpCode: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitPickupInfoAddress {
  country: string;
  zipCode: string;
  city: string;
  province: string;
  street: string;
  district: string;
  detailAddress: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitPickupInfo {
  courierCompany?: string;
  receiverPhone?: string;
  address: FirstmileBigbagOnlyForCnLazadaBigbagCommitPickupInfoAddress;
  phone?: string;
  name: string;
  mobile: string;
  email: string;
  addressId: number;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitReturnInfoAddress {
  province: string;
  street: string;
  district: string;
  detailAddress: string;
  country: string;
  zipCode: string;
  city: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitReturnInfo {
  phone?: string;
  name: string;
  mobile: string;
  email: string;
  addressId: number;
  fmReverseOption?: string;
  address: FirstmileBigbagOnlyForCnLazadaBigbagCommitReturnInfoAddress;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCommitRequest {
  userInfo: FirstmileBigbagOnlyForCnLazadaBigbagCommitUserInfo;
  orderCodeList: string[];
  weight: string;
  client: string;
  collectionInfo?: FirstmileBigbagOnlyForCnLazadaBigbagCommitCollectionInfo;
  remark?: string;
  pickupInfo: FirstmileBigbagOnlyForCnLazadaBigbagCommitPickupInfo;
  locale?: string;
  weightUnit: string;
  type: string;
  sellerTrackingNumber?: string;
  returnInfo: FirstmileBigbagOnlyForCnLazadaBigbagCommitReturnInfo;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagCollectionPointsRequest {
  pageSize?: string;
  currentPage?: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagUpdateUserInfo {
  appUserKey: string;
}

export interface FirstmileBigbagOnlyForCnLazadaBigbagUpdateRequest {
  userInfo: FirstmileBigbagOnlyForCnLazadaBigbagUpdateUserInfo;
  weight: number;
  locale?: string;
  orderCodeList: string[];
  client: string;
  orderCode?: string;
  trackingNumber?: string;
  weightUnit: string;
}
