defmodule Sconely.ProcessOrderPromoCode do
  #import Bamboo.Email

  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  alias Sconely.MenuItem
  alias Sconely.Registration
  alias Sconely.MailingListGuestRegistration
  alias Sconely.User
  alias Sconely.UserPaymentMethod
  alias Sconely.UserDeliveryContactAddress
  alias Sconely.Order
  alias Sconely.UserPool
  alias Sconely.PoolOrder
  alias Sconely.PoolOrderResponse
  alias Sconely.PoolOrderResponseItem
  alias Sconely.YoursSocialOrder
  alias Sconely.OrderItem
  #alias Ecto.Multi
  alias Sconely.CompleteOrderResolverHelper

  use Timex

  import Ecto.DateTime
  import Ecto.Query
  
  #stripe payment
  
  #email receipts-order id
  #items
  #date time
  #contact
  #name
  #cost
  #pool order-delivery address
  #database inserts
  #get menu
  #time zone
  #format datetime

  formatted_datetime = nil
  subtotal = nil
  promo_code = nil
  promo_code_discount = nil

  #delivery address/datetim gotten from front end for social as a string
  #for pool gotten from teh database so date time is type date but time is a string

  test_cart = %{menu_item_id: 000001, quantit: 12, size: "regular"}
  #test_order_datetime = Ecto.Datetime.utc()
  test_order_datetime_formatted = nil
  test_delivery_datetime = nil
  test_args = %{first_name: "ross", last_name: "edwards", email: "", mobile: ""}


  #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
  #{:ok, date_from_erl} = Date.from_erl(date)    

  #IO.inspect(Date.day_of_week(date_from_erl))


  #spec
  def promoCodeDiscount(promo_code) do

      case promo_code do


          "" -> ""

          "8THANDHOPE" -> {"10%", 10}
          "GRAIN" ->  {"10%", 10}
          "SCONELY10" ->  {"10%", 10}
          "CROSSCAMPUS10" ->  {"10%", 10}
          "WEWORK10" ->  {"10%", 10}


          #%promo_code_discount

      end
       
  end

  def promo_code_amount(promo_code) do

      case promo_code do


          "" -> ""

          "8THANDHOPE" -> 10
          "GRAIN" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "SCONELY10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "CROSSCAMPUS10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "WEWORK10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)


          promo_code_discount

      end
       
  end

end
