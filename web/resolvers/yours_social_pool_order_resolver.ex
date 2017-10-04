defmodule Sconely.YoursSocialPoolOrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  alias Sconely.MenuItem
  alias Sconely.Registration
  alias Sconely.User
  alias Sconely.UserPaymentMethod
  alias Sconely.UserDeliveryContactAddress
  alias Sconely.Order
  alias Sconely.PoolOrder
  alias Sconely.PoolOrderResponseUser
  alias Sconely.PoolOrderResponseItem
  alias Sconely.YoursSocialOrder
  alias Sconely.OrderItem
  #alias Ecto.Multi
  alias Sconely.CompleteOrderResolverHelper

  use Timex

  import Ecto.DateTime
  import Ecto.Query
  import Sconely.ProcessStripePayment

  #dont need
  def get_user_order(%{order_id: order_id}, _info) do

    #status, guests if signature, items

    #{:ok, Enum.map(Repo.get_by!(SconelySignatureOrder, order_id: order_id), &order_json/1)}
    #{:ok, %{eventName: "event"}}
    case Repo.get(SconelySignatureOrder, order_id) do
      nil -> {:error, "No order found with order_id #{order_id}"}
      #order -> Task.start_link(fn -> IO.puts "Hello, World" end); {:ok, order}
        #Task.start_link(fn -> IO.puts "Hello, World" end)
        #Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end)
      order -> Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end); 
               {:ok, order}
      

    #case order do
    #    1 -> Task.start_link(fn -> IO.puts "Hello, World" end);
    #Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end)
    #end
    
    end
  end

  #dont need
  def create_user_order(args, _info) do
  	IO.puts("create order graphql")
    IO.inspect(args)



    #if args.order_type == "yours", "social", "signature"

	  #%SconelyOrder{}
	  #|> SconelyOrder.changeset(args)
	  #|> Repo.insert

    #%SconelyOrder{}
    #|> SconelyOrder.changeset(args)
    #|> Repo.insert

  end

  #def save_sconely_yours_order_details(%{order_id: order_id, order: order_params}, _info) do
  #  order_id
  #  delivery_address
  #  items
  #
  #  Repo.get!(SconelySignatureOrder, order_id)
  #  |> SconelySignatureOrder.changeset(order_params)
  #  |> Repo.update
  #end

  #def save_sconely_social_order_details(%{order_id: order_id, order: order_params}, _info) do
  #  Repo.get!(SconelySignatureOrder, order_id)
  #  |> SconelySignatureOrder.changeset(order_params)
  #  |> Repo.update
  #end


  

  def check_code(%{host_id: host_id}, _info) do
    #check for full code at each typing
    #urlencoded

    IO.puts("user orders");
    query = from o in SconelySignatureOrder, where: o.host_id == ^host_id
    orders = Repo.all(query)
    {:ok, orders}
    #{:ok, [%{event_name: "hello"}]}
  end
  

  def get_pool_order_details(args, _info) do
  #  Repo.get!(SconelySignatureOrder, order_id)
  #  |> SconelySignatureOrder.changeset(order_params)
  #  |> Repo.update

      #get user id from user_pools based on the pool name
      #get pool order id based on the user id and the pool date and time

      #pool_date_day_year = String.slice(args[:pool_date], (String.length(args[:pool_date])-6), String.length(args[:pool_date]))
      pool_date_day_year_as_date = "01-2007"

      #pool_date_month_name = String.slice(params["pool_date"], 0, String.length(params["pool_date"])-6)

      pool_date_month_name = "september"

      pool_date_month_number = ""

      case pool_date_month_name do

          "january" -> pool_date_month_number = "01"
          "february" -> pool_date_month_number = "02"
          "march" -> pool_month_number = "03"
          "april" -> pool_month_number = "04"
          "may" -> pool_month_number = "05"
          "june" -> pool_month_number = "06"
          "july" -> pool_month_number = "07"
          "august" -> pool_month_number = "08"
          "september" -> pool_date_month_number = "09"
          "october" -> pool_date_month_number = "10"
          "november" -> pool_date_month_number = "11"
          "december" -> pool_month_number = "12"

      end

      IO.inspect(pool_date_month_number <> "-" <> pool_date_day_year_as_date)

      IO.inspect(args)

      #check of pool order exists

      #pool_url_name
      #pool_url_date

      pool_url_date_split = String.split(args[:pool_url_date], "-")

      {_, date} = Ecto.Date.cast(Enum.at(pool_url_date_split, 2) <> "-" <> Enum.at(pool_url_date_split, 0) <> "-" <> Enum.at(pool_url_date_split, 1))

      #{_, date} = Ecto.Date.cast("2017-10-01")

      IO.inspect(date)

      pool_order = Repo.get_by(PoolOrder, %{pool_url_name: args[:pool_url_name], delivery_date: date})
      
      #IO.inspect(pool_order.pool_message)

      #pool_order = Repo.get_by(UserDeliveryContactAddresses, %{pool_url_name: args[:pool_url_name], delivery_date: args[:pool_url_date]})
      
      IO.inspect(pool_order.pool_message)

      #if pool_order not equal to nil

      #{:ok, %{parent_order_id: pool_order.parent_order_id, pool_admin_receipt_order_id: pool_order.admin_receipt_order_id, pool_name: pool_order.pool_name, pool_address: "pool_address", pool_location: "location", pool_message: pool_order.pool_message}}
                      

      #{:ok, %{admin_receipt_id: "1", pool_message: "Dear 8th + Hope residents,\n\n Sconely will be delivering to the 8th + Hope lobby on Saturday, September 23rd at 9:00 AM. You can pre-order your scones before Thursday, September 21st at midnight for this Saturday's delivery. \n\n Contact Sconely at eat@sconely.com with any questions.\n\n All the best, \n\n Niki Asvadi Resident Relations"}}

      #{:ok, %{pool_order_id: 1, pool_address: "8th and Hope lobby", pool_datetime: ""}

  end


  def total_order_items() do

      #reduce

  end

  def calculate_order_delivery_cost() do

  end

  def total_order_cost() do

      #reduce with promo code and delivery

  end

  def promo_code_discount() do


  end

  


  #move these to /lib


  def format_order_date(args) do

      #def from_timestamp(timestamp) do
      #   timestamp
      #   |> +(@epoch)
      #   |> :calendar.gregorian_seconds_to_datetime
      # end

      #IO.puts("date")
      #IO.inspect(args[:order_datetime_date])
      #epoch = {{1970, 1, 1}, {0, 0, 0}}
      #@epoch :calendar.datetime_to_gregorian_seconds(epoch)
      #Ecto.DateTime.to_erl(args[:order_datetime_date])

      #epoch = :calendar.datetime_to_gregorian_seconds({{1970, 1, 1}, {0, 0, 0}})
      #datetime = :calendar.gregorian_seconds_to_datetime(epoch + div(args[:order_datetime_date], 1000))
      #DateTime.from_unix(args[:order_datetime_date])

      #1495868400000
      #|> +(@epoch)
      #|> :calendar.gregorian_seconds_to_datetime

      #IO.inspect(@epoch)

      #Calendar.calendar(1318781876)
      #IO.inspect(elem(DateTime.from_iso8601("2017-05-28T07:00:00.000Z"), 1).month)

      #IO.inspect(DateTime.to_string(elem(DateTime.from_unix(1318781876), 1)))



      #turn this into a separate function

      delivery_date = ~D[2017-05-27]
      delivery_date_formatted = ""
      month = ""
      day = ""
      day_formatted = ""
      year = ""
      day_of_week = Integer.to_string(delivery_date.day)
      
      IO.inspect(delivery_date)

      case Date.day_of_week(delivery_date) do
        0 -> {day_of_week = "Sunday"}
        1 -> {day_of_week = "Monday"}
        2 -> {day_of_week = "Monday"}
        3 -> {day_of_week = "Monday"}
        4 -> {day_of_week = "Thursday"}
        5 -> {day_of_week = "Friday"}
        6 -> {day_of_week = "Saturday"}
      end

      case delivery_date.month do
        0 -> {month = "January"}
        5 -> {month = "May"}
      end

      #case delivery_date.day do
      #  n when n in [1, 21, 31] -> {day_formatted = Integer.to_string(delivery_date.day) <> "st"}
      #  n when n in [2, 22] -> {day_formatted = Integer.to_string(delivery_date.day) <> "nd"}
      #  n when n in [3, 23] -> {day_formatted = Integer.to_string(delivery_date.day) <> "rd"}
      #  n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> {day_formatted = Integer.to_string(delivery_date.day) <> "th"}
      #end

      delivery_date_formatted = day_of_week <> " " <> month <> " " <> day_formatted <> ", " <> Integer.to_string(delivery_date.year)

      IO.puts(delivery_date_formatted)


  end

  def process_cart(payment) do

      #need costs and menu items and contact and address and date and last four of payment method number

  end


  def process_stripe_payment1() do

    #process charge
    #process payment
    #menu items
    #emails
    #add details to database
    #response
    #format date time

    order_datetime = nil


       #new_customer = [
    #  email: "test@test.com",
    #  description: "An Test Account",
    #  metadata:[
    #    app_order_id: "ABC123"
    #    app_state_x: "xyz"
    #  ],
    #  card: [
    #    number: "4111111111111111",
    #    exp_month: 01,
    #    exp_year: 2018,
    #    cvc: 123,
    #    name: "Joe Test User"
    #  ]
    #]
    #{:ok, res} = Stripe.Customers.create new_customer


    #params[:payment_method_card_number]
    #params[:payment_method_expiry_month]
    #params[:payment_method_expiry_year]
    #params[:payment_method_security_code]

    #create customer for guest
    #create user profile

    #params = [
    #    source: [
    #      object: "card",
    #      number: "4111111111111111",
    #      exp_month: 10,
    #      exp_year: 2020,
    #      country: "US",
    #      name: "Ducky Test",
    #      cvc: 123
    #    ],
    #    description: "Sconely order id for customer id"
    #  ]
  
    #IO.inspect(Stripe.Charges.create(51, params))

    #Stripe.Charges.create(51, params)

  end


  #unit test
  #stripe
  #user_profile
  #user_payment_method
  #user_delivery_contact_addresses
  #session
  #order
  #emails
  #datetime
  #cart
  #graphql response






  #complete_yours_social_pool_order

  def complete_yours_social_pool_order(args, %{context: context}) do

    IO.inspect(args[:user_contact_email])
    #IO.inspect(context)

    #dont create user by default but how to identify them them
    #create them and look up the users email
    #dont save on the client though unless they select save for later or remember me
    #or use a token
    #maybe just dont save the user for stripe
    #set payment method == 0 for the order itself
    #just use a straight stripe charge


    #calculate costs here both for stripe and for the receipts


    #use ets for order type 
    #email/user_id
    #menu items
    #pool_orders

    user_id = nil
    order_id = nil
    admin_receipt_order_id = nil
    menu_items = nil
    order_datetime = nil
    order_date_day_of_week = nil
    order_date_month = nil
    order_datetime_formatted = nil

    cart_item_with_name = nil

    stripe_response = nil
    stripe_customer_token = nil
    stripe_charge_token = nil

    payment_method_last_four_digits = nil

    promo_code = nil
    promo_code_discount = nil

    delivery_date = nil
    delivery_date_month = nil
    delivery_date_day = ""
    delivery_date_day_formatted = nil
    delivery_date_year = nil
    delivery_date_day_of_week = nil
    delivery_date_formatted = nil

    delivery_address = nil

    mini_items_count = 0
    regular_items_count = 0
    mini_total = 0
    regular_total = 0
    items_count = 0
    order_type = "social"

    total_cost = nil
    total_cost_formatted = nil


    #move all of this before payment

    #cart_items = [%{menu_item_id: 1, quantity: 1, size: "regular"}, %{menu_item_id: 2, quantity: 100, size: "mini"}]
    cart_items = args[:cart_items]
    IO.inspect(args[:cart_items])

    order_type = "pool"
    #order_type = args[:order_type]

    case order_type do

      "yours" -> 

        total_cost = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 1.00) end)


      "social" -> 

        total_cost = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity, "size": size}, count) -> 
          case size do
            "regular" ->  IO.puts("regular")
                      count + (quantity * 1.00)
            "mini" -> IO.puts("mini")
                    count + (quantity * 2.00)
          end
        end)

      "pool" ->

        total_cost = Enum.reduce(cart_items, 0, fn(%{quantity: quantity}, count) -> count + (quantity * 1.00) end)

    end

    subtotal = total_cost
    subtotal_formatted = :erlang.float_to_binary(subtotal, [decimals: 2])
    #promo_code = "8thandhope"
    promo_code = args[:promo_code]

    case promo_code do

        "" -> nil

        "8thandhope" -> promo_code_discount = "10%"
                        total_cost = total_cost - (total_cost * 10/100)
        "grain" ->  promo_code_discount = "10%"
                    total_cost = total_cost - (total_cost * 10/100)


    end

    total_cost_formatted = :erlang.float_to_binary(total_cost, [decimals: 2])

    

    IO.inspect(args[:save_for_later])

    #case process_stripe_payment(args) do

    #    {:ok, response} -> #IO.inspect("response in yours...resolver")
    #                       IO.inspect(response)
    #    {:error, error} -> IO.inspect(error)

    #    {_, response} -> IO.inspect(response)

    #end

    #IO.inspect(args)
    #IO.inspect(args[:user_contact_email])
    #IO.inspect(args[:user_contact_mobile])
    
    #IO.inspect(Map.fetch(args, :order_contact_email))

    #Poison.Parser.parse!(args)

    #cart_items = [%{"one": "one"}]

    #Enum.each(cart_items, fn(item) ->
    #    IO.inspect(item.item_id)
    #end)

    
    #Poison.encode!(%Person{name: "Devin Torres", age: 27})
    #=> "{\"name\":\"Devin Torres\",\"age\":27}"

    #IO.inspect(Poison.decode!(~s(args["cart"]), as: %Person{}))
    
    #order_total = guest count * 6 + tax

    #save token
    #pass_token

    #new_customer = [
    #  email: "test@test.com",
    #  description: "An Test Account",
    #  metadata:[
    #    app_order_id: "ABC123"
    #    app_state_x: "xyz"
    #  ],
    #  card: [
    #    number: "4111111111111111",
    #    exp_month: 01,
    #    exp_year: 2018,
    #    cvc: 123,
    #    name: "Joe Test User"
    #  ]
    #]
    #{:ok, res} = Stripe.Customers.create new_customer


    #create customer for guest
    #create user profile

    #params = [
    #    source: [
    #      object: "card",
    #      number: "4111111111111111",
    #      exp_month: 10,
    #      exp_year: 2020,
    #      country: "US",
    #      name: "Ducky Test",
    #      cvc: 123
    #    ],
    #    description: "Sconely order id for customer id"
    #  ]
  
    #IO.inspect(Stripe.Charges.create(51, params))

    #charge = Stripe.Charges.create(51, params)


    #IO.puts("card data from app")
    #IO.inspect(Stripe.Token.create(%{:card => %{"number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => "90025"}}))

    #case Stripe.Token.create(%{:card => %{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}}) do



    #IO.puts("test card date")
    #fraudulent
    #case Stripe.Token.create(%{:card => %{"number" => "4100000000000019", "name" => "Ross", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025"}}) do

    #expired card
    #case Stripe.Token.create(%{:card => %{"number" => "4000000000000069", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

    #cvc
    #case Stripe.Token.create(%{:card => %{"number" => "4000000000000127", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

    #luhn check
    #case Stripe.Token.create(%{:card => %{"number" => "4242424242424241", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do
    
    #working
    case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

        #IO.inspect(token["id"])  

        {:ok, token} -> {:ok, token}

            case Stripe.Charge.create(%{:amount => 50, :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

              {:ok, charge} -> #IO.inspect(charge["id"])
              stripe_charge_token = charge["id"]
              stripe_response = {:ok, charge}
            #                   {:ok, charge}
              {:error, error} -> {:error, error}
                  stripe_response = {:error, error}

            end

        {:error, error} -> {:error, error}
            stripe_response = {:error, error}

    end

    IO.inspect(stripe_response)

    #cus_BK3lQMlABIOi2V
    #card_1AxPeJH6MNtZcTO4e0w0tCCL

    #customer = Stripe.Customer.create(email: "example@gmail.com", source: %{object: "card", number: "4242424242424242", exp_month: 9, exp_year: 2018, cvc: "314"})

    #case customer do

    #  {:ok, customer} -> IO.inspect(customer)
          #{:ok, customer}
   #   {:error, error} -> #IO.inspect(error)
          #{:error, error}

    #end

    #token = Stripe.Token.create(card: %{number: "4242424242424242", exp_month: 9, exp_year: 2018, cvc: "314"})
    #token = Stripe.Token.create(customer: "cus_BK3lQMlABIOi2V", card: "card_1AxPeJH6MNtZcTO4e0w0tCCL")

    #case token do

    #  {:ok, token} -> IO.inspect(token)
    #  {:error, error} -> IO.inspect(error)

    #end

    #existing_customer = Stripe.Customer.retrieve("cus_BK30g9Fg4KNza3")

    #case existing_customer do

    #  {:ok, existing_customer} -> IO.inspect(existing_customer)
                                  #source = existing_customer.source.create("sources": "card_1AxP6WH6MNtZcTO4KImodL8Z")
     #                             sources = existing_customer["sources"]
     #                             sources.create(token: "card_1AxPP0H6MNtZcTO4fmhS5KUV")

     # {:error, error} -> IO.inspect(error)

    #end

    #if stripe_response == ok
              
    case stripe_response do
        {:ok, charge} -> 

            #create stripe customer and do everything else
            #calculate the harge
            #charge the customer


            #validated entered order data
            #if validate process payment
            #invoice = Invoice.changeset(params["data"], :create)

            #validate payment info

            #IO.inspect("charge[:balance_transaction]")
            
            #get stripe charge id
            #insert into database
            #send email

            order_id = SecureRandom.uuid
            #order_id = UUID.uuid1()
            #change order_id to random number
            
            random_number = :rand.uniform(9999999999)
            #check if it exists in the database?
            #user_id
            #order_id

            IO.puts("random number9999")
            IO.inspect(random_number)
            #Float.round
            #n = Random.rand(10..20)     # Random integer between 10 and 20

            #IO.inspect(Phoenix.Token.sign(SconeHomeElixir.Endpoint, "user salt", 1))

            #Repo.transaction(fn ->
            #commit transaction else rollback if payment error
            #if payment error dont insert
            #if error log it

             #if invoice.valid?
            #Repo.transaction fn ->
            #  invoice = Repo.insert(invoice)
            #  Enum.map(items, fn item ->
            #    item = Ecto.Changeset.change(item, invoice_id: invoice.id)
            #    Repo.insert(item)
            #  end)
            #end

            #Multi.new

            user_id = SecureRandom.uuid

            #check if user exists before entering in a user profile.
            #actually only really ued during registration





            #if order_type == pool
            #look up user_pools to get the user pool id by pool_name

            #look in pool orders for the pool with the specifed poolname and date for pool id

            #pool_date_day_year = String.slice(args[:pd], (String.length(args[:pd])-6), String.length(args[:pd]))
            pool_date_day_year_as_date = "01-2007"

            #pool_date_month_name = String.slice(params["pool_date"], 0, String.length(params["pool_date"])-6)

            pool_date_month_name = "september"

            pool_date_month_number = ""

            case pool_date_month_name do

                "january" -> pool_date_month_number = "01"
                "february" -> pool_date_month_number = "02"
                "march" -> pool_month_number = "03"
                "april" -> pool_month_number = "04"
                "may" -> pool_month_number = "05"
                "june" -> pool_month_number = "06"
                "july" -> pool_month_number = "07"
                "august" -> pool_month_number = "08"
                "september" -> pool_date_month_number = "09"
                "october" -> pool_date_month_number = "10"
                "november" -> pool_date_month_number = "11"
                "december" -> pool_month_number = "12"

            end

            IO.inspect(pool_date_month_number <> "-" <> pool_date_day_year_as_date)

            #add to pool_orders
            #create guest user account
            #send pool acknowledgemtn





            #order_datetime_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            
            #order_delivery_contact_address_changeset = Order.changeset(%Order{}, %{order_id: order_id}
            #user_delivery_contact_address_changeset = Order.changeset(%Order{}, %{use_id: order_id, payment_id})

            #
            #order_name_contact_changeset = Order.changeset(%Order{}, %{order_id: order_id}) get from user profile
            #user_name_contact_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            
           


            #IO.inspect(order_changeset)

            query = from mi in MenuItem,
                     select: %{"item_id": mi.id, "name": mi.name}
            menu_items = Repo.all(query)

            #IO.inspect(menu_items)

            #menu_item[0].name
           
            #pool_order_response has no order inserted
            #Repo.insert(pool_order_response_user_changeset)    
            
            #no need

            #if no token/user_id
            #get customer token if user exists
            #if payment suucceeds

            
            #get the user based on entered email address
            #or store the token obviously 
            #if they end up registering either change their user id
            #or delete and recreate them
            #does payment method have to be stored for a guest?  

            user = Repo.get_by(Registration, %{email: "rossedwards.us@gmail.com"})
            IO.inspect(user)


            #check if the user exists in the registreation table

            if user == nil do

              registration_changeset = Registration.changeset(%Registration{}, %{email: args[:user_contact_email], password: "", order_datetime: Ecto.DateTime.utc})  

              case Repo.insert(registration_changeset) do

                {:ok, response} -> IO.inspect(response)

                    user_id = response.id

            
                    #add to the session table
            
                    #if order_type == "pool"
                    #Repo.insert(user_changeset)

                    user_changeset = User.changeset(%User{}, %{user_id: user_id, first_name: "args[:user_name_last]", last_name: "args[:user_name_first]", email: args[:user_contact_email], mobile: args[:user_contact_mobile], about_me: "", company_name: "", stripe_customer_id: ""})
          
                    case Repo.insert(user_changeset) do
                        {:ok, response} -> IO.inspect(response)
                    end

              end

            else

                user_id = user.id
            end

                    #user id is response.id
                    #Repo.insert(user_name_changeset)
                        #order_name is the id of this

                    #Repo.insert(user_contact_changeset)
                    #order_contact is the id of this   

                    #order_type = args[:order_type]
                    #order_type = "pool_response" 

                    if order_type == "pool" do

                        #insert into orders first and then use the order id from there a the order if for poolorderresponseuser
                        #actually pool respnse doesnt go in the order table perhaps
                        #or it does with a type "pool_response"

                        #delivery dateime

                        pool_order = Repo.get_by(PoolOrder, %{admin_receipt_order_id: 0})
                        IO.inspect(pool_order.delivery_date.month)

                        IO.inspect(pool_order.delivery_date.day)

                        #get delivery contact address for pool order


                        delivery_address = %{street1: "s1", street2: "s2", city: "c", state: "s", zipcode: "zc"}

                        #covert the time zone?
                        #actually this is only date

                        case  pool_order.delivery_date.month do
                          1 -> {delivery_date_month = "January"}
                          2 -> {delivery_date_month = "February"}
                          3 -> {delivery_date_month = "March"}
                          4 -> {delivery_date_month = "April"}
                          5 -> {delivery_date_month = "May"}
                          6 -> {delivery_date_month = "June"}
                          7 -> {delivery_date_month = "July"}
                          8 -> {delivery_date_month = "August"}
                          9 -> {delivery_date_month = "September"}
                          10 -> {delivery_date_month = "October"}
                          11 -> {delivery_date_month = "November"}
                          12 -> {delivery_date_month = "December"}
                        end

                        
                        {:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
                        {:ok, date_from_erl} = Date.from_erl(date)    

                        #IO.inspect(Date.day_of_week(date_from_erl))           

                        case Date.day_of_week(date_from_erl) do
                        #case Timex.weekday do
                          1 -> {delivery_date_day_of_week = "Sunday"}
                          2 -> {delivery_date_day_of_week = "Monday"}
                          3 -> {delivery_date_day_of_week = "Tuesday"}
                          4 -> {delivery_date_day_of_week = "Wednesday"}
                          5 -> {delivery_date_day_of_week = "Thursday"}
                          6 -> {delivery_date_day_of_week = "Friday"}
                          7 -> {delivery_date_day_of_week = "Saturday"}
                        end                     

                        IO.inspect(delivery_date_day_of_week)

                        delivery_date_formatted = delivery_date_day_of_week <> " " <>delivery_date_month <> " " <> Integer.to_string(pool_order.delivery_date.day) <> ", 2017"
            
                        IO.inspect(delivery_date_formatted)

                        order_datetime = Ecto.DateTime.utc

                        timezone = Timezone.get("America/Los_Angeles", Timex.now)

                        #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))

                        order_datetime_converted = Timezone.convert(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)

                        admin_receipt_order_id = :rand.uniform(9999999999)
                        
                        case  order_datetime.month do
                          1 -> {order_date_month = "January"}
                          2 -> {order_date_month = "February"}
                          3 -> {order_date_month = "March"}
                          4 -> {order_date_month = "April"}
                          5 -> {order_date_month = "May"}
                          6 -> {order_date_month = "June"}
                          7 -> {order_date_month = "July"}
                          8 -> {order_date_month = "August"}
                          9 -> {order_date_month = "September"}
                          10 -> {order_date_month = "October"}
                          11 -> {order_date_month = "November"}
                          12 -> {order_date_month = "December"}
                        end

                        case Timex.weekday(order_datetime_converted) do
                          0 -> {order_date_day_of_week = "Sunday"}
                          1 -> {order_date_day_of_week = "Monday"}
                          2 -> {order_date_day_of_week = "Tuesday"}
                          3 -> {order_date_day_of_week = "Wednesday"}
                          4 -> {order_date_day_of_week = "Thursday"}
                          5 -> {order_date_day_of_week = "Friday"}
                          6 -> {order_date_day_of_week = "Saturday"}
                        end

                        converted_hour = nil
                        am_pm = nil

                        IO.puts("hour")
                        IO.puts(order_datetime_converted.hour < 13)

                        if order_datetime_converted.hour < 13 do
                            converted_hour = order_datetime_converted.hour
                            am_pm = "am"
                        else
                            IO.puts(">13")
                            converted_hour = order_datetime_converted.hour - 12
                            am_pm = "pm"
                        end

                        #use converted year month day as well

                        order_datetime_formatted = order_date_day_of_week <> " " <> order_date_month <> " " <> Integer.to_string(order_datetime.day) <> ", " <> Integer.to_string(order_datetime.year) <> " " <> Integer.to_string(converted_hour) <> ":" <> Integer.to_string(order_datetime.min) <> " " <> am_pm 


                        order_changeset = Order.changeset(%Order{}, %{user_id: user_id, order_type: "pool_response", admin_receipt_order_id: admin_receipt_order_id, order_datetime: order_datetime, stripe_charge_token: stripe_charge_token})
                        #delivery_id, contact_id, payment_id

                        #order_id = 0
                        #order_datetime = nil

                        case Repo.insert(order_changeset) do
                            {:ok, response} -> IO.inspect(response)
                                    order_id = response.id
                                    #order_datetime = response.order_datetime
                        end

                        #case args[:order_type] do
                        #   "pool" -> 
                        #type when type in ["yours", "social"]

                        #get the pool order from the database

                        pool_order_response_user_changeset = PoolOrderResponseUser.changeset(%PoolOrderResponseUser{}, %{order_id: order_id, user_id: user_id, admin_receipt_order_id: admin_receipt_order_id, pool_order_id: pool_order.id, first_name: "", last_name: "", email: "", mobile: ""})
                        #delivery_id, contact_id, payment_id

                        #order_id = 0
                        #order_datetime = nil

                        case Repo.insert(pool_order_response_user_changeset) do
                            {:ok, response} -> IO.inspect(response)
                                    #order_id = response.id
                                    #order_datetime = response.order_datetime
                        end

                        #IO.inspect(order_datetime.month)

                        #order id from response
                        #Enum.map
                        #Repo.insert(order_items_changeset) 

                        #order_items = [%{menu_item_id: 1, quantity: 1, size: "regular"}, %{menu_item_id: 1, quantity: 1, size: "regular"}]

                        Enum.map(cart_items, fn(item) -> 
                            IO.inspect(item)

                            #pool_order_items?
                            #probably not

                            order_item_changeset = OrderItem.changeset(%OrderItem{}, %{parent_order_id: order_id, menu_item_id: 1, quantity: 1, size: "regular"})

                            case Repo.insert(order_item_changeset) do

                                {:ok, response} -> IO.inspect(response)

                            end

                        end)

                    #order_type == "social/yours"

                    else args[:order_type] in ["yours", "social"]

                        admin_receipt_order_id = :rand.uniform(9999999999)
                        order_datetime = Ecto.DateTime.utc

                        order_changeset = Order.changeset(%Order{}, %{user_id: user_id, order_type: args[:order_type], order_datetime: order_datetime, admin_receipt_order_id: admin_receipt_order_id})
                        #delivery_id, contact_id, payment_id

                        #order_id = 0
                        #order_datetime = nil

                        case Repo.insert(order_changeset) do
                            {:ok, response} -> IO.inspect(response)
                                    order_id = response.id
                                    #order_datetime = order_datetime

                                    #IO.inspect(order_datetime)


                                    {:ok, date} = Ecto.DateTime.dump(order_datetime)
                                    
                                    #IO.inspect(Timex.shift(date, hours: 2, minutes: 0))

                                    timezone = Timezone.get("America/Los_Angeles", Timex.now)

                                    #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))



                                    order_datetime_converted = Timezone.convert(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)

                                    #order_as_date = Ecto.DateTime.to_date(order_datetime_converted)

                                    IO.inspect(Timex.weekday(order_datetime_converted))

                                    case  order_datetime.month do
                                      1 -> {order_date_month = "January"}
                                      2 -> {order_date_month = "February"}
                                      3 -> {order_date_month = "March"}
                                      4 -> {order_date_month = "April"}
                                      5 -> {order_date_month = "May"}
                                      6 -> {order_date_month = "June"}
                                      7 -> {order_date_month = "July"}
                                      8 -> {order_date_month = "August"}
                                      9 -> {order_date_month = "September"}
                                      10 -> {order_date_month = "October"}
                                      11 -> {order_date_month = "November"}
                                      12 -> {order_date_month = "December"}
                                    end

                                    case Timex.weekday(order_datetime_converted) do
                                      0 -> {order_date_day_of_week = "Sunday"}
                                      1 -> {order_date_day_of_week = "Monday"}
                                      2 -> {order_date_day_of_week = "Tuesday"}
                                      3 -> {order_date_day_of_week = "Wednesday"}
                                      4 -> {order_date_day_of_week = "Thursday"}
                                      5 -> {order_date_day_of_week = "Friday"}
                                      6 -> {order_date_day_of_week = "Saturday"}
                                    end

                                    


                                    order_datetime_formatted = order_date_day_of_week <> " " <> order_date_month <> " " <> Integer.to_string(order_datetime_converted.day) <> ", " <> Integer.to_string(order_datetime_converted.year) <> " at " <> Integer.to_string(order_datetime_converted.hour) <> ":" <> Integer.to_string(order_datetime_converted.minute)
                                    IO.inspect(order_datetime_formatted)



                                    order_date_tuple = nil
                                    order_date_as_elixir_date = nil

                                    #IO.inspect(Timezone.get("America/Chicago", order_datetime))
                                    #IO.inspect(Timex.shift(order_datetime, hours: 2, minutes: 0))

                                    #case Ecto.Date.dump(order_as_date) do

                                     #   {:ok, date} -> IO.inspect(date)
                                     #       order_date_tuple = date
                                     #       case Date.from_erl(order_date_tuple) do
                                     #           {:ok, date_tuple} -> 
                                     #               date_as_tuple = date_tuple
                                                    #IO.inspect(Timex.shift(date_tuple, hours: 2, minutes: 0))

                                      #      end

                                            
                                       # {:error, error} -> IO.inspect(error)

                                    #end

                                    delivery_date_formatted = "Thursday Septempter 27th"

                            
                                    #timex_datetime = Date.from(date)

                                    IO.inspect("day")
                                    IO.inspect("date")

                        end


                        #delivery_contact_address_changeset
                        #check if delivery address exists for a user.  if not add it else update whatever is there.

                        user_delivery_contact_address_count = Repo.one(from dca in "user_delivery_contacts_addresses", where: dca.user_id == ^user_id, select: count(dca.delivery_contact_address_id))

                        IO.puts("dca_id")
                        IO.inspect(user_delivery_contact_address_count)

                        #if 0 then add
                        #lse update
                        #user_delivery_contact_address_changeset = UserDeliveryContactAddress.changeset(%UserDeliveryContactAddress{}, %{use_id: user_id, delivery_contact_address_id: user_delivery_contact_address_count + 1, first_name: args[:delivery_contact_address_contact_first_name, last_name: args[:delivery_contact_address_contact_last_name], street1: args[:delivery_contact_address_street1], street2: args[:delivery_contact_address_street2], city: args[:delivery_contact_address_city], state: args[:delivery_contact_address_state], zipcode: args[:delivery_contact_address_zipcode]})
                        #else update

                        #case Repo.insert(user_delivery_contact_address_changeset) do
                        #    {:ok, response} -> IO.inspect(response)
                        #        #order_id = response.id
                        #end

                        
                        yours_social_order_changeset = YoursSocialOrder.changeset(%YoursSocialOrder{}, %{user_id: user_id, order_id: order_id, admin_receipt_order_id: admin_receipt_order_id, delivery_contact_address_id: 1, payment_method_id: 0, stripe_charge_token: stripe_charge_token})
                        #delivery_contact_address_id, contact_id, payment_id

                        case Repo.insert(yours_social_order_changeset) do
                            {:ok, response} -> IO.inspect(response)
                                order_id = response.id
                        end


                        order_items = [%{menu_item_id: 1, quantity: 11, size: "mini"}, %{menu_item_id: 1, quantity: 1, size: "mini"}]

                        Enum.map(order_items, fn(item) -> 
                            IO.inspect(item)

                            #pool_order_item_changeset = OrderItem.changeset(%OrderItem{}, %{order_id: 1, menu_item_id: 1, user_id: user_id, order_id: order_id, quantity: 1, size: "regular"})

                            order_item_changeset = OrderItem.changeset(%OrderItem{}, %{order_id: order_id, user_id: user_id, menu_item_id: 1, quantity: 1, size: item.size})

                            case Repo.insert(order_item_changeset) do

                                {:ok, response} -> IO.inspect(response)

                            end

                        end)

                        delivery_address = %{street1: args[:delivery_contact_address_street1], street2: args[:delivery_contact_address_street2], city: args[:delivery_contact_address_city], state: args[:delivery_contact_address_state], zipcode: args[:delivery_contact_address_zipcode]}

                        #order id from response
                        #Enum.map
                        #Repo.insert(order_item_changeset) 

                        #send receipt email here
                        #yours and social have different receipts though

                    end


                    #order id from response
                    #Enum.map
                    #Repo.insert(order_items_changeset) 

                    #user_payment_changeset = UserPayment.changeset(%UserPayment{}, %{use_id: user_id, customer_token, payment_token})

                  
                    #get this from stripe
                    #Repo.insert(order_payment_changeset)  

                    #order_payment_changeset = Order.changeset(%OrderPayment{}, %{user_id: user_id, last_four_digits: "1234"})


                    #get the max for the user and add one
                    IO.inspect(Repo.one(from upm in "user_payment_methods", where: upm.user_id == 1, select: count(upm.payment_method_id)))

                    card_number = "1234567890"
                    last_four_digits = String.slice(card_number, (String.length(card_number) -4), String.length(card_number))

                    #user_payment_id = Repo.get_by!(UserPayment, {user_id: 1})
                    #user_payment_changeset = UserPaymentMethod.changeset(%UserPaymentMethod{}, %{user_id: user_id, payment_method_id: 1, brand: "brand", last_four_digits: last_four_digits, stripe_payment_token: "token"})

                    #Repo.insert(user_payment_changeset)

                    #dont need
                    #session_id = Repo.get_by!(UserPayment, {user_id: 1})
                    #session_changeset = Session.changeset(%Session{}, %{user_id: user_id, session_id: 1, brand: "brand", last_four_digits: last_four_digits, stripe_payment_token: "token"})

                    #Repo.insert(session_changeset)
               
            #end

                
            #Repo.insert(order_contact_changeset)    
            #Repo.insert(order_name_changeset)
            #else      
            #Repo.insert(yours_social_order_changeset) 
            #Repo.insert(order_items_changeset)
            #Repo.insert(order_payment_changeset)    
            #Repo.insert(order_contact_changeset)    
            #Repo.insert(order_name_changeset)
               
  

            #if order_changeset.valid? do
                #Repo.insert(order_datetime_changeset)
                #Repo.insert(order_delivery_address_changeset)
                #Repo.insert(order_payment_changeset)    
                #Repo.insert(order_items_changeset)
                #Repo.insert(order_contact_changeset)    
                #Repo.insert(order_name_changeset)      

                #case Repo.insert(pool_order_response_user_changeset) do
                #  {:ok, response} -> IO.inspect(response.id)
                #    conn
                #      |> put_flash(:info, "User created successfully.")
                #      |> redirect(to: user_path(conn, :index))




                        #everything below here is only for receipts


                        #turn this into a separate function

                        #total cost == total items * 12
                        #cart_items_test = [%{"mini": true, "item_id": 1, "quantity": 5}, %{"mini": true, "item_id": 1, "quantity": 8}, %{"item_type": "regular", "item_id": 1, "quantity": 15}]
                        #total_cost = 0

                        #if order_type == "social"
                        #if mini key exists
                        #Enum.map(cart_items_test, fn(cart_item) ->

                        #     IO.inspect(cart_item[:mini])

                        #    case x[:mini] do

                        #      true ->  acc = acc + (1 * 5)

                        #      false -> acc = acc + (1 * 6)

                        #    end

                        #end)

                        #Enum.filter([1, 2, 3], fn(x) -> rem(x, 2) == 0 end)

                        #mini = 2.25
                        #2 dozen == 54 - no bulk discount

                        #regular = 5.00 for social or 6 for yours or pool
                        #60 dollars for a dozen

                        #case order_type do

                        #    "social" -> 

                                      #mini_items = Enum.filter(args[:cart_items], fn(x) ->  

                                       #   x[:twelveortwentyfourminis] == "twelve"

                                      #end)

                                      #Enum.map(mini_items, fn(x) -> 

                                      #    mini_total = x[:quantity]

                                      #end)

                                      #mini_total = Enum.reduce(mini_items, {0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                        #              mini_total = args[:cart_items]
                        #                |> Enum.filter(fn(x) ->  x[:item_type] == "mini" end)
                         #               |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                         #             regular_items_count = length(Enum.filter(args[:cart_items], fn(x) ->  

                          #                x[:item_type] == "regular"

                          #            end))

                                      #items_count = 1

                          #            total_items = Enum.reduce(args[:cart_items], 0, fn %{"quantity": quantity}, count -> count = count + quantity end)

                                      #total cost


                          #  "yours" -> "just total items"

                          #              regular_items_count = length(Enum.filter(args[:cart_items], fn(x) ->  

                          #                  x[:item_type] == "regular"

                          #              end))

                          #              total_items = Enum.reduce(args[:cart_items], 0, fn %{"quantity": quantity}, count -> count = count + quantity end)

                                        #total_items



                          #  "pool" -> "just total items"

                          #            regular_items_count = length(Enum.filter(args[:cart_items], fn(x) ->  

                          #                x[:item_type] == "regular"

                          #            end))

                                      #if order_type == "social"
                                      


                                      #if mini key exists
                                      #Enum.map(cart_items_test, fn(cart_item) ->

                                       #    acc = acc + (1 * 5)

                                      #end)

                        #              total_items = Enum.reduce(args[:cart_items], 0, fn %{"quantity": quantity}, count -> count = count + quantity end)


                        #end

                        #total_items = Enum.reduce(args[:cart_items], 0, fn %{"quantity": quantity}, count -> count = count + quantity end)


                        #total_cost = (mini_items_count * 24 * 5) + (regular_items_count * 24 * 5)

                        #total_cost = total_items * 5.50


                        #IO.inspect(elem(mini_total, 0))
                        #IO.inspect(total_cost)






                        #dont need anymore????

                        #def from_timestamp(timestamp) do
                        #   timestamp
                        #   |> +(@epoch)
                        #   |> :calendar.gregorian_seconds_to_datetime
                        # end

                        #IO.puts("date")
                        #IO.inspect(args[:order_datetime_date])
                        #epoch = {{1970, 1, 1}, {0, 0, 0}}
                        #@epoch :calendar.datetime_to_gregorian_seconds(epoch)
                        #Ecto.DateTime.to_erl(args[:order_datetime_date])

                        #epoch = :calendar.datetime_to_gregorian_seconds({{1970, 1, 1}, {0, 0, 0}})
                        #datetime = :calendar.gregorian_seconds_to_datetime(epoch + div(args[:order_datetime_date], 1000))
                        #DateTime.from_unix(args[:order_datetime_date])

                        #1495868400000
                        #|> +(@epoch)
                        #|> :calendar.gregorian_seconds_to_datetime

                        #IO.inspect(@epoch)

                        #Calendar.calendar(1318781876)
                        #IO.inspect(elem(DateTime.from_iso8601("2017-05-28T07:00:00.000Z"), 1).month)

                        #IO.inspect(DateTime.to_string(elem(DateTime.from_unix(1318781876), 1)))


                        #Timex.format!(datetime, "{D}.{M}.{YYYY} {h24}:{m}")




                        #turn this into a separate function

                        #for pool from ecto date time
                        #or for yours and social from application

                        #delivery_date = ~D[2017-05-27]
                        #delivery_date_day_of_week = Integer.to_string(delivery_date.day)

                        
                        #IO.inspect(delivery_date)

                        #case Date.day_of_week(delivery_date) do
                        #  0 -> {delivery_date_day_of_week = "Sunday"}
                        #  1 -> {delivery_date_day_of_week = "Monday"}
                        #  2 -> {delivery_date_day_of_week = "Monday"}
                        #  3 -> {delivery_date_day_of_week = "Monday"}
                        #  4 -> {delivery_date_day_of_week = "Thursday"}
                        #  5 -> {delivery_date_day_of_week = "Friday"}
                        #  6 -> {delivery_date_day_of_week = "Saturday"}
                        #end

                        #case  delivery_date.month do
                        #  1 -> {delivery_date_month = "January"}
                        #  2 -> {delivery_date_month = "February"}
                        #  3 -> {delivery_date_month = "March"}
                        #  4 -> {delivery_date_month = "April"}
                        #  5 -> {delivery_date_month = "May"}
                        #  6 -> {delivery_date_month = "June"}
                        #  7 -> {delivery_date_month = "July"}
                        #  8 -> {delivery_date_month = "August"}
                        #  9 -> {delivery_date_month = "September"}
                        #  10 -> {delivery_date_month = "October"}
                        #  11 -> {delivery_date_month = "November"}
                        #  12 -> {delivery_date_month = "December"}
                        #end


                        #case delivery_date.day do
                        #  n when n in [1, 21, 31] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "st"}
                        #  n when n in [2, 22] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "nd"}
                        #  n when n in [3, 23] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "rd"}
                        #  n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "th"}
                        #end

                        #delivery_date_formatted = delivery_date_day_of_week <> " " <> delivery_date_month <> " " <> delivery_date_day_formatted <> ", " <> Integer.to_string(delivery_date.year)

                        #IO.puts(delivery_date_formatted)

                        #IO.inspect(Timex.now.year)

                        #order_date = Timex.now
                        #order_date_formatted = ""
                        #order_date_month = ""
                        #order_date_day = ""
                        #order_date_day_formatted = ""
                        #order_date_year = ""
                        #order_date_day_of_week = Integer.to_string(delivery_date.day)

                        #IO.inspect(Date.day_of_week(order_date))
                        
                        #case Date.day_of_week(order_date) do
                        #  1 -> {order_date_day_of_week = "Sunday"}
                        #  2 -> {order_date_day_of_week = "Monday"}
                        #  3 -> {order_date_day_of_week = "Monday"}
                        #  4 -> {order_date_day_of_week = "Monday"}
                        #  5 -> {order_date_day_of_week = "Thursday"}
                        #  6 -> {order_date_day_of_week = "Friday"}
                        #  7 -> {order_date_day_of_week = "Saturday"}
                        #end

                        #case order_date.month do
                        #  1 -> {order_date_month = "January"}
                        #  2 -> {order_date_month = "February"}
                        #  3 -> {order_date_month = "March"}
                        #  4 -> {order_date_month = "April"}
                        #  5 -> {order_date_month = "May"}
                        #  6 -> {order_date_month = "June"}
                        #  7 -> {order_date_month = "July"}
                        #  8 -> {order_date_month = "August"}
                        #  9 -> {order_date_month = "September"}
                        #  10 -> {order_date_month = "October"}
                        #  11 -> {order_date_month = "November"}
                        #  12 -> {order_date_month = "December"}
                        #end

                        #order_date_formatted = order_date_day_of_week <> " " <> order_date_month <> " " <> order_date_day_formatted <> ", " <> Integer.to_string(order_date.year)






                        #IO.inspect(order_date_formatted)
                        
                        #IO.inspect(args[:cart_items])

                        #menu_items = [%{"item_id": 1, "name": "Ruby Q"}, %{"item_id": 2, "name": "juliefreedom(veganandgluten-free)"}]

                        #loop through cart items
                        cart_items_with_name = Enum.map(cart_items, fn(cart_item) ->
                          #Map.put(cart_item, :name, "name")
                          #IO.inspect(Enum.at(menu_items, 0).name)
                          IO.inspect(cart_item[:size])

                          if cart_item[:size] == "regular" do

                            menu_item_index = cart_item[:menu_item_id]-1

                            item_name = Enum.at(menu_items, cart_item[:menu_item_id]-1).name

                            #Map.put(cart_item, :name, Enum.at(menu_items, menu_item_index).name)
                            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

                            Map.merge(cart_item, %{
                              :name => item_name,
                              :menu_image_name => Enum.at(menu_items, menu_item_index).name
                            })

                          else

                            #IO.inspect(cart_item[:menu_item_id]-1)

                            item_name = Enum.at(menu_items, cart_item[:menu_item_id]-1).name <> " mini"

                            menu_item_index = cart_item[:menu_item_id]-1

                            #Map.put(cart_item, :name, item_name)
                            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

                            Map.merge(cart_item, %{
                              :name => item_name,
                              :menu_image_name => Enum.at(menu_items, menu_item_index).name
                            })

                          end

                          #name = Enum.filter(menu_items, fn(menu_item) ->
                            #match?({:, _}, element)
                            #IO.inspect(cart_item.item_id)
                            #IO.inspect(menu_item.item_id)
                          #  if(menu_item.item_id == cart_item.item_id) do
                              #IO.puts("here")
                              #IO.inspect(menu_item.name |> String.downcase |> String.replace(" ", ""))
                              #IO.inspect(String.downcase(menu_item.name) |> String.replace(menu_item.name, " ", ""))
                          #    Enum.at(Map.put(cart_item, :name, menu_item.name), 0)
                             #menu_item

                          #  end
                          #end)
                          #IO.inspect(String.downcase(name) |> String.replace(name, " ", ""))
                          #IO.inspect(cart_item)
                       #   name_temp = Enum.at(name, 0)
                          #IO.inspect(title_temp[:title])
                       #   Map.put(cart_item, :title, title_temp[:title])
                        end)

                        IO.inspect(cart_items_with_name)

                        #cart_items_with_title = Enum.map(cart_items_with_title_temp, fn(item) ->

                         #   Enum.at(item, 0)

                        #end)

                        #IO.inspect(cart_items_with_title)


                        #loop through menu items and return the element if the title matches

                        #Result := menu_items.Contains(1);

                        #IO.inspect(CompleteOrderResolverHelper.formatDeliveryDate("2017-05-27"))

                        #IO.inspect(args["order_first_name"])




                       

                        #if order_type == "yours" || order_type == "social" do

                            #working
                            #Sconely.YoursSocialPoolCompleteOrderEmail.yours_social_order(%{order_id: order_id, args: args}) |> SconeHomeElixir.Mailer.deliver_later

                            #working
                            #Sconely.YoursSocialPoolCompleteOrderEmail.yours_pool_order(%{order_id: order_id, args: args}) |> SconeHomeElixir.Mailer.deliver_later


                            #Sconely.YoursSocialPoolCompleteOrderEmail.admin(%{"order_id" => order_id, "order_first_name" => args[:order_first_name], "order_last_name" => args[:order_last_name], "order_contact_email" => args[:order_contact_email], "order_contact_mobile" => args[:order_contact_mobile], "order_delivery_address_street1" => args[:order_delivery_address_street1], "order_delivery_address_street2" => args[:order_delivery_address_street2], "order_delivery_address_city" => args[:order_delivery_address_city], "order_delivery_address_state" => args[:order_delivery_address_state], "order_delivery_address_zipcode" => args[:order_delivery_address_zipcode], "order_date_formatted" => delivery_date_formatted, "order_date_time" => "time", "order_payment_name_on_card" => args[:order_payment_name_on_card], "order_payment_card_number" => args[:order_payment_card_number], "payment_expiry_month" => args[:payment_expiry_month], "payment_expiry_year" => args[:payment_expiry_year], "payment_security_code" => args[:payment_security_code], "order_cart_items" => cart_items_with_title, "total_cost" => total_cost}) |> SconeHomeElixir.Mailer.deliver_later

                        #else
                  
                          Sconely.YoursSocialPoolCompleteOrderEmail.yours_social_pool_complete_order_email(%{order_id: "order_id", admin_receipt_order_id: admin_receipt_order_id, order_datetime_formatted: order_datetime_formatted, delivery_date_formatted: delivery_date_formatted, delivery_time: "", delivery_address: delivery_address, args: args, subtotal: "", total_items: 0, subtotal_formatted: subtotal_formatted, delivery_cost: 0.00, promo_code_discount: promo_code_discount, total_cost_formatted: total_cost_formatted, cart_items: cart_items_with_name}) |> SconeHomeElixir.Mailer.deliver_later

                          #Sconely.YoursSocialPoolCompleteOrderEmail.yours_social_pool_complete_order_admin_email(%{"order_id" => order_id, admin_receipt_order_id: admin_receipt_order_id, order_datetime_formatted: order_datetime_formatted, delivery_date_formatted: delivery_date_formatted, delivery_time: "", delivery_address: delivery_address, args: args, "order_cart_items" => cart_items_with_title, "total_cost" => total_cost}) |> SconeHomeElixir.Mailer.deliver_later

                        #end

                        #json conn |> put_status(:ok), %{token: token, first_name: "user", last_name: ""}

                        IO.puts("ok")

                        #just return ok
                        {:ok, %{status: "successful", error_code: "", token: ""}}
                        
                        #{:ok, %{status: "completed", sconely_user_token: user_id, stripe_payment_token: "charge[:id]", user_type: "guest"}}

                  #{:error, :error}
                      #{:ok, %{status: "changeset error"}}

                #end

          #else

            #IO.inspect("error")

            #log_error_changeset = LogError.changeset(%Order{}, %{error: error})

            #IO.inspect(error_log_changeset.valid?)

            #if log_error_changeset.valid?

            #case Repo.insert(log_error_changeset) do
            #  {:ok, response} -> IO.inspect(response)
            #end



            #Enum.map(order_changeset.errors, fn {field, detail} ->

             #   IO.inspect(Atom.to_string(field) <> " " <> detail)

            #end)

            #Enum.each(order_changeset.errors),  fn {k, v} ->
            #  IO.puts "#{k} --> #{v}"
            #end)

            #Ecto.Changeset.traverse_errors(order_changeset, fn {msg, opts} ->
              #case msg do
              #  {_} -> IO.puts("hello")
                  #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                  #IO.inspect(opts)
                  #msg
              #end
              #Enum.reduce(opts, msg, fn {key, value}, acc ->
              #   #String.replace(acc, "%{#{key}}", to_string(value))
              #end)
            #end)

            #Enum.map(order_changeset, fn(item) ->

            #    IO.inspect(item)

            #end)

          #end

        {:error, error} -> IO.inspect(error.code)

            #error_message = ""

            #case error.code do

            #  "incorrect_cvc" -> error_message = "You have entered an incorrect CVC"

            #    #IO.puts("cvc")

            #  _ ->                error_message = "There was an error please try another card"

            #end

            #code and reason



            {:ok, %{status: "error", error_code: error.code}}

            #IO.inspect(error)
            #log error in database
            
            #{:error, %{status: "completed", sconely_user_token: user_id}}
            #{:ok, %{error_response: "response"}}

    end
    
    #{:ok, %{status: "card declined"}}

    
    #Repo.get!(SconelySignatureOrder, order_id)
    #|> SconelySignatureOrder.changeset(order_params)
    #|> Repo.update
  end



  #order completed
  #update profile
  #guest chooses scone
  #login
  #register
  #order code
  #menu
  #payment



end