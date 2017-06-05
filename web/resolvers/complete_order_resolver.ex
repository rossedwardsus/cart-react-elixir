defmodule Sconely.CompleteOrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  #alias Sconely.MenuItem
  alias Sconely.Order
  #alias Ecto.Multi
  alias Sconely.CompleteOrderResolverHelper

  #use Timex

  import Ecto.DateTime
  import Ecto.Query

  
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


  #mutation SaveSconelySignatureOrderEventDetails {
  #  save_sconely_signature_order_event_details(order_id: "Second", event_name: "1", event_date: "", event_time: "") {
  #    status
  #  }
  #}


  #save event details
  def save_sconely_signature_order_event_details(%{order_id: order_id, event_name: event_name, event_date: event_date, event_time: event_time}, _info) do
  #  event name
  #  delivery date
  #  delivery time
  #  code
  #  guest amount

     sconely_signature_order = Repo.get_by(SconelySignatureOrder, order_id: order_id)

     IO.inspect(sconely_signature_order)

     #order_total = guest_count * 6
  
     sconely_signature_order_changeset = SconelySignatureOrder.changeset(sconely_signature_order, %{event_name: event_name, event_date: event_date, event_time: event_time})
     #{:error, sconely_signature_order} = Repo.insert(sconely_signature_order_changeset)

     case Repo.update(sconely_signature_order_changeset) do
        {:ok, sconely_signature_order} -> IO.inspect("sconely_signature_order_changeset")
          #conn
          #|> put_flash(:info, "User updated successfully.")
          #|> redirect(to: user_path(conn, :show, user))
        {:error, changeset} -> IO.inspect("error")
          #render(conn, "edit.html", user: user, changeset: changeset)
    end

    #update cost to reflect guest count
        

  #  Repo.get!(SconelySignatureOrderEventDetails, order_id)
  #  |> SconelySignatureOrder.changeset(order_params)
  #  |> Repo.update
    {:ok, %{status: "hello"}}
  end

  #def save_sconely_signature_order_guest_orders(%{order_id: order_id, order: order_params}, _info) do
    #first name, last name, email, item_id
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
  

  #mutation SaveSconelySignatureOrderAdditionalItems {
  #save_sconely_signature_order_additional_items(order_id: "24a6d87f-5892-4467-924e-2d33a1e33d2f", item_id: "12", quantity: "time") {
    #status
  #}
  
  


  defmodule Person do
      @derive [Poison.Encoder]
      defstruct [:id]
  end


















  def complete_yours_order(args, _info) do

    IO.inspect(args)

    #IO.inspect(args)
    IO.inspect(args[:order_contact_email])
    IO.inspect(Map.fetch(args, :order_contact_email))

    #Poison.Parser.parse!(args)

    cart_items = [%{"one": "one"}]

    Enum.each(cart_items, fn(item) ->
    #    IO.inspect(item.item_id)
    end)

    
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
        description: "1000 Scones"
      ]
  
    IO.inspect(Stripe.Charges.create(51, params))

    charge = Stripe.Charges.create(51, params)
                    
    case charge do
        {:ok, charge} -> 

            #validated entered order data
            #if validate process payment
            #invoice = Invoice.changeset(params["data"], :create)

            #validate payment info

            IO.inspect(charge[:balance_transaction])
            
            #get stripe charge id
            #insert into database
            #send email

            order_id = UUID.uuid1()

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

            order_changeset = Order.changeset(%Order{}, %{user_id: "guest", order_type: "social", order_id: order_id, payment_confirmation: charge[:balance_transaction]})
            #order_datetime_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            #order_delivery_address_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            #order_name_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            #order_contact_changeset = Order.changeset(%Order{}, %{order_id: order_id})
            #order_payment_changeset = Order.changeset(%Order{}, %{order_id: order_id})

            IO.inspect(order_changeset)
           
            if order_changeset.valid? do
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


                        #total cost == total items * 12
                        cart_items = [%{"item_type": "mini", "item_id": 1, "quantity": 5}, %{"item_type": "mini", "item_id": 1, "quantity": 8}, %{"item_type": "regular", "item_id": 1, "quantity": 15}]
                        #total_cost = 0

                        #if order_type == "sconely_social"
                        
                        #total_cost = Enum.reduce(cart_items, fn(x) ->

                        #    case x[:item_type] do

                        #      "mini" ->  acc = acc + (1 * 5)

                        #      "regular" -> acc = acc + (1 * 6)

                        #    end

                        #end)

                        #Enum.filter([1, 2, 3], fn(x) -> rem(x, 2) == 0 end)

                        mini_items_count = 0
                        regular_items_count = 0
                        mini_total = 0
                        regular_total = 0
                        items_count = 0
                        order_type = "sconely_social"


                        case order_type do

                            "sconely_social" -> 

                                      #mini_items = Enum.filter(cart_items, fn(x) ->  

                                       #   x[:item_type] == "mini"

                                      #end)

                                      #Enum.map(mini_items, fn(x) -> 

                                      #    mini_total = x[:quantity]

                                      #end)

                                      #mini_total = Enum.reduce(mini_items, {0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                                      mini_total = cart_items
                                        |> Enum.filter(fn(x) ->  x[:item_type] == "mini" end)
                                        |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                                      regular_items_count = length(Enum.filter(cart_items, fn(x) ->  

                                          x[:item_type] == "regular"

                                      end))

                                      #items_count = 1

                            "sconely_yours" -> ""

                        end

                        total_cost = (mini_items_count * 24 * 5) + (regular_items_count * 24 * 5)


                        #IO.inspect(elem(mini_total, 0))
                        #IO.inspect(total_cost)


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



                        delivery_date = ~D[2017-05-27]
                        delivery_date_formatted = ""
                        month = ""
                        day = ""
                        day_formatted = ""
                        year = ""
                        day_of_week = ""
                        
                        IO.inspect(delivery_date)

                        case Date.day_of_week(delivery_date) do
                          0 -> {day_of_week = "Sunday"}
                          1 -> {day_of_week = "Monday"}
                          6 -> {day_of_week = "Saturday"}
                        end

                        case delivery_date.month do
                          0 -> {month = "January"}
                          5 -> {month = "May"}
                        end

                        case delivery_date.day do
                          n when n in [1, 21, 31] -> {day_formatted = Integer.to_string(delivery_date.day) <> "st"}
                          n when n in [2, 22] -> {day_formatted = Integer.to_string(delivery_date.day) <> "nd"}
                          n when n in [3, 23] -> {day_formatted = Integer.to_string(delivery_date.day) <> "rd"}
                          n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> {day_formatted = Integer.to_string(delivery_date.day) <> "th"}
                        end

                        delivery_date_formatted = day_of_week <> " " <> month <> " " <> day_formatted <> ", " <> Integer.to_string(delivery_date.year)

                        IO.puts(delivery_date_formatted)

                        menu_items = [%{"item_id": 1, "title": "Ruby Q"}, %{"item_id": 2, "title": "one"}]

                        #loop through cart items
                        cart_items_with_title = Enum.map(cart_items, fn(cart_item) ->
                          title = Enum.filter(menu_items, fn(menu_item) ->
                          #  match?({:, _}, element)
                            if(menu_item.item_id == cart_item.item_id) do
                              #IO.inspect(menu_item)
                              #Map.put(cart_item, :title, menu_item.title)
                              menu_item
                            end
                          end)
                          IO.inspect(title)
                          title_temp = Enum.at(title, 0)
                          #IO.inspect(title_temp[:title])
                          Map.put(cart_item, :title, title_temp[:title])
                        end)

                        IO.inspect(cart_items_with_title)

                        #cart_items_with_title = Enum.map(cart_items_with_title_temp, fn(item) ->

                         #   Enum.at(item, 0)

                        #end)

                        #IO.inspect(cart_items_with_title)


                        #loop through menu items and return the element if the title matches

                        #Result := menu_items.Contains(1);

                        IO.inspect(CompleteOrderResolverHelper.formatDeliveryDate("2017-05-27"))

                        IO.inspect(args["order_first_name"])


                        #working
                        Sconely.CompleteOrderEmail.welcome_email(%{"order_id" => order_id, "order_first_name" => args[:order_first_name], "order_last_name" => args[:order_last_name], "order_contact_email" => args[:order_contact_email], "order_contact_mobile" => args[:order_contact_mobile], "order_delivery_address_street1" => args[:order_delivery_address_street1], "order_delivery_address_street2" => args[:order_delivery_address_street2], "order_delivery_address_city" => args[:order_delivery_address_city], "order_delivery_address_state" => args[:order_delivery_address_state], "order_delivery_address_zipcode" => args[:order_delivery_address_zipcode], "order_date_formatted" => delivery_date_formatted, "order_date_time" => "time", "order_payment_name_on_card" => args[:order_payment_name_on_card], "order_payment_card_number" => args[:order_payment_card_number], "payment_expiry_month" => args[:payment_expiry_month], "payment_expiry_year" => args[:payment_expiry_year], "payment_security_code" => args[:payment_security_code], "order_cart_items" => cart_items_with_title, "total_cost" => total_cost}) |> SconeHomeElixir.Mailer.deliver_now
                
                #        Sconely.CompleteOrderAdminEmail.welcome_email(%{"email" => "rossedwards.us@gmail.com", "order_id" => order_id}) |> SconeHomeElixir.Mailer.deliver_now
                
                        {:ok, %{status: "completed", order_id: order_id}}

                  #{:error, :error}
                      #{:ok, %{status: "changeset error"}}

                #end

          else

            IO.inspect("error")

            #log_error_changeset = LogError.changeset(%Order{}, %{error: error})

            #IO.inspect(error_log_changeset.valid?)

            #if log_error_changeset.valid?

            #case Repo.insert(log_error_changeset) do
            #  {:ok, response} -> IO.inspect(response)
            #end



            Enum.map(order_changeset.errors, fn {field, detail} ->

                IO.inspect(Atom.to_string(field) <> " " <> detail)

            end)

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

          end

        {:error, error} -> IO.inspect(error)
            #log error in database
            {:ok, %{status: "card declined - limit reached"}}

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