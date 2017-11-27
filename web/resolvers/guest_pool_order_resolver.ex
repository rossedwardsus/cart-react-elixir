defmodule Sconely.PoolOrderResolver do
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
  import Sconely.ProcessOrderUser
  import Sconely.ProcessOrderCart

  def process_pool_order(args, _info) do

      IO.inspect(args)

      total = nil
      subtotal = nil
      discount_amount = nil
      delivery_contact_address = %{}

      #calculate cost
      #payment
      #check user/create user
      #create user pool
      #create contact address
      #create pool order 
      #add pool response order item
      #send emails



      subtotal = cartItemsSubtotal(args[:cart_items])
      
      {text, discount_amount} = promoCodeDiscount("SCONELY10")
      IO.inspect(discount_amount)

      #delivery cost
      total = cartTotal(subtotal, discount_amount)
      IO.inspect(total)
      #ProcessCart.getcartTotal

      #task = Task.async(Sconely.ProcessOrderDateTime, :week_day_as_word, [1])
      #IO.inspect(Task.await(task))

      #assert Task.await(task) == "Monday"

      #order_datetime = Ecto.Datetime.utc()
      #delivery date is gotten from the user 
      #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
      #{:ok, date_from_erl} = Date.from_erl(date)    


      #charge stripe
      #ProcessOrderUser.getUser(email_address)
      #ProcessOrderPool.createUserPool(user_id, company_name)
      #ProcessOrderPool.getParentOrderId(email_address)
      #ProcessOrderUser.createUserDeliveryContactAddress(do when creating user)
      #ProcessOrderPool.createPoolOrder(parent_order_id, args)
      #ProcessCart.getCartWithMenuItemNames(cart_items)
      #formatOrderDateTime
      #formatDeliveryDateTime
      #pool url
      #send mail
      
      #subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 5.00) end)

      #load one of these depenging on whether test or live
      #env("test_prod") == test

      stripe_response = processPayment(%{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}, total)

      #working
      #case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

      #case Stripe.Token.create(%{:card => %{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}}) do


      case stripe_response do
        {:ok, charge} -> IO.inspect(charge["id"])
      #{:ok, token} -> {:ok, token}

            #IO.inspect(token["id"])  

            #case Stripe.Charge.create(%{:amount => trunc(total*100), :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

            #  {:ok, charge} -> #IO.inspect(charge)
            #  stripe_charge_token = charge["id"]
            #  stripe_response = {:ok, charge}
            #                   {:ok, charge}
            #  {:error, error} -> {:error, error}
            #      stripe_response = {:error, error}

            #end

            #query = from mi in MenuItem, select: %{"menu_item_id": mi.menu_item_id, "name": mi.name}
            #menu_items = Repo.all(query)

            user = Repo.get_by(MailingListGuestRegistration, %{email: args[:user_contact_email]})
            IO.inspect(user)


            #check if the user exists in the registreation table

            if user == nil do

              #random_number = :rand.uniform(9999999999)
              #check if it exists in the database?
              #user_id
              #order_id

              #IO.puts("random number9999")
              #IO.inspect(random_number)
              #Float.round
              #n = Random.rand(10..20)     # Random integer between 10 and 20

              admin_receipt_order_id = :rand.uniform(999999999)
                        

              #registration_changeset = MailingListGuestRegistration.changeset(%MailingListGuestRegistration{}, %{email: args[:user_contact_email], password: "", registration_datetime: Ecto.DateTime.utc})  

              #{:ok, user} = Repo.insert(registration_changeset

              #user_changeset = User.changeset(%User{}, %{user_id: user_id, first_name: args[:user_first_name], last_name: args[:user_last_name], email: args[:user_contact_email], mobile: args[:user_contact_mobile], about_me: "", stripe_customer_id: ""})
                
              #case Repo.insert(user_changeset) do
              #    {:ok, response} -> IO.inspect(response)
              #end

              #user_pool_changeset = UserPool.changeset(%User{}, %{user_id: user_id, first_name: args[:user_first_name], last_name: args[:user_last_name], email: args[:user_contact_email], mobile: args[:user_contact_mobile], about_me: "", stripe_customer_id: ""})

              #case Repo.insert(user_pool_changeset) do
              #    {:ok, response} -> IO.inspect(response)
              #end

              #pool_order_changeset = PoolOrder.changeset(%User{}, %{user_id: user_id, first_name: args[:user_first_name], last_name: args[:user_last_name], email: args[:user_contact_email], mobile: args[:user_contact_mobile], about_me: "", stripe_customer_id: ""})
                
              #case Repo.insert(user_changeset) do
              #    {:ok, response} -> IO.inspect(response)
              #end

              #delivery_address = %{company_name: pool_order_user_delivery_contact_address.company_name, street1: pool_order_user_delivery_contact_address.street1, street2: "", city: pool_order_user_delivery_contact_address.city, state: pool_order_user_delivery_contact_address.state, zipcode: pool_order_user_delivery_contact_address.zipcode}

              order_datetime = Ecto.DateTime.utc

              #timezone = Timezone.get("America/Los_Angeles", Timex.now)

              #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))

              #order_datetime_converted = Timezone.convert(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)

              #pool_order_response_changeset = PoolOrderResponse.changeset(%PoolOrderResponse{}, %{parent_order_id: order_id, pool_parent_order_id: pool_order.id, user_id: user_id, admin_receipt_order_id: admin_receipt_order_id, user_payment_method_id: 1, stripe_charge_token: stripe_charge_token})
              #delivery_id, contact_id, payment_id

              #order_id = 0
              #order_datetime = nil

              #case Repo.insert(pool_order_response_changeset) do
              #    {:ok, response} -> IO.inspect(response)
                          #order_id = response.id
                          #order_datetime = response.order_datetime
              #end

              #send link

              #response = Sconely.YoursSocialPoolCompleteOrderEmail.yours_social_pool_complete_order_admin_email(%{order_id: order_id, admin_email_subject: admin_email_subject, admin_receipt_order_id: admin_receipt_order_id, order_datetime_formatted: order_datetime_formatted, delivery_date_formatted: delivery_date_formatted, delivery_time: delivery_time, delivery_address: delivery_address, args: args, subtotal_formatted: subtotal_formatted, delivery_cost: 0.00, promo_code_discount: promo_code_discount, total_formatted: total_formatted, cart_items: cart_items_with_name}) |> SconeHomeElixir.Mailer.deliver_later

              #IO.inspect(response)
  
              #Sconely.YoursSocialPoolCompleteOrderEmail.yours_social_pool_complete_order_email(%{order_id: "order_id", admin_receipt_order_id: admin_receipt_order_id, order_datetime_formatted: order_datetime_formatted, delivery_date_formatted: delivery_date_formatted, delivery_time: delivery_time, delivery_address: delivery_address, args: args, subtotal: "", total_items: 0, subtotal_formatted: subtotal_formatted, delivery_cost: 0.00, promo_code_discount: promo_code_discount, total_formatted: total_formatted, cart_items: cart_items_with_name}) |> SconeHomeElixir.Mailer.deliver_later



            end

      {:error, error} -> IO.inspect(error)
                  stripe_response = {:error, error}

                  #sorry an error occred with your payment
          

 
    end

  end

end