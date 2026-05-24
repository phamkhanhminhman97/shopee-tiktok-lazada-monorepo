/**
 * Payment method options for Lazada orders.
 *
 * Based on Lazada documentation:
 * https://open.lazada.com/apps/doc/api?docId=108920&docType=1
 *
 * Each country has its own set of available payment methods.
 * The `payment_method` field in order responses maps to these values.
 */

// ============================================================
// Country codes supported by Lazada
// ============================================================

export enum LazadaCountryCode {
  /** Singapore */
  SG = 'SG',
  /** Philippines */
  PH = 'PH',
  /** Malaysia */
  MY = 'MY',
  /** Thailand */
  TH = 'TH',
  /** Vietnam */
  VN = 'VN',
  /** Indonesia */
  ID = 'ID',
}

// ============================================================
// Payment method enum - all possible values across all countries
// ============================================================

export enum LazadaPaymentMethod {
  // ----- Common (multi-country) -----
  /** Mixed Card */
  MIXEDCARD = 'MIXEDCARD',
  /** Cash on Delivery */
  COD = 'COD',
  /** Payment Account (Lazada Wallet) */
  PAYMENT_ACCOUNT = 'PAYMENT_ACCOUNT',
  /** PayPal */
  PAYPAL = 'PAYPAL',

  // ----- Singapore (SG) -----
  /** DBS IPP (Installment Payment Plan) */
  DBS_IPP = 'DBS_IPP',
  /** OCBC IPP */
  OCBC_IPP = 'OCBC_IPP',
  /** DBS PayLah! Wallet */
  WALLET_DBSPAYLAH = 'WALLET_DBSPAYLAH',
  /** PayNow Virtual Account */
  VIRTUAL_ACCOUNT_PAYNOW = 'VIRTUAL_ACCOUNT_PAYNOW',

  // ----- Philippines (PH) -----
  /** BDO IPP */
  BDO_IPP = 'BDO_IPP',
  /** GCash PP (GCash Payment) */
  GCASH_PP = 'GCASH_PP',
  /** Pay Later */
  PAY_LATER = 'PAY_LATER',

  // ----- Malaysia (MY) -----
  /** Maybank IPP */
  MAYBANK_IPP = 'MAYBANK_IPP',
  /** MolPay - Ambank Online */
  MOLPAY_AM_BANK_ONLINE = 'MOLPAY_AM_BANK_ONLINE',
  /** MolPay - CIMB Online */
  MOLPAY_CIMB_BANK_ONLINE = 'MOLPAY_CIMB_BANK_ONLINE',
  /** MolPay - HL Bank Online */
  MOLPAY_HL_BANK_ONLINE = 'MOLPAY_HL_BANK_ONLINE',
  /** MolPay - Islam Bank Online */
  MOLPAY_ISLAM_BANK_ONLINE = 'MOLPAY_ISLAM_BANK_ONLINE',
  /** MolPay - Maybank Online */
  MOLPAY_MAYBANK_ONLINE = 'MOLPAY_MAYBANK_ONLINE',
  /** MolPay - Public Bank Online */
  MOLPAY_PUBLIC_BANK_ONLINE = 'MOLPAY_PUBLIC_BANK_ONLINE',
  /** MolPay - RHB Online */
  MOLPAY_RHB_BANK_ONLINE = 'MOLPAY_RHB_BANK_ONLINE',
  /** MolPay - Other Bank Online */
  MOLPAY_OTHER_BANK_ONLINE = 'MOLPAY_OTHER_BANK_ONLINE',
  /** MolPay - 7-Eleven OTC */
  MOLPAY_SEVENELEVEN_OTC = 'MOLPAY_SEVENELEVEN_OTC',
  /** Touch 'n Go eWallet */
  GN_TNG_EBANK = 'GN_TNG_EBANK',
  /** Boost Wallet */
  AC_WALLET_BOOST = 'AC_WALLET_BOOST',
  /** Boost Wallet Direct Debit */
  AC_WALLET_BOOST_DIRECT_DEBIT = 'AC_WALLET_BOOST_DIRECT_DEBIT',

  // ----- Thailand (TH) -----
  /** KTC IPP */
  CCPP_KTC_IPP = 'CCPP_KTC_IPP',
  /** BAY IPP (Bank of Ayudhya) */
  CCPP_BAY_IPP = 'CCPP_BAY_IPP',
  /** BBL IPP (Bangkok Bank) */
  CCPP_BBL_IPP = 'CCPP_BBL_IPP',
  /** KFC IPP (Krungsri Consumer) */
  CCPP_KFC_IPP = 'CCPP_KFC_IPP',
  /** Citi IPP */
  CCPP_CITI_IPP = 'CCPP_CITI_IPP',
  /** SCB IPP (Siam Commercial Bank) */
  CCPP_SCB_IPP = 'CCPP_SCB_IPP',
  /** Tbank IPP (TMB) */
  CCPP_TBANK_IPP = 'CCPP_TBANK_IPP',
  /** UOB IPP */
  CCPP_UOB_IPP = 'CCPP_UOB_IPP',
  /** SCB Online */
  SIAM_COMMERCIAL_BANK_ONLINE = 'SIAM_COMMERCIAL_BANK_ONLINE',
  /** Krung Thai Bank Online */
  KRUNG_THAI_BANK_ONLINE = 'KRUNG_THAI_BANK_ONLINE',
  /** TMB Bank Online */
  TMB_BANK_ONLINE = 'TMB_BANK_ONLINE',
  /** Thanachart Bank Online */
  THANACHART_BANK_ONLINE = 'THANACHART_BANK_ONLINE',
  /** Bangkok Bank Online */
  BANGKOK_BANK_ONLINE = 'BANGKOK_BANK_ONLINE',
  /** UOB Online */
  UNITED_OVERSEAS_BANK_ONLINE = 'UNITED_OVERSEAS_BANK_ONLINE',
  /** Kasikorn Bank Online */
  KASIKORN_BANK_ONLINE = 'KASIKORN_BANK_ONLINE',
  /** Ayutthaya Bank Online */
  AYUTTHAYA_BANK_ONLINE = 'AYUTTHAYA_BANK_ONLINE',
  /** Kasikorn Bank Virtual Account */
  KASIKORN_BANK_VA = 'KASIKORN_BANK_VA',
  /** Bangkok Bank Virtual Account */
  BANGKOK_BANK_VA = 'BANGKOK_BANK_VA',
  /** Ayutthaya Bank Virtual Account */
  AYUTTHAYA_BANK_VA = 'AYUTTHAYA_BANK_VA',
  /** SCB Virtual Account */
  SIAM_COMMERCIAL_BANK_VA = 'SIAM_COMMERCIAL_BANK_VA',
  /** Krung Thai Bank Virtual Account */
  KRUNG_THAI_BANK_VA = 'KRUNG_THAI_BANK_VA',
  /** 7-Eleven OTC */
  SEVENELEVEN_OTC = 'SEVENELEVEN_OTC',
  /** Free OTC */
  CCPP_FREE_OTC = 'CCPP_FREE_OTC',
  /** TMN Express */
  TMN_EXPRESS = 'TMN_EXPRESS',
  /** Rabbit LINE Pay Wallet */
  AC_WALLET_RABBIT_LINE_PAY = 'AC_WALLET_RABBIT_LINE_PAY',
  /** Virtual Account Deep Link - BKKBTH */
  VIRTUAL_ACCOUNT_DEEPLINK_BKKBTH = 'VIRTUAL_ACCOUNT_DEEPLINK_BKKBTH',
  /** Virtual Account Deep Link - SICOTH */
  VIRTUAL_ACCOUNT_DEEPLINK_SICOTH = 'VIRTUAL_ACCOUNT_DEEPLINK_SICOTH',
  /** Virtual Account Deep Link - AYUDTH */
  VIRTUAL_ACCOUNT_DEEPLINK_AYUDTH = 'VIRTUAL_ACCOUNT_DEEPLINK_AYUDTH',
  /** Virtual Account Deep Link - KRTHTH */
  VIRTUAL_ACCOUNT_DEEPLINK_KRTHTH = 'VIRTUAL_ACCOUNT_DEEPLINK_KRTHTH',

  // ----- Vietnam (VN) -----
  /** Citibank Manual IPP */
  CITIBANK_MANUAL_IPP = 'CITIBANK_MANUAL_IPP',
  /** Eximbank Manual IPP */
  EXIMBANK_MANUAL_IPP = 'EXIMBANK_MANUAL_IPP',
  /** HSBC Manual IPP */
  HSBC_MANUAL_IPP = 'HSBC_MANUAL_IPP',
  /** Maritime Bank Manual IPP */
  MARITIMEBANK_MANUAL_IPP = 'MARITIMEBANK_MANUAL_IPP',
  /** Sacombank Manual IPP */
  SACOMBANK_MANUAL_IPP = 'SACOMBANK_MANUAL_IPP',
  /** SCB Manual IPP */
  SCB_MANUAL_IPP = 'SCB_MANUAL_IPP',
  /** Shinhan Bank Manual IPP */
  SHINHANBANK_MANUAL_IPP = 'SHINHANBANK_MANUAL_IPP',
  /** Standard Chartered Manual IPP */
  STANDARDCHARTERED_MANUAL_IPP = 'STANDARDCHARTERED_MANUAL_IPP',
  /** TP Bank Manual IPP */
  TPBANK_MANUAL_IPP = 'TPBANK_MANUAL_IPP',
  /** VIB Manual IPP */
  VIB_MANUAL_IPP = 'VIB_MANUAL_IPP',
  /** Vietinbank Manual IPP */
  VIETINBANK_MANUAL_IPP = 'VIETINBANK_MANUAL_IPP',
  /** VP Bank Manual IPP */
  VPBANK_MANUAL_IPP = 'VPBANK_MANUAL_IPP',
  /** Napas Online */
  NAPAS_ONLINE = 'NAPAS_ONLINE',
  /** Sacombank Direct Link */
  SACOMBANK_DL = 'SACOMBANK_DL',
  /** Akulaku IPP */
  AKULAKU_IPP = 'AKULAKU_IPP',
  /** Momo Wallet */
  MOMO_WALLET = 'MOMO_WALLET',
  /** ZaloPay Wallet */
  ZALOPAY_WALLET = 'ZALOPAY_WALLET',
  /** ZaloPay Cashier Wallet */
  WALLET_ZALOPAY_CASHIER = 'WALLET_ZALOPAY_CASHIER',
  /** EM Wallet */
  EM_WALLET = 'EM_WALLET',
  /** VTPVN */
  VTPVN = 'VTPVN',

  // ----- Indonesia (ID) -----
  /** BCA IPP */
  BCA_IPP = 'BCA_IPP',
  /** DOKU - BNI IPP */
  DOKU_BNI_IPP = 'DOKU_BNI_IPP',
  /** DOKU - BRI IPP */
  DOKU_BRI_IPP = 'DOKU_BRI_IPP',
  /** DOKU - Bukopin IPP */
  DOKU_BUKOPIN_IPP = 'DOKU_BUKOPIN_IPP',
  /** DOKU - CIMB Niaga IPP */
  DOKU_CIMBNIAGA_IPP = 'DOKU_CIMBNIAGA_IPP',
  /** DOKU - Citibank IPP */
  DOKU_CITIBANK_IPP = 'DOKU_CITIBANK_IPP',
  /** DOKU - Danamon IPP */
  DOKU_DANAMON_IPP = 'DOKU_DANAMON_IPP',
  /** DOKU - HSBC IPP */
  DOKU_HSBC_IPP = 'DOKU_HSBC_IPP',
  /** DOKU - Mandiri IPP */
  DOKU_MANDIRI_IPP = 'DOKU_MANDIRI_IPP',
  /** DOKU - Maybank IPP */
  DOKU_MAYBANK_IPP = 'DOKU_MAYBANK_IPP',
  /** DOKU - MNC IPP */
  DOKU_MNC_IPP = 'DOKU_MNC_IPP',
  /** DOKU - OCBC IPP */
  DOKU_OCBC_IPP = 'DOKU_OCBC_IPP',
  /** DOKU - Panin IPP */
  DOKU_PANIN_IPP = 'DOKU_PANIN_IPP',
  /** DOKU - Permata IPP */
  DOKU_PERMATA_IPP = 'DOKU_PERMATA_IPP',
  /** DOKU - Standard Chartered IPP */
  DOKU_STANDARDCHARTERED_IPP = 'DOKU_STANDARDCHARTERED_IPP',
  /** DOKU - UOB IPP */
  DOKU_UOB_IPP = 'DOKU_UOB_IPP',
  /** BNI Virtual Account */
  BNI_VA = 'BNI_VA',
  /** BCA Virtual Account */
  BCA_VA = 'BCA_VA',
  /** Mandiri Virtual Account */
  MANDIRIMANDIRI_VA = 'MANDIRIMANDIRI_VA',
  /** Alfamart OTC */
  ALFAMART_OTC = 'ALFAMART_OTC',
  /** Indomaret OTC */
  INDOMARET_OTC = 'INDOMARET_OTC',
  /** KlikBCA Virtual Account */
  KLIKBCA_VA = 'KLIKBCA_VA',
  /** ID Payment Account */
  ID_PAYMENT_ACCOUNT = 'ID_PAYMENT_ACCOUNT',
  /** DANA eBank */
  DANA_EBANK = 'DANA_EBANK',
  /** Kredivo Online */
  KREDIVO_ONLINE = 'KREDIVO_ONLINE',
  /** BRI Debit Card */
  BRI_DEBITCARD = 'BRI_DEBITCARD',
  /** BNI Debit Card */
  BNI_DEBITCARD = 'BNI_DEBITCARD',
  /** BCA Debit Card */
  BCA_DEBITCARD = 'BCA_DEBITCARD',
  /** Mandiri Debit Card */
  MANDIRI_DEBITCARD = 'MANDIRI_DEBITCARD',
  /** Akulaku IPP (ID) */
  AKULAKU_IPP_ID = 'AKULAKU_IPP',
  /** Pay Later (ID) */
  PAY_LATER_ID = 'PAY_LATER',
  /** OVO Wallet */
  WALLET_OVO = 'WALLET_OVO',
  /** Credit Pay Kredivo */
  CREDITPAY_KREDIVO = 'CREDITPAY_KREDIVO',
}

// ============================================================
// Payment method mapping by country
// ============================================================

export const PAYMENT_METHODS_BY_COUNTRY: Record<LazadaCountryCode, LazadaPaymentMethod[]> = {
  [LazadaCountryCode.SG]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.DBS_IPP,
    LazadaPaymentMethod.OCBC_IPP,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.PAYPAL,
    LazadaPaymentMethod.WALLET_DBSPAYLAH,
    LazadaPaymentMethod.VIRTUAL_ACCOUNT_PAYNOW,
  ],
  [LazadaCountryCode.PH]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.COD,
    LazadaPaymentMethod.BDO_IPP,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.PAYPAL,
    LazadaPaymentMethod.GCASH_PP,
    LazadaPaymentMethod.PAY_LATER,
  ],
  [LazadaCountryCode.MY]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.COD,
    LazadaPaymentMethod.MAYBANK_IPP,
    LazadaPaymentMethod.MOLPAY_AM_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_CIMB_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_HL_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_ISLAM_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_MAYBANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_PUBLIC_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_RHB_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_OTHER_BANK_ONLINE,
    LazadaPaymentMethod.MOLPAY_SEVENELEVEN_OTC,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.PAYPAL,
    LazadaPaymentMethod.GN_TNG_EBANK,
    LazadaPaymentMethod.AC_WALLET_BOOST,
    LazadaPaymentMethod.AC_WALLET_BOOST_DIRECT_DEBIT,
  ],
  [LazadaCountryCode.TH]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.COD,
    LazadaPaymentMethod.CCPP_KTC_IPP,
    LazadaPaymentMethod.CCPP_BAY_IPP,
    LazadaPaymentMethod.CCPP_BBL_IPP,
    LazadaPaymentMethod.CCPP_KFC_IPP,
    LazadaPaymentMethod.CCPP_CITI_IPP,
    LazadaPaymentMethod.CCPP_SCB_IPP,
    LazadaPaymentMethod.CCPP_TBANK_IPP,
    LazadaPaymentMethod.CCPP_UOB_IPP,
    LazadaPaymentMethod.SIAM_COMMERCIAL_BANK_ONLINE,
    LazadaPaymentMethod.KRUNG_THAI_BANK_ONLINE,
    LazadaPaymentMethod.TMB_BANK_ONLINE,
    LazadaPaymentMethod.THANACHART_BANK_ONLINE,
    LazadaPaymentMethod.BANGKOK_BANK_ONLINE,
    LazadaPaymentMethod.UNITED_OVERSEAS_BANK_ONLINE,
    LazadaPaymentMethod.KASIKORN_BANK_ONLINE,
    LazadaPaymentMethod.AYUTTHAYA_BANK_ONLINE,
    LazadaPaymentMethod.KASIKORN_BANK_VA,
    LazadaPaymentMethod.BANGKOK_BANK_VA,
    LazadaPaymentMethod.AYUTTHAYA_BANK_VA,
    LazadaPaymentMethod.SIAM_COMMERCIAL_BANK_VA,
    LazadaPaymentMethod.KRUNG_THAI_BANK_VA,
    LazadaPaymentMethod.SEVENELEVEN_OTC,
    LazadaPaymentMethod.CCPP_FREE_OTC,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.PAYPAL,
    LazadaPaymentMethod.TMN_EXPRESS,
    LazadaPaymentMethod.AC_WALLET_RABBIT_LINE_PAY,
    LazadaPaymentMethod.VIRTUAL_ACCOUNT_DEEPLINK_BKKBTH,
    LazadaPaymentMethod.VIRTUAL_ACCOUNT_DEEPLINK_SICOTH,
    LazadaPaymentMethod.VIRTUAL_ACCOUNT_DEEPLINK_AYUDTH,
    LazadaPaymentMethod.VIRTUAL_ACCOUNT_DEEPLINK_KRTHTH,
  ],
  [LazadaCountryCode.VN]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.COD,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.CITIBANK_MANUAL_IPP,
    LazadaPaymentMethod.EXIMBANK_MANUAL_IPP,
    LazadaPaymentMethod.HSBC_MANUAL_IPP,
    LazadaPaymentMethod.MARITIMEBANK_MANUAL_IPP,
    LazadaPaymentMethod.SACOMBANK_MANUAL_IPP,
    LazadaPaymentMethod.SCB_MANUAL_IPP,
    LazadaPaymentMethod.SHINHANBANK_MANUAL_IPP,
    LazadaPaymentMethod.STANDARDCHARTERED_MANUAL_IPP,
    LazadaPaymentMethod.TPBANK_MANUAL_IPP,
    LazadaPaymentMethod.VIB_MANUAL_IPP,
    LazadaPaymentMethod.VIETINBANK_MANUAL_IPP,
    LazadaPaymentMethod.VPBANK_MANUAL_IPP,
    LazadaPaymentMethod.NAPAS_ONLINE,
    LazadaPaymentMethod.SACOMBANK_DL,
    LazadaPaymentMethod.AKULAKU_IPP,
    LazadaPaymentMethod.MOMO_WALLET,
    LazadaPaymentMethod.ZALOPAY_WALLET,
    LazadaPaymentMethod.WALLET_ZALOPAY_CASHIER,
    LazadaPaymentMethod.EM_WALLET,
    LazadaPaymentMethod.VTPVN,
  ],
  [LazadaCountryCode.ID]: [
    LazadaPaymentMethod.MIXEDCARD,
    LazadaPaymentMethod.COD,
    LazadaPaymentMethod.BCA_IPP,
    LazadaPaymentMethod.DOKU_BNI_IPP,
    LazadaPaymentMethod.DOKU_BRI_IPP,
    LazadaPaymentMethod.DOKU_BUKOPIN_IPP,
    LazadaPaymentMethod.DOKU_CIMBNIAGA_IPP,
    LazadaPaymentMethod.DOKU_CITIBANK_IPP,
    LazadaPaymentMethod.DOKU_DANAMON_IPP,
    LazadaPaymentMethod.DOKU_HSBC_IPP,
    LazadaPaymentMethod.DOKU_MANDIRI_IPP,
    LazadaPaymentMethod.DOKU_MAYBANK_IPP,
    LazadaPaymentMethod.DOKU_MNC_IPP,
    LazadaPaymentMethod.DOKU_OCBC_IPP,
    LazadaPaymentMethod.DOKU_PANIN_IPP,
    LazadaPaymentMethod.DOKU_PERMATA_IPP,
    LazadaPaymentMethod.DOKU_STANDARDCHARTERED_IPP,
    LazadaPaymentMethod.DOKU_UOB_IPP,
    LazadaPaymentMethod.BNI_VA,
    LazadaPaymentMethod.BCA_VA,
    LazadaPaymentMethod.MANDIRIMANDIRI_VA,
    LazadaPaymentMethod.ALFAMART_OTC,
    LazadaPaymentMethod.INDOMARET_OTC,
    LazadaPaymentMethod.KLIKBCA_VA,
    LazadaPaymentMethod.PAYMENT_ACCOUNT,
    LazadaPaymentMethod.ID_PAYMENT_ACCOUNT,
    LazadaPaymentMethod.DANA_EBANK,
    LazadaPaymentMethod.KREDIVO_ONLINE,
    LazadaPaymentMethod.BRI_DEBITCARD,
    LazadaPaymentMethod.BNI_DEBITCARD,
    LazadaPaymentMethod.BCA_DEBITCARD,
    LazadaPaymentMethod.MANDIRI_DEBITCARD,
    LazadaPaymentMethod.AKULAKU_IPP_ID,
    LazadaPaymentMethod.PAY_LATER_ID,
    LazadaPaymentMethod.WALLET_OVO,
    LazadaPaymentMethod.CREDITPAY_KREDIVO,
  ],
};

// ============================================================
// Helper functions
// ============================================================

/**
 * Get the list of available payment methods for a given country.
 *
 * @param country - Country code (SG, PH, MY, TH, VN, ID)
 * @returns Array of payment method strings, or undefined if country is not supported
 */
export function getPaymentMethodsByCountry(country: LazadaCountryCode | string): LazadaPaymentMethod[] | undefined {
  return PAYMENT_METHODS_BY_COUNTRY[country as LazadaCountryCode];
}

/**
 * Check if a payment method is available in a given country.
 *
 * @param country - Country code
 * @param paymentMethod - Payment method to check
 * @returns true if the payment method is available in the country
 */
export function isPaymentMethodAvailableInCountry(
  country: LazadaCountryCode | string,
  paymentMethod: LazadaPaymentMethod | string
): boolean {
  const methods = getPaymentMethodsByCountry(country);
  if (!methods) return false;
  return methods.indexOf(paymentMethod as LazadaPaymentMethod) !== -1;
}

/**
 * Get all unique payment methods across all countries.
 *
 * @returns Array of all unique payment methods
 */
export function getAllPaymentMethods(): LazadaPaymentMethod[] {
  const allMethods: LazadaPaymentMethod[] = [];
  const countryKeys = Object.keys(PAYMENT_METHODS_BY_COUNTRY) as LazadaCountryCode[];
  for (let i = 0; i < countryKeys.length; i++) {
    const methods = PAYMENT_METHODS_BY_COUNTRY[countryKeys[i]];
    for (let j = 0; j < methods.length; j++) {
      if (allMethods.indexOf(methods[j]) === -1) {
        allMethods.push(methods[j]);
      }
    }
  }
  return allMethods;
}

/**
 * Get the list of countries that support a given payment method.
 *
 * @param paymentMethod - Payment method to look up
 * @returns Array of country codes where this payment method is available
 */
export function getCountriesByPaymentMethod(paymentMethod: LazadaPaymentMethod | string): LazadaCountryCode[] {
  const countries: LazadaCountryCode[] = [];
  const methodStr = String(paymentMethod);
  const countryKeys = Object.keys(PAYMENT_METHODS_BY_COUNTRY) as LazadaCountryCode[];
  for (let c = 0; c < countryKeys.length; c++) {
    const country = countryKeys[c];
    const methods = PAYMENT_METHODS_BY_COUNTRY[country];
    for (let m = 0; m < methods.length; m++) {
      if (String(methods[m]) === methodStr) {
        countries.push(country);
        break;
      }
    }
  }
  return countries;
}
