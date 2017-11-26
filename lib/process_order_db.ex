defmodule Sconely.ProcessOrderDB do
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
  import Sconely.ProcessStripePayment

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

                  


  def add_user_or_get_user_id(datetime) do

     #query = from mi in MenuItem, select: %{"menu_item_id": mi.menu_item_id, "name": mi.name}
     #       menu_items = Repo.all(query)

     #       user = Repo.get_by(MailingListGuestRegistration, %{email: args[:user_contact_email]})
     #       IO.inspect(user)


            #check if the user exists in the registreation table

     #       if user == nil do

     #         registration_changeset = MailingListGuestRegistration.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

     #         case Repo.insert(registration_changeset) do

      #          {:ok, response} -> IO.inspect(response)

      #              user_id = response.user_id


  end

  def add_order_return_order_id() do

      #pool_order = Repo.get_by(PoolOrder, %{admin_receipt_order_id: args[:pool_admin_receipt_order_id]})
      #IO.inspect(pool_order.delivery_date.month)

      #IO.inspect(pool_order)

      #pool_order_user_delivery_contact_address = Repo.get_by(UserDeliveryContactAddress, %{user_id: pool_order.user_id, delivery_contact_address_id: pool_order.user_delivery_contact_address_id})
      
 

      #order_changeset = Order.changeset(%Order{}, %{user_id: user_id, order_type: "pool_response", admin_receipt_order_id: admin_receipt_order_id, order_datetime: order_datetime, stripe_charge_token: stripe_charge_token})
                        #delivery_id, contact_id, payment_id

      #order_id = 0
      #order_datetime = nil

      #case Repo.insert(order_changeset) do
      #    {:ok, response} -> IO.inspect(response)
      #            order_id = response.order_id
                  #order_datetime = response.order_datetime
      #end


     
  end

 
  defp apply_promo_code_to_subtotal() do

  end

  defp subtotal(cart_items) do

      case order_type do

          "yours" -> 

            subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 6.00) end)

          "pool" ->

            subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 6.00) end)


          "social" -> 

            subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity, "size": size}, count) -> 
              case size do
                "regular" ->  IO.puts("regular")
                          #quantity * 12 * 5.00
                          count + (quantity * 5.00)
                "mini" -> IO.puts("mini")
                        #quantity * 24 * 2.25
                        count + (quantity * 2.25)
              end
            end)

      end

  end



 
end
