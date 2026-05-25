v2.product.get_model_list
GET
/api/v2/product/get_model_list
API Description
Collapse
Get model list of an item.
Request
Request Address
More
Common Request Parameters
More
Request Parameters
Collapse
Name
Type
Required
Sample
Description
item_id
int64
True
178312
The ID of the item
Request Example
Collapse
Java
PHP
cURL
Python
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://partner.shopeemobile.com/api/v2/product/get_model_list?access_token=access_token&item_id=178312&partner_id=partner_id&shop_id=shop_id&sign=sign&timestamp=timestamp")
.asString();
Response
Response Parameters
Collapse
Name
Type
Sample
Description
message
string
Indicate error details if hit error. Empty if no error happened.
warning
string
Warning message.
request_id
string
75c2b01e50764cec8cfdc61e75c1f26d
The identifier for an API request for error tracking.
response
object
tier_variation
object[]
Variation config of item.
option_list
object[]
Option list.
option
string
testsku1
Option name.
image
object
image_id
string
Id of image
image_url
string
Url of image.
name
string
Variation name.
model
object[]
Model list.
price_info
object[]
Price info.

For SG/MY/BR/MX/PL/ES/AR seller: Sellers can set the price with two decimal place, other regions can only set the price as an integer.

currency
string
TWD
Currency for the item price.

current_price
float
100.0
Current price of item.
original_price
float
100.0
Original price of item.
inflated_price_of_original_price
float
100.0
Original price of item after tax.
inflated_price_of_current_price
float
100.0
Current price of item after tax.
sip_item_price
float
100.0
SIP item price. If item is from SIP primary shop, this field will be returned.

sip_item_price_source
string
manual
SIP item price source, could be manual or auto.If item is from SIP primary shop, this field will be returned.

sip_item_price_currency
string
CNY
The currency of sip_item_price.If item is from SIP primary shop, this field will be returned.

local_price
float
122.02
The original price multiplied by the local adjustment rate equals the local price. The local price is denominated in the local currency and is rounded to two decimal places.

<path></path>

local_promotion_price
float
122.02
During the promotion period, the CB price is multiplied by the local adjustment rate. Once the promotion starts, the price remains unchanged. During the promotion, the local_promotion_price= current_price, which is denominated in the local currency and retained to two decimal places.

<path></path>

model_id
int64
2000458802
Model ID.
tier_index
int32[]
[0, 1]
Tier index of this model.
promotion_id
int64
0
Current promotion ID of this model.
has_promotion
boolean
true
Indicates whether the model is currently under any ongoing promotion.




model_sku
string
blue bag
SKU of this model. the length should be under 100.
model_status
string
MODEL_NORMAL
The model status. Should be MODEL_NORMAL or MODEL_UNAVAILABLE. MODEL_NORMAL models can be sold on the buyer's side, and MODEL_UNAVAILABLE models cannot be sold on the buyer's side.

pre_order
object
(Only whitelisted users can use)
is_pre_order
boolean
false
Pre-order.
days_to_ship
int32
3
The days to ship.
stock_info_v2
object
new stock info.

Please check this FAQ for more detail: https://open.shopee.com/faq?top=162&sub=166&page=1&faq=230

summary_info
object
stock summary Info

total_reserved_stock
int32
Stock reserved for promotion.



Note: For SIP P Item, will return the total reserved stock for P Item and all A Items under the P Item.

total_available_stock
int32
Stock can be sold currently

seller_stock
object[]
Seller-managed stock

location_id
string
location id

stock
int32
stock in the current warehouse

if_saleable
boolean
true
To return if the stock of the location id is saleable

shopee_stock
object[]
Shopee warehouse stock

location_id
string
location id

stock
string
stock

advance_stock
object
Only for PH/VN/ID/MY local selected shops.

sellable_advance_stock
int32
Refers to Advance Fulfillment stock that Seller has shipped out and is available to be used to fulfill an order.

in_transit_advance_stock
int32
Refers to Advance Fulfillment stock that seller has shipped out and is still in transit and unavailable to be used to fulfill an order.

gtin_code
string
(Only TW seller and BR local seller available) gtin code.

weight
string
"1.1"
The weight of this model, the unit is KG.

If don't set the weight of this model, will use the weight of item by default.

dimension
object
The dimension of this model.

If don't set the dimension of this model, will use the dimension of item by default.

package_height
int32
11
The height of package for this model, the unit is CM.

package_length
int32
11
The length of package for this model, the unit is CM.

package_width
int32
11
The width of package for this model, the unit is CM.

is_fulfillment_by_shopee
boolean
whether model is fulfillment by shopee

standardise_tier_variation
object[]
Standardise Variation config of item.

variation_id
int64
Standardise Variation ID

variation_name
string
Standardise Variation Name

variation_group_id
int64
Standardise Variation Group ID

variation_option_list
object[]
Standardise Variation Option List

variation_option_id
int64
Standardise Option ID

variation_option_name
string
Standardise Option Name

image_id
string
ID of image

image_url
string
URL of image

error
string
Indicate error type if hit error. Empty if no error happened.
Response Example
Collapse
JSON
{
	"message": "-",
	"warning": "-",
	"request_id": "75c2b01e50764cec8cfdc61e75c1f26d",
	"response": {
		"tier_variation": [
			{
				"option_list": [
					{
						"option": "testsku1",
						"image": {
							"image_id": "-",
							"image_url": "-"
						}
					}
				],
				"name": "-"
			}
		],
		"model": [
			{
				"price_info": [
					{
						"currency": "TWD",
						"current_price": 100,
						"original_price": 100,
						"inflated_price_of_original_price": 100,
						"inflated_price_of_current_price": 100,
						"sip_item_price": 100,
						"sip_item_price_source": "manual",
						"sip_item_price_currency": "CNY"
					}
				],
				"model_sku": "blue bag",
				"model_status": "MODEL_NORMAL",
				"pre_order": {
					"is_pre_order": false,
					"days_to_ship": 3
				},
				"stock_info_v2": {
					"summary_info": {
						"total_reserved_stock": 0,
						"total_available_stock": 0
					},
					"seller_stock": [
						{
							"location_id": "-",
							"stock": 0,
							"if_saleable": true
						}
					],
					"shopee_stock": [
						{
							"location_id": "-",
							"stock": "-"
						}
					]
				},
				"gtin_code": "-",
				"weight": "1.1",
                                "dimension": {
                                    "package_height": 11,
                                    "package_length": 11,
                                    "package_width": 11
                },
			}
		],
		"standardise_tier_variation": [
			{
				"variation_name": "-",
				"variation_option_list": [
					{
						"variation_option_name": "-",
						"image_id": "-",
						"image_url": "-"
					}
				]
			}
		]
	},
	"error": "-"
}
Error Codes
Collapse
Business Error Codes
Error
Error Description
Details and Guidance
error_network
Inner http call failed
error_data
parse data failed
error_data
data not exist
error_param
parameter invalid
error_param
The information you queried is not found.
error_param
Wrong parameters, detail: {msg}.
error_server
Something wrong. Please try later.
error_shop
shopid is invalid
error_param
request not from gateway
error_shop_not_found
Shop is not found.
error_item_not_found
Item_id is not found.
error_param_shop_id_not_found
Shop_id is not found.
error_data
error data
error_inner
Our system is taking some time to respond, please try later.
error_inner
System error, please try again later or contact the OpenAPI support team.
error_item_not_found
Product not found
error_inner
Update item failed {{.error_info}}
error_inner
Update item failed {{.error_info}}
error_inner
System error, please try again later or contact the OpenAPI support team.
error_inner
System error, please try again later or contact the OpenAPI support team.
error_auth
The location_id input is not matched the shop's location_id(more/wrong). Please double check.
error_auth
Lack of location_id, please double check.
error_auth
Please wait for the holiday mode set then to edit item. Please try later.
error_auth
Total stock must be more than reserved stock.
error_param
{{.error_info}}
error_auth
Your shop can not use model level dts
error_auth
You do not have right to use seller location_id, please only fill seller_stock filed.
error.param
Can not update item with stock less than reserved stock
error_param
Can not update item with different stock structure. Can only update seller stock with location id when existing seller stock have location id. Can only update seller stock without location id when existing seller stock without location id.
error_param
Can not update item with stock less than reserve stock
error_auth
Stock should be larger than reserved stock.
error_system_busy
Our system is taking some time to respond, please try later.
error_param
Can not update item with different stock structure. Can only update seller stock with location id when existing seller stock have location id. Can only update seller stock without location id when existing seller stock without location id.
Common Error Codes
Error Example
Collapse
JSON
{
    "error": "product.error_param",
    "message": "invalid field ItemId: value must  Not Null",
    "request_id": "a48d523f688e20f593446846638360d9"
}
API Permissions
Collapse
APP types that can call this API.
ERP System
Seller In House System
Product Management
Accounting And Finance
Customer Service
Customized APP
Ads Service
Swam ERP
Livestream Management
Ads Facil
Affiliate Marketing Solution Management
Shopee Video Management
API Tools
Collapse
API Test Tools
API Access Log
Update Log
Collapse
Date
Update Details
2025-11-07
add new response field "has_promotion"
2025-09-05
add to new response field "local_promotion_price"and "local_price"
2025-02-17
Add is_fulfillment_by_shopee
2024-11-01
Update the description of total_reserved_stock to return the total reserved stock for P Item and all A Items under the P Item
2024-07-02
add advance_stock