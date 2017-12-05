defmodule Sconely.ProcessOrderPayment do
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
  def processPayment(payment_args, amount) do

      #working
      case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

      #case Stripe.Token.create(%{:card => %{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}}) do


      
      {:ok, token} -> {:ok, token}

            #token["id"]

            case Stripe.Charge.create(%{:amount => 100, :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

              {:ok, charge} -> {:ok, charge}
              {:error, error} -> {:error, error}

            end

      end

  end

end
