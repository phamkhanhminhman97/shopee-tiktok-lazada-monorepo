import { ShopeeConfig } from './dto/request/config.request';
import { getOrderDetail, getOrderList, getOrders, getShipmentList, searchPackageList, getPackageDetail, cancelOrder } from './api/order.api';
import {
  getProductItemBaseInfo,
  getProductItemList,
  getModelList,
  searchItem,
  unListItem,
  updatePrice,
  updateStock,
  addItem,
  updateItem,
  getCategory,
  getAttributes,
  getBrandList,
} from './api/product.api';
import {
  ShopeeResponseOrderDetail,
  ShopeeOrderListItem,
  ShopeeResponseOrderList,
  ShopeeResponseSearchPackageList,
  ShopeeResponseGetPackageDetail,
  ShopeeResponseCancelOrder,
} from './dto/response/order.response';
import { ShopeeResponseEscrowDetail } from './dto/response/payment.response';
import { ShopeeRequestSearchPackageList, ShopeeRequestCancelOrder, ShopeeGetOrdersOptions } from './dto/request/order.request';
import {
  ShopeeResponseGetAttributes,
  ShopeeResponseGetBrandList,
  ShopeeResponseGetCategories,
  ShopeeResponseProductBaseItemInfo,
  ShopeeResponseGetModelList,
  ShopeeResponseSearchItem,
  ShopeeResponseUnlistItem,
  ShopeeResponseUpdatePrice,
  ShopeeResponseUpdateStock,
  ShopeeResponseAddItem,
  ShopeeResponseUpdateItem,
} from './dto/response/product.response';
import { ShopeeRequestAddItem, ShopeeRequestSearchItem, ShopeeRequestUpdateItem } from './dto/request/product.request';
import {
  getChannelList,
  shipOrder,
  shippingParameter,
  getTrackingNumber,
  createShippingDocument,
  getShippingDocumentResult,
  downloadShippingDocument,
  getTrackingInfo,
  massShipOrder,
  getMassShippingParameter,
  updateShippingOrder,
  getMassTrackingNumber,
  getShippingDocumentParameter,
  getAddressList,
} from './api/logistic.api';
import {
  ShopeeResponseLogisticChannelList,
  ShopeeResponseShipOrder,
  ShopeeResponseShippingParameter,
  ShopeeResponseTrackingNumber,
  ShopeeResponseCreateShippingDocument,
  ShopeeResponseGetShippingDocumentResult,
  ShopeeResponseTrackingInfo,
  ShopeeResponseMassShipOrder,
  ShopeeResponseGetMassShippingParameter,
  ShopeeResponseUpdateShippingOrder,
  ShopeeResponseGetMassTrackingNumber,
  ShopeeResponseGetShippingDocumentParameter,
  ShopeeResponseGetAddressList,
} from './dto/response/logistic.reponse';
import {
  ShopeeRequestCreateShippingDocument,
  ShopeeRequestGetShippingDocumentResult,
  ShopeeRequestDownloadShippingDocument,
  ShopeeRequestMassShipOrder,
  ShopeeRequestGetMassShippingParameter,
  ShopeeRequestUpdateShippingOrder,
  ShopeeRequestGetMassTrackingNumber,
  ShopeeRequestGetShippingDocumentParameter,
} from './dto/request/logistic.request';
import { fetchTokenWithAuthCode, fetchTokenWithRefreshToken, generateAuthLink } from './api/authorization.api';
import { ShopeeResponseGetAccessToken, ShopeeResponseRefreshAccessToken } from './dto/response/config.response';
import { getEscrowDetail } from './api/payment.api';
import { parseShopeePushPayload, verifyShopeePushSignature } from './api/push.api';
import { ShopeeKnownPushPayload, ShopeePushPayload } from './dto/request/push.request';
import { getReturnList, getReturnDetail, getAvailableSolutions, confirmReturn } from './api/return.api';
import { ShopeeResponseReturnDetail } from './dto/response/order.response';
import {
  ShopeeResponseGetReturnList,
  ShopeeResponseConfirmReturn,
  ShopeeResponseGetAvailableSolutions,
} from './dto/response/return.response';
import { ShopeeRequestGetReturnList } from './dto/request/return.request';
import {
  uploadImage,
  initVideoUpload,
  uploadVideoPart,
  completeVideoUpload,
  getVideoUploadResult,
  cancelVideoUpload,
} from './api/media.api';
import {
  ShopeeRequestUploadImage,
  ShopeeRequestInitVideoUpload,
  ShopeeRequestUploadVideoPart,
  ShopeeRequestCompleteVideoUpload,
} from './dto/request/media.request';
import {
  ShopeeResponseUploadImage,
  ShopeeResponseInitVideoUpload,
  ShopeeResponseUploadVideoPart,
  ShopeeResponseCompleteVideoUpload,
  ShopeeResponseGetVideoUploadResult,
  ShopeeResponseCancelVideoUpload,
} from './dto/response/media.response';
import {
  getShopProfile,
  updateShopProfile,
  getShopInfo,
  getShopNotification,
  getWarehouseDetail,
  getShopHolidayMode,
  setShopHolidayMode,
  getAuthorisedResellerBrand,
  getBrShopOnboardingInfo,
} from './api/shop.api';
import {
  ShopeeRequestGetAuthorisedResellerBrand,
  ShopeeRequestSetShopHolidayMode,
  ShopeeRequestUpdateShopProfile,
} from './dto/request/shop.request';
import {
  ShopeeResponseGetShopProfile,
  ShopeeResponseUpdateShopProfile,
  ShopeeResponseGetShopInfo,
  ShopeeResponseGetShopNotification,
  ShopeeResponseGetWarehouseDetail,
  ShopeeResponseGetShopHolidayMode,
  ShopeeResponseSetShopHolidayMode,
  ShopeeResponseGetAuthorisedResellerBrand,
  ShopeeResponseGetBrShopOnboardingInfo,
} from './dto/response/shop.response';
import {
  addShopCategory,
  updateShopCategory,
  deleteShopCategory,
  getShopCategoryList,
  addShopCategoryItemList,
  deleteShopCategoryItemList,
  getShopCategoryItemList,
} from './api/shop-category.api';
import {
  ShopeeRequestAddShopCategory,
  ShopeeRequestUpdateShopCategory,
  ShopeeRequestGetShopCategoryList,
  ShopeeRequestAddShopCategoryItemList,
  ShopeeRequestDeleteShopCategoryItemList,
  ShopeeRequestGetShopCategoryItemList,
} from './dto/request/shop-category.request';
import {
  ShopeeResponseAddShopCategory,
  ShopeeResponseUpdateShopCategory,
  ShopeeResponseDeleteShopCategory,
  ShopeeResponseGetShopCategoryList,
  ShopeeResponseAddShopCategoryItemList,
  ShopeeResponseDeleteShopCategoryItemList,
  ShopeeResponseGetShopCategoryItemList,
} from './dto/response/shop-category.response';

import { ShopeeAccountHealth } from './submodules/account-health.submodule';
import { ShopeeAddOnDeal } from './submodules/add-on-deal.submodule';
import { ShopeeAds } from './submodules/ads.submodule';
import { ShopeeAms } from './submodules/ams.submodule';
import { ShopeeBundleDeal } from './submodules/bundle-deal.submodule';
import { ShopeeDiscount } from './submodules/discount.submodule';
import { ShopeeFbs } from './submodules/fbs.submodule';
import { ShopeeFirstMile } from './submodules/first-mile.submodule';
import { ShopeeFollowPrize } from './submodules/follow-prize.submodule';
import { ShopeeGlobalProduct } from './submodules/global-product.submodule';
import { ShopeeLivestream } from './submodules/livestream.submodule';
import { ShopeeMediaSpace } from './submodules/media-space.submodule';
import { ShopeeMerchant } from './submodules/merchant.submodule';
import { ShopeePrincipal } from './submodules/principal.submodule';
import { ShopeePublicApi } from './submodules/public.submodule';
import { ShopeeSbs } from './submodules/sbs.submodule';
import { ShopeeShopFlashSale } from './submodules/shop-flash-sale.submodule';
import { ShopeeTopPicks } from './submodules/top-picks.submodule';
import { ShopeeVideo } from './submodules/video.submodule';
import { ShopeeVoucher } from './submodules/voucher.submodule';


// ---- Additional endpoint imports (batch 3: parity audit against upstream shopee-sdk) ----
import {
  batchShipOrder,
  batchUpdateTpfWarehouseTrackingStatus,
  checkPolygonUpdateStatus,
  createBookingShippingDocument,
  createShippingDocumentJob,
  deleteAddress,
  deleteSpecialOperatingHour,
  downloadBookingShippingDocument,
  downloadShippingDocumentJob,
  downloadToLabel,
  getBookingShippingDocumentDataInfo,
  getBookingShippingDocumentParameter,
  getBookingShippingDocumentResult,
  getBookingShippingParameter,
  getBookingTrackingInfo,
  getBookingTrackingNumber,
  getMartPackagingInfo,
  getOperatingHourRestrictions,
  getOperatingHours,
  getPauseStatus,
  getShippingDocumentDataInfo,
  getShippingDocumentJobStatus,
  setAddressConfig,
  setMartPackagingInfo,
  setPauseStatus,
  shipBooking,
  updateAddress,
  updateChannel,
  updateOperatingHours,
  updateSelfCollectionOrderLogistics,
  updateTrackingStatus,
  uploadServiceablePolygon,
} from './api/logistic.api';
import {
  ShopeeBatchShipOrderRequest,
  ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest,
  ShopeeCheckPolygonUpdateStatusRequest,
  ShopeeCreateBookingShippingDocumentRequest,
  ShopeeCreateShippingDocumentJobRequest,
  ShopeeDeleteAddressRequest,
  ShopeeDeleteSpecialOperatingHourRequest,
  ShopeeDownloadBookingShippingDocumentRequest,
  ShopeeDownloadShippingDocumentJobRequest,
  ShopeeDownloadToLabelRequest,
  ShopeeGetBookingShippingDocumentDataInfoRequest,
  ShopeeGetBookingShippingDocumentParameterRequest,
  ShopeeGetBookingShippingDocumentResultRequest,
  ShopeeGetBookingShippingParameterRequest,
  ShopeeGetBookingTrackingInfoRequest,
  ShopeeGetBookingTrackingNumberRequest,
  ShopeeGetMartPackagingInfoRequest,
  ShopeeGetOperatingHourRestrictionsRequest,
  ShopeeGetOperatingHoursRequest,
  ShopeeGetPauseStatusRequest,
  ShopeeGetShippingDocumentDataInfoRequest,
  ShopeeGetShippingDocumentJobStatusRequest,
  ShopeeSetAddressConfigRequest,
  ShopeeSetMartPackagingInfoRequest,
  ShopeeSetPauseStatusRequest,
  ShopeeShipBookingRequest,
  ShopeeUpdateAddressRequest,
  ShopeeUpdateChannelRequest,
  ShopeeUpdateOperatingHoursRequest,
  ShopeeUpdateSelfCollectionOrderLogisticsRequest,
  ShopeeUpdateTrackingStatusRequest,
  ShopeeUploadServiceablePolygonRequest,
} from './dto/request/logistic.request';
import {
  ShopeeBatchShipOrderResponse,
  ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse,
  ShopeeCheckPolygonUpdateStatusResponse,
  ShopeeCreateBookingShippingDocumentResponse,
  ShopeeCreateShippingDocumentJobResponse,
  ShopeeDeleteAddressResponse,
  ShopeeDeleteSpecialOperatingHourResponse,
  ShopeeDownloadBookingShippingDocumentResponse,
  ShopeeDownloadShippingDocumentJobResponse,
  ShopeeDownloadToLabelResponse,
  ShopeeGetBookingShippingDocumentDataInfoResponse,
  ShopeeGetBookingShippingDocumentParameterResponse,
  ShopeeGetBookingShippingDocumentResultResponse,
  ShopeeGetBookingShippingParameterResponse,
  ShopeeGetBookingTrackingInfoResponse,
  ShopeeGetBookingTrackingNumberResponse,
  ShopeeGetMartPackagingInfoResponse,
  ShopeeGetOperatingHourRestrictionsResponse,
  ShopeeGetOperatingHoursResponse,
  ShopeeGetPauseStatusResponse,
  ShopeeGetShippingDocumentDataInfoResponse,
  ShopeeGetShippingDocumentJobStatusResponse,
  ShopeeSetAddressConfigResponse,
  ShopeeSetMartPackagingInfoResponse,
  ShopeeSetPauseStatusResponse,
  ShopeeShipBookingResponse,
  ShopeeUpdateAddressResponse,
  ShopeeUpdateChannelResponse,
  ShopeeUpdateOperatingHoursResponse,
  ShopeeUpdateSelfCollectionOrderLogisticsResponse,
  ShopeeUpdateTrackingStatusResponse,
  ShopeeUploadServiceablePolygonResponse,
} from './dto/response/logistic.reponse';
import {
  downloadFbsInvoices,
  downloadInvoiceDoc,
  generateFbsInvoices,
  getBookingDetail,
  getBookingList,
  getBuyerInvoiceInfo,
  getEstimateCancelValue,
  getFbsInvoicesResult,
  getPendingBuyerInvoiceOrderList,
  getWarehouseFilterConfig,
  handleBuyerCancellation,
  handlePrescriptionCheck,
  setNote,
  splitOrder,
  unsplitOrder,
  uploadInvoiceDoc,
} from './api/order.api';
import {
  ShopeeDownloadFbsInvoicesRequest,
  ShopeeDownloadInvoiceDocRequest,
  ShopeeGenerateFbsInvoicesRequest,
  ShopeeGetBookingDetailRequest,
  ShopeeGetBookingListRequest,
  ShopeeGetBuyerInvoiceInfoRequest,
  ShopeeGetEstimateCancelValueRequest,
  ShopeeGetFbsInvoicesResultRequest,
  ShopeeGetPendingBuyerInvoiceOrderListRequest,
  ShopeeGetWarehouseFilterConfigRequest,
  ShopeeHandleBuyerCancellationRequest,
  ShopeeHandlePrescriptionCheckRequest,
  ShopeeSetNoteRequest,
  ShopeeSplitOrderRequest,
  ShopeeUnsplitOrderRequest,
  ShopeeUploadInvoiceDocRequest,
} from './dto/request/order.request';
import {
  ShopeeDownloadFbsInvoicesResponse,
  ShopeeDownloadInvoiceDocResponse,
  ShopeeGenerateFbsInvoicesResponse,
  ShopeeGetBookingDetailResponse,
  ShopeeGetBookingListResponse,
  ShopeeGetBuyerInvoiceInfoResponse,
  ShopeeGetEstimateCancelValueResponse,
  ShopeeGetFbsInvoicesResultResponse,
  ShopeeGetPendingBuyerInvoiceOrderListResponse,
  ShopeeGetWarehouseFilterConfigResponse,
  ShopeeHandleBuyerCancellationResponse,
  ShopeeHandlePrescriptionCheckResponse,
  ShopeeSetNoteResponse,
  ShopeeSplitOrderResponse,
  ShopeeUnsplitOrderResponse,
  ShopeeUploadInvoiceDocResponse,
} from './dto/response/order.response';
import {
  generateIncomeReport,
  generateIncomeStatement,
  getBillingTransactionInfo,
  getEscrowDetailBatch,
  getEscrowList,
  getIncomeDetail,
  getIncomeOverview,
  getIncomeReport,
  getIncomeStatement,
  getItemInstallmentStatus,
  getPaymentMethodList,
  getPayoutDetail,
  getPayoutInfo,
  getShopInstallmentStatus,
  getWalletTransactionList,
  setItemInstallmentStatus,
  setShopInstallmentStatus,
} from './api/payment.api';
import {
  ShopeeGenerateIncomeReportRequest,
  ShopeeGenerateIncomeStatementRequest,
  ShopeeGetBillingTransactionInfoRequest,
  ShopeeGetEscrowDetailBatchRequest,
  ShopeeGetEscrowListRequest,
  ShopeeGetIncomeDetailRequest,
  ShopeeGetIncomeOverviewRequest,
  ShopeeGetIncomeReportRequest,
  ShopeeGetIncomeStatementRequest,
  ShopeeGetItemInstallmentStatusRequest,
  ShopeeGetPaymentMethodListRequest,
  ShopeeGetPayoutDetailRequest,
  ShopeeGetPayoutInfoRequest,
  ShopeeGetShopInstallmentStatusRequest,
  ShopeeGetWalletTransactionListRequest,
  ShopeeSetItemInstallmentStatusRequest,
  ShopeeSetShopInstallmentStatusRequest,
} from './dto/request/payment.request';
import {
  ShopeeGenerateIncomeReportResponse,
  ShopeeGenerateIncomeStatementResponse,
  ShopeeGetBillingTransactionInfoResponse,
  ShopeeGetEscrowDetailBatchResponse,
  ShopeeGetEscrowListResponse,
  ShopeeGetIncomeDetailResponse,
  ShopeeGetIncomeOverviewResponse,
  ShopeeGetIncomeReportResponse,
  ShopeeGetIncomeStatementResponse,
  ShopeeGetItemInstallmentStatusResponse,
  ShopeeGetPaymentMethodListResponse,
  ShopeeGetPayoutDetailResponse,
  ShopeeGetPayoutInfoResponse,
  ShopeeGetShopInstallmentStatusResponse,
  ShopeeGetWalletTransactionListResponse,
  ShopeeSetItemInstallmentStatusResponse,
  ShopeeSetShopInstallmentStatusResponse,
} from './dto/response/payment.response';
import {
  addKitItem,
  addModel,
  batchAddItem,
  batchPublishItemToOutletShop,
  batchUpdateOutletPrice,
  batchUpdateOutletStock,
  boostItem,
  categoryRecommend,
  deleteItem,
  deleteModel,
  generateKitImage,
  getAitemByPitemId,
  getAllVehicleList,
  getAttributeTree,
  getBatchTaskResult,
  getBoostedList,
  getComment,
  getDirectItemList,
  getDirectShopRecommendedPrice,
  getItemContentDiagnosisResult,
  getItemExtraInfo,
  getItemLimit,
  getItemListByContentDiagnosis,
  getItemPromotion,
  getItemViolationInfo,
  getKitItemInfo,
  getKitItemLimit,
  getMainItemList,
  getMartItemByOutletItemId,
  getMartItemMappingById,
  getProductCertificationRule,
  getRecommendAttribute,
  getSizeChartDetail,
  getSizeChartList,
  getVariations,
  getVehicleListByCompatibilityDetail,
  getWeightRecommendation,
  initTierVariation,
  publishItemToOutletShop,
  registerBrand,
  replyComment,
  searchAttributeValueList,
  searchUnpackagedModelList,
  updateKitItem,
  updateModel,
  updateSipItemPrice,
  updateTierVariation,
} from './api/product.api';
import {
  ShopeeAddKitItemRequest,
  ShopeeAddModelRequest,
  ShopeeBatchAddItemRequest,
  ShopeeBatchPublishItemToOutletShopRequest,
  ShopeeBatchUpdateOutletPriceRequest,
  ShopeeBatchUpdateOutletStockRequest,
  ShopeeBoostItemRequest,
  ShopeeCategoryRecommendRequest,
  ShopeeDeleteItemRequest,
  ShopeeDeleteModelRequest,
  ShopeeGenerateKitImageRequest,
  ShopeeGetAitemByPitemIdRequest,
  ShopeeGetAllVehicleListRequest,
  ShopeeGetAttributeTreeRequest,
  ShopeeGetBatchTaskResultRequest,
  ShopeeGetBoostedListRequest,
  ShopeeGetCommentRequest,
  ShopeeGetDirectItemListRequest,
  ShopeeGetDirectShopRecommendedPriceRequest,
  ShopeeGetItemContentDiagnosisResultRequest,
  ShopeeGetItemExtraInfoRequest,
  ShopeeGetItemLimitRequest,
  ShopeeGetItemListByContentDiagnosisRequest,
  ShopeeGetItemPromotionRequest,
  ShopeeGetItemViolationInfoRequest,
  ShopeeGetKitItemInfoRequest,
  ShopeeGetKitItemLimitRequest,
  ShopeeGetMainItemListRequest,
  ShopeeGetMartItemByOutletItemIdRequest,
  ShopeeGetMartItemMappingByIdRequest,
  ShopeeGetProductCertificationRuleRequest,
  ShopeeGetRecommendAttributeRequest,
  ShopeeGetSizeChartDetailRequest,
  ShopeeGetSizeChartListRequest,
  ShopeeGetVariationsRequest,
  ShopeeGetVehicleListByCompatibilityDetailRequest,
  ShopeeGetWeightRecommendationRequest,
  ShopeeInitTierVariationRequest,
  ShopeePublishItemToOutletShopRequest,
  ShopeeRegisterBrandRequest,
  ShopeeReplyCommentRequest,
  ShopeeSearchAttributeValueListRequest,
  ShopeeSearchUnpackagedModelListRequest,
  ShopeeUpdateKitItemRequest,
  ShopeeUpdateModelRequest,
  ShopeeUpdateSipItemPriceRequest,
  ShopeeUpdateTierVariationRequest,
} from './dto/request/product.request';
import {
  ShopeeAddKitItemResponse,
  ShopeeAddModelResponse,
  ShopeeBatchAddItemResponse,
  ShopeeBatchPublishItemToOutletShopResponse,
  ShopeeBatchUpdateOutletPriceResponse,
  ShopeeBatchUpdateOutletStockResponse,
  ShopeeBoostItemResponse,
  ShopeeCategoryRecommendResponse,
  ShopeeDeleteItemResponse,
  ShopeeDeleteModelResponse,
  ShopeeGenerateKitImageResponse,
  ShopeeGetAitemByPitemIdResponse,
  ShopeeGetAllVehicleListResponse,
  ShopeeGetAttributeTreeResponse,
  ShopeeGetBatchTaskResultResponse,
  ShopeeGetBoostedListResponse,
  ShopeeGetCommentResponse,
  ShopeeGetDirectItemListResponse,
  ShopeeGetDirectShopRecommendedPriceResponse,
  ShopeeGetItemContentDiagnosisResultResponse,
  ShopeeGetItemExtraInfoResponse,
  ShopeeGetItemLimitResponse,
  ShopeeGetItemListByContentDiagnosisResponse,
  ShopeeGetItemPromotionResponse,
  ShopeeGetItemViolationInfoResponse,
  ShopeeGetKitItemInfoResponse,
  ShopeeGetKitItemLimitResponse,
  ShopeeGetMainItemListResponse,
  ShopeeGetMartItemByOutletItemIdResponse,
  ShopeeGetMartItemMappingByIdResponse,
  ShopeeGetProductCertificationRuleResponse,
  ShopeeGetRecommendAttributeResponse,
  ShopeeGetSizeChartDetailResponse,
  ShopeeGetSizeChartListResponse,
  ShopeeGetVariationsResponse,
  ShopeeGetVehicleListByCompatibilityDetailResponse,
  ShopeeGetWeightRecommendationResponse,
  ShopeeInitTierVariationResponse,
  ShopeePublishItemToOutletShopResponse,
  ShopeeRegisterBrandResponse,
  ShopeeReplyCommentResponse,
  ShopeeSearchAttributeValueListResponse,
  ShopeeSearchUnpackagedModelListResponse,
  ShopeeUpdateKitItemResponse,
  ShopeeUpdateModelResponse,
  ShopeeUpdateSipItemPriceResponse,
  ShopeeUpdateTierVariationResponse,
} from './dto/response/product.response';
import {
  confirmConsumedLostPushMessage,
  getAppPushConfig,
  getLostPushMessage,
  setAppPushConfig,
} from './api/push.api';
import {
  ShopeeConfirmConsumedLostPushMessageRequest,
  ShopeeGetAppPushConfigRequest,
  ShopeeGetLostPushMessageRequest,
  ShopeeSetAppPushConfigRequest,
} from './dto/request/push.request';
import {
  ShopeeConfirmConsumedLostPushMessageResponse,
  ShopeeGetAppPushConfigResponse,
  ShopeeGetLostPushMessageResponse,
  ShopeeSetAppPushConfigResponse,
} from './dto/response/push.response';
import {
  acceptOffer,
  cancelDispute,
  convertImage,
  dispute,
  getReturnDisputeReason,
  getReverseTrackingInfo,
  getShippingCarrier,
  offer,
  queryProof,
  uploadProof,
  uploadShippingProof,
} from './api/return.api';
import {
  ShopeeAcceptOfferRequest,
  ShopeeCancelDisputeRequest,
  ShopeeConvertImageRequest,
  ShopeeDisputeRequest,
  ShopeeGetReturnDisputeReasonRequest,
  ShopeeGetReverseTrackingInfoRequest,
  ShopeeGetShippingCarrierRequest,
  ShopeeOfferRequest,
  ShopeeQueryProofRequest,
  ShopeeUploadProofRequest,
  ShopeeUploadShippingProofRequest,
} from './dto/request/return.request';
import {
  ShopeeAcceptOfferResponse,
  ShopeeCancelDisputeResponse,
  ShopeeConvertImageResponse,
  ShopeeDisputeResponse,
  ShopeeGetReturnDisputeReasonResponse,
  ShopeeGetReverseTrackingInfoResponse,
  ShopeeGetShippingCarrierResponse,
  ShopeeOfferResponse,
  ShopeeQueryProofResponse,
  ShopeeUploadProofResponse,
  ShopeeUploadShippingProofResponse,
} from './dto/response/return.response';

export class ShopeeModule {
  private config: ShopeeConfig;

  /** Shopee `v2.account_health.*` API namespace. */
  readonly accountHealth: ShopeeAccountHealth;
  /** Shopee `v2.add_on_deal.*` API namespace. */
  readonly addOnDeal: ShopeeAddOnDeal;
  /** Shopee `v2.ads.*` API namespace. */
  readonly ads: ShopeeAds;
  /** Shopee `v2.ams.*` API namespace. */
  readonly ams: ShopeeAms;
  /** Shopee `v2.bundle_deal.*` API namespace. */
  readonly bundleDeal: ShopeeBundleDeal;
  /** Shopee `v2.discount.*` API namespace. */
  readonly discount: ShopeeDiscount;
  /** Shopee `v2.fbs.*` API namespace. */
  readonly fbs: ShopeeFbs;
  /** Shopee `v2.first_mile.*` API namespace. */
  readonly firstMile: ShopeeFirstMile;
  /** Shopee `v2.follow_prize.*` API namespace. */
  readonly followPrize: ShopeeFollowPrize;
  /** Shopee `v2.global_product.*` API namespace. */
  readonly globalProduct: ShopeeGlobalProduct;
  /** Shopee `v2.livestream.*` API namespace. */
  readonly livestream: ShopeeLivestream;
  /** Shopee `v2.media_space.*` API namespace. */
  readonly mediaSpace: ShopeeMediaSpace;
  /** Shopee `v2.merchant.*` API namespace. */
  readonly merchant: ShopeeMerchant;
  /** Shopee `v2.principal.*` API namespace. */
  readonly principal: ShopeePrincipal;
  /** Shopee `v2.public.*` API namespace. */
  readonly publicApi: ShopeePublicApi;
  /** Shopee `v2.sbs.*` API namespace. */
  readonly sbs: ShopeeSbs;
  /** Shopee `v2.shop_flash_sale.*` API namespace. */
  readonly shopFlashSale: ShopeeShopFlashSale;
  /** Shopee `v2.top_picks.*` API namespace. */
  readonly topPicks: ShopeeTopPicks;
  /** Shopee `v2.video.*` API namespace. */
  readonly video: ShopeeVideo;
  /** Shopee `v2.voucher.*` API namespace. */
  readonly voucher: ShopeeVoucher;

  /**
   * Create a Shopee API client.
   *
   * IDE IntelliSense will show the required and optional fields from `ShopeeConfig`
   * when you type `new ShopeeModule({ ... })`.
   *
   * @param config Shopee client configuration such as `partnerId`, `partnerKey`,
   * `shopId`, `mainAccountId`, `accessToken`, and `refreshToken`.
   */
  constructor(config: ShopeeConfig) {
    this.config = config;
    this.accountHealth = new ShopeeAccountHealth(this.config);
    this.addOnDeal = new ShopeeAddOnDeal(this.config);
    this.ads = new ShopeeAds(this.config);
    this.ams = new ShopeeAms(this.config);
    this.bundleDeal = new ShopeeBundleDeal(this.config);
    this.discount = new ShopeeDiscount(this.config);
    this.fbs = new ShopeeFbs(this.config);
    this.firstMile = new ShopeeFirstMile(this.config);
    this.followPrize = new ShopeeFollowPrize(this.config);
    this.globalProduct = new ShopeeGlobalProduct(this.config);
    this.livestream = new ShopeeLivestream(this.config);
    this.mediaSpace = new ShopeeMediaSpace(this.config);
    this.merchant = new ShopeeMerchant(this.config);
    this.principal = new ShopeePrincipal(this.config);
    this.publicApi = new ShopeePublicApi(this.config);
    this.sbs = new ShopeeSbs(this.config);
    this.shopFlashSale = new ShopeeShopFlashSale(this.config);
    this.topPicks = new ShopeeTopPicks(this.config);
    this.video = new ShopeeVideo(this.config);
    this.voucher = new ShopeeVoucher(this.config);
  }

  setConfig(config: ShopeeConfig) {
    Object.assign(this.config, config);
  }

  getConfig() {
    return this.config;
  }

  /**
   * Get Shopee orders with automatic pagination.
   *
   * This is the convenience method for most use cases. It keeps calling
   * Shopee `v2.order.get_order_list` while `response.more` is true, merges
   * every page, and returns only the final `response.order_list` items.
   *
   * Use this when you only need order numbers/statuses and do not need Shopee's
   * raw pagination metadata such as `request_id`, `response.more`, or
   * `response.next_cursor`.
   *
   * Legacy usage:
   *   getOrders(60)
   *
   * Extended usage:
   *   getOrders({
   *     beforeMinutes: 60,
   *     orderStatus: 'READY_TO_SHIP',
   *     responseOptionalFields: ['order_status'],
   *   })
   *
   * orderStatus defaults to ALL, which means order_status is not sent to Shopee.
   *
   * @returns A flattened array of order-list items from all fetched pages.
   * @see getOrderList Use this instead when you need the raw Shopee response for one page.
   */
  async getOrders(beforeMinutesOrOptions: number | ShopeeGetOrdersOptions = {}): Promise<ShopeeOrderListItem[]> {
    return await getOrders(beforeMinutesOrOptions, this.config);
  }

  /**
   * Get one Shopee order-list page and keep Shopee's raw response metadata.
   *
   * This is the lower-level method that maps directly to Shopee
   * `v2.order.get_order_list`. It does not auto-paginate. You receive Shopee's
   * response exactly for the requested page, including `request_id`,
   * `response.more`, `response.next_cursor`, and `response.order_list`.
   *
   * Use this when you want to control pagination yourself, store cursors,
   * inspect request IDs for debugging, or mirror Shopee's API response shape.
   *
   * @returns Raw Shopee order-list response for one page.
   * @see getOrders Use this instead when you want auto-pagination and only need order items.
   */
  async getOrderList(options: ShopeeGetOrdersOptions = {}): Promise<ShopeeResponseOrderList> {
    return await getOrderList(options, this.config);
  }

  async getOrderDetail(orderNumber: string): Promise<ShopeeResponseOrderDetail> {
    return await getOrderDetail(orderNumber, this.config);
  }

  async getShipmentList(): Promise<{ order_sn: string; package_number: string }[]> {
    return await getShipmentList(this.config);
  }

  async searchPackageList(body: ShopeeRequestSearchPackageList): Promise<ShopeeResponseSearchPackageList> {
    return await searchPackageList(body, this.config);
  }

  async getPackageDetail(packageNumberList: string | string[]): Promise<ShopeeResponseGetPackageDetail> {
    return await getPackageDetail(packageNumberList, this.config);
  }

  async cancelOrder(body: ShopeeRequestCancelOrder): Promise<ShopeeResponseCancelOrder> {
    return await cancelOrder(body, this.config);
  }

  async getEscrowDetail(orderSn: string): Promise<ShopeeResponseEscrowDetail> {
    return await getEscrowDetail(orderSn, this.config);
  }

  /**
   * List Shopee return/refund requests via `v2.returns.get_return_list`.
   *
   * `page_no` and `page_size` are required. Check `response.more` on the
   * result to know whether another page is available.
   */
  async getReturnList(params: ShopeeRequestGetReturnList): Promise<ShopeeResponseGetReturnList> {
    return await getReturnList(params, this.config);
  }

  /**
   * Get one return/refund request detail via `v2.returns.get_return_detail`.
   *
   * @param returnSn Shopee return serial number from `getReturnList()` or a
   * return-related Push Mechanism event.
   */
  async getReturnDetail(returnSn: string): Promise<ShopeeResponseReturnDetail> {
    return await getReturnDetail(returnSn, this.config);
  }

  /**
   * Get the return/refund solutions available for a return via
   * `v2.returns.get_available_solutions`.
   */
  async getAvailableSolutions(returnSn: string): Promise<ShopeeResponseGetAvailableSolutions> {
    return await getAvailableSolutions(returnSn, this.config);
  }

  /**
   * Confirm a buyer return/refund request via `v2.returns.confirm`.
   *
   * Seller-side confirmation that accepts the return/refund as requested by
   * the buyer.
   */
  async confirmReturn(returnSn: string): Promise<ShopeeResponseConfirmReturn> {
    return await confirmReturn(returnSn, this.config);
  }

  // ---------------------------------------------------------------------
  // Media (image/video upload)
  // ---------------------------------------------------------------------

  /**
   * Upload one or more images to Shopee via `v2.media.upload_image`.
   *
   * Use the returned `image_id` values in `image.image_id_list` when
   * calling `addItem()` or `updateItem()`.
   */
  async uploadImage(body: ShopeeRequestUploadImage): Promise<ShopeeResponseUploadImage> {
    return await uploadImage(body, this.config);
  }

  /**
   * Start a video upload session via `v2.media.init_video_upload`.
   * Returns a `video_upload_id` and the required `part_size` for
   * subsequent `uploadVideoPart()` calls.
   */
  async initVideoUpload(body: ShopeeRequestInitVideoUpload): Promise<ShopeeResponseInitVideoUpload> {
    return await initVideoUpload(body, this.config);
  }

  /**
   * Upload one chunk of a video previously initialized via
   * `initVideoUpload()`, through `v2.media.upload_video_part`.
   */
  async uploadVideoPart(body: ShopeeRequestUploadVideoPart): Promise<ShopeeResponseUploadVideoPart> {
    return await uploadVideoPart(body, this.config);
  }

  /**
   * Finalize a video upload via `v2.media.complete_video_upload`, once
   * every part has been uploaded through `uploadVideoPart()`.
   */
  async completeVideoUpload(body: ShopeeRequestCompleteVideoUpload): Promise<ShopeeResponseCompleteVideoUpload> {
    return await completeVideoUpload(body, this.config);
  }

  /**
   * Poll the current status of a video upload/transcode task via
   * `v2.media.get_video_upload_result`.
   */
  async getVideoUploadResult(videoUploadId: string): Promise<ShopeeResponseGetVideoUploadResult> {
    return await getVideoUploadResult({ video_upload_id: videoUploadId }, this.config);
  }

  /**
   * Cancel an in-progress video upload task via
   * `v2.media.cancel_video_upload`. Fails if the upload has already
   * succeeded, failed, or been cancelled.
   */
  async cancelVideoUpload(videoUploadId: string): Promise<ShopeeResponseCancelVideoUpload> {
    return await cancelVideoUpload({ video_upload_id: videoUploadId }, this.config);
  }

  // ---------------------------------------------------------------------
  // Shop
  // ---------------------------------------------------------------------

  /** Get shop profile (name, logo, description) via `v2.shop.get_profile`. */
  async getShopProfile(): Promise<ShopeeResponseGetShopProfile> {
    return await getShopProfile(this.config);
  }

  /**
   * Update the shop name, logo, and/or description via
   * `v2.shop.update_profile`.
   */
  async updateShopProfile(body: ShopeeRequestUpdateShopProfile): Promise<ShopeeResponseUpdateShopProfile> {
    return await updateShopProfile(body, this.config);
  }

  /**
   * Get shop-level metadata (region, status, cross-border flags,
   * fulfillment type, auth/expire time, etc.) via `v2.shop.get_shop_info`.
   */
  async getShopInfo(): Promise<ShopeeResponseGetShopInfo> {
    return await getShopInfo(this.config);
  }

  /**
   * Get Seller Center notifications via `v2.shop.get_shop_notification`.
   * Permission is controlled by app type.
   */
  async getShopNotification(cursor?: number, pageSize?: number): Promise<ShopeeResponseGetShopNotification> {
    return await getShopNotification(this.config, cursor, pageSize);
  }

  /**
   * Get warehouse address details via `v2.shop.get_warehouse_detail`.
   *
   * @param warehouseType 1 = Pickup Warehouse (default), 2 = Return Warehouse.
   */
  async getWarehouseDetail(warehouseType?: number): Promise<ShopeeResponseGetWarehouseDetail> {
    return await getWarehouseDetail(this.config, warehouseType);
  }

  /**
   * Check whether holiday mode is enabled and its scheduled period via
   * `v2.shop.get_shop_holiday_mode`.
   */
  async getShopHolidayMode(): Promise<ShopeeResponseGetShopHolidayMode> {
    return await getShopHolidayMode(this.config);
  }

  /**
   * Schedule holiday mode ON/OFF periods via
   * `v2.shop.set_shop_holiday_mode`. Start/end timestamps must be
   * whole-hour Unix timestamps in seconds.
   */
  async setShopHolidayMode(body: ShopeeRequestSetShopHolidayMode): Promise<ShopeeResponseSetShopHolidayMode> {
    return await setShopHolidayMode(body, this.config);
  }

  /**
   * Get the authorised reseller brand list for the shop via
   * `v2.shop.get_authorised_reseller_brand`.
   */
  async getAuthorisedResellerBrand(
    params: ShopeeRequestGetAuthorisedResellerBrand,
  ): Promise<ShopeeResponseGetAuthorisedResellerBrand> {
    return await getAuthorisedResellerBrand(params, this.config);
  }

  /**
   * [BR shops only] Get shop KYC registration and qualification
   * information via `v2.shop.get_br_shop_onboarding_info`.
   */
  async getBrShopOnboardingInfo(): Promise<ShopeeResponseGetBrShopOnboardingInfo> {
    return await getBrShopOnboardingInfo(this.config);
  }

  // ---------------------------------------------------------------------
  // Shop Category
  // ---------------------------------------------------------------------

  /** Create a new shop-level product category via `v2.shop_category.add_shop_category`. */
  async addShopCategory(body: ShopeeRequestAddShopCategory): Promise<ShopeeResponseAddShopCategory> {
    return await addShopCategory(body, this.config);
  }

  /** Update an existing shop-level product category via `v2.shop_category.update_shop_category`. */
  async updateShopCategory(body: ShopeeRequestUpdateShopCategory): Promise<ShopeeResponseUpdateShopCategory> {
    return await updateShopCategory(body, this.config);
  }

  /** Delete an existing shop-level product category via `v2.shop_category.delete_shop_category`. */
  async deleteShopCategory(shopCategoryId: number): Promise<ShopeeResponseDeleteShopCategory> {
    return await deleteShopCategory(shopCategoryId, this.config);
  }

  /** List shop-level product categories via `v2.shop_category.get_shop_category_list`. */
  async getShopCategoryList(params: ShopeeRequestGetShopCategoryList): Promise<ShopeeResponseGetShopCategoryList> {
    return await getShopCategoryList(params, this.config);
  }

  /** Assign up to 100 items to a shop category via `v2.shop_category.add_item_list`. */
  async addShopCategoryItemList(
    body: ShopeeRequestAddShopCategoryItemList,
  ): Promise<ShopeeResponseAddShopCategoryItemList> {
    return await addShopCategoryItemList(body, this.config);
  }

  /** Remove items from a shop category via `v2.shop_category.delete_item_list`. */
  async deleteShopCategoryItemList(
    body: ShopeeRequestDeleteShopCategoryItemList,
  ): Promise<ShopeeResponseDeleteShopCategoryItemList> {
    return await deleteShopCategoryItemList(body, this.config);
  }

  /** List items assigned to a shop category via `v2.shop_category.get_item_list`. */
  async getShopCategoryItemList(
    params: ShopeeRequestGetShopCategoryItemList,
  ): Promise<ShopeeResponseGetShopCategoryItemList> {
    return await getShopCategoryItemList(params, this.config);
  }

  async getProductItemList(): Promise<Record<string, unknown>[]> {
    return await getProductItemList(this.config);
  }

  async getProductItemBaseInfo(itemIds: string[]): Promise<ShopeeResponseProductBaseItemInfo> {
    return await getProductItemBaseInfo(itemIds, this.config);
  }

  /**
   * Get all model/variation records for a Shopee item via
   * `v2.product.get_model_list`.
   *
   * Use this when an item has variations and you need model IDs, tier indexes,
   * model SKU/status, model-level price info, stock info, GTIN, weight,
   * dimension, promotion flags, or standardized variation data.
   *
   * @see docs/product_get_model_list.md for the full response schema.
   */
  async getModelList(itemId: string | number): Promise<ShopeeResponseGetModelList> {
    return await getModelList(itemId, this.config);
  }

  /**
   * Search Shopee item IDs via `v2.product.search_item`.
   *
   * `page_size` is required. Provide at least one search filter such as
   * `item_name`, `attribute_status`, `item_sku`, `item_status`, or
   * `deboost_only`.
   *
   * @see docs/product_search_item.md for the full request and response schema.
   */
  async searchItem(params: ShopeeRequestSearchItem): Promise<ShopeeResponseSearchItem> {
    return await searchItem(params, this.config);
  }

  async updateStock(itemId: number, stock: number): Promise<ShopeeResponseUpdateStock> {
    return await updateStock(itemId, undefined, stock, this.config);
  }

  async unListItem(itemId: string, statusUnlist: boolean): Promise<ShopeeResponseUnlistItem> {
    return await unListItem(itemId, statusUnlist, this.config);
  }

  async updatePrice(itemId: string, price: number): Promise<ShopeeResponseUpdatePrice> {
    return await updatePrice(itemId, price, this.config);
  }

  /**
   * Create a new product item on Shopee via `v2.product.add_item`.
   *
   * Required Shopee fields include `original_price`, `description`, `weight`,
   * `item_name`, `category_id`, `dimension`, `logistic_info`, and
   * `image.image_id_list`.
   *
   * Use `description_type: 'extended'` when passing `description_info`.
   * Shopee accepts only one `video_upload_id` for this endpoint.
   *
   * @see docs/product_add_item.md for the full request and response schema.
   */
  async addItem(body: ShopeeRequestAddItem): Promise<ShopeeResponseAddItem> {
    return await addItem(body, this.config);
  }

  /**
   * Update an existing product item on Shopee via `v2.product.update_item`.
   *
   * `item_id` is required. Every other field is optional and Shopee updates
   * only the submitted fields. Use `updatePrice()` and `updateStock()` for
   * price and stock changes because Shopee exposes those as separate APIs.
   *
   * Use `description_type: 'extended'` when passing `description_info`.
   *
   * @see docs/product_update_item.md for the full request and response schema.
   */
  async updateItem(body: ShopeeRequestUpdateItem): Promise<ShopeeResponseUpdateItem> {
    return await updateItem(body, this.config);
  }

  async getChannelList(): Promise<ShopeeResponseLogisticChannelList> {
    return await getChannelList(this.config);
  }

  async fetchToken(authCode: string): Promise<ShopeeResponseGetAccessToken> {
    return await fetchTokenWithAuthCode(authCode, this.config);
  }

  async getCategory(): Promise<ShopeeResponseGetCategories> {
    return await getCategory(this.config);
  }

  async getAttributes(categoryId: number): Promise<ShopeeResponseGetAttributes> {
    return await getAttributes(categoryId, this.config);
  }

  async getBrandList(categoryId: number): Promise<ShopeeResponseGetBrandList> {
    return await getBrandList(categoryId, this.config);
  }

  async shippingParameter(orderNumber: string): Promise<ShopeeResponseShippingParameter> {
    return await shippingParameter(orderNumber, this.config);
  }

  async shipOrder(orderNumber: string, addressId: number, timeSlot: string): Promise<ShopeeResponseShipOrder> {
    return await shipOrder(orderNumber, addressId, timeSlot, this.config);
  }

  async getTrackingNumber(orderSn: string, packageNumber?: string, responseOptionalFields?: string): Promise<ShopeeResponseTrackingNumber> {
    return await getTrackingNumber(orderSn, this.config, packageNumber, responseOptionalFields);
  }

  async createShippingDocument(body: ShopeeRequestCreateShippingDocument): Promise<ShopeeResponseCreateShippingDocument> {
    return await createShippingDocument(body, this.config);
  }

  async getShippingDocumentResult(body: ShopeeRequestGetShippingDocumentResult): Promise<ShopeeResponseGetShippingDocumentResult> {
    return await getShippingDocumentResult(body, this.config);
  }

  async downloadShippingDocument(body: ShopeeRequestDownloadShippingDocument): Promise<ArrayBuffer> {
    return await downloadShippingDocument(body, this.config);
  }

  async getTrackingInfo(orderSn: string, packageNumber?: string): Promise<ShopeeResponseTrackingInfo> {
    return await getTrackingInfo(orderSn, this.config, packageNumber);
  }

  async massShipOrder(body: ShopeeRequestMassShipOrder): Promise<ShopeeResponseMassShipOrder> {
    return await massShipOrder(body, this.config);
  }

  async getMassShippingParameter(body: ShopeeRequestGetMassShippingParameter): Promise<ShopeeResponseGetMassShippingParameter> {
    return await getMassShippingParameter(body, this.config);
  }

  async updateShippingOrder(body: ShopeeRequestUpdateShippingOrder): Promise<ShopeeResponseUpdateShippingOrder> {
    return await updateShippingOrder(body, this.config);
  }

  async getMassTrackingNumber(body: ShopeeRequestGetMassTrackingNumber): Promise<ShopeeResponseGetMassTrackingNumber> {
    return await getMassTrackingNumber(body, this.config);
  }

  async getShippingDocumentParameter(body: ShopeeRequestGetShippingDocumentParameter): Promise<ShopeeResponseGetShippingDocumentParameter> {
    return await getShippingDocumentParameter(body, this.config);
  }

  async getAddressList(): Promise<ShopeeResponseGetAddressList> {
    return await getAddressList(this.config);
  }

  async refreshToken(): Promise<ShopeeResponseRefreshAccessToken> {
    return await fetchTokenWithRefreshToken(this.config);
  }

  async generateAuthLink(redirectURL: string): Promise<{ url: string; redirect: string }> {
    return await generateAuthLink(redirectURL, this.config);
  }

  /**
   * Verify Shopee Push Mechanism (webhook) signature.
   *
   * Shopee sends the signature in the `Authorization` request header.
   * The signature base string is:
   *
   *   callbackUrl + "|" + rawBody
   *
   * Important: `rawBody` must be the original request body bytes/string from
   * Shopee. Do not pass `JSON.stringify(req.body)` after JSON parsing.
   *
   * @param callbackUrl Full callback URL exactly as Shopee calls it.
   * @param rawBody Original raw HTTP request body from Shopee.
   * @param authorization The `Authorization` header value sent by Shopee.
   */
  verifyPushSignature(callbackUrl: string, rawBody: string | Buffer, authorization: string): boolean {
    return verifyShopeePushSignature({
      callbackUrl,
      rawBody,
      partnerKey: this.config.partnerKey,
      authorization,
    });
  }

  /**
   * Parse a verified Shopee Push Mechanism raw body.
   *
   * Call this only after `verifyPushSignature()` returns true. Shopee Push docs
   * require signature verification against the original raw body, so parsing is
   * intentionally separated from verification.
   *
   * Known typed payloads currently cover auth/order webhooks:
   * code 1, 2, 12, 3, 4, and 15.
   */
  parsePushPayload<TPayload extends ShopeePushPayload = ShopeeKnownPushPayload>(rawBody: string | Buffer): TPayload {
    return parseShopeePushPayload<TPayload>(rawBody);
  }

  // ---------------------------------------------------------------------
  // logistics (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async batchShipOrder(params: ShopeeBatchShipOrderRequest): Promise<ShopeeBatchShipOrderResponse> {
    return await batchShipOrder(params, this.config);
  }

  async batchUpdateTpfWarehouseTrackingStatus(params: ShopeeBatchUpdateTpfWarehouseTrackingStatusRequest): Promise<ShopeeBatchUpdateTpfWarehouseTrackingStatusResponse> {
    return await batchUpdateTpfWarehouseTrackingStatus(params, this.config);
  }

  async checkPolygonUpdateStatus(params: ShopeeCheckPolygonUpdateStatusRequest): Promise<ShopeeCheckPolygonUpdateStatusResponse> {
    return await checkPolygonUpdateStatus(params, this.config);
  }

  async createBookingShippingDocument(params: ShopeeCreateBookingShippingDocumentRequest): Promise<ShopeeCreateBookingShippingDocumentResponse> {
    return await createBookingShippingDocument(params, this.config);
  }

  async createShippingDocumentJob(params: ShopeeCreateShippingDocumentJobRequest): Promise<ShopeeCreateShippingDocumentJobResponse> {
    return await createShippingDocumentJob(params, this.config);
  }

  async deleteAddress(params: ShopeeDeleteAddressRequest): Promise<ShopeeDeleteAddressResponse> {
    return await deleteAddress(params, this.config);
  }

  async deleteSpecialOperatingHour(params: ShopeeDeleteSpecialOperatingHourRequest): Promise<ShopeeDeleteSpecialOperatingHourResponse> {
    return await deleteSpecialOperatingHour(params, this.config);
  }

  async downloadBookingShippingDocument(params: ShopeeDownloadBookingShippingDocumentRequest): Promise<ShopeeDownloadBookingShippingDocumentResponse> {
    return await downloadBookingShippingDocument(params, this.config);
  }

  async downloadShippingDocumentJob(params: ShopeeDownloadShippingDocumentJobRequest): Promise<ShopeeDownloadShippingDocumentJobResponse> {
    return await downloadShippingDocumentJob(params, this.config);
  }

  async downloadToLabel(params: ShopeeDownloadToLabelRequest): Promise<ShopeeDownloadToLabelResponse> {
    return await downloadToLabel(params, this.config);
  }

  async getBookingShippingDocumentDataInfo(params: ShopeeGetBookingShippingDocumentDataInfoRequest): Promise<ShopeeGetBookingShippingDocumentDataInfoResponse> {
    return await getBookingShippingDocumentDataInfo(params, this.config);
  }

  async getBookingShippingDocumentParameter(params: ShopeeGetBookingShippingDocumentParameterRequest): Promise<ShopeeGetBookingShippingDocumentParameterResponse> {
    return await getBookingShippingDocumentParameter(params, this.config);
  }

  async getBookingShippingDocumentResult(params: ShopeeGetBookingShippingDocumentResultRequest): Promise<ShopeeGetBookingShippingDocumentResultResponse> {
    return await getBookingShippingDocumentResult(params, this.config);
  }

  async getBookingShippingParameter(params: ShopeeGetBookingShippingParameterRequest): Promise<ShopeeGetBookingShippingParameterResponse> {
    return await getBookingShippingParameter(params, this.config);
  }

  async getBookingTrackingInfo(params: ShopeeGetBookingTrackingInfoRequest): Promise<ShopeeGetBookingTrackingInfoResponse> {
    return await getBookingTrackingInfo(params, this.config);
  }

  async getBookingTrackingNumber(params: ShopeeGetBookingTrackingNumberRequest): Promise<ShopeeGetBookingTrackingNumberResponse> {
    return await getBookingTrackingNumber(params, this.config);
  }

  async getMartPackagingInfo(): Promise<ShopeeGetMartPackagingInfoResponse> {
    return await getMartPackagingInfo(this.config);
  }

  async getOperatingHourRestrictions(): Promise<ShopeeGetOperatingHourRestrictionsResponse> {
    return await getOperatingHourRestrictions(this.config);
  }

  async getOperatingHours(): Promise<ShopeeGetOperatingHoursResponse> {
    return await getOperatingHours(this.config);
  }

  async getPauseStatus(): Promise<ShopeeGetPauseStatusResponse> {
    return await getPauseStatus(this.config);
  }

  async getShippingDocumentDataInfo(params: ShopeeGetShippingDocumentDataInfoRequest): Promise<ShopeeGetShippingDocumentDataInfoResponse> {
    return await getShippingDocumentDataInfo(params, this.config);
  }

  async getShippingDocumentJobStatus(params: ShopeeGetShippingDocumentJobStatusRequest): Promise<ShopeeGetShippingDocumentJobStatusResponse> {
    return await getShippingDocumentJobStatus(params, this.config);
  }

  async setAddressConfig(params: ShopeeSetAddressConfigRequest = {}): Promise<ShopeeSetAddressConfigResponse> {
    return await setAddressConfig(params, this.config);
  }

  async setMartPackagingInfo(params: ShopeeSetMartPackagingInfoRequest): Promise<ShopeeSetMartPackagingInfoResponse> {
    return await setMartPackagingInfo(params, this.config);
  }

  async setPauseStatus(params: ShopeeSetPauseStatusRequest): Promise<ShopeeSetPauseStatusResponse> {
    return await setPauseStatus(params, this.config);
  }

  async shipBooking(params: ShopeeShipBookingRequest): Promise<ShopeeShipBookingResponse> {
    return await shipBooking(params, this.config);
  }

  async updateAddress(params: ShopeeUpdateAddressRequest): Promise<ShopeeUpdateAddressResponse> {
    return await updateAddress(params, this.config);
  }

  async updateChannel(params: ShopeeUpdateChannelRequest): Promise<ShopeeUpdateChannelResponse> {
    return await updateChannel(params, this.config);
  }

  async updateOperatingHours(params: ShopeeUpdateOperatingHoursRequest = {}): Promise<ShopeeUpdateOperatingHoursResponse> {
    return await updateOperatingHours(params, this.config);
  }

  async updateSelfCollectionOrderLogistics(params: ShopeeUpdateSelfCollectionOrderLogisticsRequest): Promise<ShopeeUpdateSelfCollectionOrderLogisticsResponse> {
    return await updateSelfCollectionOrderLogistics(params, this.config);
  }

  async updateTrackingStatus(params: ShopeeUpdateTrackingStatusRequest): Promise<ShopeeUpdateTrackingStatusResponse> {
    return await updateTrackingStatus(params, this.config);
  }

  async uploadServiceablePolygon(params: ShopeeUploadServiceablePolygonRequest): Promise<ShopeeUploadServiceablePolygonResponse> {
    return await uploadServiceablePolygon(params, this.config);
  }

  // ---------------------------------------------------------------------
  // order (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async downloadFbsInvoices(params: ShopeeDownloadFbsInvoicesRequest = {}): Promise<ShopeeDownloadFbsInvoicesResponse> {
    return await downloadFbsInvoices(params, this.config);
  }

  async downloadInvoiceDoc(params: ShopeeDownloadInvoiceDocRequest): Promise<ShopeeDownloadInvoiceDocResponse> {
    return await downloadInvoiceDoc(params, this.config);
  }

  async generateFbsInvoices(params: ShopeeGenerateFbsInvoicesRequest = {}): Promise<ShopeeGenerateFbsInvoicesResponse> {
    return await generateFbsInvoices(params, this.config);
  }

  async getBookingDetail(params: ShopeeGetBookingDetailRequest): Promise<ShopeeGetBookingDetailResponse> {
    return await getBookingDetail(params, this.config);
  }

  async getBookingList(params: ShopeeGetBookingListRequest): Promise<ShopeeGetBookingListResponse> {
    return await getBookingList(params, this.config);
  }

  async getBuyerInvoiceInfo(params: ShopeeGetBuyerInvoiceInfoRequest): Promise<ShopeeGetBuyerInvoiceInfoResponse> {
    return await getBuyerInvoiceInfo(params, this.config);
  }

  async getEstimateCancelValue(params: ShopeeGetEstimateCancelValueRequest): Promise<ShopeeGetEstimateCancelValueResponse> {
    return await getEstimateCancelValue(params, this.config);
  }

  async getFbsInvoicesResult(params: ShopeeGetFbsInvoicesResultRequest): Promise<ShopeeGetFbsInvoicesResultResponse> {
    return await getFbsInvoicesResult(params, this.config);
  }

  async getPendingBuyerInvoiceOrderList(params: ShopeeGetPendingBuyerInvoiceOrderListRequest): Promise<ShopeeGetPendingBuyerInvoiceOrderListResponse> {
    return await getPendingBuyerInvoiceOrderList(params, this.config);
  }

  async getWarehouseFilterConfig(): Promise<ShopeeGetWarehouseFilterConfigResponse> {
    return await getWarehouseFilterConfig(this.config);
  }

  async handleBuyerCancellation(params: ShopeeHandleBuyerCancellationRequest): Promise<ShopeeHandleBuyerCancellationResponse> {
    return await handleBuyerCancellation(params, this.config);
  }

  async handlePrescriptionCheck(params: ShopeeHandlePrescriptionCheckRequest): Promise<ShopeeHandlePrescriptionCheckResponse> {
    return await handlePrescriptionCheck(params, this.config);
  }

  async setNote(params: ShopeeSetNoteRequest): Promise<ShopeeSetNoteResponse> {
    return await setNote(params, this.config);
  }

  async splitOrder(params: ShopeeSplitOrderRequest): Promise<ShopeeSplitOrderResponse> {
    return await splitOrder(params, this.config);
  }

  async unsplitOrder(params: ShopeeUnsplitOrderRequest): Promise<ShopeeUnsplitOrderResponse> {
    return await unsplitOrder(params, this.config);
  }

  async uploadInvoiceDoc(params: ShopeeUploadInvoiceDocRequest): Promise<ShopeeUploadInvoiceDocResponse> {
    return await uploadInvoiceDoc(params, this.config);
  }

  // ---------------------------------------------------------------------
  // payment (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async generateIncomeReport(params: ShopeeGenerateIncomeReportRequest): Promise<ShopeeGenerateIncomeReportResponse> {
    return await generateIncomeReport(params, this.config);
  }

  async generateIncomeStatement(params: ShopeeGenerateIncomeStatementRequest): Promise<ShopeeGenerateIncomeStatementResponse> {
    return await generateIncomeStatement(params, this.config);
  }

  async getBillingTransactionInfo(params: ShopeeGetBillingTransactionInfoRequest): Promise<ShopeeGetBillingTransactionInfoResponse> {
    return await getBillingTransactionInfo(params, this.config);
  }

  async getEscrowDetailBatch(params: ShopeeGetEscrowDetailBatchRequest): Promise<ShopeeGetEscrowDetailBatchResponse> {
    return await getEscrowDetailBatch(params, this.config);
  }

  async getEscrowList(params: ShopeeGetEscrowListRequest): Promise<ShopeeGetEscrowListResponse> {
    return await getEscrowList(params, this.config);
  }

  async getIncomeDetail(params: ShopeeGetIncomeDetailRequest): Promise<ShopeeGetIncomeDetailResponse> {
    return await getIncomeDetail(params, this.config);
  }

  async getIncomeOverview(params: ShopeeGetIncomeOverviewRequest = {}): Promise<ShopeeGetIncomeOverviewResponse> {
    return await getIncomeOverview(params, this.config);
  }

  async getIncomeReport(params: ShopeeGetIncomeReportRequest): Promise<ShopeeGetIncomeReportResponse> {
    return await getIncomeReport(params, this.config);
  }

  async getIncomeStatement(params: ShopeeGetIncomeStatementRequest): Promise<ShopeeGetIncomeStatementResponse> {
    return await getIncomeStatement(params, this.config);
  }

  async getItemInstallmentStatus(params: ShopeeGetItemInstallmentStatusRequest): Promise<ShopeeGetItemInstallmentStatusResponse> {
    return await getItemInstallmentStatus(params, this.config);
  }

  async getPaymentMethodList(): Promise<ShopeeGetPaymentMethodListResponse> {
    return await getPaymentMethodList(this.config);
  }

  async getPayoutDetail(params: ShopeeGetPayoutDetailRequest): Promise<ShopeeGetPayoutDetailResponse> {
    return await getPayoutDetail(params, this.config);
  }

  async getPayoutInfo(params: ShopeeGetPayoutInfoRequest): Promise<ShopeeGetPayoutInfoResponse> {
    return await getPayoutInfo(params, this.config);
  }

  async getShopInstallmentStatus(): Promise<ShopeeGetShopInstallmentStatusResponse> {
    return await getShopInstallmentStatus(this.config);
  }

  async getWalletTransactionList(params: ShopeeGetWalletTransactionListRequest): Promise<ShopeeGetWalletTransactionListResponse> {
    return await getWalletTransactionList(params, this.config);
  }

  async setItemInstallmentStatus(params: ShopeeSetItemInstallmentStatusRequest): Promise<ShopeeSetItemInstallmentStatusResponse> {
    return await setItemInstallmentStatus(params, this.config);
  }

  async setShopInstallmentStatus(params: ShopeeSetShopInstallmentStatusRequest): Promise<ShopeeSetShopInstallmentStatusResponse> {
    return await setShopInstallmentStatus(params, this.config);
  }

  // ---------------------------------------------------------------------
  // product (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async addKitItem(params: ShopeeAddKitItemRequest): Promise<ShopeeAddKitItemResponse> {
    return await addKitItem(params, this.config);
  }

  async addModel(params: ShopeeAddModelRequest): Promise<ShopeeAddModelResponse> {
    return await addModel(params, this.config);
  }

  async batchAddItem(params: ShopeeBatchAddItemRequest): Promise<ShopeeBatchAddItemResponse> {
    return await batchAddItem(params, this.config);
  }

  async batchPublishItemToOutletShop(params: ShopeeBatchPublishItemToOutletShopRequest): Promise<ShopeeBatchPublishItemToOutletShopResponse> {
    return await batchPublishItemToOutletShop(params, this.config);
  }

  async batchUpdateOutletPrice(params: ShopeeBatchUpdateOutletPriceRequest): Promise<ShopeeBatchUpdateOutletPriceResponse> {
    return await batchUpdateOutletPrice(params, this.config);
  }

  async batchUpdateOutletStock(params: ShopeeBatchUpdateOutletStockRequest): Promise<ShopeeBatchUpdateOutletStockResponse> {
    return await batchUpdateOutletStock(params, this.config);
  }

  async boostItem(params: ShopeeBoostItemRequest): Promise<ShopeeBoostItemResponse> {
    return await boostItem(params, this.config);
  }

  async categoryRecommend(params: ShopeeCategoryRecommendRequest): Promise<ShopeeCategoryRecommendResponse> {
    return await categoryRecommend(params, this.config);
  }

  async deleteItem(params: ShopeeDeleteItemRequest): Promise<ShopeeDeleteItemResponse> {
    return await deleteItem(params, this.config);
  }

  async deleteModel(params: ShopeeDeleteModelRequest): Promise<ShopeeDeleteModelResponse> {
    return await deleteModel(params, this.config);
  }

  async generateKitImage(params: ShopeeGenerateKitImageRequest): Promise<ShopeeGenerateKitImageResponse> {
    return await generateKitImage(params, this.config);
  }

  async getAitemByPitemId(params: ShopeeGetAitemByPitemIdRequest): Promise<ShopeeGetAitemByPitemIdResponse> {
    return await getAitemByPitemId(params, this.config);
  }

  async getAllVehicleList(params: ShopeeGetAllVehicleListRequest): Promise<ShopeeGetAllVehicleListResponse> {
    return await getAllVehicleList(params, this.config);
  }

  async getAttributeTree(params: ShopeeGetAttributeTreeRequest): Promise<ShopeeGetAttributeTreeResponse> {
    return await getAttributeTree(params, this.config);
  }

  async getBatchTaskResult(params: ShopeeGetBatchTaskResultRequest): Promise<ShopeeGetBatchTaskResultResponse> {
    return await getBatchTaskResult(params, this.config);
  }

  async getBoostedList(): Promise<ShopeeGetBoostedListResponse> {
    return await getBoostedList(this.config);
  }

  async getComment(params: ShopeeGetCommentRequest): Promise<ShopeeGetCommentResponse> {
    return await getComment(params, this.config);
  }

  async getDirectItemList(params: ShopeeGetDirectItemListRequest): Promise<ShopeeGetDirectItemListResponse> {
    return await getDirectItemList(params, this.config);
  }

  async getDirectShopRecommendedPrice(params: ShopeeGetDirectShopRecommendedPriceRequest): Promise<ShopeeGetDirectShopRecommendedPriceResponse> {
    return await getDirectShopRecommendedPrice(params, this.config);
  }

  async getItemContentDiagnosisResult(params: ShopeeGetItemContentDiagnosisResultRequest): Promise<ShopeeGetItemContentDiagnosisResultResponse> {
    return await getItemContentDiagnosisResult(params, this.config);
  }

  async getItemExtraInfo(params: ShopeeGetItemExtraInfoRequest): Promise<ShopeeGetItemExtraInfoResponse> {
    return await getItemExtraInfo(params, this.config);
  }

  async getItemLimit(params: ShopeeGetItemLimitRequest = {}): Promise<ShopeeGetItemLimitResponse> {
    return await getItemLimit(params, this.config);
  }

  async getItemListByContentDiagnosis(params: ShopeeGetItemListByContentDiagnosisRequest): Promise<ShopeeGetItemListByContentDiagnosisResponse> {
    return await getItemListByContentDiagnosis(params, this.config);
  }

  async getItemPromotion(params: ShopeeGetItemPromotionRequest): Promise<ShopeeGetItemPromotionResponse> {
    return await getItemPromotion(params, this.config);
  }

  async getItemViolationInfo(params: ShopeeGetItemViolationInfoRequest): Promise<ShopeeGetItemViolationInfoResponse> {
    return await getItemViolationInfo(params, this.config);
  }

  async getKitItemInfo(params: ShopeeGetKitItemInfoRequest): Promise<ShopeeGetKitItemInfoResponse> {
    return await getKitItemInfo(params, this.config);
  }

  async getKitItemLimit(params: ShopeeGetKitItemLimitRequest = {}): Promise<ShopeeGetKitItemLimitResponse> {
    return await getKitItemLimit(params, this.config);
  }

  async getMainItemList(params: ShopeeGetMainItemListRequest): Promise<ShopeeGetMainItemListResponse> {
    return await getMainItemList(params, this.config);
  }

  async getMartItemByOutletItemId(params: ShopeeGetMartItemByOutletItemIdRequest): Promise<ShopeeGetMartItemByOutletItemIdResponse> {
    return await getMartItemByOutletItemId(params, this.config);
  }

  async getMartItemMappingById(params: ShopeeGetMartItemMappingByIdRequest): Promise<ShopeeGetMartItemMappingByIdResponse> {
    return await getMartItemMappingById(params, this.config);
  }

  async getProductCertificationRule(params: ShopeeGetProductCertificationRuleRequest = {}): Promise<ShopeeGetProductCertificationRuleResponse> {
    return await getProductCertificationRule(params, this.config);
  }

  async getRecommendAttribute(params: ShopeeGetRecommendAttributeRequest): Promise<ShopeeGetRecommendAttributeResponse> {
    return await getRecommendAttribute(params, this.config);
  }

  async getSizeChartDetail(params: ShopeeGetSizeChartDetailRequest): Promise<ShopeeGetSizeChartDetailResponse> {
    return await getSizeChartDetail(params, this.config);
  }

  async getSizeChartList(params: ShopeeGetSizeChartListRequest): Promise<ShopeeGetSizeChartListResponse> {
    return await getSizeChartList(params, this.config);
  }

  async getVariations(params: ShopeeGetVariationsRequest): Promise<ShopeeGetVariationsResponse> {
    return await getVariations(params, this.config);
  }

  async getVehicleListByCompatibilityDetail(params: ShopeeGetVehicleListByCompatibilityDetailRequest): Promise<ShopeeGetVehicleListByCompatibilityDetailResponse> {
    return await getVehicleListByCompatibilityDetail(params, this.config);
  }

  async getWeightRecommendation(params: ShopeeGetWeightRecommendationRequest): Promise<ShopeeGetWeightRecommendationResponse> {
    return await getWeightRecommendation(params, this.config);
  }

  async initTierVariation(params: ShopeeInitTierVariationRequest): Promise<ShopeeInitTierVariationResponse> {
    return await initTierVariation(params, this.config);
  }

  async publishItemToOutletShop(params: ShopeePublishItemToOutletShopRequest): Promise<ShopeePublishItemToOutletShopResponse> {
    return await publishItemToOutletShop(params, this.config);
  }

  async registerBrand(params: ShopeeRegisterBrandRequest): Promise<ShopeeRegisterBrandResponse> {
    return await registerBrand(params, this.config);
  }

  async replyComment(params: ShopeeReplyCommentRequest): Promise<ShopeeReplyCommentResponse> {
    return await replyComment(params, this.config);
  }

  async searchAttributeValueList(params: ShopeeSearchAttributeValueListRequest): Promise<ShopeeSearchAttributeValueListResponse> {
    return await searchAttributeValueList(params, this.config);
  }

  async searchUnpackagedModelList(params: ShopeeSearchUnpackagedModelListRequest): Promise<ShopeeSearchUnpackagedModelListResponse> {
    return await searchUnpackagedModelList(params, this.config);
  }

  async updateKitItem(params: ShopeeUpdateKitItemRequest): Promise<ShopeeUpdateKitItemResponse> {
    return await updateKitItem(params, this.config);
  }

  async updateModel(params: ShopeeUpdateModelRequest): Promise<ShopeeUpdateModelResponse> {
    return await updateModel(params, this.config);
  }

  async updateSipItemPrice(params: ShopeeUpdateSipItemPriceRequest): Promise<ShopeeUpdateSipItemPriceResponse> {
    return await updateSipItemPrice(params, this.config);
  }

  async updateTierVariation(params: ShopeeUpdateTierVariationRequest): Promise<ShopeeUpdateTierVariationResponse> {
    return await updateTierVariation(params, this.config);
  }

  // ---------------------------------------------------------------------
  // push (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async confirmConsumedLostPushMessage(params: ShopeeConfirmConsumedLostPushMessageRequest): Promise<ShopeeConfirmConsumedLostPushMessageResponse> {
    return await confirmConsumedLostPushMessage(params, this.config);
  }

  async getAppPushConfig(): Promise<ShopeeGetAppPushConfigResponse> {
    return await getAppPushConfig(this.config);
  }

  async getLostPushMessage(): Promise<ShopeeGetLostPushMessageResponse> {
    return await getLostPushMessage(this.config);
  }

  async setAppPushConfig(params: ShopeeSetAppPushConfigRequest = {}): Promise<ShopeeSetAppPushConfigResponse> {
    return await setAppPushConfig(params, this.config);
  }

  // ---------------------------------------------------------------------
  // returns (additional endpoints, batch 3)
  // ---------------------------------------------------------------------

  async acceptOffer(params: ShopeeAcceptOfferRequest): Promise<ShopeeAcceptOfferResponse> {
    return await acceptOffer(params, this.config);
  }

  async cancelDispute(params: ShopeeCancelDisputeRequest): Promise<ShopeeCancelDisputeResponse> {
    return await cancelDispute(params, this.config);
  }

  async convertImage(params: ShopeeConvertImageRequest): Promise<ShopeeConvertImageResponse> {
    return await convertImage(params, this.config);
  }

  async dispute(params: ShopeeDisputeRequest): Promise<ShopeeDisputeResponse> {
    return await dispute(params, this.config);
  }

  async getReturnDisputeReason(params: ShopeeGetReturnDisputeReasonRequest): Promise<ShopeeGetReturnDisputeReasonResponse> {
    return await getReturnDisputeReason(params, this.config);
  }

  async getReverseTrackingInfo(params: ShopeeGetReverseTrackingInfoRequest): Promise<ShopeeGetReverseTrackingInfoResponse> {
    return await getReverseTrackingInfo(params, this.config);
  }

  async getShippingCarrier(params: ShopeeGetShippingCarrierRequest): Promise<ShopeeGetShippingCarrierResponse> {
    return await getShippingCarrier(params, this.config);
  }

  async offer(params: ShopeeOfferRequest): Promise<ShopeeOfferResponse> {
    return await offer(params, this.config);
  }

  async queryProof(params: ShopeeQueryProofRequest): Promise<ShopeeQueryProofResponse> {
    return await queryProof(params, this.config);
  }

  async uploadProof(params: ShopeeUploadProofRequest): Promise<ShopeeUploadProofResponse> {
    return await uploadProof(params, this.config);
  }

  async uploadShippingProof(params: ShopeeUploadShippingProofRequest): Promise<ShopeeUploadShippingProofResponse> {
    return await uploadShippingProof(params, this.config);
  }
}
