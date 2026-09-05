import { ShopeeResponseCommon } from './config.response';

interface EscrowDetailPromotion {
  /**
   * Indicates the type of item- or package-level promotion applied to a product.
   * Each item can be associated with at most one item promotion and one package promotion at a time.
   *
   * Item Promotions:
   * low_price_promotion, deep_discount, platform_sale, seller_discount, flash_sale, wholesale,
   * welcome_package_free_gift, brand_flash_sale, in_shop_flash_sale, synced_promo,
   * platform_streaming_price, seller_streaming_price, exclusive_streamer_price,
   * price_bidding_with_rebate, price_bidding_without_rebate, seller_advisor_price,
   * selling_price, settlement_price, campaign_settlement_price, local_sip_settlement_price,
   * platform_exclusive_price, seller_exclusive_price, seller_member_exclusive_sku, item_price,
   * order_sync_price.
   *
   * Package Promotions:
   * bundle_deal, add_on_deal_main, add_on_deal_sub.
   */
  promotion_type: string;

  /**
   * Represents the unique identifier of a specific promotion applied to an item.
   * Each promotion_id corresponds to a distinct promotion rule or campaign, defined under a particular promotion_type.
   * The value is expressed in a numeric string format.
   */
  promotion_id: number;
}

interface EscrowDetailKitItem {
  /** The merchant item identifier of the product within the kit (only for BR local seller). */
  mt_item_id: number;

  /** The merchant product model of the item within the kit. (only for BR local seller). */
  mt_model_id: number;

  /** The quantity of this specific component within the kit. (only for BR local seller). */
  total_qty: number;

  /** The price of the item when it is listed as a standalone item. (only for BR local seller). */
  parent_item_price: number;

  /** The price of the item when it is listed within the kit (i.e. proportionally distributed) (only for BR local seller). */
  item_price_prorated: number;
}

interface EscrowDetailItem {
  /** ID of item. */
  item_id: number;

  /** Name of item. */
  item_name: string;

  /**
   * A item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU.
   * Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku: string;

  /** ID of the model that belongs to the same item. */
  model_id: number;

  /**
   * Name of the model that belongs to the same item.
   * A seller can offer variations of the same item. For example, the seller could create a fixed-priced listing
   * for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size
   * combination is a separate variation. Each variation can have a different quantity and price.
   */
  model_name: string;

  /**
   * A model SKU (stock keeping unit) is an identifier defined by a seller.
   * It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type,
   * size, and color, which are variations of one item in Shopee Listings.
   */
  model_sku: string;

  /**
   * The original price of the item before ANY promotion/discount in the listing currency.
   * It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price: number;

  /**
   * The agreed settlement price of items used as settlement basis, amount is in the primary currency.
   * (Only display for CB SIP affiliate shop.)
   */
  original_price_pri?: number;

  /**
   * For non-bundle deal case, this value will be same like item original_price; For bundle deal case,
   * this value will be price of sum of item price before bundle deal promo but after item promo.
   * It returns the subtotal of that specific item if quantity exceeds 1
   * (Only display for non cb sip affiliate shop.)
   */
  selling_price?: number;

  /**
   * The after-discount price of the item in the listing currency.
   * It returns the subtotal of that specific item if quantity exceeds 1.
   * If there is no discount, this value will be the same as that of original_price.
   */
  discounted_price: number;

  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme
   * mandated by the National Environment Agency (NEA). This will be an initial value and will not update after RR/cancellation.
   */
  bcrs_deposit?: number;

  /** The discount provided by seller for this item. */
  seller_discount?: number;

  /**
   * Final sum of each item Shopee discount of a specific order.
   * This amount will return remaining rebate value (i.e. remaining Shopee Item Rebate + remaining Shopee PIX Rebate) to seller.
   * (Only display for non cb sip affiliate order.)
   */
  shopee_discount?: number;

  /**
   * The offset of this item when the buyer consumed Shopee Coins upon checkout.
   * In case of bundle deal item, this value will return 0. Due to technical restriction, this field will return incorrect
   * value under bundle deal case if we don't configure it to 0.
   */
  discount_from_coin?: number;

  /** The offset of this item when the buyer use Shopee voucher. */
  discount_from_voucher_shopee?: number;

  /** The offset of this item when the buyer use seller-specific voucher. */
  discount_from_voucher_seller?: number;

  /**
   * The type of the item, default is "".
   * If the item is a bundle item the value is "bundle_deal", and if a add on deal item, the value is "add_on_deal".
   */
  activity_type?: string;

  /** If bundle_deal the is id of bundle deal, if add_on_deal this is id of add on deal. */
  activity_id?: number;

  /** Meaning a main or sub item for add_on_deal. */
  is_main_item?: boolean;

  /** This value indicates the number of identical items purchased at the same time by the same buyer from one listing/item. */
  quantity_purchased: number;

  /** Indicates whether this is a B2C owned item. */
  is_b2c_shop_item?: boolean;

  /** The amount of affiliate commission fee. Applicable for items sold via the Affiliate Program. */
  ams_commission_fee?: number;

  /** Indicates if this item is a kit. (only for BR local seller). */
  is_kit?: boolean;

  /** only applicable for BR local seller. */
  kit_items?: EscrowDetailKitItem;

  /** Promotion applied to this item. */
  promotion_list?: EscrowDetailPromotion[];

  /**
   * The total amount in the prim currency that the seller is expected to receive for the order and will change before order completed.
   * escrow_amount_pri=original_price_pri-seller_return_refund_pri-commission_fee_pri-service_fee_pri-drc_adjustable_refund_pri.
   * (Only display for cb sip affiliate order.)
   */
  escrow_amount_pri?: number;

  /** The total amount that paid by buyer in the primary currency. (Only display for cb sip affiliate order.) */
  buyer_total_amount_pri?: number;

  /** Amount returned to Seller in the event of Partial Return in the primary currency. (Only display for cb sip affiliate shop.) */
  seller_return_refund_pri?: number;

  /** The commission fee charged by Shopee platform if applicable in the primary currency. (Only display for cb sip affiliate shop.) */
  commission_fee_pri?: number;

  /** Amount charged by Shopee to seller for additional services in the primary currency. (Only display for cb sip affiliate shop.) */
  service_fee_pri?: number;

  /** The adjustable refund amount from Shopee Dispute Resolution Center in the primary currency after proration. (Only applicable for cb sip affiliate shop.) */
  drc_adjustable_refund_pri?: number;

  /** The currency of the country or region where the shop that real seller operates. (Only display for cb sip affiliate shop.) */
  pri_currency?: string;

  /** The currency of the country or region where shop opened in. (Only display for cb sip affiliate shop.) */
  aff_currency?: string;

  /** Exchange rate from primary shop currency to affiliate shop currency. */
  exchange_rate?: number;

  /** The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer. (Only available for CB SIP A Shops). */
  sip_subsidy?: number;

  /**
   * The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer.
   * This value is in the primary currency. (Only available for CB SIP A Shops).
   */
  sip_subsidy_pri?: number;
}

interface EscrowDetailOrderAdjustment {
  /** adjustment transaction amount. */
  amount: number;

  /** adjustment transaction complete date. */
  date: number;

  /** order level adjustment transaction's currency type. */
  currency: string;

  /**
   * Reason for adjustment.
   *
   * Possible cases could be:
   * - Return Refund deduction or compensation
   * - logistic issue deduction or compensation
   * - marketing fee deduction
   * - payment related fee
   */
  adjustment_reason: string;
}

interface EscrowDetailTenureInfo {
  /** Name of the payment channel that buyer used in checkout. */
  payment_channel_name: string;

  /** Tenure information. This will have value if payment channel used has tenure information, such as credit card. */
  instalment_plan: string;
}

interface EscrowDetailNetCommissionFeeInfo {
  /** The unique identifier of the commission rule applied to calculate the net commission fee. */
  rule_id: number;

  /** The net commission fee amount calculated based on the corresponding commission rule. */
  fee_amount: number;

  /** The display name of the commission rule for reference and readability. */
  rule_display_name: string;
}

interface EscrowDetailNetServiceFeeInfo {
  /** The unique identifier of the service fee rule applied to calculate the net service fee. */
  rule_id: number;

  /** The net service fee amount calculated based on the corresponding service fee rule. */
  fee_amount: number;

  /** The display name of the service fee rule for reference and readability. */
  rule_display_name: string;

  /** The category of the service fee, indicating the type of service the fee is charged for. */
  category: string;
}

interface EscrowDetailSellerProductRebate {
  /** This is the portion of Shopee rebate borne by seller. */
  amount: number;

  /** This is the offset to gross commission fee, reducing it to the net value. */
  commission_fee_offset: number;

  /** This is the offset to gross service fee, reducing it to the net value. */
  service_fee_offset: number;
}

interface EscrowDetailBuyerPaymentInfo {
  /** The payment method used by buyer. */
  buyer_payment_method?: string;

  /**
   * An additional service fee charged by shopee to Buyer at checkout. currently only applicable to ID region.
   * it is an initial value (will not be updated after RR/cancellation).
   */
  buyer_service_fee?: number;

  /**
   * The tax amount paid by buyer.
   *
   * currently this is a custom tax charged to CB orders in TW,CL,MX.
   */
  buyer_tax_amount?: number;

  /** The total amount paid by buyer at checkout moment. */
  buyer_total_amount?: number;

  /** The subscription fee paid by buyer for ShopeeVIP. */
  shopeevip_subtotal?: number;

  /**
   * The promotion provided by credit card.
   * it is an initial value (will not be updated after RR/cancellation).
   */
  credit_card_promotion?: number;

  /**
   * The icms tax paid by buyer. this is only applicable to BR region
   * it is an initial value (will not be updated after RR/cancellation).
   */
  icms_tax_amount?: number;

  /**
   * The import tax paid by buyer.
   * it is an initial value (will not be updated after RR/cancellation).
   */
  import_tax_amount?: number;

  /**
   * Transaction fee paid by buyer for the order. (Only display for non cb sip affiliate shop.).
   * Most regions would have this fee charged to buyer at checkout depending on the fee rules applied in each region.
   * it is an initial value (will not be updated after RR/cancellation).
   */
  initial_buyer_txn_fee?: number;

  /**
   * The insurance premium paid by buyer.
   * Currently only applicable to some regions like PH, MY, ID, VN, SG and TH it is an initial value
   * (will not be updated after RR/cancellation).
   */
  insurance_premium?: number;

  /**
   * The iof tax paid by buyer.
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  iof_tax_amount?: number;

  /**
   * Whether this order is paid by credit card. it's related to payment channel used at checkout.
   *
   * Value: false,true
   */
  is_paid_by_credit_card?: boolean;

  /**
   * The total item price paid by buyer at checkout.
   *
   * it is an initial value and will not be updated after RR/cancellation.
   */
  merchant_subtotal?: number;

  /**
   * The voucher provided by seller to offset some value needs to be paid by buyer.
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  seller_voucher?: number;

  /**
   * The shipping fee paid by buyer. (Only display for non cb sip affiliate shop.
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  shipping_fee?: number;

  /**
   * The shipping fee sst paid by buyer. Currently apply to MY region only
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  shipping_fee_sst_amount?: number;

  /**
   * The voucher provided by Shopee to offset the amount need to be paid by buyer.
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  shopee_voucher?: number;

  /**
   * This is an amount of coin used by buyer at checkout to offset some amount to be paid.
   *
   * it is an initial value (will not be updated after RR/cancellation).
   */
  shopee_coins_redeemed?: number;

  /** The fee charged to the buyer for packaging materials. */
  buyer_paid_packaging_fee?: number;

  /**
   * The total amount of all trade-in bonuses applied to a transaction.
   * This value is the summation of the bonuses contributed by all four parties: Shopee, Seller, Bank and Trade-in Partner.
   */
  trade_in_bonus?: number;

  /** A fee charged to the buyer for the special handling and transportation required for items that exceed a specified weight or dimension threshold. Only for ID local seller. */
  bulky_handling_fee?: number;

  /** The discount provided by PIX (Only applicable for BR region). */
  discount_pix?: number;

  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated
   * by the National Environment Agency (NEA). This will be an initial value and will not update after RR/cancellation.
   */
  bcrs_deposit?: number;
}

interface EscrowDetailOrderIncome {
  /**
   * The total amount that the seller is expected to receive for the order and will change before order is completed.
   *
   * For non cb sip affiliate shop (new formula):
   * escrow_amount= original_cost_of_goods_sold-original_shopee_discount+seller_return_refund+ shopee_discount-
   * voucher_from_seller- seller_coin_cash_back+ buyer_paid_shipping_fee- actual_shipping_fee+ shopee_shipping_rebate+
   * shipping_fee_discount_from_3pl- reverse_shipping_fee+ rsf_seller_protection_fee_claim_amount-
   * final_return_to_seller_shipping_fee- seller_transaction_fee- service_fee- commission_fee- campaign_fee-
   * shipping_seller_protection_fee_amount- delivery_seller_protection_fee_premium_amount-final_escrow_product_gst-
   * order_ams_commission_fee- escrow_tax-sales_tax_on_lvg-reverse_shipping_fee_sst-shipping_fee_sst-withholding_tax-
   * overseas_return_service_fee-vat_on_imported_goods - withholding_vat_tax - withholding_pit_tax -
   * seller_order_processing_fee + buyer_paid_packaging_fee - trade_in_bonus_by_seller - fbs_fee -
   * ads_escrow_top_up_fee_or_technical_support_fee - th_import_duty
   *
   * For cb sip affiliate shop: escrow_amount=escrow_amount_pri * exchange_rate
   *
   * note: Return refund amount = if adjustable RR, will equal to drc_adjustable_refund
   */
  escrow_amount?: number;

  /** The snapshot value of total amount that paid by buyer at checkout moment. */
  buyer_total_amount?: number;

  /**
   * The original price of the item before ANY promotion/discount in the listing currency.
   * It returns the subtotal of that specific item if quantity exceeds 1.
   */
  order_original_price?: number;

  /**
   * The original price of the item before ANY promotion/discount in the listing currency.
   * It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price?: number;

  /**
   * The total discounted price for this order.
   * It returns the subtotal of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_discounted_price?: number;

  /**
   * This field value = sum of item unit price.selling price comes from the sum up of each item's unit price.
   * For non-bundle deal case, this value will be same like order_original_price; For bundle deal case,
   * this value will be price of sum of item price before bundle deal promo but after item promo.It returns the subtotal
   * of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_selling_price?: number;

  /**
   * The total discount seller provided for this order.
   * It returns the subtotal of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_seller_discount?: number;

  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated
   * by the National Environment Agency (NEA). This value might be updated after RR/cancellation.
   */
  bcrs_deposit?: number;

  /** Final sum of each item seller discount of a specific order. (Only display for non cb sip affiliate shop. ) */
  seller_discount?: number;

  /**
   * Final sum of each item Shopee discount of a specific order.
   * This amount will Return remaining rebate value to seller. (Only display for non cb sip affiliate order. )
   */
  shopee_discount?: number;

  /** Final value of voucher provided by Seller for the order. (Only display for non cb sip affiliate shop. ) */
  voucher_from_seller?: number;

  /** Final value of voucher provided by Shopee for the order. (Only display for non cb sip affiliate shop. ) */
  voucher_from_shopee?: number;

  /** This value indicates the total amount offset when the buyer consumed Shopee Coins upon checkout. (Only display for non cb sip affiliate shop. ) */
  coins?: number;

  /** The shipping fee paid by buyer. (Only display for non cb sip affiliate shop. ) */
  buyer_paid_shipping_fee?: number;

  /** Tansaction fee paid by buyer for the order. (Only display for non cb sip affiliate shop. ) */
  buyer_transaction_fee?: number;

  /**
   * Amount incurred by Buyer for purchasing items outside of home country or region.
   * Amount may change after Return Refund. (Only display for non cb sip affiliate shop. )
   */
  cross_border_tax?: number;

  /** The amount offset via payment promotion. (Only display for non cb sip affiliate shop. ) */
  payment_promotion?: number;

  /**
   * The commission fee charged by Shopee platform if applicable.
   *
   * For cb sip affiliate shop: commission_fee=commission_fee_pri * exchange_rate
   */
  commission_fee?: number;

  /**
   * Amount charged by Shopee to seller for additional services.
   *
   * For cb sip affiliate shop: service_fee=service_fee_pri * exchange_rate
   *
   * For tw shop, there will be pre-order service fee included
   */
  service_fee?: number;

  /** Tansaction fee paid by seller for the order. (Only display for non cb sip affiliate shop. ) */
  seller_transaction_fee?: number;

  /** Compensation to seller in case of lost parcel. (Only display for non cb sip affiliate shop. ) */
  seller_lost_compensation?: number;

  /** Value of coins provided by Seller for purchasing with his or her store for the order. (Only display for non cb sip affiliate shop. ) */
  seller_coin_cash_back?: number;

  /** Cross-border tax imposed by the Indonesian government on sellers. (Only display for non cb sip affiliate shop. ) */
  escrow_tax?: number;

  /**
   * The estimated shipping fee is an estimation calculated by Shopee based on specific logistics courier's standard.
   * (Only display for non cb sip affiliate shop. )
   */
  estimated_shipping_fee?: number;

  /**
   * Final adjusted amount that seller has to bear as part of escrow.
   * This amount could be negative or positive. (Only display for non cb sip affiliate shop. )
   */
  final_shipping_fee?: number;

  /**
   * The final shipping cost of order and it is positive.
   * For Non-integrated logistics channel is 0. (Only display for non cb sip affiliate shop. )
   */
  actual_shipping_fee?: number;

  /**
   * The Service Tax charged on Seller Paid Shipping Fee for forward shipping, based on Malaysia SST regulations for shipping fees
   * on all orders. Definition of Seller Paid Shipping Fee is Actual Shipping Fee subtracted by sum of Shipping Fee Paid by Buyer
   * and Shipping Rebate From Shopee. (Only applicable for non cb sip affiliate shop)
   */
  shipping_fee_sst?: number;

  /** For CB shop, display weight used to calculate actual_shipping_fee for this order. */
  order_chargeable_weight?: number;

  /** The platform shipping subsidy to the seller. (Only display for non cb sip affiliate shop. ) */
  shopee_shipping_rebate?: number;

  /** The discount of shipping fee from 3PL. Currently only applicable to ID. (Only display for non cb sip affiliate shop. ) */
  shipping_fee_discount_from_3pl?: number;

  /** The shipping discount defined by seller. (Only display for non cb sip affiliate shop. ) */
  seller_shipping_discount?: number;

  /** The list of voucher code provided by seller. (Only display for non cb sip affiliate shop. ) */
  seller_voucher_code?: string[];

  /** The adjustable refund amount from Shopee Dispute Resolution Center. */
  drc_adjustable_refund?: number;

  /** Final amount paid by the buyer for the items in a specific order. (Only display for non cb sip affiliate shop. ) */
  cost_of_goods_sold?: number;

  /** Amount paid by the buyer for the items in a specific order. (Only display for non cb sip affiliate shop. ) */
  original_cost_of_goods_sold?: number;

  /**
   * Sum of each item Shopee discount of a specific order.
   * This amount will return initial rebate value (i.e. remaining Shopee Item Rebate + remaining Shopee PIX Rebate) to seller.
   * (Only display for non cb sip affiliate order. )
   */
  original_shopee_discount?: number;

  /** Amount returned to Seller in the event of Partial Return. */
  seller_return_refund?: number;

  /**
   * This object contains the detailed breakdown for all the items in this order, including regular items(non-activity)
   * and activity items.
   */
  items?: EscrowDetailItem[];

  /**
   * The total amount in the prim currency that the seller is expected to receive for the order and will change before order completed.
   * escrow_amount_pri=original_price_pri-seller_return_refund_pri-commission_fee_pri-service_fee_pri-drc_adjustable_refund_pri.
   * (Only display for cb sip affiliate order. )
   */
  escrow_amount_pri?: number;

  /** The total amount that paid by buyer in the primary currency. (Only display for cb sip affiliate order. ) */
  buyer_total_amount_pri?: number;

  /**
   * The original price of the item before ANY promotion/discount in the primary currency.
   * It returns the subtotal of that specific item if quantity exceeds 1.(Only display for cb sip affiliate order. )
   */
  original_price_pri?: number;

  /** Amount returned to Seller in the event of Partial Return in the primary currency. (Only display for cb sip affiliate shop. ) */
  seller_return_refund_pri?: number;

  /** The commission fee charged by Shopee platform if applicable in the primary currency. (Only display for cb sip affiliate shop. ) */
  commission_fee_pri?: number;

  /** Amount charged by Shopee to seller for additional services in the primary currency. (Only display for cb sip affiliate shop. ) */
  service_fee_pri?: number;

  /** The adjustable refund amount from Shopee Dispute Resolution Center in the primary currency after proration. (Only applicable for cb sip affiliate shop.) */
  drc_adjustable_refund_pri?: number;

  /** The currency of the country or region where the shop that real seller operates. (Only display for cb sip affiliate shop. ) */
  pri_currency?: string;

  /** The currency of the country or region where shop opened in. (Only display for cb sip affiliate shop. ) */
  aff_currency?: string;

  /** Exchange rate from primary shop currency to affiliate shop currency. */
  exchange_rate?: number;

  /** Shopee charges the reverse shipping fee for the returned order.The value of this field will be non-negative. */
  reverse_shipping_fee?: number;

  /**
   * The Service Tax charged on Reverse Shipping Fee for reverse shipping, based on Malaysia SST regulations for shipping fees
   * on all orders. (Only applicable for non cb sip affiliate shop)
   */
  reverse_shipping_fee_sst?: number;

  /** The total amount of product protection purchased during placing an order. */
  final_product_protection?: number;

  /** This value indicate the offset via credit card promotion. */
  credit_card_promotion?: number;

  /**
   * This value indicate the total transaction fee.
   *
   * credit_card_transaction_fee=buyer_transaction_fee+seller_transaction_fee
   */
  credit_card_transaction_fee?: number;

  /** Value-added Tax is required for online purchases based on EU Value-added Tax regulations . (Only display for non cb sip affiliate shop. ) */
  final_product_vat_tax?: number;

  /** Value-added Tax for product price is required for online purchases based on EU Value-added Tax regulations. (Only applicable for non cb sip affiliate shop. ) */
  final_shipping_vat_tax?: number;

  /** The campaign fee charged by Shopee platform. Only available for some local Indonesian shops. */
  campaign_fee?: number;

  /** The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer. (Only available for CB SIP A Shops) */
  sip_subsidy?: number;

  /**
   * The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer.
   * This value is in the primary currency. (Only available for CB SIP A Shops)
   */
  sip_subsidy_pri?: number;

  /**
   * The insurance claim amount if seller opt in to insurance program. this covers Reverse shipping Fee in the case of RR. As per Jun 2024:
   * - For ID & MY Local: After Extension on coverage to FSF due to RR. this claim amount will consist of FSF + RSF claim.
   * - For PH local: This will only cover RSF claim
   *
   * will be updated if there's any RR/cancellation
   */
  rsf_seller_protection_fee_claim_amount?: number;

  /** Service fee charged to seller in MY,ID,PH Local (as per Jun 2024) due to additional program purchased. */
  shipping_seller_protection_fee_amount?: number;

  /**
   * Goods and Service Tax for product price is required for imported goods (overseas orders) based on Singapore GST regulations.
   * (Only applicable for non cb sip affiliate shop selling in Singapore)
   */
  final_escrow_product_gst?: number;

  /**
   * Goods and Service Tax for shipping fee is required for imported goods (overseas orders) based on Singapore GST regulations.
   * (Only applicable for non cb sip affiliate shop selling in Singapore.)
   */
  final_escrow_shipping_gst?: number;

  /**
   * [Currently apply to ID & local orders only] An insurance premium charged to seller at the time parcel is picked up by 3PL
   * for insurance in case of parcel lost/damaged by 3PL.
   */
  delivery_seller_protection_fee_premium_amount?: number;

  /**
   * Order level adjustment transaction information.
   *
   * If the order without adjustment, no returned of the field.
   */
  order_adjustment?: EscrowDetailOrderAdjustment[];

  /** Total adjustment made to the order. */
  total_adjustment_amount?: number;

  /** Final income seller can get from this order after deduct the order-level adjustment. */
  escrow_amount_after_adjustment?: number;

  /** The amount of affiliate commission fee for this order. Applicable for orders sold via the Affiliate Program. */
  order_ams_commission_fee?: number;

  /** The payment method buyer used when do the order checkout. */
  buyer_payment_method?: string;

  /** The instalment plan buyer chosen when do the order checkout. Only applicable when payment method support instalment. */
  instalment_plan?: string;

  /** Sales Tax on Low Value Goods (LVG) is required for imported goods (overseas orders) based on Malaysia SST regulations for selective orders (e.g. CB LVG orders in MY) */
  sales_tax_on_lvg?: number;

  /** The amount of fee charged to seller (if any) for the failed delivery order. */
  final_return_to_seller_shipping_fee?: number;

  /**
   * Only for PH and ID local shops.
   *
   * PH: According to regulations issued by Bureau of Internal Revenue in PH, the Withholding Tax is applied to the gross
   * remittances sent by Shopee to online suppliers of goods and services.
   *
   * ID: According to regulations issued by Directorate General of Taxation in ID, the Withholding Tax is applied to the income
   * stated in the invoice generated via Shopee related to Seller and/or Merchants' sales in Shopee's platform.
   */
  withholding_tax?: number;

  /** This is overseas return service fee charged to sellers who register ORS program.(Only applicable for non cb sip affiliate shop) */
  overseas_return_service_fee?: number;

  /**
   * This is the prorated value from cash equivalent of coin offset due to adjustable RR.This field will only be updated when
   * there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_coins_value_offset_return_items?: number;

  /**
   * This is the prorated refund value from shopee voucher discount due to adjustable RR.This field will only be updated when
   * there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_shopee_voucher_offset_return_items?: number;

  /**
   * This is the prorated refund value from seller voucher discount due to adjustable RR.This field will only be updated when
   * there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_seller_voucher_offset_return_items?: number;

  /**
   * This is the prorated value from bank payment channel promo due to adjustable RR.This field will only be updated when there is
   * an adjustable RR.If it's a full RR or normal order will response 0.
   */
  prorated_payment_channel_promo_bank_offset_return_items?: number;

  /**
   * This is the prorated value from shopee payment channel promo due to adjustable RR.This field will only be updated when there is
   * an adjustable RR.If it's a full RR or normal order will response 0.
   */
  prorated_payment_channel_promo_shopee_offset_return_items?: number;

  /**
   * The claim amount given to seller if seller opt in to shipping fee service program. this covers Forward Shipping Fee cost
   * in the case of cancelled due to Failed delivery.
   */
  fsf_seller_protection_fee_claim_amount?: number;

  /**
   * 7% VAT is charged for imported goods entering Thailand.
   *
   * 8% VAT is charged for imported goods entering Vietnam
   */
  vat_on_imported_goods?: number;

  /** Tenure information list. */
  tenure_info_list?: EscrowDetailTenureInfo[];

  /** By VN law, E-commerce platforms need to Withhold VAT tax applicable to all VN business household and VN individual sellers */
  withholding_vat_tax?: number;

  /** By VN law, E-commerce platforms need to Withhold Personal Income Tax applicable to all VN business household and VN individual sellers */
  withholding_pit_tax?: number;

  /** For VN Withholding Tax. This is the Tax Registration Number (TRN) from Seller Info (Business information) of the seller at the point of order creation */
  tax_registration_code?: string;

  /** Order Processing Fee is the amount charged to sellers for every order created. */
  seller_order_processing_fee?: number;

  /** The fee charged to the buyer for packaging materials. */
  buyer_paid_packaging_fee?: number;

  /** The discount provided by Seller/ Retailers for buyers who opt for trade-in. */
  trade_in_bonus_by_seller?: number;

  /** Fulfilled by Shopee (FBS) Fee applied to this order, covering costs such as handling and storage and packaging. Only for PH Local Orders. */
  fbs_fee?: number;

  /**
   * The respective fee amounts after the proportional rebate deduction.The total net commission fee applied to the order,
   * calculated as the sum of all net commission fee items.
   *
   * -only for BR local sellers.
   */
  net_commission_fee?: number;

  /**
   * The respective fee amounts after the proportional rebate deduction.The total net service fee applied to the order,
   * calculated as the sum of all net service fee items.
   *
   * -only for BR local sellers.
   */
  net_service_fee?: number;

  /**
   * Returns a breakdown of the net commission fees.
   *
   * -only for BR local sellers.
   */
  net_commission_fee_info_list?: EscrowDetailNetCommissionFeeInfo[];

  /**
   * Returns a breakdown of the net service fees.
   *
   * -only for BR local sellers.
   */
  net_service_fee_info_list?: EscrowDetailNetServiceFeeInfo[];

  /**
   * The shopee rebate borne by seller.
   *
   * -only for BR local sellers.
   */
  seller_product_rebate?: EscrowDetailSellerProductRebate;

  /** [BR only]Final sum of pix discount of a specific order. (Only display for non cb sip affiliate shop.) */
  pix_discount?: number;

  /**
   * [BR only]This is the prorated value from pix discount due to adjustable RR.
   * This field will only be updated when there is an adjustable RR. If it's a full RR or normal order, will response 0.
   */
  prorated_pix_discount_offset_return_items?: number;

  /**
   * Includes both ads escrow top up fee (auto escrow top up to your ads balance) and technical support fee (charged by Shopee)
   *
   * The actual fee type included in this field varies depending on the seller type and selling region, and may represent one
   * of the following in Shopee Seller Center:
   *
   * Ads Escrow Top-Up Fee
   *
   * For local MY TH SG VN PH ID sellers and CNCB / JPCB / KRCB sellers selling in PH and ID
   *
   * For JPCB sellers selling in SG, MY, TH, and VN
   *
   * Technical Support Fee
   *
   * For CNCB sellers selling in SG, MY, TH, and VN
   *
   * Traffic Growth Fee
   *
   * For KRCB sellers selling in SG, MY, TH, and VN
   */
  ads_escrow_top_up_fee_or_technical_support_fee?: number;

  /** [TH only] Import Duty collected for imported goods entering Thailand. */
  th_import_duty?: number;

  /** [Only for BR local shop]Represents the portion of Shopee voucher that is not consumed after fee offset. */
  remaining_voucher?: number;

  /** The buyer payment info at order checkout moment. (snapshot value) */
  buyer_payment_info?: EscrowDetailBuyerPaymentInfo;
}

interface EscrowDetail {
  /** Shopee's unique identifier for an order. */
  order_sn: string;

  /** The username of buyer. */
  buyer_user_name: string;

  /** The list of the serial number of return. */
  return_order_sn_list: string[];

  /** Detail informations you are querying. */
  order_income: EscrowDetailOrderIncome;
}

interface ResponseEscrowDetail extends ShopeeResponseCommon<EscrowDetail> {}

export { ResponseEscrowDetail as ShopeeResponseEscrowDetail };

// ---- Appended: additional endpoints (batch 3) ----
/**
 * Enum generated for field ShopeeBuyerServiceFee
 */
export enum ShopeeBuyerServiceFee {
  RR = "RR",
  CANCELLATION = "cancellation",
}

/**
 * Enum generated for field ShopeePayService
 */
export enum ShopeePayService {
  PAYONEER = "payoneer",
  PINGPONG = "pingpong",
  LIANLIAN = "lianlian",
}

/**
 * Enum generated for field ShopeeAdjustmentLevel
 */
export enum ShopeeAdjustmentLevel {
  SHOP = "shop",
  ORDER = "order",
}

/**
 * Enum generated for field ShopeeStatus
 */
export enum ShopeeStatus {
  FAILED = "FAILED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  INITIAL = "INITIAL",
}

/**
 * Enum generated for field ShopeeTransactionTabType
 */
export enum ShopeeTransactionTabType {
  IO = "io",
  DISPLAY = "display",
  SPCT = "SPCT",
}

/**
 * Enum generated for field ShopeeMoneyFlow
 */
export enum ShopeeMoneyFlow {
  IO = "io",
  DISPLAY = "display",
  SPCT = "SPCT",
}

/**
 * ShopeeGenerateIncomeReportResponseData sub-interface for ShopeeGenerateIncomeReportResponse
 */
export interface ShopeeGenerateIncomeReportResponseData {
  /**
   * Identifier of income report file.
   */
  id?: number;
}

/**
 * Response payload for generate_income_report
 *
 * Trigger income report generation.
 */
export type ShopeeGenerateIncomeReportResponse = ShopeeResponseCommon<ShopeeGenerateIncomeReportResponseData>;

/**
 * ShopeeGenerateIncomeStatementResponseData sub-interface for ShopeeGenerateIncomeStatementResponse
 */
export interface ShopeeGenerateIncomeStatementResponseData {
  /**
   * Identifier of income statement file.
   */
  id?: number;
}

/**
 * Response payload for generate_income_statement
 *
 * Trigger income statement generation.
 */
export type ShopeeGenerateIncomeStatementResponse = ShopeeResponseCommon<ShopeeGenerateIncomeStatementResponseData>;

/**
 * ShopeeGetBillingTransactionInfoTransaction sub-interface for ShopeeGetBillingTransactionInfoResponseData
 */
export interface ShopeeGetBillingTransactionInfoTransaction {
  /**
   * each transaction's amount
   */
  amount?: number;
  /**
   * transaction currency
   */
  currency?: string;
  /**
   * transaction currency
   */
  order_sn?: string;
  /**
   * transaction belongs to which type
   */
  cost_header?: string;
  /**
   * transaction detailed scenarios
   */
  scenario?: string;
  /**
   * detailed description for this transactions
   */
  remark?: string;
  /**
   * To define this transaction happen at order level or shop level. e.g. shop level adjustment
   */
  level?: string;
  /**
   * could be Escrow (Order Income) or Adjustment (for this order)
   */
  billing_transaction_type?: string;
  /**
   * Will be either "To Release" or "Released".
   */
  billing_transaction_status?: string;
}

/**
 * ShopeeGetBillingTransactionInfoResponseData sub-interface for ShopeeGetBillingTransactionInfoResponse
 */
export interface ShopeeGetBillingTransactionInfoResponseData {
  transactions?: ShopeeGetBillingTransactionInfoTransaction;
  more?: boolean;
  next_cursor?: string;
}

/**
 * Response payload for get_billing_transaction_info
 *
 * This API is applicable for Cross Border (CB) sellers only to get the detailed payout transaction data, both released and to-be released transaction can be found in here
 */
export type ShopeeGetBillingTransactionInfoResponse =
  ShopeeResponseCommon<ShopeeGetBillingTransactionInfoResponseData>;

/**
 * ShopeeGetEscrowDetailBatchKitItem sub-interface for ShopeeGetEscrowDetailBatchItem
 */
export interface ShopeeGetEscrowDetailBatchKitItem {
  /**
   * The merchant item identifier of the product within the kit (Only for BR Local Sellers)
   */
  original_product_id?: number;
  /**
   * The merchant product model of the item within the kit (Only for BR Local Sellers)
   */
  original_model_id?: number;
  /**
   * The quantity of this specific component within the kit. (Only for BR Local Sellers)
   */
  total_qty?: number;
  /**
   * The price of the item when it is listed as a standalone item.
   */
  original_price?: number;
  /**
   * The price of the item when it is listed within the kit (i.e. proportionally distributed) (Only for BR Local Sellers)
   */
  proportional_price?: number;
}

/**
 * ShopeeGetEscrowDetailBatchPromotion sub-interface for ShopeeGetEscrowDetailBatchItem
 */
export interface ShopeeGetEscrowDetailBatchPromotion {
  /**
   * Indicates the type of item- or package-level promotion applied to a product. Each item can be associated with at most one item promotion and one package promotion at a time.Item Promotions:low_price_promotiondeep_discountplatform_saleseller_discountflash_salewholesalewelcome_package_free_giftbrand_flash_salein_shop_flash_salesynced_promoplatform_streaming_priceseller_streaming_priceexclusive_streamer_priceprice_bidding_with_rebateprice_bidding_without_rebateseller_advisor_priceselling_pricesettlement_pricecampaign_settlement_pricelocal_sip_settlement_priceplatform_exclusive_priceseller_exclusive_priceseller_member_exclusive_skuitem_priceorder_sync_pricePackage Promotions:bundle_dealadd_on_deal_mainadd_on_deal_sub
   */
  promotion_type?: string;
  /**
   * Represents the unique identifier of a specific promotion applied to an item. Each promotion_id corresponds to a distinct promotion rule or campaign, defined under a particular promotion_type.
   */
  promotion_id?: number;
}

/**
 * ShopeeGetEscrowDetailBatchItem sub-interface for ShopeeGetEscrowDetailBatchOrderIncome
 */
export interface ShopeeGetEscrowDetailBatchItem {
  /**
   * ID of item
   */
  item_id?: number;
  /**
   * Name of item
   */
  item_name?: string;
  /**
   * A item SKU (stock keeping unit) is an identifier defined by a seller, sometimes called parent SKU. Item SKU can be assigned to an item in Shopee Listings.
   */
  item_sku?: string;
  /**
   * ID of the model that belongs to the same item.
   */
  model_id?: number;
  /**
   * Name of the model that belongs to the same item. A seller can offer variations of the same item. For example, the seller could create a fixed-priced listing for a t-shirt design and offer the shirt in different colors and sizes. In this case, each color and size combination is a separate variation. Each variation can have a different quantity and price.
   */
  model_name?: string;
  /**
   * A model SKU (stock keeping unit) is an identifier defined by a seller. It is only intended for the seller's use. Many sellers assign a SKU to an item of a specific type, size, and color, which are variations of one item in Shopee Listings.
   */
  model_sku?: string;
  /**
   * The identity of order item. In case the order item is a bundle deal, this value will be unique to distinguish the order item.
   */
  line_item_id?: number;
  /**
   * The original price of the item before ANY promotion/discount in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price?: number;
  /**
   * The agreed settlement price of items used as settlement basis, amount is in the primary currency. (Only display for CB SIP affiliate shop.)
   */
  original_price_pri?: number;
  /**
   * For non-bundle deal case, this value will be same like item original_price; For bundle deal case, this value will be price of sum of item price before bundle deal promo but after item promo. It returns the subtotal of that specific item if quantity exceeds 1 (Only display for non cb sip affiliate shop.)
   */
  selling_price?: number;
  /**
   * The after-discount price of the item in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1. If there is no discount, this value will be the same as that of original_price.
   */
  discounted_price?: number;
  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated by the National Environment Agency (NEA). This will be an initial value and will not update after RR/cancellation.
   */
  bcrs_deposit?: number;
  /**
   * The discount provided by seller for this item
   */
  seller_discount?: number;
  /**
   * The discount provided by Shopee for this item
   */
  shopee_discount?: number;
  /**
   * The offset of this item when the buyer consumed Shopee Coins upon checkout. In case of bundle deal item, this value will return 0. Due to technical restriction, this field will return incorrect value under bundle deal case if we don’t configure it to 0.
   */
  discount_from_coin?: number;
  /**
   * The offset of this item when the buyer use Shopee voucher.
   */
  discount_from_voucher_shopee?: number;
  /**
   * The offset of this item when the buyer use seller-specific voucher.
   */
  discount_from_voucher_seller?: number;
  /**
   * The type of the item, default is "". If the item is a bundle item the value is "bundle_deal", and if a add on deal item, the value is "add_on_deal"
   */
  activity_type?: string;
  /**
   * If bundle_deal the is id of bundle deal, if add_on_deal this is id of add on deal.
   */
  activity_id?: number;
  /**
   * Meaning a main or sub item for add_on_deal.
   */
 is_main_item?: boolean;
  /**
   * This value indicates the number of identical items purchased at the same time by the same buyer from one listing/item.
   */
  quantity_purchased?: number;
  /**
   * Indicates whether this is a B2C owned item.
   */
  is_b2c_shop_item?: boolean;
  /**
   * The amount of affiliate commission fee. Applicable for items sold via the Affiliate Program.
   */
  ams_commission_fee?: number;
  /**
   * Indicates if this item is a kit. (Only for BR Local Sellers)
   */
  is_kit?: boolean;
  /**
   * Only applicable to BR local sellers
   */
  kit_items?: ShopeeGetEscrowDetailBatchKitItem;
  promotion_list?: ShopeeGetEscrowDetailBatchPromotion[];
}

/**
 * ShopeeGetEscrowDetailBatchNetCommissionFeeInfo sub-interface for ShopeeGetEscrowDetailBatchOrderIncome
 */
export interface ShopeeGetEscrowDetailBatchNetCommissionFeeInfo {
  /**
   * The unique identifier of the commission rule applied to calculate the net commission fee.
   */
  rule_id?: number;
  /**
   * The net commission fee amount calculated based on the corresponding commission rule.
   */
  fee_amount?: number;
  /**
   * The display name of the commission rule for reference and readability.
   */
  rule_display_name?: string;
}

/**
 * ShopeeGetEscrowDetailBatchNetServiceFeeInfo sub-interface for ShopeeGetEscrowDetailBatchOrderIncome
 */
export interface ShopeeGetEscrowDetailBatchNetServiceFeeInfo {
  /**
   * The unique identifier of the service fee rule applied to calculate the net service fee.
   */
  rule_id?: number;
  /**
   * The net service fee amount calculated based on the corresponding service fee rule.
   */
  fee_amount?: number;
  /**
   * The display name of the service fee rule for reference and readability.
   */
  rule_display_name?: string;
  /**
   * The category of the service fee, indicating the type of service the fee is charged for.
   */
  category?: string;
}

/**
 * ShopeeGetEscrowDetailBatchSellerProductRebate sub-interface for ShopeeGetEscrowDetailBatchOrderIncome
 */
export interface ShopeeGetEscrowDetailBatchSellerProductRebate {
  /**
   * This is the portion of Shopee rebate borne by seller.
   */
  amount?: number;
  /**
   * This is the offset to gross commission fee, reducing it to the net value.
   */
  commission_fee_offset?: number;
  /**
   * This is the offset to gross service fee, reducing it to the net value.
   */
  service_fee_offset?: number;
}

/**
 * ShopeeGetEscrowDetailBatchOrderIncome sub-interface for ShopeeGetEscrowDetailBatchEscrowDetail
 */
export interface ShopeeGetEscrowDetailBatchOrderIncome {
  /**
   * The total amount that the seller is expected to receive for the order and will change before order is completed. For non cb sip affiliate shop (new formula): escrow_amount= original_cost_of_goods_sold-original_shopee_discount+seller_return_refund+ shopee_discounts- voucher_from_seller- seller_coin_cash_back+ buyer_paid_shipping_fee- actual_shipping_fee+ shopee_shipping_rebate+ shipping_fee_discount_from_3pl- reverse_shipping_fee+ rsf_seller_protection_fee_claim_amount+ fsf_seller_protection_fee_claim_amount- final_return_to_seller_shipping_fee- seller_transaction_fee- service_fee- commission_fee- campaign_fee- shipping_seller_protection_fee_premium_amount- delivery_seller_protection_fee_premium_amount-final_escrow_product_gst- order_ams_commission fee- escrow_tax-sales_tax_on_lvg-reverse_shipping_fee_sst-shipping_fee_sst-withholding_tax-overseas_return_service_fee-vat_on_imported_goods - withholding_vat_tax - withholding_pit_tax - withholding_cit_tax - seller_order_processing_fee + buyer_paid_packaging_fee - trade_in_bonus_seller - fbs_fee - ads_escrow_top_up_fee_or_technical_support_fee - th_import_dutyFor cb sip affiliate shop: escrow_amount=escrow_amount_pri * exchange_ratenote: Return refund amount = if adjustable RR, will equal to drc_adjustable_refund
   */
  escrow_amount?: number;
  /**
   * The original price of the item before ANY promotion/discount in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1.
   */
  order_original_price?: number;
  /**
   * The original price of the item before ANY promotion/discount in the listing currency. It returns the subtotal of that specific item if quantity exceeds 1.
   */
  original_price?: number;
  /**
   * This field value = sum of item unit price.selling price comes from the sum up of each item's unit price. For non-bundle deal case, this value will be same like order_original_price; For bundle deal case, this value will be price of sum of item price before bundle deal promo but after item promo.It returns the subtotal of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_selling_price?: number;
  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated by the National Environment Agency (NEA). This value might be updated after RR/cancellation.
   */
  bcrs_deposit?: number;
  /**
   * The total discount seller provided for this order. It returns the subtotal of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_seller_discount?: number;
  /**
   * Final sum of each item seller discount of a specific order. (Only display for non cb sip affiliate shop. )
   */
  seller_discount?: number;
  /**
   * The total discounted price for this order. It returns the subtotal of that specific item if quantity exceeds 1. (Only display for non cb sip affiliate shop. )
   */
  order_discounted_price?: number;
  /**
   * Final sum of each item Shopee discount of a specific order. This amount will return remaining rebate value (i.e. remaining Shopee Item Rebate + remaining Shopee PIX Rebate) to seller. (Only display for non cb sip affiliate order. )
   */
  shopee_discount?: number;
  /**
   * Final value of voucher provided by Seller for the order. (Only display for non cb sip affiliate shop. )
   */
  voucher_from_seller?: number;
  /**
   * Final value of voucher provided by Shopee for the order. (Only display for non cb sip affiliate shop. )
   */
  voucher_from_shopee?: number;
  /**
   * Final value of voucher provided by External Party for the order. (Only display for non cb sip affiliate shop.)
   */
  voucher_from_external_party?: number;
  /**
   * This value indicates the total amount offset when the buyer consumed Shopee Coins upon checkout. (Only display for non cb sip affiliate shop. )
   */
  coins?: number;
  /**
   * Amount incurred by Buyer for purchasing items outside of home country. Amount may change after Return Refund. (Only display for non cb sip affiliate shop. )
   */
  cross_border_tax?: number;
  /**
   * The amount offset via payment promotion. (Only display for non cb sip affiliate shop. )
   */
  payment_promotion?: number;
  /**
   * The commission fee charged by Shopee platform if applicable.For CB SIP affiliate shop: commission_fee=commission_fee_pri * exchange_rate
   */
  commission_fee?: number;
  /**
   * Amount charged by Shopee to seller for additional services.For CB SIP affiliate shop: service_fee=service_fee_pri * exchange_rate
   */
  service_fee?: number;
  /**
   * Tansaction fee paid by seller for the order. (Only display for non cb sip affiliate shop. )
   */
  seller_transaction_fee?: number;
  /**
   * Compensation to seller in case of lost parcel. (Only display for non cb sip affiliate shop. )
   */
  seller_lost_compensation?: number;
  /**
   * Value of coins provided by Seller for purchasing with his or her store for the order. (Only display for non cb sip affiliate shop. )
   */
  seller_coin_cash_back?: number;
  /**
   * Cross-border tax imposed by the Indonesian government on sellers. (Only display for non cb sip affiliate shop. )
   */
  escrow_tax?: number;
  /**
   * Final adjusted amount that seller has to bear as part of escrow. This amount could be negative or positive. (Only display for non cb sip affiliate shop. )
   */
  final_shipping_fee?: number;
  /**
   * The final shipping cost of order and it is positive. For Non-integrated logistics channel is 0. (Only display for non cb sip affiliate shop. )
   */
  actual_shipping_fee?: number;
  /**
   * The platform shipping subsidy to the seller. (Only display for non cb sip affiliate shop. )
   */
  shopee_shipping_rebate?: number;
  /**
   * The Service Tax charged on Seller Paid Shipping Fee for forward shipping, based on Malaysia SST regulations for shipping fees on all orders. Definition of Seller Paid Shipping Fee is Actual Shipping Fee subtracted by sum of Shipping Fee Paid by Buyer and Shipping Rebate From Shopee. (Only applicable for non cb sip affiliate shop)
   */
  shipping_fee_sst?: number;
  /**
   * The discount of shipping fee from 3PL. Currently only applicable to ID. (Only display for non cb sip affiliate shop. )
   */
  shipping_fee_discount_from_pl?: number;
  /**
   * The shipping discount defined by seller. (Only display for non cb sip affiliate shop. )
   */
  seller_shipping_discount?: number;
  /**
   * The estimated shipping fee is an estimation calculated by Shopee based on specific logistics courier's standard. (Only display for non cb sip affiliate shop. )
   */
  estimated_shipping_fee?: number;
  /**
   * The list of voucher code provided by seller. (Only display for non cb sip affiliate shop. )
   */
  seller_voucher_code?: number;
  /**
   * The adjustable refund amount from Shopee Dispute Resolution Center.
   */
  drc_adjustable_refund?: number;
  /**
   * Amount returned to Seller in the event of Partial Return.
   */
  refund_amount_to_buyer?: number;
  /**
   * Final amount paid by the buyer for the items in a specific order. (Only display for non cb sip affiliate shop. )
   */
  cost_of_goods_sold?: number;
  /**
   * Amount paid by the buyer for the items in a specific order. (Only display for non cb sip affiliate shop. )
   */
  original_cost_of_goods_sold?: number;
  /**
   * Sum of each item Shopee discount of a specific order. This amount will return initial rebate value (i.e. remaining Shopee Item Rebate + remaining Shopee PIX Rebate) to seller. (Only display for non cb sip affiliate order. )
   */
  original_shopee_discount?: number;
  /**
   * This object contains the detailed breakdown for all the items in this order, including regular items(non-activity) and activity items.
   */
  items?: ShopeeGetEscrowDetailBatchItem[];
  /**
   * The total amount in the prim currency that the seller is expected to receive for the order and will change before order completed . escrow_amount_pri=original_price_pri-seller_return_refund_pri-commission_fee_pri-service_fee_pri-drc_adjustable_refund_pri.(Only display for cb sip affiliate order. )
   */
  escrow_amount_pri?: number;
  /**
   * The total amount that paid by buyer in the primary currency. (Only display for cb sip affiliate order. )
   */
  buyer_total_amount_pri?: number;
  /**
   * The original price of the item before ANY promotion/discount in the primary currency. It returns the subtotal of that specific item if quantity exceeds 1.(Only display for cb sip affiliate order. )<path></path>
   */
  original_price_pri?: number;
  /**
   * Amount returned to Seller in the event of Partial Return in the primary currency. (Only display for cb sip affiliate shop. )
   */
  seller_return_refund_pri?: number;
  /**
   * The commission fee charged by Shopee platform if applicable in the primary currency. (Only display for cb sip affiliate shop. )
   */
  commission_fee_pri?: number;
  /**
   * Amount charged by Shopee to seller for additional services in the primary currency. (Only display for cb sip affiliate shop. )
   */
  service_fee_pri?: number;
  /**
   * The adjustable refund amount from Shopee Dispute Resolution Center in the primary currency after proration. (Only applicable for cb sip affiliate shop.)
   */
  drc_adjustable_refund_pri?: number;
  /**
   * The currency of the country or region where the shop that real seller operates. (Only display for cb sip affiliate shop. )
   */
  pri_currency?: string;
  /**
   * The currency of the country or region where shop opened in. (Only display for cb sip affiliate shop. )
   */
  aff_currency?: string;
  /**
   * Exchange rate from primary shop currency to affiliate shop currency.
   */
  exchange_rate?: number;
  /**
   * Shopee charges the reverse shipping fee for the returned order.The value of this field will be non-negative.
   */
  reverse_shipping_fee?: number;
  /**
   * The Service Tax charged on Reverse Shipping Fee for reverse shipping, based on Malaysia SST regulations for shipping fees on all orders. (Only applicable for non cb sip affiliate shop)
   */
  reverse_shipping_fee_sst?: number;
  /**
   * The total amount of product protection purchased during placing an order.
   */
  final_product_protection?: number;
  /**
   * This value indicate the offset via credit card promotion.
   */
  credit_card_promotion?: number;
  /**
   * This value indicate the total transaction fee.credit_card_transaction_fee=buyer_transaction_fee+seller_transaction_fee
   */
  credit_card_transaction_fee?: number;
  /**
   * Value-added Tax is required for online purchases based on EU Value-added Tax regulations . (Only display for non cb sip affiliate shop. )
   */
  final_product_vat_tax?: number;
  /**
   * Value-added Tax for product price is required for online purchases based on EU Value-added Tax regulations. (Only applicable for non cb sip affiliate shop. )
   */
  final_shipping_vat_tax?: number;
  /**
   * The campaign fee charged by Shopee platform. Only available for some local Indonesian shops.
   */
  campaign_fee?: number;
  /**
   * The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer. (Only available for CB SIP A Shops)
   */
  sip_subsidy?: number;
  /**
   * The SIP subsidy amount is the difference between the item settlement price set by seller and item price actually paid by buyer. This value is in the primary currency. (Only available for CB SIP A Shops)
   */
  sip_subsidy_pri?: number;
  /**
   * The insurance claim amount if seller opt in to insurance program. this covers Reverse shipping Fee in the case of RR. As per Jun 2024:- For ID & MY Local: After Extension on coverage to FSF due to RR. this claim amount will consist of FSF + RSF claim.- For PH local: This will only cover RSF claimwill be updated if there's any RR/cancellation
   */
  rsf_seller_protection_fee_claim_amount?: number;
  /**
   * Amount charged by Shopee to seller for additional services. Only apply for PH local orders.
   */
  rsf_seller_protection_fee_premium_amount?: number;
  /**
   * Goods and Service Tax for product price is required for imported goods (overseas orders) based on Singapore GST regulations. (Only applicable for non cb sip affiliate shop selling in Singapore)
   */
  final_escrow_product_gst?: number;
  /**
   * Goods and Service Tax for shipping fee is required for imported goods (overseas orders) based on Singapore GST regulations. (Only applicable for non cb sip affiliate shop selling in Singapore.)
   */
  final_escrow_shipping_gst?: number;
  /**
   * [Currently apply to ID & local orders only] An insurance premium charged to seller at the time parcel is picked up by 3PL for insurance in case of parcel lost/damaged by 3PL.
   */
  delivery_seller_protection_fee_premium_amount?: number;
  /**
   * The amount of affiliate commission fee for this order. Applicable for orders sold via the Affiliate Program.
   */
  order_ams_commission_fee?: number;
  /**
   * The payment method buyer used when do the order checkout.
   */
  buyer_payment_method?: number;
  /**
   * The instalment plan buyer chosen when do the order checkout. Only applicable when payment method support instalment.
   */
  instalment_plan?: number;
  /**
   * Sales Tax on Low Value Goods (LVG) is required for imported goods (overseas orders) based on Malaysia SST regulations for selective orders (e.g. CB LVG orders in MY)
   */
  sales_tax_on_lvg?: number;
  /**
   * Only for PH and ID local shops.PH: According to regulations issued by Bureau of Internal Revenue in PH, the Withholding Tax is applied to the gross remittances sent by Shopee to online suppliers of goods and services.ID: According to regulations issued by Directorate General of Taxation in ID, the Withholding Tax is applied to the income stated in the invoice generated via Shopee related to Seller and/or Merchants' sales in Shopee's platform.
   */
  withholding_tax?: number;
  /**
   * This is overseas return service fee charged to sellers who register ORS program.(Only applicable for non cb sip affiliate shop)
   */
  overseas_return_service_fee?: number;
  /**
   * This is the prorated value from cash equivalent of coin offset due to adjustable RR.This field will only be updated when there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_coins_value_offset_return_items?: number;
  /**
   * This is the prorated refund value from shopee voucher discount due to adjustable RR.This field will only be updated when there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_shopee_voucher_offset_return_items?: number;
  /**
   * This is the prorated refund value from seller voucher discount due to adjustable RR.This field will only be updated when there is an adjustable RR. If it's a full RR or normal order will response 0.
   */
  prorated_seller_voucher_offset_return_items?: number;
  /**
   * This is the prorated value from bank payment channel promo due to adjustable RR.This field will only be updated when there is an adjustable RR.If it's a full RR or normal order will response 0.
   */
  prorated_payment_channel_promo_bank_offset_return_items?: number;
  /**
   * This is the prorated value from shopee payment channel promo due to adjustable RR.This field will only be updated when there is an adjustable RR.If it's a full RR or normal order will response 0.
   */
  prorated_payment_channel_promo_shopee_offset_return_items?: number;
  /**
   * The claim amount given to seller if seller opt in to shipping fee service program. this covers Forward Shipping Fee cost in the case of cancelled due to Failed delivery. only apply to PH Local as per Jun 2024.
   */
  fsf_seller_protection_fee_claim_amount?: number;
  /**
   * Service fee charged to seller in MY,ID,PH,BR Local (as per Jun 2024) due to additional program purchased
   */
  shipping_seller_protection_fee_amount?: number;
  /**
   * The amount of fee charged to seller (if any) for the failed delivery order
   */
  final_return_to_seller_shipping_fee?: number;
  /**
   * 7% VAT is charged for imported goods entering Thailand
   */
  vat_on_imported_goods?: number;
  /**
   * By VN law, E-commerce platforms need to Withhold VAT tax applicable to all VN business household and VN individual sellers
   */
  withholding_vat_tax?: number;
  /**
   * By VN law, E-commerce platforms need to Withhold Personal Income Tax applicable to all VN business household and VN individual sellers
   */
  withholding_pit_tax?: number;
  /**
   * By VN law, E-commerce platforms need to Withhold Personal Income Tax applicable to corporate sellers selling in VN region
   */
  withholding_cit_tax?: number;
  /**
   * For VN Withholding Tax. This is the Tax Registration Number (TRN) from Seller Info (Business information) of the seller at the point of order creation
   */
  tax_registration_code?: string;
  /**
   * Order Processing Fee is the amount charged to sellers for every order created.
   */
  seller_order_processing_fee?: number;
  /**
   * The fee charged to the buyer for packaging materials.
   */
  buyer_paid_packaging_fee?: number;
  /**
   * The discount provided by Seller/Retailers for buyers who opt for trade-in.
   */
  trade_in_bonus_seller?: number;
  /**
   * Fulfilled by Shopee (FBS) Fee applied to this order, covering costs such as handling and storage and packaging. Only for PH Local Orders.
   */
  fbs_fee?: number;
  /**
   * The respective fee amounts after the proportional rebate deduction.The total net commission fee applied to the order, calculated as the sum of all net commission fee items.-only for BR local sellers.
   */
  net_commission_fee?: number;
  /**
   * The respective fee amounts after the proportional rebate deduction.The total net service fee applied to the order, calculated as the sum of all net service fee items.-only for BR local sellers.
   */
  net_service_fee?: number;
  /**
   * Returns a breakdown of the net commission fees.-only for BR local sellers.
   */
  net_commission_fee_info_list?: ShopeeGetEscrowDetailBatchNetCommissionFeeInfo[];
  /**
   * Returns a breakdown of the net service fees.-only for BR local sellers.
   */
  net_service_fee_info_list?: ShopeeGetEscrowDetailBatchNetServiceFeeInfo[];
  /**
   * The shopee rebate borne by seller.-only for BR local sellers.
   */
  seller_product_rebate?: ShopeeGetEscrowDetailBatchSellerProductRebate;
  /**
   * [BR only]Final sum of pix discount of a specific order. (Only display for non cb sip affiliate shop.)
   */
  pix_discount?: number;
  /**
   * [BR only]This is the prorated value from pix discount due to adjustable RR. This field will only be updated when there is an adjustable RR. If it's a full RR or normal order, will response 0.
   */
  prorated_pix_discount_offset_return_items?: number;
  /**
   * Includes both ads escrow top up fee (auto escrow top up to your ads balance) and technical support fee (charged by Shopee)The actual fee type included in this field varies depending on the seller type and selling region, and may represent one of the following in Shopee Seller Center:Ads Escrow Top-Up FeeFor local MY TH SG VN PH ID sellers and CNCB / JPCB / KRCB sellers selling in PH and IDFor JPCB sellers selling in SG, MY, TH, and VNTechnical Support FeeFor CNCB sellers selling in SG, MY, TH, and VNTraffic Growth FeeFor KRCB sellers selling in SG, MY, TH, and VN
   */
  ads_escrow_top_up_fee_or_technical_support_fee?: number;
  /**
   * [TH only] Import Duty collected for imported goods entering Thailand
   */
  th_import_duty?: number;
  /**
   * [Only for BR local shop]Represents the portion of Shopee voucher that is not consumed after fee offset.
   */
  remaining_voucher?: number;
}

/**
 * ShopeeGetEscrowDetailBatchBuyerPaymentInfo sub-interface for ShopeeGetEscrowDetailBatchEscrowDetail
 */
export interface ShopeeGetEscrowDetailBatchBuyerPaymentInfo {
  /**
   * The payment method used by buyer.
   */
  buyer_payment_method?: string;
  /**
   * An additional service fee charged by shopee to Buyer at checkout. currently only applicable to ID region.it is an initial value (will not be updated after RR/cancellation)
   */
  buyer_service_fee?: ShopeeBuyerServiceFee | string | number;
  /**
   * The tax amount paid by buyer.currently this is a custom tax charged to CB orders in TW,CL,MX
   */
  buyer_tax_amount?: number;
  /**
   * The total amount paid by buyer at checkout moment.
   */
  buyer_total_amount?: number;
  /**
   * The subscription fee paid by buyer for ShopeeVIP.
   */
  shopeevip_subtotal?: number;
  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated by the National Environment Agency (NEA). This will be an initial value and will not update after RR/cancellation.
   */
  bcrs_discount?: number;
  /**
   * The promotion provided by credit card.it is an initial value (will not be updated after RR/cancellation)
   */
  credit_card_promotion?: number;
  /**
   * The icms tax paid by buyer. this is only applicable to BR region.it is an initial value (will not be updated after RR/cancellation)
   */
  icms_tax_amount?: number;
  /**
   * The import tax paid by buyer. it is an initial value (will not be updated after RR/cancellation)
   */
  import_tax_amount?: number;
  /**
   * Transaction fee paid by buyer for the order. (Only display for non cb sip affiliate shop. ). Most regions would have this fee charged to buyer at checkout depending on the fee rules applied in each region.it is an initial value (will not be updated after RR/cancellation)
   */
  initial_buyer_txn_fee?: number;
  /**
   * The insurance premium paid by buyer. Currently only applicable to some regions like ID & BRit is an initial value (will not be updated after RR/cancellation)
   */
  insurance_premium?: number;
  /**
   * The iof tax paid by buyer. this is only applicable for BR region.it is an initial value (will not be updated after RR/cancellation)
   */
  iof_tax_amount?: number;
  /**
   * Whether this order is paid by credit card. it's related to payment channel used at checkout
   */
  is_paid_by_credit_card?: boolean;
  /**
   * The total item price paid by buyer at checkout.it is an initial value and will not be updated after RR/cancellation
   */
  merchant_subtotal?: number;
  /**
   * The voucher provided by seller to offset some value needs to be paid by buyer.it is an initial value (will not be updated after RR/cancellation)
   */
  seller_voucher?: number;
  /**
   * The shipping fee paid by buyer. (Only display for non cb sip affiliate shop. it is an initial value (will not be updated after RR/cancellation)
   */
  shipping_fee?: number;
  /**
   * The shipping fee sst paid by buyer. Currently apply to MY region only it is an initial value (will not be updated after RR/cancellation)
   */
  shipping_fee_sst_amount?: number;
  /**
   * The voucher provided by Shopee to offset the amount need to be paid by buyer.it is an initial value (will not be updated after RR/cancellation)
   */
  shopee_voucher?: number;
  /**
   * This is an amount of coin used by buyer at checkout to offset some amount to be paid. it is an initial value (will not be updated after RR/cancellation)
   */
  shopee_coins_redeemed?: number;
  /**
   * The fee charged to the buyer for packaging materials.
   */
  buyer_paid_packaging_fee?: number;
  /**
   * The total amount of all trade-in bonuses applied to a transaction. This value is the summation of the bonuses contributed by all four parties: Shopee, Seller, Bank and Trade-in Partner.
   */
  trade_in_bonus?: number;
  /**
   * A fee charged to the buyer for the special handling and transportation required for items that exceed a specified weight or dimension threshold.Only for local ID sellers.
   */
  bulky_handling_fee?: number;
  /**
   * The discount provided by PIX (Only applicable for BR region)
   */
  discount_pix?: number;
  /**
   * The deposit fee paid by buyer of $0.10 per container as part of the SG Beverage Container Return Scheme mandated by the National Environment Agency (NEA). This will be an initial value and will not update after RR/cancellation.
   */
  bcrs_deposit?: number;
  /**
   * The voucher provided by Ads team to offset the amount need to be paid by buyer.it is an initial value (will not be updated after RR/cancellation)
   */
  ads_voucher_discount?: number;
  /**
   * The subscription fee paid by buyer for instant(Only for BR Local Shops)
   */
  buyer_instant_fee?: number;
}

/**
 * ShopeeGetEscrowDetailBatchEscrowDetail sub-interface for ShopeeGetEscrowDetailBatchResponseDataItem
 */
export interface ShopeeGetEscrowDetailBatchEscrowDetail {
  /**
   * Shopee's unique identifier for an order.<path></path>
   */
  order_sn?: string;
  /**
   * The username of buyer.<path></path>
   */
  buyer_user_name?: string;
  /**
   * The list of the serial number of return.<path></path>
   */
  return_order_sn_list?: string[];
  order_income?: ShopeeGetEscrowDetailBatchOrderIncome;
  /**
   * The buyer payment info at order checkout moment. (snapshot value)
   */
  buyer_payment_info?: ShopeeGetEscrowDetailBatchBuyerPaymentInfo;
}

/**
 * ShopeeGetEscrowDetailBatchResponseDataItem sub-interface for ShopeeGetEscrowDetailBatchResponse
 */
export interface ShopeeGetEscrowDetailBatchResponseDataItem {
  /**
   * The escrow detail for one order
   */
  escrow_detail?: ShopeeGetEscrowDetailBatchEscrowDetail;
}

/**
 * Response data payload for get_escrow_detail_batch
 */
export type ShopeeGetEscrowDetailBatchResponseData = ShopeeGetEscrowDetailBatchResponseDataItem[];

/**
 * Response payload for get_escrow_detail_batch
 *
 * Use this API to fetch the details of order income by batch.
 */
export type ShopeeGetEscrowDetailBatchResponse = ShopeeResponseCommon<ShopeeGetEscrowDetailBatchResponseData>;

/**
 * ShopeeGetEscrowListEscrow sub-interface for ShopeeGetEscrowListResponseData
 */
export interface ShopeeGetEscrowListEscrow {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * The settlement amount
   */
  payout_amount?: number;
  /**
   * The release time
   */
  escrow_release_time?: number;
}

/**
 * ShopeeGetEscrowListResponseData sub-interface for ShopeeGetEscrowListResponse
 */
export interface ShopeeGetEscrowListResponseData {
  /**
   * The list of escrow order sn.
   */
  escrow_list?: ShopeeGetEscrowListEscrow[];
  /**
   * This is to indicate whether the escrow list is more than one page. If this value is true, you may want to continue to check next page to retrieve escrow orders.
   */
  more?: boolean;
}

/**
 * Response payload for get_escrow_list
 *
 * Use this API to fetch the accounting list of order.
 */
export type ShopeeGetEscrowListResponse = ShopeeResponseCommon<ShopeeGetEscrowListResponseData>;

/**
 * ShopeeGetIncomeDetailNextPage sub-interface for ShopeeGetIncomeDetailIncomeDetail
 */
export interface ShopeeGetIncomeDetailNextPage {
  /**
   * Token to retrieve the next page of results. Returns empty if there is no more data.
   */
  cursor?: string;
  /**
   * Number of records returned per page.
   */
  page_size?: number;
}

/**
 * ShopeeGetIncomeDetailIncomeDetailListItem sub-interface for ShopeeGetIncomeDetailIncomeDetail
 */
export interface ShopeeGetIncomeDetailIncomeDetailListItem {
  /**
   * Payment channel or method used for the order
   */
  payment_method?: string;
  /**
   * Unique order serial number associated with the income record.
   */
  order_sn?: string;
  /**
   * Type of income or billing item — e.g., Order Income, Adjustment etc
   */
  description?: string;
  /**
   * ShopeeStatus description of the order income or payout.
   */
  status?: string;
  /**
   * Currency in which the income was transacted.
   */
  currency?: string;
  /**
   * Estimated escrow amount pending release for the order.
   */
  estimated_escrow_amount?: number;
  /**
   * Estimated payout time (Unix timestamp). Applicable for Pending/To Release status.
   */
  estimated_payout_time?: number;
  /**
   * Amount that is queued for release to seller (Cross Border only).
   */
  to_release_amount?: number;
  /**
   * Order creation timestamp (Unix format).
   */
  creation_date?: number;
  /**
   * Amount successfully released to the seller.
   */
  released_amount?: number;
  /**
   * Actual payout time (Unix timestamp) when funds were transferred.
   */
  actual_payout_time?: number;
}

/**
 * ShopeeGetIncomeDetailIncomeDetail sub-interface for ShopeeGetIncomeDetailResponse
 */
export interface ShopeeGetIncomeDetailIncomeDetail {
  /**
   * Contains pagination metadata for fetching the next page.
   */
  next_page?: ShopeeGetIncomeDetailNextPage;
  /**
   * List of income detail objects
   */
  income_detail_list_item?: ShopeeGetIncomeDetailIncomeDetailListItem[];
}

/**
 * Response data payload for get_income_detail
 */
export interface ShopeeGetIncomeDetailResponseData {
  /**
   * List of income detail records returned for the specified time range and status.
   */
  income_detail_list?: ShopeeGetIncomeDetailIncomeDetail[];
}

/**
 * Response payload for get_income_detail
 *
 * Retrieves detailed order-level income information across various income statuses for a specified time period. This API enables partners to display granular transaction-level income data consistent with Seller Center’s “Income Details” view, segmented by income status and payout stage.
 *
 * The API dynamically adapts data fields based on the seller’s shop type (Local or Cross Border) and the selected income status (e.g., Pending, To Release, Released).
 */
export type ShopeeGetIncomeDetailResponse = ShopeeResponseCommon<ShopeeGetIncomeDetailResponseData>;

/**
 * ShopeeGetIncomeOverviewTotalIncome sub-interface for ShopeeGetIncomeOverviewResponseData
 */
export interface ShopeeGetIncomeOverviewTotalIncome {
  /**
   * Total amount pending release (Local: orders before ESCROW_PAID; CB: orders before ESCROW_PAYOUT).<path></path>
   */
  pending_amount?: number;
  /**
   * Amount queued for release in the next payout cycle (CB only). Not applicable for Local shops.<path></path>
   */
  to_release_amount?: number;
  /**
   * Total amount successfully released to the seller.<path></path>
   */
  released_amount?: number;
}

/**
 * ShopeeGetIncomeOverviewResponseData sub-interface for ShopeeGetIncomeOverviewResponse
 */
export interface ShopeeGetIncomeOverviewResponseData {
  /**
   * The latest payout date for the released income. Format: YYYY-MM-DD. Only for CN shops.
   */
  latest_payout_date?: string;
  /**
   * Object containing total income components.
   */
  total_income?: ShopeeGetIncomeOverviewTotalIncome;
}

/**
 * Response payload for get_income_overview
 *
 * Retrieves a consolidated snapshot of the seller’s income amounts categorized by income status for a specified shop. This API provides a holistic overview similar to Seller Center’s “Income Overview” section, allowing external systems to reflect the same current payout view.
 *
 * Data is dynamically determined based on the shop type (Local or Cross Border) and the income status requested. Historical income results are not retrievable, providing consistent information as Seller Centre.
 */
export type ShopeeGetIncomeOverviewResponse = ShopeeResponseCommon<ShopeeGetIncomeOverviewResponseData>;

/**
 * ShopeeGetIncomeReportResponseData sub-interface for ShopeeGetIncomeReportResponse
 */
export interface ShopeeGetIncomeReportResponseData {
  /**
   * The identifier for income statement file request.
   */
  id?: number;
  /**
   * Income report file name.
   */
  file_name?: string;
  /**
   * STATUS_INVALID = 0;STATUS_PROCESSING = 1;STATUS_DOWNLOADABLE = 2;STATUS_DOWNLOADED = 3;STATUS_FAILED = 4;
   */
  status?: number;
  /**
   * File generation time.
   */
  generated_time?: number;
  /**
   * Link to download income report file.
   */
  file_link?: string;
}

/**
 * Response payload for get_income_report
 *
 * To query income report status and provide file link if the income report is ready to be downloaded.
 */
export type ShopeeGetIncomeReportResponse = ShopeeResponseCommon<ShopeeGetIncomeReportResponseData>;

/**
 * ShopeeGetIncomeStatementResponseData sub-interface for ShopeeGetIncomeStatementResponse
 */
export interface ShopeeGetIncomeStatementResponseData {
  /**
   * The identifier for income statement file request.
   */
  id?: number;
  /**
   * Income statement file name.
   */
  file_name?: string;
  /**
   * STATUS_INVALID = 0;STATUS_PROCESSING = 1;STATUS_DOWNLOADABLE = 2;STATUS_DOWNLOADED = 3;STATUS_FAILED = 4;
   */
  status?: number;
  /**
   * File generation time.
   */
  generated_time?: number;
  /**
   * Link to download income statement file.
   */
  file_link?: string;
}

/**
 * Response payload for get_income_statement
 *
 * To query income statement status and provide file link if the income statement is ready to be downloaded.
 */
export type ShopeeGetIncomeStatementResponse = ShopeeResponseCommon<ShopeeGetIncomeStatementResponseData>;

/**
 * ShopeeGetItemInstallmentStatusItemInstallment sub-interface for ShopeeGetItemInstallmentStatusResponseData
 */
export interface ShopeeGetItemInstallmentStatusItemInstallment {
  /**
   * Item unique id
   */
  item_id?: number;
  /**
   * The tenures of item support installment. [] represents with no installment
   */
  tenure_list?: number[];
}

/**
 * ShopeeGetItemInstallmentStatusItemPlanAhora sub-interface for ShopeeGetItemInstallmentStatusResponseData
 */
export interface ShopeeGetItemInstallmentStatusItemPlanAhora {
  /**
   * Only applicable for local AR sellers.
   */
  item_id?: number;
  /**
   * Only applicable for local AR sellers.
   */
  participate_plan_ahora?: boolean;
}

/**
 * ShopeeGetItemInstallmentStatusResponseData sub-interface for ShopeeGetItemInstallmentStatusResponse
 */
export interface ShopeeGetItemInstallmentStatusResponseData {
  item_installment_list?: ShopeeGetItemInstallmentStatusItemInstallment[];
  /**
   * Only applicable for local AR sellers.
   */
  item_plan_ahora_list?: ShopeeGetItemInstallmentStatusItemPlanAhora[];
}

/**
 * Response payload for get_item_installment_status
 *
 * Get item installment tenures.Only for TH、TW.
 */
export type ShopeeGetItemInstallmentStatusResponse = ShopeeResponseCommon<ShopeeGetItemInstallmentStatusResponseData>;

/**
 * ShopeeGetPaymentMethodListResponseDataItem sub-interface for ShopeeGetPaymentMethodListResponse
 */
export interface ShopeeGetPaymentMethodListResponseDataItem {
  payment_method?: string[];
  region?: string;
}

/**
 * Response data payload for get_payment_method_list
 */
export type ShopeeGetPaymentMethodListResponseData = ShopeeGetPaymentMethodListResponseDataItem[];

/**
 * Response payload for get_payment_method_list
 *
 * Obtain payment method (no authentication required)
 */
export type ShopeeGetPaymentMethodListResponse = ShopeeResponseCommon<ShopeeGetPaymentMethodListResponseData>;

/**
 * ShopeeGetPayoutDetailPayoutInfo sub-interface for ShopeeGetPayoutDetailPayout
 */
export interface ShopeeGetPayoutDetailPayoutInfo {
  /**
   * The settlement currency of orders.
   */
  from_currency?: string;
  /**
   * The actual currency of payout.
   */
  payout_currency?: string;
  /**
   * The settlement amount.
   */
  from_amount?: number;
  /**
   * The actual amount of payout.
   */
  payout_amount?: number;
  /**
   * The exchange rate.
   */
  exchange_rate?: string;
  /**
   * The time of payout.
   */
  payout_time?: number;
  /**
   * The service provider of seller. Available value: payoneer, pingpong, lianlian.
   */
  pay_service?: ShopeePayService | string | number;
  /**
   * Seller's account to receive the payout.
   */
  payee_id?: string;
}

/**
 * ShopeeGetPayoutDetailEscrow sub-interface for ShopeeGetPayoutDetailPayout
 */
export interface ShopeeGetPayoutDetailEscrow {
  /**
   * The total amount that the seller is expected to receive for the order.
   */
  escrow_amount?: number;
  /**
   * The currency used for calculating escrow amount.
   */
  currency?: string;
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
}

/**
 * ShopeeGetPayoutDetailOfflineAdjustment sub-interface for ShopeeGetPayoutDetailPayout
 */
export interface ShopeeGetPayoutDetailOfflineAdjustment {
  /**
   * The amount of offline adjustments.
   */
  adjustment_amount?: number;
  /**
   * The reason for offline adjustment.
   */
  module?: string;
  /**
   * The remark for the reason.
   */
  remark?: string;
  /**
   * The scenario of adjustment.
   */
  scenario?: string;
  /**
   * Dimension of offline adjustment. Available value: shop, order.
   */
  adjustment_level?: ShopeeAdjustmentLevel | string | number;
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
}

/**
 * ShopeeGetPayoutDetailPayout sub-interface for ShopeeGetPayoutDetailResponseData
 */
export interface ShopeeGetPayoutDetailPayout {
  /**
   * The information of payout.
   */
  payout_info?: ShopeeGetPayoutDetailPayoutInfo;
  escrow_list?: ShopeeGetPayoutDetailEscrow[];
  /**
   * The list of offline adjustments.
   */
  offline_adjustment_list?: ShopeeGetPayoutDetailOfflineAdjustment[];
}

/**
 * ShopeeGetPayoutDetailResponseData sub-interface for ShopeeGetPayoutDetailResponse
 */
export interface ShopeeGetPayoutDetailResponseData {
  more?: boolean;
  payout_list?: ShopeeGetPayoutDetailPayout[];
}

/**
 * Response payload for get_payout_detail
 *
 * This API is applicable for Cross Border (CB) sellers only to get the shop's payout data, such as the payout amount, currency, FX rate, the payout's associated order income and adjustment records etc.
 */
export type ShopeeGetPayoutDetailResponse = ShopeeResponseCommon<ShopeeGetPayoutDetailResponseData>;

/**
 * ShopeeGetPayoutInfoPayout sub-interface for ShopeeGetPayoutInfoResponseData
 */
export interface ShopeeGetPayoutInfoPayout {
  /**
   * The settlement currency of orders.
   */
  from_currency?: string;
  /**
   * The actual currency of payout.
   */
  payout_currency?: string;
  /**
   * The settlement amount.
   */
  from_amount?: number;
  /**
   * The actual amount of payout.
   */
  payout_amount?: number;
  /**
   * The exchange rate.
   */
  exchange_rate?: string;
  /**
   * The time of payout.
   */
  payout_time?: number;
  /**
   * The service provider of seller. Available value: payoneer, pingpong, lianlian.
   */
  pay_service?: ShopeePayService | string | number;
  /**
   * Seller's account to receive the payout.
   */
  payee_id?: string;
  /**
   * payout id used to query API "v2.get_billing_item_info" as request parameters. User can get detailed billing items under current payout
   */
  encrypted_payout_id?: string;
}

/**
 * ShopeeGetPayoutInfoResponseData sub-interface for ShopeeGetPayoutInfoResponse
 */
export interface ShopeeGetPayoutInfoResponseData {
  payout_list?: ShopeeGetPayoutInfoPayout[];
  /**
   * True or False
   */
  more?: boolean;
  /**
   * used for next batch data query. will return empty when all data been returned
   */
  next_cursor?: string;
}

/**
 * Response payload for get_payout_info
 *
 * This is a new API which applicable for Cross Border (CB) sellers only to get the shop's payout data, will be used for the original API v2.get_payout_details replacement, we provide data such as the payout amount, currency, FX rate, the payout's associated order income and adjustment records etc.
 */
export type ShopeeGetPayoutInfoResponse = ShopeeResponseCommon<ShopeeGetPayoutInfoResponseData>;

/**
 * ShopeeGetShopInstallmentStatusResponseData sub-interface for ShopeeGetShopInstallmentStatusResponse
 */
export interface ShopeeGetShopInstallmentStatusResponseData {
  /**
   * The installment status for the shop
   */
  installment_status?: number;
}

/**
 * Response payload for get_shop_installment_status
 *
 * Get the installment state of shop.
 */
export type ShopeeGetShopInstallmentStatusResponse = ShopeeResponseCommon<ShopeeGetShopInstallmentStatusResponseData>;

/**
 * ShopeeGetWalletTransactionListPayOrder sub-interface for ShopeeGetWalletTransactionListTransaction
 */
export interface ShopeeGetWalletTransactionListPayOrder {
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * Name of the shop.
   */
  shop_name?: string;
}

/**
 * ShopeeGetWalletTransactionListTransaction sub-interface for ShopeeGetWalletTransactionListResponseData
 */
export interface ShopeeGetWalletTransactionListTransaction {
  /**
   * The status of the transaction，available values: FAILED,COMPLETED,PENDING,INITIAL.
   */
  status?: ShopeeStatus | string | number;
  /**
   * The type of transaction.
   */
  transaction_type?: string;
  /**
   * The transaction title sent by client (Adjustment Center) for adjustments, Only for ID local sellers for now.
   */
  txn_title?: string;
  /**
   * The amount of transaction.
   */
  amount?: number;
  /**
   * The current balance of this account.
   */
  current_balance?: number;
  /**
   * The create time of the transaction.
   */
  create_time?: number;
  /**
   * Shopee's unique identifier for an order.
   */
  order_sn?: string;
  /**
   * The serial number of return.
   */
  refund_sn?: string;
  /**
   * The type of withdrawal.
   */
  withdrawal_type?: string;
  /**
   * This field indicates the transaction fee.
   */
  transaction_fee?: number;
  /**
   * The detailed description of TOPUP SUCCESS and TOPUP FAILED.
   */
  description?: string;
  /**
   * The name of buyer.
   */
  buyer_name?: string;
  pay_order_list?: ShopeeGetWalletTransactionListPayOrder[];
  /**
   * Name of the shop.
   */
  shop_name?: string;
  /**
   * Withdrawal ID when transaction type is withdraw_created, withdrawal_completed, withdrawal_cancelled.
   */
  withdrawal_id?: number;
  /**
   * The reason for ADJUSTMENT_ADD and ADJUSTMENT_MINUS.
   */
  reason?: string;
  /**
   * Use this field to indicate the event where a withdrawal is split into several withdrawals due to the withdrawal limit.
   */
  root_withdrawal_id?: number;
  /**
   * Description:A new response parameter added after: https://confluence.shopee.io/display/SPCT/%5BPRD%5D+%5BOpen+API%5D+Update+on+New+Open+API+to+fetch+Seller+wallet+Transaction This returns the updated transaction tab types that client can use to specify which transaction types they want to return. It will have the following tab typesDefaultwallet_order_incomewallet_adjustment_filterwallet_wallet_paymentwallet_refund_from_orderwallet_withdrawalsfast_escrow_repaymentfast_payseller_loancorporate_loanpix_transactions_filteropen_finance_transactions_filter Note for BR, currently in SOP live configuration, wallet txn type that linked to pix_transactions_filter  and open_finance_transactions_filter  are classified as default  type tab instead. therefore for Open API client who wants to query these 2 txn can put default as the filter in this type
   */
  transaction_tab_type?: ShopeeTransactionTabType | string | number;
  /**
   * New response parameter provided after: https://confluence.shopee.io/display/SPCT/%5BPRD%5D+%5BOpen+API%5D+Update+on+New+Open+API+to+fetch+Seller+wallet+Transaction It's to indicate the money flowMONEY_IN = addition MONEY_OUT = deductionif not specified in request, will return bothNote special case for TW JKO Pay, we will ignore Money_flow
   */
  money_flow?: ShopeeMoneyFlow | string | number;
  /**
   * The outlet shop name where this outlet transaction came from. (In the Original Instant Mart concept, outlet transactions are redirected to Mart.)
   */
  outlet_shop_name?: string;
}

/**
 * ShopeeGetWalletTransactionListResponseData sub-interface for ShopeeGetWalletTransactionListResponse
 */
export interface ShopeeGetWalletTransactionListResponseData {
  transaction_list?: ShopeeGetWalletTransactionListTransaction[];
  more?: boolean;
}

/**
 * Response payload for get_wallet_transaction_list
 *
 * Use this API to get the transaction records of wallet. Only applicable for local shops
 */
export type ShopeeGetWalletTransactionListResponse = ShopeeResponseCommon<ShopeeGetWalletTransactionListResponseData>;

/**
 * ShopeeSetItemInstallmentStatusItemInstallment sub-interface for ShopeeSetItemInstallmentStatusResponseData
 */
export interface ShopeeSetItemInstallmentStatusItemInstallment {
  /**
   * Item unique id
   */
  item_id?: number;
  /**
   * The tenures of item support installment. [] represents with no installment
   */
  tenure_list?: number[];
}

/**
 * ShopeeSetItemInstallmentStatusItemPlanAhora sub-interface for ShopeeSetItemInstallmentStatusResponseData
 */
export interface ShopeeSetItemInstallmentStatusItemPlanAhora {
  /**
   * Only applicable for local AR sellers.
   */
  item_id?: number;
  /**
   * Only applicable for local AR sellers.
   */
  participate_plan_ahor?: boolean;
}

/**
 * ShopeeSetItemInstallmentStatusResponseData sub-interface for ShopeeSetItemInstallmentStatusResponse
 */
export interface ShopeeSetItemInstallmentStatusResponseData {
  item_installment_list?: ShopeeSetItemInstallmentStatusItemInstallment[];
  /**
   * Only applicable for local AR sellers.
   */
  item_plan_ahora_list?: ShopeeSetItemInstallmentStatusItemPlanAhora[];
}

/**
 * Response payload for set_item_installment_status
 *
 * Set item installment.Only for TH、TW.
 */
export type ShopeeSetItemInstallmentStatusResponse = ShopeeResponseCommon<ShopeeSetItemInstallmentStatusResponseData>;

/**
 * ShopeeSetShopInstallmentStatusResponseData sub-interface for ShopeeSetShopInstallmentStatusResponse
 */
export interface ShopeeSetShopInstallmentStatusResponseData {
  installment_status?: number;
}

/**
 * Response payload for set_shop_installment_status
 *
 * Sets the staging capability of shop level.
 */
export type ShopeeSetShopInstallmentStatusResponse = ShopeeResponseCommon<ShopeeSetShopInstallmentStatusResponseData>;
