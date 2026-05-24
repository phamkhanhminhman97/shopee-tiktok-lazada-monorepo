GetMultipleOrderItems
GET
/orders/items/get
Authorization Required
Description:Use this API to get the item information of one or more orders.（No more than 50 at a time）
Service Endpoints
Region
Endpoint
Vietnam
https://api.lazada.vn/rest
Singapore
https://api.lazada.sg/rest
Philippines
https://api.lazada.com.ph/rest
Malaysia
https://api.lazada.com.my/rest
Thailand
https://api.lazada.co.th/rest
Indonesia
https://api.lazada.co.id/rest
Common Parameters
Name
Type
Required or not
Description
app_key
String
Yes
Unique app ID issued by LAZADA Open Platform console when you apply for an app category
timestamp
String
Yes
The time stamp of the request e.g. 1517820392000 (which translates to 5 February 2018 08:46:32) with less than 7200s difference from UTC time
access_token
String
Yes
API interface call credentials
sign_method
String
Yes
The HMAC hash algorithm you are using to calculate your signature
sign
String
Yes
Part of the authentication process that is used for identifying and verifying who is sending a request (click here for details)
Parameters
Name
Type
Required or not
Description
order_ids
Number[]
Yes
Comma-separated list of order identifiers in square brackets.（No more than 50 at a time）
Response Parameters
Name
Type
Description
data
Object[]
Response body
order_items
Object[]
Order item details
reason
String
Cancel, Return or other reason, defined in the table sales_order_reason
digital_delivery_info
String
Digital delivery information
promised_shipping_time
String
Promised shipping time
order_id
Number
Order ID
voucher_amount
String
Voucher amount
return_status
String
Return status
shipping_type
String
Shipping type, Drop-shipping or Warehouse
shipment_provider
String
Shipment provider
cancel_return_initiator
String
Indicates who initiated the canceled or returned order. Possible values are cancellation-internal, cancellation-customer, customer service-cancel, buyer-cancel, system-cancel, cancellation-failed Delivery, cancellation-seller, return-customer, refund-internal and so on.
variation
String
Variation
created_at
String
Time of the feed's creation in ISO 8601 format
invoice_number
String
Invoice number
shipping_amount
String
Shipping fee
currency
String
ISO 4217 compatible currency code
shop_id
String
Seller name
sku
String
Product SKU
voucher_code
String
Voucher code
wallet_credits
String
Wallet credit
updated_at
String
Time of the feed's last update in ISO 8601 format
is_digital
Number
Is digital goods or not
tracking_code_pre
String
Not used
order_item_id
Number
Order item ID
package_id
String
Package source ID
tracking_code
String
Tracking code
shipping_service_cost
Number
Shipping service cost
extra_attributes
String
JSON encoded string with extra attributes
paid_price
String
Paid price
shipping_provider_type
String
One of the following options: Express, Standard, or Economy
product_detail_url
String
Product detail URL
shop_sku
String
Shop SKU
reason_detail
String
Reason detail
purchase_order_id
String
Returned by SetPackedByMarketPlace
purchase_order_number
String
Returned by SetPackedByMarketPlace
name
String
Product name
product_main_image
String
Product main image URL
item_price
String
Item price
tax_amount
String
Tax amount
status
String
Status
voucher_platform
String
The voucher that is issued by Lazada
voucher_seller
String
The voucher that is issued by the seller
order_type
String
The fulfillment type of order,it maybe Normal or PreSale.
stage_pay_status
String
The payment status of Presale order at presale stage. The possible values are null, "unpaid" or "unpaid final payment". (unpaid: presale deposit has not been paid; unpaid final payment: presale deposit is paid but final payment / balance due is not paid)
order_flag
String
The type of order, Possible values are GUARANTEE, NORMAL and GLOBAL_COLLECTION. Orders tagged with "GUARANTEE" or "GLOBAL_COLLECTION" have shorter SLA requirement in order fulfillment.
sla_time_stamp
String
Time of the ship SLA in ISO 8601 format(yyyy-MM-dd'T'HH:mm:ssXXX)
warehouse_code
String
Warehouse Code of multi-wh sellers
shipping_fee_original
String
shipping fee original
shipping_fee_discount_seller
String
shipping fee discount from seller
shipping_fee_discount_platform
String
shipping fee discount from platform
voucher_code_seller
String
voucher code from seller
voucher_code_platform
String
voucher code from platform
delivery_option_sof
String
The mark of whether is seller own fleet, values included 1 and 0.
is_fbl
String
The mark of whether is fulfilled by LAZADA, values included 1 and 0.
is_reroute
String
The mark of whether is secondary sale, values included 1 and 0.
voucher_seller_lpi
String
The Lazada Bonus that is sponsored by the seller
voucher_platform_lpi
String
The Lazada Bonus that is sponsored by Lazada
buyer_id
String
Buyer ID
pick_up_store_info
Object
Pick-up Store infos
pick_up_store_name
String
Pick-up Store's name
pick_up_store_address
String
Pick-up Store's address
pick_up_store_code
String
Pick-up Store's id
pick_up_store_open_hour
String[]
Pick-up Store's business hours
sku_id
String
Sku ID
fulfillment_sla
String
fulfillment sla info
priority_fulfillment_tag
String
priority fulfillment tag
gift_wrapping
String
Custom display copywriting on the packaging
show_gift_wrapping_tag
Boolean
Does the gift label show through
personalization
String
For burning custom copywriting
show_personalization_tag
Boolean
Whether to reveal the engraved service mark
payment_time
String
Payment time in milliseconds local time
supply_price
String
supply price for mp3 order
supply_price_currency
String
supply price currency for mp3 order
mp3_order
Boolean
Is it an MP3 order
semi_managed
String
is semiManaged order or not
biz_group
Number
70100 stands for MP, which means JIT merchants fulfill orders by themselves; 70020 indicates choice is warehouse dispatch, which is JIT PO stocking.
schedule_delivery_start_timeslot
Number
schedule delivery start timeslot
schedule_delivery_end_timeslot
Number
schedule delivery end timeslot
need_cancel_confirm
Boolean
true: seller needs to respond to the cancellation request from buyer
is_cancel_pending
Boolean
true: seller agrees the cancellation request, waiting for logistic system
cancel_trigger_time
Number
If the seller does not respond to cancellation request before this time, the order will auto canceled
reverse_order_id
Number
reverse order id (cancel order main id)
can_escalate_pickup
Boolean
can urge the logistics to pick up parcels
order_number
Number
Order number
order_id
Number
Order ID
Error Code
Error Code
Error Message
Solution
37
E037: One or more order id in the list are incorrect
One or more order IDs specified are not valid.
38
E038: Too many orders were requested
The number of orders exceeds the limit.
39
E039: No orders were found
The specified orders are not found.
56
E056: Invalid OrdersIdList format. Must use array format [1,2]
The format of the order ID list is not valid.
