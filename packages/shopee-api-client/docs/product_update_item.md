v2.product.update_item
POST
/api/v2/product/update_item
API Description
Collapse
Update item.
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
description
string
False
Hello product product WlQPdMV4SlVoG7QD1v0fEecNoCVEBNx6
Description of item.
weight
float
False
0.9
The weight of this item, the unit is KG.

Updating the weight of this item will overwrite the weight of all models under this item.

pre_order
object
False
Pre Order setting.
days_to_ship
int32
True
7
Days to ship.
is_pre_order
boolean
True
false
Whether the item is pre order.
item_name
string
False
Hello Pgkk50jdNgEnlWvX
Item name.
attribute_list
object[]
False
Item attributes.
attribute_id
int32
True
5357
ID of attribute.
attribute_value_list
object[]
False
value_id
int32
True
38173
ID of attribute value. In the following cases, the value id needs to be uploaded as 0, and original_value_name is mandatory, needs to be filled in customized value. (1) AttributeInputType is TEXT_FILED; (2) AttributeInputType is COMBO_BOX or MULTIPLE_SELECT_COMBO_BOX, and the seller want to fill in a customized value.
original_value_name
string
False
Red
Value name. original_value_name from produc.get_attributes api. If value id=0, this field is required. If AttributeType is DATE_TYPE or TIMESTAMP_TYPE, you can upload timestamp(string type) as the original_value_name.
value_unit
string
False
kg
Unit of attribute value (quantitative attribute only).
image
object
False
Images of item.
image_id_list
object[]
True
Image ID.
image_ratio
string
False
3:4
Ratio of image,
OptionalAllowed ratios :
"1:1" (default) 
"3:4"

item_sku
string
False
abc
SKU tag for item.
item_status
string
False
UNLIST
Item status, could be UNLIST or NORMAL.
logistic_info
object[]
False
Logistic channel setting.
size_id
int32
False
1
Size ID.
shipping_fee
float
False
9.0
Shipping fee.
enabled
boolean
True
false
Whether the channel is enabled for this item.
logistic_id
int32
True
10007
ID of logistics channel.
is_free
boolean
False
false
Whether cover shipping fee for buyer.
wholesale
object[]
False
Wholesale setting.

If you want to delete it, please pass it with blank.

min_count
int32
True
0
Minimum count of this tier.
unit_price
float
True
9.9
Price of this tier.
max_count
int32
True
10
Maximum count of this tier.
item_id
int64
True
28001430
ID of item.
category_id
int32
False
34106
ID of category.
dimension
object
False
The dimension of this item.

Updating the dimension of this item will overwrite the dimension of all models under this item.

package_height
int32
True
13
The height of package for this item, the unit is CM.

package_length
int32
True
12
The length of package for this item, the unit is CM.

package_width
int32
True
14
The width of package for this item, the unit is CM.

condition
string
False
USED
Condition of item, could be NEW or USED.
video_upload_id
string[]
False
["sg_f4bde9bc-ff3c-485e-a6dd-3161dab4b942_000000"]
Video upload ID returned from video uploading API.

If you want to delete it, please pass it with blank.

brand
object
False
brand_id
int32
False
0
Id of brand.
original_brand_name
string
False
nike
Original name of brand.
item_dangerous
int32
False
0
This field is only applicable for local sellers in Indonesia and Malaysia. Use this field to identify whether a product is a dangerous product. 0 for non-dangerous product and 1 for dangerous product. For more information, please visit the market's respective Seller Education Hub.
tax_info
object
False
Tax information
ncm
string
False
Mercosur Common Nomenclature, it is a convention between Mercosur member countries to easily recognize goods, services and productive factors negotiated among themselves. (BR region)


NCM must have 8 digits, OR, if your item doesn't have a NCM enter the value "00"

same_state_cfop
string
False
Tax Code of Operations and Installments for orders that seller and buyer are in the same state. It identifies a specific operation by category at the time of issuing the invoice.
diff_state_cfop
string
False
Tax Code of Operations and Installments for orders that seller and buyer are in different states. It identifies a specific operation by category at the time of issuing the invoice.
csosn
string
False
Code of Operation Status – Simples Nacional, code for company operations to identify the origin of the goods and the taxation regime of the operations.
origin
string
False
Product source, domestic or foreig
cest
string
False
Tax Replacement Specifying Code (CEST), to separate within the same NCM products that do or do not have ICMS tax substitution. (BR region)

CEST must have 7 digits, OR, if your item doesn't have a CEST enter the value "00".

measure_unit
string
False
(BR region)
invoice_option
string
False
Value shuold be one of NO_INVOICES VAT_MARGIN_SCHEME_INVOICES VAT_INVOICES NON_VAT_INVOICES and if value is NON_VAT_INVOICE vat_rate should be null (PL region)
vat_rate
string
False
Value should be one of 0% 5% 8% 23% NO_VAT_RATE (PL region)
hs_code
string
False
HS Code. (Only for IN region)
tax_code
string
False
Tax Code. (Only for IN region)
tax_type
int32
False
tax_type only for TW whitelist shop. Shopee will referred Tax type when substitute sellers for issuing e-receipts to buyers. All variations share the same tax type. The meaning of value: 

0: no tax type

1: tax-able

2: tax-free

pis
string
False
Only for BR shop.

PIS - Programa de Integração Social (Social Integration Program). It is a government tax to collect resources for the payment of unemployment insurance and other employee related rights.

PIS % - the tax applied to this product

cofins
string
False
Only for BR shop.

COFINS – Contribuição para Financiamento da Seguridade Social (Contribution for Social Security Funding). It is a government tax to collect resources for public health system and social security.

COFINS % - the tax applied to this product

icms_cst
string
False
Only for BR shop.

ICMS - Imposto sobre Circulação de Mercadorias e Serviços (Circulation of Goods and Services Tax). 

CST - Código da Situação Tributária (Tax Situation Code) is represented by a combination of 3 numbers with the purpose of demonstrating the origin of a product and determining the form of taxation that will apply to it. Therefore, each digit in the CST Table has a specific meaning: the first digit indicates the origin of the operation, the second digit represents the ICMS taxation on the operation and the third digit provides additional information about the form of taxation.

pis_cofins_cst
string
False
Only for BR shop.

The CST PIS/Cofins is a code on the Electronic Invoice (NF-e) that identifies the tax situation of PIS (Programa de Integração Social) and Cofins (Contribuição para o Financiamento da Seguridade Social) in sales of goods.

federal_state_taxes
string
False
Only for BR shop.

Enter the total percentage of the combination of federal, state, and municipal taxes, using up to two decimals.

operation_type
string
False
Only for BR shop.

1: Retailer

2: Manufacturer

ex_tipi
string
False
Only for BR shop.

The EXTIPI field in the NF-e (Nota Fiscal Eletrônica) is used to indicate if there's an exception to the IPI (Imposto sobre Produtos Industrializados) tax rate for a specific product.

fci_num
string
False
Only for BR shop.

The FCI Control Number is a unique identifier assigned to each import FCI (Import Content Form). It's mandatory on the corresponding NF-e (electronic invoice) to ensure compliance with Brazilian import tax regulations.

recopi_num
string
False
Only for BR shop.

RECOPI NACIONAL is a Brazilian government system that facilitates the registration and management of tax-exempt operations involving paper destined for printing books, newspapers, and periodicals (known as "papel imune" in Portuguese).

additional_info
string
False
Only for BR shop.

Include relevant information to display on Invoice.

group_item_info
object
False
Only for BR shop.

Required if the item is a group item.

group_qtd
string
False
Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unit), enter 6.

group_unit
string
False
Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unit), enter UNI for the individual can.

group_unit_value
string
False
Example: The package contains 6 soda cans. Whether you are selling a pack of 6 cans (fardo) or a single can (unity), enter the value of the individual can.

original_group_price
string
False
Example: The item is a package that contains 6 soda cans. Enter the price of the whole package.

group_gtin_sscc
string
False
Example: The item is a package that contains 6 soda cans. Please inform the GTIN SSCC code for the package.

group_grai_gtin_sscc
string
False
Example: The item is box, that contain 6 packages. Each package contains 6 soda cans. Please inform the GRAI GTIN SSCC code for the Box.

export_cfop
string
False

7101 - for sales of self-produced goods

7102 - resale of third-party goods

complaint_policy
object
False
Complaint Policy for item. Only required for local PL sellers, ignored otherwise.
warranty_time
string
False
Value should be in one of ONE_YEAR TWO_YEARS OVER_TWO_YEARS.
exclude_entrepreneur_warranty
boolean
False
If True means "I exclude warranty complaints for entrepreneur"
complaint_address_id
int32
False
Address for complaint. Fetch available addresses using v2.logistics.get_address_list, and use address_id returned from it.
additional_information
string
False
Additional information for warranty claim. Should be less than 1000 characters.
description_info
object
False
New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
extended_description
object
False
If description_type is extended , description information should be set by this field.
field_list
object[]
False
Field of extended description.
field_type
string
False
Type of extended description field ：values: See Data Definition- description_field_type (text , image).
text
string
False
If field_type is text， text information will be set by this field.
image_info
object
False
If field_type is image，image url will be set by this field.
image_id
string
False
Image id.
description_type
string
False
Values: See Data Definition- description_type (normal , extended). If you want to use extended_description or change description type ,this field must be inputed
gtin_code
string
False
- GTIN is an identifier for trade items, developed by the international organization GS1.
- They have 8 to 14 digits. The most common are UPC, EAN, JAN and ISBN.
- GTIN will help boost positioning in online marketing channels like Google and Facebook.
- That incorporation with GTIN will also aid in Search and Recommendation in Shopee itself allowing buyers to have higher likelihood of finding one's listing.



Note: If you want to set “Item without GTIN”, please pass the gtin_code as "00".

The validation rule is based on the value return in gtin_validation_rule" field in v2.product.get_item_limit API

- Mandatory: This field is required and must contain a correctly formatted GTiN number.

- Flexible: This field is required and must contain either a correctly formatted GTlN number or "00" to declare that the item/model has no valid GTlN.
- Optional: This field is optional and can contain a correctly formatted GTiN number, "00" or be omitted entirely.

ds_cat_rcmd_id
string
False
category recommendation service id

promotion_images
object
False
Promotion Image
Currently only allow one promoton image
You could set promotion image only if the product images' ratio is 3:4

image_id_list
string[]
False
Promotion Image

compatibility_info
object
False
vehicle_info_list
object[]
True
brand_id
int64
True
1234
ID of the brand.

model_id
int64
True
2345
ID of the model.

year_id
int64
False
3456
ID of the year.

version_id
int64
False
4567
ID of the version.

scheduled_publish_time
timestamp
False
1733590920
Scheduled publish time of this item: 

1) Can only set scheduled_publish_time for item with UNLIST status

2) Can only set the time from current time +1hour to current time +90days, and the time is only allowed to be accurate to the minute

authorised_brand_id
int64
False
ID of authorised reseller brand.

size_chart_info
object
False


size_chart
string
False
ID of size chart image. If you want to remove the image size chart of the item, please pass the "size_chart" empty.



You only need to fill out either the image or template. If both are filled, only the template will be kept.



Notes: Both CB shops and local shops are supported to set "size_chart".

size_chart_id
int64
False
ID of template size chart. If you want to remove the template size chart of the item, please pass the "size_chart_id" as 0.



You only need to fill out either the image or template. If both are filled, only the template will be kept.



Notes: Only local shops are supported to set "size_chart_id", for CB shops please use "size_chart".

certification_info
object
False
For PH product certification input
Required for some category and attribute option

certification_list
object[]
False
Array of certification records for the product, each containing type, certificate number, permit ID, and proof documents.




certification_no
string
True
Certification number issued by the regulatory or certifying authority; uniquely identifies the certification.

refer to
https://seller.shopee.ph/edu/article/24236

permit_id
int64
True
Platform-defined permit ID used to link to a specific certification template or rule.

get from v2.product.get_product_certification_rule

expiry_date
int32
False
1610000000
Expiry timestamp. Required for PH, but not needed for TW.

certification_proofs
object
False
An array of proof documents for the certification; each element represents one proof file.<path></path>

image_id
string
True
The unique image ID of the certification proof, returned by the image upload API.

file_name
string
True
The name of the uploaded certification proof file.

ratio
float
True
image weight/ image height

Will be optional in the future; can input 0.75 by default

purchase_limit_info
object
False
purchase limit info

min_purchase_limit
int32
False
minimum purchase count for each order

max_purchase_limit
object
False


purchase_limit
int32
False
maximum purchase limit for each order.

medicine_id
int64
False
[Only for ID local sellers] as a unique identifier for each standardized medicine, the medicine id can only be obtained offline

Request Example
Collapse
Payload
Java
PHP
cURL
Python
{
	"description": "Hello product product WlQPdMV4SlVoG7QD1v0fEecNoCVEBNx6",
	"weight": 0.9,
	"pre_order": {
		"days_to_ship": 7,
		"is_pre_order": true
	},
	"item_name": "Hello Pgkk50jdNgEnlWvX",
	"attribute_list": [
		{
			"attribute_id": 5357,
			"attribute_value_list": [
				{
					"value_id": 38173,
					"original_value_name": "Red",
					"value_unit": "kg"
				}
			]
		}
	],
	"image": {
		"image_id_list": [
			{}
		]
	},
	"item_sku": "abc",
	"item_status": "UNLIST",
	"logistic_info": [
		{
			"size_id": 1,
			"shipping_fee": 9,
			"enabled": true,
			"logistic_id": 10007,
			"is_free": true
		}
	],
	"wholesale": [
		{
			"min_count": 0,
			"unit_price": 9.9,
			"max_count": 10
		}
	],
	"item_id": 2800143058,
	"category_id": 34106,
	"dimension": {
		"package_height": 13,
		"package_length": 12,
		"package_width": 14
	},
	"condition": "USED",
	"video_upload_id": [
		{}
	],
	"brand": {
		"brand_id": 0,
		"original_brand_name": "nike"
	},
	"item_dangerous": 0,
	"tax_info": {
		"ncm": "-",
		"same_state_cfop": "-",
		"diff_state_cfop": "-",
		"csosn": "-",
		"origin": "-",
		"cest": "-",
		"measure_unit": "-",
		"invoice_option": "-",
		"vat_rate": "-",
		"hs_code": "-",
		"tax_code": "-"
	},
	"complaint_policy": {
		"warranty_time": "-",
		"exclude_entrepreneur_warranty": true,
		"complaint_address_id": 0,
		"additional_information": "-"
	},
	"description_info": {
		"extended_description": {
			"field_list": [
				{
					"field_type": "-",
					"text": "-",
					"image_info": {
						"image_id": "-"
					}
				}
			]
		}
	},
	"description_type": "-"
}
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
Indicate waring details if hit waring. Empty if no waring happened.
request_id
string
326527603d034fd1b2dd6a74d70ade54
The identifier for an API request for error tracking.
response
object
description
string
Hello product product 6xnhI3ug5D2rFpH3QoJSNNOrfUSP8rw5
Item description.
weight
float
0.9
The weight of this item, the unit is KG.

pre_order
object
days_to_ship
int32
2
The time it takes to ship the item.
is_pre_order
boolean
false
Whether item is pre order.
item_name
string
Hello QdlHimD4nto0OGIQ
Item name.
item_status
string
UNLIST
Item status.
images
object
Item images.
image_id_list
string[]
ID list of item image.
image_url_list
string[]
URL list of item image
logistic_info
object[]
estimated_shipping_fee
float
1.49
Estimated shipping fee.
logistic_name
string
Ninja Van
Name of logistics channel.
enabled
boolean
true
Whether this channel is enabled.
logistic_id
int32
10007
ID of this channel.
is_free
boolean
false
Whether cover shipping fee for buyer.
item_id
int64
28001430
ID of item.
category_id
int32
34106
ID of item category.
dimension
object
The dimension of this item.

package_width
int32
14
The width of package for this item, the unit is CM.

package_length
int32
12
The length of package for this item, the unit is CM.

package_height
int32
13
The height of package for this item, the unit is CM.

condition
string
USED
Item condition, could be USED or NEW.
brand
object
brand_id
int32
0
Id of brand.
original_brand_name
string
nike
Original name of brand.
item_dangerous
int32
0
This field is only applicable for local sellers in Indonesia and Malaysia. Use this field to identify whether a product is a dangerous product. 0 for non-dangerous product and 1 for dangerous product. For more information, please visit the market's respective Seller Education Hub.
complaint_policy
object
Complaint policy
warranty_time
string
Value should be in one of ONE_YEAR TWO_YEARS OVER_TWO_YEARS.
exclude_entrepreneur_warranty
boolean
If True means "I exclude warranty complaints for entrepreneur"
additional_information
string
Additional information for complaint policy
description_info
object
New description field. Only whitelist sellers can use it. If you use the field, please upload the description_type=extended otherwise api will return error. If you don't use this field, you don't need to upload the description_type or upload description_type=normal
extended_description
object
If description_type is extended , description information should be set by this field.
field_list
object[]
Field of extended description.
field_type
string
Type of extended description field ：values: See Data Definition- description_field_type (text , image).
text
string
If field_type is text， text information will be set by this field.
image_info
object
If field_type is image，image url will be set by this field.
image_id
string
Image id.
description_type
string
Values: See Data Definition- description_type (normal , extended).
error
string
Indicate error type if hit error. Empty if no error happened.
Response Example
Collapse
JSON
{
	"message": "-",
	"warning": "-",
	"request_id": "326527603d034fd1b2dd6a74d70ade54",
	"response": {
		"description": "Hello product product 6xnhI3ug5D2rFpH3QoJSNNOrfUSP8rw5",
		"weight": 0.9,
		"pre_order": {
			"days_to_ship": 2,
			"is_pre_order": true
		},
		"item_name": "Hello QdlHimD4nto0OGIQ",
		"item_status": "UNLIST",
		"images": {
			"image_id_list": [
				"-"
			],
			"image_url_list": [
				"-"
			]
		},
		"logistic_info": [
			{
				"estimated_shipping_fee": 1.49,
				"logistic_name": "Ninja Van",
				"enabled": true,
				"logistic_id": 10007,
				"is_free": true
			}
		],
		"item_id": 2800143058,
		"category_id": 34106,
		"dimension": {
			"package_width": 14,
			"package_length": 12,
			"package_height": 13
		},
		"condition": "USED",
		"brand": {
			"brand_id": 0,
			"original_brand_name": "nike"
		},
		"item_dangerous": 0,
		"complaint_policy": {
			"warranty_time": "-",
			"exclude_entrepreneur_warranty": true,
			"additional_information": "-"
		},
		"description_info": {
			"extended_description": {
				"field_list": [
					{
						"field_type": "-",
						"text": "-",
						"image_info": {
							"image_id": "-"
						}
					}
				]
			}
		},
		"description_type": "-"
	},
	"error": "-"
}