import { TiktokResponseCommon } from './config.response';
import { TiktokAttribute, TiktokCategory, TiktokFailReason, TiktokGetBrandsResponse } from './product-v3.response';

interface UpdateStock {
  // This endpoint (/api/products/stocks) predates the 202309 API version covered by the
  // reference TikTok Shop SDK, so no verified failure-item shape exists for it. 'unknown[]'
  // preserves type-safety (forces callers to narrow/validate) without fabricating an unverified
  // shape, unlike the previous 'any[]' which silently allowed anything through uninspected.
  failed_skus: Array<unknown>;
}

interface DeactiveProduct {
  failed_product_ids: string[];
  // Shape verified against the reference SDK's 'FailReason' (ProductTypes.ts): { code?, message? }.
  failed_reasons: Array<TiktokFailReason>;
}

interface ActiveProduct {
  failed_product_ids: string[];
  failed_reasons: Array<TiktokFailReason>;
}

interface Categories {
  // Shape verified against the reference SDK's 'Category' (ProductTypes.ts), which matches this
  // endpoint's actual path (/product/202309/categories, identical to the new Product domain's
  // getCategories()).
  categories: Array<TiktokCategory>;
}

interface SizeChart {
  is_supported: boolean;
  is_required: boolean;
}

interface COD {
  is_supported: boolean;
}

interface PackageDimension {
  is_required: boolean;
}

interface ProductCertification {
  id: string;
  name: string;
  is_required: boolean;
  same_image_url: string;
}
interface CategoryRules {
  product_certifications: Array<ProductCertification>;
  size_chart: SizeChart;
  cod: COD;
  package_dimension: PackageDimension;
}

interface UploadImage {
  height: number;
  width: number;
  uri: string;
  url: string;
  use_case: string; //The usage scenarios include MAIN_IMAGE DESCRIPTION_IMAGE ATTRIBUTE_IMAGE CERTIFICATION_IMAGE SIZE_CHART_IMAGE
}

interface Brands {
  // Item shape reused from the new Product domain's TiktokGetBrandsResponse (same underlying
  // '/product/202309/brands' endpoint, verified against the reference SDK).
  brands: TiktokGetBrandsResponse['brands'];
}

interface Attributes {
  // Shape verified against the reference SDK's 'GetGlobalAttributes'/TiktokAttribute
  // (ProductTypes.ts), matching this endpoint's actual path
  // (/product/202309/categories/{category_id}/attributes).
  attributes: Array<TiktokAttribute>;
}

type ResponseUpdateStock = TiktokResponseCommon<UpdateStock>;
type ResponseDeactiveProduct = TiktokResponseCommon<DeactiveProduct>;
type ResponseActiveProduct = TiktokResponseCommon<ActiveProduct>;
type ResponseCategories = TiktokResponseCommon<Categories>;
type ResponseCategoryRules = TiktokResponseCommon<CategoryRules>;
type ResponseBrands = TiktokResponseCommon<Brands>;
type ResponseAttributes = TiktokResponseCommon<Attributes>;
type ResponseUploadImage = TiktokResponseCommon<UploadImage>;

export {
  ResponseUpdateStock as TiktokResponseUpdateStock,
  ResponseActiveProduct as TiktokResponseActiveProduct,
  ResponseDeactiveProduct as TiktokResponseDeactiveProduct,
  ResponseCategories as TiktokResponseCategories,
  ResponseCategoryRules as TiktokResponseCategoryRules,
  ResponseBrands as TiktokResponseBrands,
  ResponseAttributes as TiktokResponseAttributes,
  ResponseUploadImage as TiktokResponseUploadImage,
};
