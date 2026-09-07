import { LazadaConfig } from '../dto/request/config.request';
import * as LazadaHelper from '../common/helper';
import {
  FlexicomboActivateFlexiComboRequest,
  FlexicomboAddFlexiComboProductsRequest,
  FlexicomboCreateFlexiComboRequest,
  FlexicomboDeactivateFlexiComboRequest,
  FlexicomboDeleteFlexiComboProductsRequest,
  FlexicomboGetFlexiComboDetailsRequest,
  FlexicomboListFlexiComboProductsRequest,
  FlexicomboListFlexiComboRequest,
  FlexicomboUpdateFlexiComboRequest,
} from '../dto/request/flexicombo.request';
import {
  FlexicomboActivateFlexiComboResponse,
  FlexicomboAddFlexiComboProductsResponse,
  FlexicomboCreateFlexiComboResponse,
  FlexicomboDeactivateFlexiComboResponse,
  FlexicomboDeleteFlexiComboProductsResponse,
  FlexicomboGetFlexiComboDetailsResponse,
  FlexicomboListFlexiComboProductsResponse,
  FlexicomboListFlexiComboResponse,
  FlexicomboUpdateFlexiComboResponse,
} from '../dto/response/flexicombo.response';

/**
 * GetFlexiComboDetails via Lazada `GET /promotion/flexicombo/details`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function getFlexiComboDetails(params: FlexicomboGetFlexiComboDetailsRequest, config: LazadaConfig): Promise<FlexicomboGetFlexiComboDetailsResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboGetFlexiComboDetailsResponse>('/promotion/flexicombo/details', 'GET', params as unknown as Record<string, unknown>, config, 'getFlexiComboDetails');
}

/**
 * ListFlexiCombo via Lazada `GET /promotion/flexicombo/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listFlexiCombo(params: FlexicomboListFlexiComboRequest, config: LazadaConfig): Promise<FlexicomboListFlexiComboResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboListFlexiComboResponse>('/promotion/flexicombo/list', 'GET', params as unknown as Record<string, unknown>, config, 'listFlexiCombo');
}

/**
 * ListFlexiComboProducts via Lazada `GET /promotion/flexicombo/products/list`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function listFlexiComboProducts(params: FlexicomboListFlexiComboProductsRequest, config: LazadaConfig): Promise<FlexicomboListFlexiComboProductsResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboListFlexiComboProductsResponse>('/promotion/flexicombo/products/list', 'GET', params as unknown as Record<string, unknown>, config, 'listFlexiComboProducts');
}

/**
 * ActivateFlexiCombo via Lazada `POST /promotion/flexicombo/activate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function activateFlexiCombo(params: FlexicomboActivateFlexiComboRequest, config: LazadaConfig): Promise<FlexicomboActivateFlexiComboResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboActivateFlexiComboResponse>('/promotion/flexicombo/activate', 'POST', params as unknown as Record<string, unknown>, config, 'activateFlexiCombo');
}

/**
 * CreateFlexiCombo via Lazada `POST /promotion/flexicombo/create`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function createFlexiCombo(params: FlexicomboCreateFlexiComboRequest, config: LazadaConfig): Promise<FlexicomboCreateFlexiComboResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboCreateFlexiComboResponse>('/promotion/flexicombo/create', 'POST', params as unknown as Record<string, unknown>, config, 'createFlexiCombo');
}

/**
 * DeactivateFlexiCombo via Lazada `POST /promotion/flexicombo/deactivate`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deactivateFlexiCombo(params: FlexicomboDeactivateFlexiComboRequest, config: LazadaConfig): Promise<FlexicomboDeactivateFlexiComboResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboDeactivateFlexiComboResponse>('/promotion/flexicombo/deactivate', 'POST', params as unknown as Record<string, unknown>, config, 'deactivateFlexiCombo');
}

/**
 * AddFlexiComboProducts via Lazada `POST /promotion/flexicombo/products/add`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function addFlexiComboProducts(params: FlexicomboAddFlexiComboProductsRequest, config: LazadaConfig): Promise<FlexicomboAddFlexiComboProductsResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboAddFlexiComboProductsResponse>('/promotion/flexicombo/products/add', 'POST', params as unknown as Record<string, unknown>, config, 'addFlexiComboProducts');
}

/**
 * DeleteFlexiComboProducts via Lazada `POST /promotion/flexicombo/products/delete`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function deleteFlexiComboProducts(params: FlexicomboDeleteFlexiComboProductsRequest, config: LazadaConfig): Promise<FlexicomboDeleteFlexiComboProductsResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboDeleteFlexiComboProductsResponse>('/promotion/flexicombo/products/delete', 'POST', params as unknown as Record<string, unknown>, config, 'deleteFlexiComboProducts');
}

/**
 * UpdateFlexiCombo via Lazada `POST /promotion/flexicombo/update`.
 *
 * @see https://open.lazada.com for the official Lazada Open Platform API reference.
 */
export async function updateFlexiCombo(params: FlexicomboUpdateFlexiComboRequest, config: LazadaConfig): Promise<FlexicomboUpdateFlexiComboResponse> {
  return LazadaHelper.callLazadaApi<FlexicomboUpdateFlexiComboResponse>('/promotion/flexicombo/update', 'POST', params as unknown as Record<string, unknown>, config, 'updateFlexiCombo');
}
