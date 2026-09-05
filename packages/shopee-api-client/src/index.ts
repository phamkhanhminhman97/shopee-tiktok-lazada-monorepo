export { ShopeeModule } from './module/shopee';
export { ShopeeConfig } from './module/shopee/dto/request/config.request';
export {
  ShopeeGetOrdersOptions,
  ShopeeOrderListStatus,
  ShopeeOrderListTimeRangeField,
  ShopeeRequestSearchPackageList,
  ShopeeRequestCancelOrder,
} from './module/shopee/dto/request/order.request';
export {
  ShopeeKnownPushPayload,
  ShopeeOpenApiAuthorizationExpiryPushData,
  ShopeeOpenApiAuthorizationExpiryPushPayload,
  ShopeeOrderStatusPushData,
  ShopeeOrderStatusPushPayload,
  ShopeeOrderTrackingNoPushData,
  ShopeeOrderTrackingNoPushPayload,
  ShopeePushCode,
  ShopeePushPayload,
  ShopeeShippingDocumentStatusPushData,
  ShopeeShippingDocumentStatusPushPayload,
  ShopeeShopAuthorizationCanceledPushData,
  ShopeeShopAuthorizationCanceledPushPayload,
  ShopeeShopAuthorizationPushData,
  ShopeeShopAuthorizationPushPayload,
  ShopeeVerifyPushSignatureOptions,
} from './module/shopee/dto/request/push.request';
export {
  createShopeePushSignature,
  parseShopeePushPayload,
  verifyShopeePushSignature,
} from './module/shopee/api/push.api';
export { ShopeeApiError, ShopeeApiErrorOptions } from './module/shopee/common/helper';
export { SHOPEE_PUSH_CODE } from './module/shopee/common/constant';
export {
  ShopeeRequestCreateShippingDocument,
  ShopeeRequestDownloadShippingDocument,
  ShopeeRequestGetMassShippingParameter,
  ShopeeRequestGetMassTrackingNumber,
  ShopeeRequestGetShippingDocumentParameter,
  ShopeeRequestGetShippingDocumentResult,
  ShopeeRequestMassShipOrder,
  ShopeeRequestUpdateShippingOrder,
} from './module/shopee/dto/request/logistic.request';
export {
  ShopeeResponseCancelOrder,
  ShopeeResponseGetPackageDetail,
  ShopeeOrderListItem,
  ShopeeResponseOrderDetail,
  ShopeeResponseOrderList,
  ShopeeResponseReturnDetail,
  ShopeeResponseSearchPackageList,
} from './module/shopee/dto/response/order.response';
export { ShopeeResponseEscrowDetail } from './module/shopee/dto/response/payment.response';
export {
  ShopeeResponseCreateShippingDocument,
  ShopeeResponseGetAddressList,
  ShopeeResponseGetMassShippingParameter,
  ShopeeResponseGetMassTrackingNumber,
  ShopeeResponseGetShippingDocumentParameter,
  ShopeeResponseGetShippingDocumentResult,
  ShopeeResponseLogisticChannelList,
  ShopeeResponseMassShipOrder,
  ShopeeResponseShipOrder,
  ShopeeResponseShippingParameter,
  ShopeeResponseTrackingInfo,
  ShopeeResponseTrackingNumber,
  ShopeeResponseUpdateShippingOrder,
} from './module/shopee/dto/response/logistic.reponse';
export {
  ShopeeResponseGetAttributes,
  ShopeeResponseGetBrandList,
  ShopeeResponseGetCategories,
  ShopeeResponseGetModelList,
  ShopeeResponseProductBaseItemInfo,
  ShopeeResponseSearchItem,
  ShopeeResponseUnlistItem,
  ShopeeResponseUpdatePrice,
  ShopeeResponseUpdateStock,
  ShopeeResponseAddItem,
  ShopeeResponseUpdateItem,
} from './module/shopee/dto/response/product.response';
export {
  ShopeeRequestAddItem,
  ShopeeRequestGetModelList,
  ShopeeRequestSearchItem,
  ShopeeRequestUpdateItem,
} from './module/shopee/dto/request/product.request';
export { ShopeeResponseGetAccessToken, ShopeeResponseRefreshAccessToken } from './module/shopee/dto/response/config.response';
export {
  ShopeeRequestGetReturnList,
  ShopeeRequestGetReturnDetail,
  ShopeeRequestConfirmReturn,
  ShopeeRequestGetAvailableSolutions,
} from './module/shopee/dto/request/return.request';
export {
  ShopeeReturnListItem,
  ShopeeResponseGetReturnList,
  ShopeeResponseConfirmReturn,
  ShopeeAvailableSolution,
  ShopeeResponseGetAvailableSolutions,
} from './module/shopee/dto/response/return.response';
export { SHOPEE_RETURN_STATUS, SHOPEE_RETURN_SOLUTION } from './module/shopee/common/constant';
export {
  ShopeeRequestUploadImage,
  ShopeeRequestInitVideoUpload,
  ShopeeRequestUploadVideoPart,
  ShopeeRequestCompleteVideoUpload,
  ShopeeRequestGetVideoUploadResult,
  ShopeeRequestCancelVideoUpload,
} from './module/shopee/dto/request/media.request';
export {
  ShopeeResponseUploadImage,
  ShopeeUploadImageImage,
  ShopeeResponseInitVideoUpload,
  ShopeeResponseUploadVideoPart,
  ShopeeResponseCompleteVideoUpload,
  ShopeeResponseGetVideoUploadResult,
  ShopeeResponseCancelVideoUpload,
} from './module/shopee/dto/response/media.response';
export {
  ShopeeRequestGetAuthorisedResellerBrand,
  ShopeeRequestGetBrShopOnboardingInfo,
  ShopeeRequestGetShopProfile,
  ShopeeRequestGetShopHolidayMode,
  ShopeeRequestGetShopInfo,
  ShopeeRequestGetShopNotification,
  ShopeeRequestGetWarehouseDetail,
  ShopeeRequestSetShopHolidayMode,
  ShopeeRequestUpdateShopProfile,
} from './module/shopee/dto/request/shop.request';
export {
  ShopeeAuthorisedBrand,
  ShopeeResponseGetAuthorisedResellerBrand,
  ShopeeResponseGetBrShopOnboardingInfo,
  ShopeeResponseGetShopProfile,
  ShopeeResponseGetShopHolidayMode,
  ShopeeResponseGetShopInfo,
  ShopeeResponseGetShopNotification,
  ShopeeWarehouseDetailItem,
  ShopeeResponseGetWarehouseDetail,
  ShopeeResponseSetShopHolidayMode,
  ShopeeResponseUpdateShopProfile,
} from './module/shopee/dto/response/shop.response';
export {
  ShopeeRequestAddShopCategory,
  ShopeeRequestUpdateShopCategory,
  ShopeeRequestDeleteShopCategory,
  ShopeeRequestGetShopCategoryList,
  ShopeeRequestAddShopCategoryItemList,
  ShopeeRequestDeleteShopCategoryItemList,
  ShopeeRequestGetShopCategoryItemList,
} from './module/shopee/dto/request/shop-category.request';
export {
  ShopeeResponseAddShopCategory,
  ShopeeResponseUpdateShopCategory,
  ShopeeResponseDeleteShopCategory,
  ShopeeShopCategoryListItem,
  ShopeeResponseGetShopCategoryList,
  ShopeeInvalidShopCategoryItem,
  ShopeeResponseAddShopCategoryItemList,
  ShopeeResponseDeleteShopCategoryItemList,
  ShopeeResponseGetShopCategoryItemList,
} from './module/shopee/dto/response/shop-category.response';

// ---------------------------------------------------------------------
// Namespaced type exports for domains with overlapping type/function names
// (e.g. ShopeeGetCategoryRequest exists in both product and global-product).
// Import the namespace to access these types, for example:
//   import { ShopeeAdsRequest } from "shopee-api-client";
//   type Req = ShopeeAdsRequest.ShopeeCreateManualProductAdsRequest;
// ---------------------------------------------------------------------
export * as ShopeeAccountHealthRequest from './module/shopee/dto/request/account-health.request';
export * as ShopeeAccountHealthResponse from './module/shopee/dto/response/account-health.response';
export * as ShopeeAddOnDealRequest from './module/shopee/dto/request/add-on-deal.request';
export * as ShopeeAddOnDealResponse from './module/shopee/dto/response/add-on-deal.response';
export * as ShopeeAdsRequest from './module/shopee/dto/request/ads.request';
export * as ShopeeAdsResponse from './module/shopee/dto/response/ads.response';
export * as ShopeeAmsRequest from './module/shopee/dto/request/ams.request';
export * as ShopeeAmsResponse from './module/shopee/dto/response/ams.response';
export * as ShopeeBundleDealRequest from './module/shopee/dto/request/bundle-deal.request';
export * as ShopeeBundleDealResponse from './module/shopee/dto/response/bundle-deal.response';
export * as ShopeeDiscountRequest from './module/shopee/dto/request/discount.request';
export * as ShopeeDiscountResponse from './module/shopee/dto/response/discount.response';
export * as ShopeeFbsRequest from './module/shopee/dto/request/fbs.request';
export * as ShopeeFbsResponse from './module/shopee/dto/response/fbs.response';
export * as ShopeeFirstMileRequest from './module/shopee/dto/request/first-mile.request';
export * as ShopeeFirstMileResponse from './module/shopee/dto/response/first-mile.response';
export * as ShopeeFollowPrizeRequest from './module/shopee/dto/request/follow-prize.request';
export * as ShopeeFollowPrizeResponse from './module/shopee/dto/response/follow-prize.response';
export * as ShopeeGlobalProductRequest from './module/shopee/dto/request/global-product.request';
export * as ShopeeGlobalProductResponse from './module/shopee/dto/response/global-product.response';
export * as ShopeeLivestreamRequest from './module/shopee/dto/request/livestream.request';
export * as ShopeeLivestreamResponse from './module/shopee/dto/response/livestream.response';
export * as ShopeeMediaSpaceRequest from './module/shopee/dto/request/media-space.request';
export * as ShopeeMediaSpaceResponse from './module/shopee/dto/response/media-space.response';
export * as ShopeeMerchantRequest from './module/shopee/dto/request/merchant.request';
export * as ShopeeMerchantResponse from './module/shopee/dto/response/merchant.response';
export * as ShopeePrincipalRequest from './module/shopee/dto/request/principal.request';
export * as ShopeePrincipalResponse from './module/shopee/dto/response/principal.response';
export * as ShopeePublicRequest from './module/shopee/dto/request/public.request';
export * as ShopeePublicResponse from './module/shopee/dto/response/public.response';
export * as ShopeeSbsRequest from './module/shopee/dto/request/sbs.request';
export * as ShopeeSbsResponse from './module/shopee/dto/response/sbs.response';
export * as ShopeeShopFlashSaleRequest from './module/shopee/dto/request/shop-flash-sale.request';
export * as ShopeeShopFlashSaleResponse from './module/shopee/dto/response/shop-flash-sale.response';
export * as ShopeeTopPicksRequest from './module/shopee/dto/request/top-picks.request';
export * as ShopeeTopPicksResponse from './module/shopee/dto/response/top-picks.response';
export * as ShopeeVideoRequest from './module/shopee/dto/request/video.request';
export * as ShopeeVideoResponse from './module/shopee/dto/response/video.response';
export * as ShopeeVoucherRequest from './module/shopee/dto/request/voucher.request';
export * as ShopeeVoucherResponse from './module/shopee/dto/response/voucher.response';
