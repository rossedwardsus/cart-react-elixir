defmodule Sconely.ProcessOrderPool do
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
  
  #import Sconely.ProcessStripePayment

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

                  


  def addUserPool(datetime) do

    

     #         user_changeset = UserPool.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

       #         user_pool_changeset = UserPool.changeset(%UserPool{}, %{pool_name: args[:user_contact_email], user_id: "", pool_url_name: ""})  

     #         {:ok, user_pool} = Repo.insert(user_pool_changeset)

     #           user_pool.id


  end

  def addOrder(datetime) do

    

     #         order_changeset = UserPool.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

     #         {:ok, order} = Repo.insert(registration_changeset)
     #           order.id


  end

  def addPoolOrder(datetime) do

    #need user pool id from user pool - 1 for guest count + 1 for registered user
    #need order id from add order
    #need adimn receipt id from pool order

    #pool name from args
    #parent_order_id
    #admin receipt id
    #random_number = :rand.uniform(9999999999)
    #check if it exists in the database?
    #user_id
    #order_id

    #IO.puts("random number9999")
    #IO.inspect(random_number)
    #Float.round
    #n = Random.rand(10..20)     # Random integer between 10 and 20

    #admin_receipt_order_id = :rand.uniform(999999999)

    #add user pool
    #add order

    #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
    #{:ok, date_from_erl} = Date.from_erl(date)    

                    


     #pool_order_changeset = PoolOrder.changeset(%UserPool{}, %{user_pool_id: args[:user_contact_email], parent_order_id: "", user_cdelivery_contact_address_id: 0, pickup_location: "", delivery_date: "", delivery_time_range: "", user_id: "", user_payment_method_id: 0})  

     #{:ok, pool_order} = Repo.insert(pool_order_changeset)

     #           pool_order.order_id


  end

  def addPoolOrderItem(cart_items) do

     #for item in cart_items do
    

     #         pool_order_item_changeset = OrderItem.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

     #         Repo.insert(pool_order_item_changeset)

     #{:ok}


     #Enum.map(cart_items, fn(item) -> 
     #     IO.inspect(item)

          #pool_order_items?
          #probably not

     #     order_item_changeset = OrderItem.changeset(%OrderItem{}, %{parent_order_id: order_id, menu_item_id: 1, quantity: 1, size: "regular", user_id: user_id})

      #    {:ok, response} = Repo.insert(order_item_changeset)

       #       {:ok, response} -> IO.inspect(response)

       #   end

      #end)
      

  end
 
end
