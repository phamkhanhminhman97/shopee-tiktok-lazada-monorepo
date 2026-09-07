import { LazadaConfig } from '../dto/request/config.request';
import {
  activateFlexiCombo,
  addFlexiComboProducts,
  createFlexiCombo,
  deactivateFlexiCombo,
  deleteFlexiComboProducts,
  getFlexiComboDetails,
  listFlexiCombo,
  listFlexiComboProducts,
  updateFlexiCombo,
} from '../api/flexicombo.api';
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
 * Lazada `flexicombo-api` API namespace.
 *
 * Access via `lazada.flexicombo.<method>()` on a `LazadaModule` instance.
 */
export class LazadaFlexicombo {
  constructor(private config: LazadaConfig) {}

  async getFlexiComboDetails(params: FlexicomboGetFlexiComboDetailsRequest): Promise<FlexicomboGetFlexiComboDetailsResponse> {
    return await getFlexiComboDetails(params, this.config);
  }

  async listFlexiCombo(params: FlexicomboListFlexiComboRequest): Promise<FlexicomboListFlexiComboResponse> {
    return await listFlexiCombo(params, this.config);
  }

  async listFlexiComboProducts(params: FlexicomboListFlexiComboProductsRequest): Promise<FlexicomboListFlexiComboProductsResponse> {
    return await listFlexiComboProducts(params, this.config);
  }

  async activateFlexiCombo(params: FlexicomboActivateFlexiComboRequest): Promise<FlexicomboActivateFlexiComboResponse> {
    return await activateFlexiCombo(params, this.config);
  }

  async createFlexiCombo(params: FlexicomboCreateFlexiComboRequest): Promise<FlexicomboCreateFlexiComboResponse> {
    return await createFlexiCombo(params, this.config);
  }

  async deactivateFlexiCombo(params: FlexicomboDeactivateFlexiComboRequest): Promise<FlexicomboDeactivateFlexiComboResponse> {
    return await deactivateFlexiCombo(params, this.config);
  }

  async addFlexiComboProducts(params: FlexicomboAddFlexiComboProductsRequest): Promise<FlexicomboAddFlexiComboProductsResponse> {
    return await addFlexiComboProducts(params, this.config);
  }

  async deleteFlexiComboProducts(params: FlexicomboDeleteFlexiComboProductsRequest): Promise<FlexicomboDeleteFlexiComboProductsResponse> {
    return await deleteFlexiComboProducts(params, this.config);
  }

  async updateFlexiCombo(params: FlexicomboUpdateFlexiComboRequest): Promise<FlexicomboUpdateFlexiComboResponse> {
    return await updateFlexiCombo(params, this.config);
  }
}
