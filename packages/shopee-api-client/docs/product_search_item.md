v2.product.search_item
GET
/api/v2/product/search_item
API Description
Collapse
Use this call to search item.
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
offset
string
False
0
Specifies the starting entry of data to return in the current call. Default is empty. if data is more than one page, the offset can be some entry to start next call.
page_size
int
True
10
the size of one page.
item_name
string
False
apple
name of item.
attribute_status
int
False
2
1:get item lack of requires attribute. 2:get item lack of optional attribute.
item_sku
string
False
sku
sku. If you search for item_sku and item_name at the same time, only the results that match item_sku will be returned. If you search for item_sku and attribute_status at the same time, the results that match both item_sku and attribute_status will be returned.

item_status
string[]
False
["NORMAL"]
NORMAL/BANNED/UNLIST/REVIEWING/SELLER_DELETE/SHOPEE_DELETE

If you want to search multiple status, please upload the url like this: item_status=NORMAL&item_status=BANNED

deboost_only
boolean
False
true
If deboost_only is true, then API will return items whose deboost is true, if deboost_only is empty or false, then API will return items whose deboost is true and false simultaneously

Request Example
Collapse
Java
PHP
cURL
Python
Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://partner.shopeemobile.com/api/v2/product/search_item?access_token=access_token&attribute_status=2&item_name=apple&offset=0&page_size=10&partner_id=partner_id&shop_id=shop_id&sign=sign&timestamp=timestamp")
.asString();
Response
Response Parameters
Collapse
Name
Type
Sample
Description
error
string
Indicate error type if hit error. Empty if no error happened.
message
string
Indicate error details if hit error. Empty if no error happened.
warning
string
Indicate waring details if hit waring. Empty if no waring happened.
request_id
string
The identifier for an API request for error tracking
response
object
item_id_list
int[]
List of item ID.
total_count
int
Total num of items match condation.
next_offset
string
If has_next_page is true, this value need set to next request.offset
Response Example
Collapse
JSON
{
    "error": "",
    "message": "",
    "warning": "",
    "request_id": "6faac36a4a3242aabad2941e3acd7297",
    "response": {
        "item_id_list": [
           653211,564331
        ],
        "next_offset":"xsszxjcdeahx",
        "total_count": 100,
    }
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
error_param
request must set one of [item_name,attribute_status]
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
error_busi_cannot_edit_vsku
Can not use OpenAPI to edit/create VSKU, please connect with your manager
error_auth
Your shop can not use model level dts
error_system_busy
Our system is taking some time to respond, please try later.
Common Error Codes
Error Example
Collapse
JSON
{
    "error": "product.error_param",
    "message": "invalid field PageSize: value must  Not Null",
    "request_id": "85a986b4b86f92d24b5703996c7abfd3"
}
API Permissions
Collapse
APP types that can call this API.
ERP System
Seller In House System
Product Management
Swam ERP
API Tools
Collapse
API Test Tools
API Access Log
Update Log
Collapse
Date
Update Details
2024-01-19
add item_status and deboost_only request parameter
2022-07-28
add item_sku request parameter
2021-04-30
New API