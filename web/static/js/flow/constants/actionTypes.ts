export const CHECK_LOGGED_IN = 'CHECK_LOGGED_IN'
export const LOGIN = 'LOGIN'
export const REGISTER_USER = 'REGISTER_USER'
export const SET_SESSION = 'SET_SESSION'
export const REGISTER_SET_FIRST_NAME = 'REGISTER_SET_FIRST_NAME'
export const REGISTER_SET_LAST_NAME = 'REGISTER_SET_LAST_NAME'
export const REGISTER_SET_EMAIL = 'REGISTER_SET_EMAIL'
export const REGISTER_SET_EMAIL_AGAIN = 'REGISTER_SET_EMAIL_AGAIN'
export const REGISTER_SET_PASSWORD = 'REGISTER_SET_PASSWORD'
export const REGISTER_SET_PASSWORD_AGAIN = 'REGISTER_SET_PASSWORD_AGAIN'
//export const REGISTER_SET_EMAIL = 'CREATE_ORDER'

export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const SET_USER_FIRST_NAME = 'SET_USER_FIRST_NAME'
export const SET_USER_LAST_NAME = 'SET_USER_LAST_NAME'
export const SET_USER_MOBILE = 'SET_USER_MOBILE'
//export const SET_LAST_NAME = 'SET_LAST_NAME'
//export const SET_COMPANY_NAME = 'SET_COMPANY_NAME'


//USER PAYMENT METHODS
export const ADD_USER_PAYMENT_METHOD = 'ADD_USER_PAYMENT_METHOD'
export const SAVE_USER_PAYMENT_METHOD = 'SAVE_USER_PAYMENT_METHOD'
export const SET_PAYMENT_NAME_ON_CARD = 'SET_PAYMENT_NAME_ON_CARD'
export const SET_PAYMENT_CARD_NUMBER = 'SET_PAYMENT_CARD_NUMBER'
export const SET_PAYMENT_EXPIRY_MONTH = 'SET_PAYMENT_EXPIRY_MONTH'
export const SET_PAYMENT_EXPIRY_YEAR = 'SET_PAYMENT_EXPIRY_YEAR'
export const SET_PAYMENT_SECURITY_CODE = 'SET_PAYMENT_SECURY_CODE'



//ORDER

export const CREATE_ORDER = 'CREATE_ORDER'
export const SET_ORDER_ID = 'SET_ORDER_ID'
export const TERMS = 'TERMS'
export const MAILING_LIST = 'MAILING_LIST'
export const ORDER_COMPLETED = 'ORDER_COMPLETED'
export const CLEAR_ORDER = 'CLEAR_ORDER'
export const SET_DELIVERY_COST  = 'SETDELIVERY_COST'

export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY'
export const DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY'
export const COMPLETE_ORDER = 'COMPLETE_ORDER'

export const SET_DELIVERY_ADDRESS_STREET1 = 'SET_DELIVERY_ADDRESS_STREET1'
export const SET_DELIVERY_ADDRESS_STREET2 = 'SET_DELIVERY_ADDRESS_STREET2'
export const SET_DELIVERY_ADDRESS_CITY = 'SET_DELIVERY_ADDRESS_CITY'
export const SET_DELIVERY_ADDRESS_STATE = 'SET_DELIVERY_ADDRESS_STATE'
export const SET_DELIVERY_ADDRESS_ZIPCODE = 'SET_DELIVERY_ADDRESS_ZIPCODE'

export const VIEW_PUBLIC_MENU = 'VIEW_PUBLIC_MENU'
export const SET_MENU = 'SET_MENU'

export const SET_DATE = 'SET_DATE'
export const SET_TIME = 'SET_TIME'
export const SET_SPECIFIC_TIME = 'SET_SPECIFIC_TIME'

export const SET_EMAIL = 'SET_EMAIL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PASSWORD_AGAIN = 'SET_PASSWORD_AGAIN'

export const SET_FIRST_NAME = 'SET_FIRST_NAME'
export const SET_LAST_NAME = 'SET_LAST_NAME'
export const SET_COMPANY_NAME = 'SET_COMPANY_NAME'

export const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL'
export const SET_CONTACT_MOBILE = 'SET_CONTACT_MOBILE'


//ORDER VALIDATIONS
export const CART_VALIDATED = 'CART_VALIDATED'
export const CART_INVALIDATED = 'CART_INVALIDATED'
export const DELIVERY_ADDRESS_VALIDATED = 'DELIVERY_ADDRESS_VALIDATED'
export const DELIVERY_ADDRESS_INVALIDATED = 'DELIVERY_ADDRESS_INVALIDATED'
export const DATETIME_VALIDATED = 'DATETIME_VALIDATED'
export const DATETIME_INVALIDATED = 'DATETIME_INVALIDATED'
export const CONTACT_VALIDATED = 'CONTACT_VALIDATED'
export const CONTACT_INVALIDATED = 'CONTACT_INVALIDATED'
export const NAME_VALIDATED = 'NAME_VALIDATED'
export const NAME_INVALIDATED = 'NAME_INVALIDATED'
export const PAYMENT_VALIDATED = 'PAYMENT_VALIDATED'
export const PAYMENT_INVALIDATED = 'PAYMENT_INVALIDATED'


//USER
export const GET_USER = 'GET_USER'
export const GET_USER_DETAILS = 'GET_USER_DETAILS'
export const GET_USER_ORDERS = 'GET_USER_ORDERS'
export const GET_USER_PAYMENT_METHODS = 'GET_USER_PAYMENT_METHODS'
export const ADD_USER_DELIVERY_ADDRESS = 'ADD_USER_DELIVERY_ADDRESS'
export const GET_USER_DELIVERY_ADDRESSES = 'GET_USER_DELIVERY_ADDRESSES'
export const SET_USER_DELIVERY_ADDRESS = 'SET_USER_DELIVERY_ADDRESS'
export const ADD_USER_DELIVERY_CONTACT = 'ADD_USER_DELIVERY_CONTACT'
export const GET_USER_DELIVERY_CONTACTS = 'GET_USER_DELIVERY_CONTACTS'

export const GET_USER_ORDER_DETAILS = 'GET_USER_ORDER_DETAILS'
export const GET_USER_ORDER_DELIVERY_CONTACT = 'GET_USER_ORDER_DELIVERY_CONTACT'
export const GET_USER_ORDER_DELIVERY_ADDRESS = 'GET_USER_ORDER_DELIVERY_ADDRESS'
export const GET_USER_ORDER_GUEST_RESPONSES = 'GET_USER_ORDER_GUEST_RESPONSES'
export const GET_USER_ORDER_SUBORDERS = 'GET_USER_ORDER_SUBORDERS'

export const PROCESS_SIGNATURE_ORDER = 'PROCESS_SIGNATURE_ORDER'
export const PROCESS_USER_ORDER = 'PROCESS_CREATE_ORDER'
export const CREATE_SIGNATURE_ORDER = 'CREATE_SIGNATURE_ORDER'

export const SET_USER_ORDER_DELIVERY_ADDRESS_STREET1 = 'SET_USER_ORDER_DELIVERY_ADDRESS_STREET1'
export const SET_USER_ORDER_DELIVERY_ADDRESS_STREET2 = 'SET_USER_ORDER_DELIVERY_ADDRESS_STREET2'
export const SET_USER_ORDER_DELIVERY_ADDRESS_CITY = 'SET_USER_ORDER_DELIVERY_ADDRESS_CITY'
export const SET_USER_ORDER_DELIVERY_ADDRESS_STATE = 'SET_USER_ORDER_DELIVERY_ADDRESS_STATE'
export const SET_USER_ORDER_DELIVERY_ADDRESS_ZIPCODE = 'SET_USER_ORDER_DELIVERY_ADDRESS_ZIPCODE'

export const SET_USER_ORDER_PAYMENT_NAME_ON_CARD = 'SET_USER_ORDER_PAYMENT_NAME_ON_CARD'
export const SET_USER_ORDER_PAYMENT_CARD_NUMBER = 'SET_USER_ORDER_PAYMENT_CARD_NUMBER'
export const SET_USER_ORDER_PAYMENT_EXPIRY_YEAR = 'SET_USER_ORDER_PAYMENT_EXPIRY_YEAR'
export const SET_USER_ORDER_PAYMENT_EXPIRY_MONTH = 'SET_USER_ORDER_PAYMENT_EXPIRY_MONTH'

export const ADD_USER_ORDER_CART_ITEM = 'ADD_USER_ORDER_CART_ITEM'




export const SET_USER_PAYMENT_METHODS = 'SET_USER_PAYMENT_METHODS'

export const SET_EVENT_NAME = 'SET_EVENT_NAME'
export const SET_GUEST_COUNT = 'SET_GUEST_COUNT'
export const SET_GUEST_MESSAGE = 'SET_GUEST_MESSAGE'

export const GET_ORDER = 'GET_ORDER'
export const SAVE_ORDER = 'SAVE_ORDER'
export const LOAD_ORDERS = 'LOAD_ORDERS'


export const SIGNATURE_GUEST_LOAD_ORDER = 'SIGNATURE_GUEST_LOAD_ORDER'
export const SIGNATURE_GUEST_SAVE_CHOICE = 'SIGNATURE_GUEST_SAVE_CHOICE'
export const SIGNATURE_GUEST_COMPLETE_RESPONSE = 'SIGNATURE_GUEST_COMPLETE_RESPONSE'
export const SIGNATURE_GUEST_SET_GUEST_FIRST_NAME = 'SET_GUEST_FIRST_NAME'
export const SIGNATURE_GUEST_SET_GUEST_LAST_NAME = 'SET_GUEST_LAST_NAME'
export const SIGNATURE_GUEST_SET_GUEST_EMAIL = 'SET_GUEST_EMAIL'
export const SIGNATURE_GUEST_SET_GUEST_HOST_MESSAGE = 'SET_GUEST_HOST_MESSAGE'
