defmodule Sconely.YoursSocialPoolOrderResolver do
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

  

  def get_pool_order_details(args, _info) do

      total = nil
      subtotal = ""
      delivery_contact_address = %{}

      #calculate cost
      #payment
      #check user/create user
      #create user pool
      #create contact address
      #create pool order 
      #add pool response order item
      #send emails

      #subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 5.00) end)

      #load one of these depenging on whether test or live
      #env("test_prod") == test
      #working
      #case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

      case Stripe.Token.create(%{:card => %{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}}) do


      #IO.inspect(token["id"])  

      {:ok, token} -> {:ok, token}

            case Stripe.Charge.create(%{:amount => trunc(total*100), :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

              {:ok, charge} -> #IO.inspect(charge)
              stripe_charge_token = charge["id"]
              stripe_response = {:ok, charge}
            #                   {:ok, charge}
              {:error, error} -> {:error, error}
                  stripe_response = {:error, error}

            end

            query = from mi in MenuItem,
                           select: %{"menu_item_id": mi.menu_item_id, "name": mi.name}
            menu_items = Repo.all(query)

            user = Repo.get_by(MailingListGuestRegistration, %{email: args[:user_contact_email]})
            IO.inspect(user)


            #check if the user exists in the registreation table

            if user == nil do

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


            end

            {:error, error} -> {:error, error}
                  stripe_response = {:error, error}


          

 
    end

  end

end