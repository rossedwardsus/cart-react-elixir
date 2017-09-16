defmodule Sconely.YoursSocialPoolOrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  alias Sconely.MenuItem
  #alias Sconely.Order
  #alias Sconely.PoolOrder
  #alias Ecto.Multi
  alias Sconely.CompleteOrderResolverHelper

  #use Timex

  import Ecto.DateTime
  import Ecto.Query
  import Sconely.ProcessStripePayment

  
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



      {:ok, %{pool_order_id: "1", pool_order_message: "message"}}
  end




  def calculate_total_items() do

  end

  def calculate_total_cost() do

  end  

  def calculate_delivery_cost() do

  end


  #move these to /lib


  def process_date(args) do

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

    params = [
        source: [
          object: "card",
          number: "4111111111111111",
          exp_month: 10,
          exp_year: 2020,
          country: "US",
          name: "Ducky Test",
          cvc: 123
        ],
        description: "Sconely order id for customer id"
      ]
  
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

    #IO.inspect(context)

    IO.inspect(args[:save_for_later])

    case process_stripe_payment(args) do

        {:ok, response} -> #IO.inspect("response in yours...resolver")
                           IO.inspect(response)
        {:error, error} -> IO.inspect(error)

    end

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

    params = [
        source: [
          object: "card",
          number: "4111111111111111",
          exp_month: 10,
          exp_year: 2020,
          country: "US",
          name: "Ducky Test",
          cvc: 123
        ],
        description: "Sconely order id for customer id"
      ]
  
    #IO.inspect(Stripe.Charges.create(51, params))

    #charge = Stripe.Charges.create(51, params)

    
                    
    case process_stripe_payment(args) do
        {:ok, charge} -> 

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



            #user_profile - probably don't need but might be useful for just knowing who a guest user is.  actually can use order data?
            #add name and contact info here
            

            #order_datetime_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            
            #order_changeset = Order.changeset(%Order{}, %{user_id: user_id, order_type: "social", order_id: order_id, payment_confirmation: charge[:balance_transaction]})
            #delivery_id, contact_id, payment_id
            
            #order_delivery_contact_address_changeset = Order.changeset(%Order{}, %{order_id: order_id}
            #user_delivery_contact_address_changeset = Order.changeset(%Order{}, %{use_id: order_id, payment_id})

            #
            #order_name_contact_changeset = Order.changeset(%Order{}, %{order_id: order_id}) get from user profile
            #user_name_contact_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            
            #user_contact_changeset = Order.changeset(%Order{}, %{use_id: order_id, payment_id})
            
            #order_payment_changeset = Order.changeset(%Order{}, %{order_id: order_id, stripe_payment_token})
            #user_payment_changeset = Order.changeset(%Order{}, %{use_id: order_id, payment_id})



            #IO.inspect(order_changeset)

            query = from mi in MenuItem,
                     select: %{"item_id": mi.id, "name": mi.name}
            menu_items = Repo.all(query)

            #IO.inspect(menu_items)

            #menu_item[0].name
           
            #if order_changeset.valid? do
                #Repo.insert(order_datetime_changeset)
                #Repo.insert(order_delivery_address_changeset)
                #Repo.insert(order_payment_changeset)    
                #Repo.insert(order_items_changeset)
                #Repo.insert(order_contact_changeset)    
                #Repo.insert(order_name_changeset)      

                #case Repo.insert(order_changeset) do
                #  {:ok, response} -> IO.inspect(response)
                #    conn
                #      |> put_flash(:info, "User created successfully.")
                #      |> redirect(to: user_path(conn, :index))



                        #turn this into a separate function

                        #total cost == total items * 12
                        cart_items_test = [%{"mini": true, "item_id": 1, "quantity": 5}, %{"mini": true, "item_id": 1, "quantity": 8}, %{"item_type": "regular", "item_id": 1, "quantity": 15}]
                        #total_cost = 0

                        #if order_type == "social"
                        #if mini key exists
                        Enum.map(cart_items_test, fn(cart_item) ->

                             IO.inspect(cart_item[:mini])

                        #    case x[:mini] do

                        #      true ->  acc = acc + (1 * 5)

                        #      false -> acc = acc + (1 * 6)

                        #    end

                        end)

                        #Enum.filter([1, 2, 3], fn(x) -> rem(x, 2) == 0 end)

                        mini_items_count = 0
                        regular_items_count = 0
                        mini_total = 0
                        regular_total = 0
                        items_count = 0
                        order_type = "social"


                        case order_type do

                            "social" -> 

                                      #mini_items = Enum.filter(args[:cart_items], fn(x) ->  

                                       #   x[:twelveortwentyfourminis] == "twelve"

                                      #end)

                                      #Enum.map(mini_items, fn(x) -> 

                                      #    mini_total = x[:quantity]

                                      #end)

                                      #mini_total = Enum.reduce(mini_items, {0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                                      mini_total = args[:cart_items]
                                        |> Enum.filter(fn(x) ->  x[:item_type] == "mini" end)
                                        |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                                      regular_items_count = length(Enum.filter(args[:cart_items], fn(x) ->  

                                          x[:item_type] == "regular"

                                      end))

                                      #items_count = 1

                            "yours" -> ""

                        end

                        total_items = Enum.reduce(args[:cart_items], 0, fn %{"quantity": quantity}, count -> count = count + quantity end)


                        #total_cost = (mini_items_count * 24 * 5) + (regular_items_count * 24 * 5)

                        total_cost = total_items * 5.50


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

                        delivery_date = ~D[2017-05-27]
                        delivery_date_formatted = ""
                        delivery_date_month = ""
                        delivery_date_day = ""
                        delivery_date_day_formatted = ""
                        delivery_date_year = ""
                        delivery_date_day_of_week = Integer.to_string(delivery_date.day)

                        IO.inspect(delivery_date)

                        case Date.day_of_week(delivery_date) do
                          0 -> {delivery_date_day_of_week = "Sunday"}
                          1 -> {delivery_date_day_of_week = "Monday"}
                          2 -> {delivery_date_day_of_week = "Monday"}
                          3 -> {delivery_date_day_of_week = "Monday"}
                          4 -> {delivery_date_day_of_week = "Thursday"}
                          5 -> {delivery_date_day_of_week = "Friday"}
                          6 -> {delivery_date_day_of_week = "Saturday"}
                        end

                        case  delivery_date.month do
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


                        case delivery_date.day do
                          n when n in [1, 21, 31] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "st"}
                          n when n in [2, 22] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "nd"}
                          n when n in [3, 23] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "rd"}
                          n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> {delivery_date_day_formatted = Integer.to_string(delivery_date.day) <> "th"}
                        end

                        delivery_date_formatted = delivery_date_day_of_week <> " " <> delivery_date_month <> " " <> delivery_date_day_formatted <> ", " <> Integer.to_string(delivery_date.year)

                        IO.puts(delivery_date_formatted)

                        #IO.inspect(Timex.now.year)

                        order_date = Timex.now
                        order_date_formatted = ""
                        order_date_month = ""
                        order_date_day = ""
                        order_date_day_formatted = ""
                        order_date_year = ""
                        order_date_day_of_week = Integer.to_string(delivery_date.day)
                        
                        case Date.day_of_week(order_date) do
                          0 -> {order_date_day_of_week = "Sunday"}
                          1 -> {order_date_day_of_week = "Monday"}
                          2 -> {order_date_day_of_week = "Monday"}
                          3 -> {order_date_day_of_week = "Monday"}
                          4 -> {order_date_day_of_week = "Thursday"}
                          5 -> {order_date_day_of_week = "Friday"}
                          6 -> {order_date_day_of_week = "Saturday"}
                        end

                        case order_date.month do
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

                        case order_date.day do
                          n when n in [1, 21, 31] -> {order_date_day_formatted = Integer.to_string(delivery_date.day) <> "st"}
                          n when n in [2, 22] -> {order_date_day_formatted = Integer.to_string(delivery_date.day) <> "nd"}
                          n when n in [3, 23] -> {order_date_day_formatted = Integer.to_string(delivery_date.day) <> "rd"}
                          n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> {order_date_day_formatted = Integer.to_string(order_date.day) <> "th"}
                        end

                        order_date_formatted = order_date_day_of_week <> " " <> order_date_month <> " " <> order_date_day_formatted <> ", " <> Integer.to_string(order_date.year)

                        IO.inspect(order_date_formatted)
                        IO.inspect(args[:cart_items])

                        menu_items = [%{"item_id": 1, "name": "Ruby Q"}, %{"item_id": 2, "name": "lucky"}]

                        #loop through cart items
                        cart_items_with_name = Enum.map(args[:cart_items], fn(cart_item) ->
                          #Map.put(cart_item, :name, "name")
                          #IO.inspect(Enum.at(menu_items, 0).name)
                          Map.put(cart_item, :name, Enum.at(menu_items, 0).name)


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

                        #IO.inspect(cart_items_with_name)

                        #cart_items_with_title = Enum.map(cart_items_with_title_temp, fn(item) ->

                         #   Enum.at(item, 0)

                        #end)

                        #IO.inspect(cart_items_with_title)


                        #loop through menu items and return the element if the title matches

                        #Result := menu_items.Contains(1);

                        #IO.inspect(CompleteOrderResolverHelper.formatDeliveryDate("2017-05-27"))

                        #IO.inspect(args["order_first_name"])


                        #working
                        #Sconely.CompleteOrderEmail.welcome_email(%{order_id: order_id, args: args}) |> SconeHomeElixir.Mailer.deliver_later

                        #Sconely.CompleteOrderEmail.welcome_email(%{"order_id" => order_id, :user_name_first => args[:user_name_first], "user_name_last" => args[:user_name_last], "user_contact_email" => args[:user_contact_email], "user_contact_mobile" => args[:user_contact_mobile], "order_delivery_address_street1" => args[:order_delivery_address_street1], "order_delivery_address_street2" => args[:order_delivery_address_street2], "order_delivery_address_city" => args[:order_delivery_address_city], "order_delivery_address_state" => args[:order_delivery_address_state], "order_delivery_address_zipcode" => args[:order_delivery_address_zipcode], "order_date_formatted" => delivery_date_formatted, "order_date_time" => "time", "order_payment_name_on_card" => args[:order_payment_name_on_card], "order_payment_card_number" => args[:order_payment_card_number], "payment_expiry_month" => args[:payment_expiry_month], "payment_expiry_year" => args[:payment_expiry_year], "payment_security_code" => args[:payment_security_code], "order_cart_items" => cart_items_with_title, "total_cost" => total_cost}) |> SconeHomeElixir.Mailer.deliver_later
                
                        #Sconely.CompleteOrderAdminEmail.welcome_email(%{"email" => "rossedwards.us@gmail.com", "order_id" => order_id}) |> SconeHomeElixir.Mailer.deliver_now

                        #Sconely.CompleteOrderEmail.admin(%{"order_id" => order_id, "order_first_name" => args[:order_first_name], "order_last_name" => args[:order_last_name], "order_contact_email" => args[:order_contact_email], "order_contact_mobile" => args[:order_contact_mobile], "order_delivery_address_street1" => args[:order_delivery_address_street1], "order_delivery_address_street2" => args[:order_delivery_address_street2], "order_delivery_address_city" => args[:order_delivery_address_city], "order_delivery_address_state" => args[:order_delivery_address_state], "order_delivery_address_zipcode" => args[:order_delivery_address_zipcode], "order_date_formatted" => delivery_date_formatted, "order_date_time" => "time", "order_payment_name_on_card" => args[:order_payment_name_on_card], "order_payment_card_number" => args[:order_payment_card_number], "payment_expiry_month" => args[:payment_expiry_month], "payment_expiry_year" => args[:payment_expiry_year], "payment_security_code" => args[:payment_security_code], "order_cart_items" => cart_items_with_title, "total_cost" => total_cost}) |> SconeHomeElixir.Mailer.deliver_later
              
                        Sconely.CompleteYoursSocialPoolOrderEmail.pool_order(%{order_id: order_id, order_date: order_date_formatted, delivery_contact_address: %{street1: "1", street2: "2", city: "city", state: "state", zipcode: "zipcode"}, args: args, subtotal: "", total_items: 0, delivery_cost: 0.00, total_cost: 0.00, cart_items: cart_items_with_name}) |> SconeHomeElixir.Mailer.deliver_later



                        #json conn |> put_status(:ok), %{token: token, first_name: "user", last_name: ""}

                        IO.puts("ok")

                        #just return ok
                        {:ok, %{status: "successful", error_reason: "", last_four_card_digits: "1111", card_brand: "Visa", token: ""}}
                        
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

        {:error, error} -> IO.inspect(error)
            {:ok, %{status: "card_error", error_reason: error.message}}

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