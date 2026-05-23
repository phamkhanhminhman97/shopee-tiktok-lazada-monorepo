shop_authorization_push
Last Updated: 2 Sep 2022
Basics
Collapse
Property
Value
Category
Shopee Push

Push Mechanism Name
shop_authorization_push

Push Mechanism Code
1

Push Mechanism Description
This push allows you to be notified once shops or merchants are authorized to your app

Push Mechanism Subscription Rules
Original/ERP System/Seller In House System/Product Management/Order Management/Accounting And Finance/Marketing/Customer Service/Customized APP/Ads Service/Consignment Service System/Seller Logistics/Custom APP/Swam ERP/Livestream Management/Ads Facil/Affiliate Marketing Solution Management/Shopee Video Management/Auto Parts Installation (ISP)

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
partner_id
int
200000
Shopee's unique identifier for your App. Partner ID is assigned upon registration is successful.

code
int
1
Shopee's unique identifier for a push notification

timestamp
timestamp
1610000000
Timestamp that indicates the message was sent.

data
object[]
shop_id
int
600000
[Optional]

Shopee's unique identifier for a shop. It indicates which shop has been authorized.

shop_id_list
int[]
[6000000,60000001]
[Optional]
If the seller uses a main account to authorize multiple shops at the same time, there will be this parameter to indicate all authorized shops

merchant_id
int
600000
[Optional]

Shopee's unique identifier for a merchant. It indicates which merchant has been authorized.

merchant_id_list
int[]
[6000000,60000001]
[Optional]

If the seller uses a main account to authorize multiple merchants at the same time, there will be this parameter to indicate all authorized merchants

authorize_type
string
shop authorization by user
In which way shops are authorized to App

extra
string
shop id 600000 (SG) has been authorized
Details of the authorization

main_account_id
int
60000
[Optional]

Shopee's unique identifier for a main account.
If a seller uses a main account to authorize, it would have this parameter to indicate which main account seller use to authorize

success
int
1
Indicates if the push is success

Push Contents
Collapse
Seller shop authorization

Json
{"data":{"authorize_type":"shop authorization by user","extra":"shop id 600000 (SG) has been authorized successfully","shop_id":60011111,"success":1},"partner_id":2000002,"code":1,"timestamp":1660616278}


Seller uses main account to authorize shops

Json
{"data":{"authorize_type":"shop authorization by user","extra":"Shop has been authorized successfully","main_account_id":68272,"shop_id_list":[62000001,62000002,62000003,62000004],"success":1},"partner_id":2000002,"code":1,"timestamp":1660616631}


Seller uses main account to authorize a merchant

Json
{"data":{"authorize_type":"merchant authorization by user","extra":"merchant id 600000 has been authorized successfully","merchant_id":600222872,"success":1},"partner_id":2000007,"code":1,"timestamp":1660616278}
Update Log
Collapse
Date
Update Details
2022-08-18
New Push Mechanism

shop_authorization_canceled_push
Last Updated: 29 Dec 2025
Basics
Collapse
Property
Value
Category
Shopee Push

Push Mechanism Name
shop_authorization_canceled_push

Push Mechanism Code
2

Push Mechanism Description
This push allows you to be notified once shops or merchants or users are deauthorized to your app


Push Mechanism Subscription Rules
Original/ERP System/Seller In House System/Product Management/Order Management/Accounting And Finance/Marketing/Customer Service/Customized APP/Ads Service/Consignment Service System/Seller Logistics/Custom APP/Swam ERP/Livestream Management/Ads Facil/Affiliate Marketing Solution Management/Shopee Video Management/Auto Parts Installation (ISP)

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
partner_id
int64
200000
Shopee's unique identifier for your App. Partner ID is assigned upon registration is successful.

code
int32
2
Shopee's unique identifier for a push notification

timestamp
timestamp
1610000000
timestamp: Timestamp that indicates the message was sent.

data
object[]
shop_id
int64
600000
[Optional]

Shopee's unique identifier for a shop. It indicates which shop has been cancel authorization.

shop_id_list
int64[]
[6000000,60000001]
[Optional]

Shopee's unique identifier for a shop. It indicates which shops have been cancel authorization.

merchant_id
int64
600000
[Optional]

Shopee's unique identifier for a merchant. It indicates which merchant has been cancel authorization.

merchant_id_list
int64[]
[6000000,60000001]
[Optional]

Shopee's unique identifier for a merchant. It indicates which merchants have been cancel authorization.

user_id
int64
368765104
[Optional]

Shopee's unique identifier for a user. It indicates which user has been cancel authorization.

user_id_list
int64[]
[368765100, 368765098, 368765097]
[Optional]

Shopee's unique identifier for a user. It indicates which users have been cancel authorization.

authorize_type
string
shop authorization by user
In which way the authorization is cancelled

extra
string
shop id 600000 (SG) has been authorized
Details of the deauthorization

main_account_id
int64
60000
[Optional]

Shopee's unique identifier for a main account. If a seller uses a main account to cancel authorize, it would have this parameter to indicate which main account seller use to cancel authorize.

success
int32
1
Indicates if the push is success

Push Contents
Collapse
Shop authorization canecled by seller

Json
{"data":{"authorize_type":"user cancel shop authorization","success":1,"extra":"shop id 22000000 (VN) has been cancelled its authorization"},"code":2,"partner_id":800000,"timestamp":1653394175}


Seller uses a main account to cancel the authorization

Json
{"data":{"authorize_type":"user cancel merchant authorization","merchant_id_list":[1001000],"main_account_id":19000,"success":1,"extra":"merchant shop cancelled its authorization"},"code":2,"partner_id":800000,"timestamp":1653026849}


Authorization expired

Json
{"data":{"authorize_type":"expiry","shopid":22000000,"success":1,"extra":"The authorization is expired."},"code":2,"partner_id":800000,"timestamp":1653026985}


Deauthorization because of abnormal shop status

Json
{"data":{"authorize_type":"App status is abnormal","shopid":22000000,"success":1,"extra":"Shop ID 22000000 is currently frozen. The authorization cannot be completed."},"code":2,"partner_id":800000,"timestamp":1653026985}


Deauthorization because Shop and main account are disconnected

Json
{"data":{"authorize_type":"shop and main account is disconnected","shopid":22000000,"success":1,"extra":"Shop (ID: 22000000) is disconnected from the main seller account (ID:30000). The authorization cannot be completed."},"code":2,"partner_id":800000,"timestamp":1653026985}
Update Log
Collapse
Date
Update Details
2022-08-18
New Push Mechanism

open_api_authorization_expiry
Last Updated: 29 Dec 2025
Basics
Collapse
Property
Value
Category
Shopee Push

Push Mechanism Name
open_api_authorization_expiry

Push Mechanism Code
12

Push Mechanism Description
Push shops, merchants, and users whose authorization expires within a week.

Push Mechanism Subscription Rules
ERP System/Seller In House System/Product Management/Order Management/Accounting And Finance/Marketing/Customer Service/Customized APP/Ads Service/Consignment Service System/Seller Logistics/Custom APP/Swam ERP/Livestream Management/Ads Facil/Affiliate Marketing Solution Management/Shopee Video Management/Auto Parts Installation (ISP)

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
code
int32
12
Shopee's unique identifier for a push notification

timestamp
timestamp
1568606634
Timestamp that indicates the message was sent.

data
object[]
merchant_expire_soon
int64[]
[123123,123123,4342,3242342]
The merchant id of the merchants whose authorization expires within one week.

shop_expire_soon
int64[]
[23213,243242,342343,42342345656,45345]
The shop id of the shops whose authorization expires within one week.

user_expire_soon
int64[]
[368765104, 368765105, 368765106]
The user_id of the users whose authorization expires within one week.

expire_before
timestamp
1619740800
The expiration time of pushed merchants and shops is before this time

page_no
int32
1
total_page
int32
2
Push Contents
Collapse


Json
{
    "code": 12,
    "timestamp": 1568606634,
    "data": {
        "merchant_expire_soon":[123123,123123,4342,3242342],
        "shop_expire_soon": [23213,243242,342343,42342345656,45345],
        "user_expire_soon": [368765104,368765105,368765106],
        "expire_before": 1619740800, 
        "page_no":1,
        "total_page": 2 
    }
}
Update Log
Collapse
Date
Update Details
2022-08-18
New Push Mechanism

order_status_push
Last Updated: 14 Aug 2023
Basics
Collapse
Property
Value
Category
Order Push

Push Mechanism Name
order_status_push

Push Mechanism Code
3

Push Mechanism Description
Get notified immediately on all order status updates. This includes order cancellations that occur before shipping, so that you can take the necessary steps in time.

Push Mechanism Subscription Rules
Original/ERP System/Seller In House System/Order Management/Customer Service/Swam ERP

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
data
object
Main Push message data

ordersn
string
220810QSK8S7BX
Return by default. Shopee's unique identifier for an order.

status
string
PROCESSED
Return by default. Enumerated type that defines the current status of the order.

completed_scenario
string
NORMAL
To indicate which COMPLETED status order is in.



NORMAL: The order has been completed.



RRAOC: The whole RRAOC (raise return&refund after order completed) progress has been completed.

update_time
timestamp
1660123127
Return by default. Timestamp that indicates the last time that there was a change in value of order, such as order status changed from 'Paid' to 'Completed'.

shop_id
int
727720655
Shopee's unique identifier for a shop. Required param for most APIs.

code
int
3
Shopee's unique identifier for a push notification.

timestamp
timestamp
1660123127
Timestamp that indicates the message was sent.

Push Contents
Collapse
Json
{"data":{"items":[],"ordersn":"220810QSK8S7BX","status":"PROCESSED","completed_scenario":"","update_time":1660123127},"shop_id":727720655,"code":3,"timestamp":1660123127}
Update Log
Collapse
Date
Update Details
2023-08-14
Shopee now support buyer to raise return& refund after order completed, for order_status_push add new field "completed_scenario" to indicate which COMPLETED status order is in.
2022-08-18
New Push Mechanism

order_trackingno_push
Last Updated: 18 Aug 2022
Basics
Collapse
Property
Value
Category
Order Push

Push Mechanism Name
order_trackingno_push

Push Mechanism Code
4

Push Mechanism Description
Get notified immediately when order tracking numbers are updated so that you can ship promptly, and avoid having to query the v2.logistics.get_tracking_number API repeatedly. 
This can be useful when logistics partners take some time to update tracking numbers which may be required on shipping documents.

Push Mechanism Subscription Rules
Original/ERP System/Seller In House System/Order Management/Swam ERP

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
data
object
Main Push message data

ordersn
string
220809MDBFYFT2
Shopee's unique identifier for an order.

forder_id
string
4965804244309504855
Coming offline

package_number
string
OFG113701539238152
Shopee's unique identifier for the package under an order.

tracking_no
string
BR222263688572VSPXLM71894
The tracking number of this order.

shop_id
int
296363855
Shopee's unique identifier for a shop. Required param for most APIs.

code
int
4
Shopee's unique identifier for a push notification.

timestamp
timestamp
1660123089
This is to indicate the timestamp of the request.

Push Contents
Collapse
Json
{"data":{"ordersn":"220809MDBFYFT2","forder_id":"4965804244309504855","package_number":"OFG113701539238152","tracking_no":"BR222263688572VSPXLM71894"},"shop_id":296363855,"code":4,"timestamp":1660123089}
Update Log
Collapse
Date
Update Details
2022-08-18
New Push Mechanism

shipping_document_status_push
Last Updated: 4 Apr 2023
Basics
Collapse
Property
Value
Category
Order Push

Push Mechanism Name
shipping_document_status_push

Push Mechanism Code
15

Push Mechanism Description
shipping_document_status_push

Push Mechanism Subscription Rules
Original/ERP System/Seller In House System/Order Management/Swam ERP

Time Out Seconds
3s

Sequence Guaranteed
No

Can Repeated Same Message
Yes

Retry Seconds
300s,1800s,10800s

Push Parameters
Collapse
Name
Type
Sample
Description
data
object
Main Push message data.

order_sn
string
201118BCKPJQQ8
Shopee's unique identifier for an order.

package_number
string
2485710696837122445
Shopee's unique identifier for the package under an order.

status
string
READY
The status of the shipping document generation.

-READY

-FAILED

shop_id
int
296363855
Shopee's unique identifier for a shop. Required param for most APIs.

code
int
15
Shopee's unique identifier for a push notification.

timestamp
timestamp
1660123089
This is to indicate the timestamp of the request.

Push Contents
Collapse
Java
{"data": {"ordersn":"201118BCKPJQQ8","package_number":"2485710696837122445","status":"READY"},"shop_id":296363855,"code":15,"timestamp":1660123089}




Update Log
Collapse
Date
Update Details
2023-01-12
New Push

Order Push


Order Status Update Push (Code:3)
Get notified immediately on all order status updates. This includes order cancellations that occur before shipping, so that you can take the necessary steps in time.



Order TrackingNo Push (Code:4)
Get notified immediately when order tracking numbers are updated so that you can ship promptly, and avoid having to query the v2.logistics.get_tracking_number API repeatedly.

This can be useful when logistics partners take some time to update tracking numbers which may be required on shipping documents.



Shipping_document_status_push(Code:15)
Get notified immediately when shipping document status is "READY" or "FAILED", so that you don't need to call the v2.logistics.get_shipping_document_result API repeatedly to get shipping document status.