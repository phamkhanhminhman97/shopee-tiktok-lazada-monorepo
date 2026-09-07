import { LAZADA_PRODUCT_STATUS } from '../../common/constant';

interface UpdateSellableQuantity {
  itemId: string;
  skuId: string;
  sellerSku?: string;
  quantity: number;
}

interface UpdateStatusProduct {
  itemId: string;
  skuId: string;
  sellerSku?: string;
  status: LAZADA_PRODUCT_STATUS;
}

interface UpdatePriceProduct {
  itemId: string;
  skuId: string;
  sellerSku?: string;
  price: string | number;
}

export {
  UpdateSellableQuantity as LZD_UPDATE_SELLABLE_QUANTITY,
  UpdateStatusProduct as LZD_UPDATE_STATUS_PRODUCT,
  UpdatePriceProduct as LZD_UPDATE_PRICE_PRODUCT,
};
