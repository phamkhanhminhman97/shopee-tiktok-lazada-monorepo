Seller authorization introduction
Last UpdatedMar 5,2026
Reads21491
If your application needs to access the business data of Lazada sellers (like product and order information) through Lazada Open Platform, you need to get the authorization from sellers, that is, the “Access Token” required for accessing the sellers’ data. You need to guide the sellers to complete the flow of “using Lazada seller account to log in and authorize the application”. This process uses the international OAuth2.0 standard protocol for user authentication and authorization.

Lazada Open Platform operates on a “code-for-token” model and employs three distinct authorization policies.

Note: Before attempting the authorization process, please ensure you have completed the creation of your app.

Service address
Country

Service address

all countries (SG/MY/TH/VN/ID/PH)

https://auth.lazada.com/



Authorization URL
https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${app call back url}&client_id=${appkey}

This link is used to initiate the seller authorization process.

Developers need to replace “${app callback url}” in the URL with the callback address used to receive the authorization code. After successful authorization, the seller's browser will be redirected and access your callback address using the GET method. Please note that this callback address must exactly match the callback address configured in your app. Otherwise, the error “Redirect uri does not match the callback URL of the app” will occur.

Then, developers need to replace “${appkey}” with the APP KEY of the app you created. Ensure that the APP KEY you replace matches the callback URL; otherwise, the error “Redirect uri does not match the callback URL of the APP” will occur.

Parameters
Parameter name

Required

Demo

Description

client_id

Yes

101406

The APPKEY created in the APP console.

redirect_uri

Yes

https://lazada.com

This redirect URL is used to receive the authorization code. The redirect will be initiated after the seller completes the authorization process.

response_type

Yes

code

Authorization type, fixed value “code”.

state

No

Custom value,123456

This field is a custom field. Its value will be sent to the redirect URL along with the authorization code upon successful authorization.



Overview of Authorization Policies
The open platform offers three distinct authorization strategies, each adding an additional step to the standard “code for token” process.

After creating your app, navigate to the App Console -> Development -> App Management page. Click “Manage” to access the details page for further information.







Allow binding user to authorize（search key: ABA）
This authorization policy typically appears in apps created by accounts with a partner type of “Self-Developed.” This policy indicates that the developer's app is exclusively for use within the enterprise/group's internal Lazada stores or designated partner stores (not exceeding 60), subject to whitelist restrictions.

Please use your browser's search function (CTRL + F) to search for “ABA” to view the complete authorization process.

Allow login user to authorize（search key: ALA）
This authorization policy typically appears in apps created by developer accounts with a business-to-business partner type. This policy indicates that your app can proceed directly with the seller authorization process without any prerequisites.

Please use your browser's search function (CTRL + F) to search for “ALA” to view the complete authorization process.

Note: Under the current policy (12.25.2025), this authorization policy will only appear in apps in test status. Once your app applies for release, this policy may be updated to “Allow subscribers to authorize” and will not support rollback.

Allow subscribers to authorize（search key: ASA）
This authorization policy typically appears after an app created by a developer account with a “Enterprise Commercial” partner type goes online. This policy indicates that your app has been switched to subscription authorization. Details are as follows:

Local stores: Sellers must subscribe to the corresponding service for the app in the Lazada Service Market before completing authorization.

Cross-border stores: Please refer to the authorization process for “Allow login user to authorize”. Currently, the Lazada Service Marketplace has not yet enabled subscription functionality for cross-border stores.

Please use your browser's search function (CTRL + F) to search for “ASA” to view the complete authorization process.

Basic Authorization Process (ALA/ASA - Cross-Border Sellers Only)
This process will introduce the basic authorization flow (corresponding to the policy “Allow login user to authorize”). The other two authorization policies are based on this flow with additional prerequisite configuration requirements.

Authorization Flowchart


Authorization Process Example
Applicable Authorization Policies: Allow login user to authorize, Allow subscribers to authorize (Cross-border sellers only)
Sample test information: APP KEY - 100132 Callback URL - https://www.lazada.com
1、Visit the authorized URL
Replace the placeholder in the authorization URL with the APP information from the test data as shown in the example. This will generate the following URL, which can then be accessed:

https://auth.lazada.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=https://www.lazada.com&client_id=100132

Select Store Site
After accessing the first-step concatenated authorization URL, the seller will be directed to the authorization page.



On the authorization page, sellers must select the appropriate Site based on their store type and country, then click "Use Seller Login".

Local stores or cross-border stores wishing to authorize only a single site can choose from the following options: Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam;

For cross-border stores seeking a single authorization applicable to all sites, select Crossborder;

Choice sellers, please select these options: Lazada Choice - SG\MY\ID\PH\TH\VN

2、Seller Center Login
After clicking “User Seller Login” in the second step, the system will redirect to the corresponding seller center login page based on the seller's selected site. Sellers must complete the login process on this page. Upon successful login, the page will redirect again to the authorization page.

Note: 

QR code login is currently unavailable for authorization.

If sellers cannot log in on this page, they should verify that their password is correct or reset it. The login verification on this page is unrelated to the Open Platform.



3、Complete the authorization
After completing the third step of logging in, the seller's browser will be redirected back to the authorization page. Please have the seller verify that the email address listed under My Account matches the login email for the store requiring authorization.

If the account is incorrect, please have the seller click Switch to return to Seller Center and log out there, or open a new incognito mode tab and restart the authorization process from the beginning.



4、Receive the authorization code and generate an access token
After the seller clicks “Authorize” on the fourth step page, their browser will be redirected to the URL specified in the redirect_uri field, along with the code parameter.

https://www.lazada.com/?code=0_100132_Cl3VmMr6W6YC6cx6swxFAZ0l825

After receiving the authorization code, developers must call the GenerateAccessToken API within half an hour to exchange the authorization code for an Access Token used to call the Lazada Open API.

Request Demo
https://auth.lazada.com/rest/auth/token/create?code=0_100132_Cl3VmMr6W6YC6cx6swxFAZ0l825&app_key=100132&sign_method=sha256&timestamp=1767595695482&sign=3F178EC4420269D66298A662551246D7669E84314A38E00D278A584EBF5EA079
Response Demo
{
  "access_token": "50000201f12dgccvfLzTimgL1c1c4dd8h0irs9DWCORDQqXRlsvWgpDt5x4Fwy",
  "country": "sg",
  "refresh_token": "50001201e12pmXdgResRzjif112e3a46Kl0eqskC0iRRhLQXprmWX5QElsqQOK",
  "account_platform": "seller_center",
  "refresh_expires_in": 4320000,
  "country_user_info": [
    {
      "country": "sg",
      "user_id": "1152180742",
      "seller_id": "1152180742",
      "short_code": "SGLYT0OS"
    }
  ],
  "expires_in": 864000,
  "account": "LzdOp_SG_test@163.com",
  "code": "0",
  "request_id": "212a6a5a17675956955215662",
  "_trace_id_": "213bd36917675956955192683e1e39"
}
5、Manage Access Token and Refresh Token
After successfully calling the GenerateAccessToken API, developers will receive the following response information:

Parameter name

Demo

Enum

Description

access_token

50000201f12dgccvfLzTimgL1c1c4dd8h0irs9DWCORDQqXRlsvWgpDt5x4Fwy

N/A

The token used to call the Lazada Open API; each access token corresponds to a single store and can only query or update information for that specific store.

Note: Access tokens generated by different APPKEYS cannot be used interchangeably.

expires_in

864000

N/A

The number of seconds remaining until the current access token expires. For example, 86,400 seconds equates to 10 days.

refresh_token

50001201e12pmXdgResRzjif112e3a46Kl0eqskC0iRRhLQXprmWX5QElsqQOK

N/A

When the corresponding access token expires, developers can use the refresh token to call the RefreshAccessToken API to obtain a new access token.

refresh_expires_in

4320000

N/A

The remaining seconds until the current refresh token expires. For example, 4320000 seconds equates to 50 days. After 50 days, the refresh token will expire, and a new refresh token can only be obtained by completing the authorization process again.

Note: The refresh token cannot be refreshed using the RefreshAccessToken API.

country

sg

sg: Singapore

my: Malaysia

ph: Philippines

th: Thailand

id: Indonesia

vn: Vietnam

cb: Cross-border

The store country type selected by the seller during authorization.

account_platform

seller_center

seller_center

N/A

country_user_info

object arry

N/A

Specific details of the authorized seller store, including the countries where the access token granted in this authorization is valid, the seller ID, and the seller short code.

Note: Cross-border sellers may have stores in multiple countries. If a cross-border seller selects “Cross-border” during authorization, the generated access token can be used across all country stores under that object without needing to generate it multiple times.

country_user_info.country

sg

sg: Singapore

my: Malaysia

ph: Philippines

th: Thailand

id: Indonesia

vn: Vietnam

The country corresponding to the current object's store.

country_user_info.user_id

1152180742

N/A

Authorized account ID for the current country store (not visible in Seller Center).

country_user_info.seller_id

1152180742

N/A

The seller ID of the store in the current country.

country_user_info.short_code

SGLYT0OS

N/A

The store's short code in the current country.

account

LzdOp_SG_test@163.com

N/A

The email address used by the seller during authorization.

Developers must retain the above information and use the RefreshAccessToken API to obtain a new access token before the old access token expires.

Remind sellers to repeat the authorization process before the old refresh_token expires to obtain a new refresh_token and access token.

Seller Authorization Whitelist Type App Authorization Process (ABA)
1、Add Authorized Seller Whitelist
This seller authorization process applies to apps created by developer accounts where the partner type was selected as “Enterprise/Individual Self-Developed” during basic information setup. Apps created by such developer accounts predominantly follow the “Allow binding user to authorize” authorization strategy. An “Authorized Seller Whitelist” option will be added at the very bottom of the app's details page in the App Console.



Click “Add” to enter the addition module and fill in the seller's relevant information.



Seller ID
Please enter the ID found in the “short code” field at the top left of the Seller Center -> Settings page.



Seller Email & Password
Please enter the email address and password used to log in to the corresponding store in Seller Center.

Country
For cross-border stores, please select China or add all six sites to the whitelist. Non-cross-border stores should select the option corresponding to their store's country of origin.

2、Complete the authorization process
After adding the seller to the whitelist, the seller can access the app's authorization URL and complete the authorization process following the basic authorization flow.



Subscription Authorization App Authorization Process（ASA）
This authorization type will only appear in online apps created by developer accounts with the partner type set to Enterprise Commercial.

Notes
The authorization policy for apps in testing state created by enterprises commercial developer accounts is "Allow login user to authorize", which will only be updated to "Allow subscribers to authorize" after the app goes online;
After the app is updated to the online status, please refer to Step 4 of this document to begin publishing the app on the service market.
For the authorization process of cross-border stores, please refer to the “Basic Authorization Process.” Subscription authorization is currently only available to local sellers.
Refresh tokens generated from subscription authorizations by local sellers are unusable because the access token's validity period will be tied to the subscription's validity period in the service marketplace, rather than expiring after a fixed time.
Subscription Process
1、Visit the Service Market Subscription Page
After developers complete the qualification verification for the service marketplace and successfully publish their service offerings in the corresponding countries, they can access each country's service marketplace and conduct searches.

Service Market URL
Vietnam

https://marketplace.lazada.vn

Singapore

https://marketplace.lazada.sg

Philippines

https://marketplace.lazada.com.ph

Malaysia

https://marketplace.lazada.com.my

Thailand

https://marketplace.lazada.co.th

Indonesia

https://marketplace.lazada.co.id

2、Search and enter the details page to subscribe
After entering the page, select the service version and validity period, then click “Authorized use” or “Buy it now” to subscribe.







Click “Confirm” to complete subscription.

Note: If the seller has selected the paid version, payment must be made before subscribing.

3、Complete the authorization
After clicking “Confirm” or completing payment, you will be directed to this page. Sellers can follow the prompts here to click “Authorized use of services” and proceed to the service page for authorization.

Alternatively, authorization can be completed through the basic authorization process.

Note: If a local store seller attempts the basic authorization process without subscribing, they will be intercepted at the final authorization step and redirected to your service subscription page. If your app has not yet been listed on the service marketplace, an error will occur.



FAQ
Q1、After logging into Seller Center, a “Missing parameter” error appears.



A1、This error typically occurs in the browser during the initial authorization process. If this error appears, please instruct the seller not to close the browser. Instead, have them revisit the authorization link “auth.lazada......” to complete the authorization process by re-authorizing.

Q2、Encountered a seller whitelist error during authorization.



A2、This error occurs because the currently authorized seller store is not included in the corresponding app's seller whitelist. Please navigate to the App Management page in the App Console and add your seller to the authorized seller whitelist at the bottom of the page.

Q3、After authorizing the login in Seller Center, the system did not return to the authorization page but instead proceeded directly to Seller Center.

A3、This issue typically occurs when sellers have already logged into Seller Center before authorization or used QR code scanning instead of credentials for login. Therefore, the quickest solution is to have the seller open a new incognito browser window and complete authorization using their account credentials.

Q4、Redirect uri does not match the callback url of the APP



﻿﻿﻿﻿A4、This error occurs because the redirect_uri in the authorization link does not match the callback URL configured for the app in the client_id. Correcting the redirect_uri will resolve this issue.



Lazada 2022. All rights reserved.
