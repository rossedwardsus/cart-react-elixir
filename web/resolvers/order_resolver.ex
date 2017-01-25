defmodule Sconely.OrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  #alias Sconely.MenuItem

  import Ecto.Query

  def get_menu_items(%{host_id: host_id}, _info) do
    items = Repo.all(MenuItem)
   # IO.puts("user orders");
   # query = from o in SconelySignatureOrder, where: o.host_id == ^host_id
   # orders = Repo.all(query)
    {:ok, items}
    #{:ok, [%{event_name: "hello"}]}
  end


  def get_user(%{host_id: host_id}, _info) do

    #orders
    #payment
    #about me

    IO.puts("user orders");
    query = from o in SconelySignatureOrder, where: o.host_id == ^host_id
    orders = Repo.all(query)
    {:ok, orders}
    #{:ok, [%{event_name: "hello"}]}
  end

  def order_json(order) do
    %{
      order_id: "order.order_id",
      host_id: "order.host_id",
      order_type: "order.event_type",
      created_at: "order.created_at",
    }
  end

  def sconely_yours_order_json(order) do
    %{
      order_id: "order.order_id",
      host_id: "order.host_id",
      items: "order.event_type",
      delivery_datetime: "delivery_datetime"
    }
  end

  def sconely_social_order_json(order) do
    %{
      order_id: "order.order_id",
      host_id: "order.host_id",
      items: "order.event_type",
      delivery_datetime: "delivery_datetime"
    }
  end

  def get_user_orders(%{host_id: host_id}, _info) do
    IO.puts("user orders");
    query = from o in SconelySignatureOrder, where: o.host_id == ^host_id
    orders = Repo.all(query)
    {:ok, orders}
    #{:ok, [%{event_name: "hello"}]}
  end

  
  def all(_args, _info) do
    {:ok, Repo.all(SconelySignatureOrder)}
    #{:ok, [%{order_id: 1, event_name: "hello", body: "there"}]}
  end

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
  #}

  #save additional items
  def save_sconely_signature_order_additional_items(args, _info) do
     
     #multiple items

     IO.inspect(args[:order_id])
     #IO.inspect(args[:items])

     Enum.each(args[:items], fn(item) ->
        IO.inspect(item.item_id)
     end)



     #sconely_signature_order_additional_item = Repo.get_by(SconelySignatureOrderAdditionalItem, order_id: order_id)

     #IO.inspect(sconely_signature_order_additional_item)

     #order_total = guest_count * 6
  
     #sconely_signature_order_additional_item_changeset = SconelySignatureOrderAdditionalItem.changeset(%SconelySignatureOrderAdditionalItem{}, %{item_id: item_id, quantity: quantity})
     #{:error, sconely_signature_order_additional_item} = Repo.insert(sconely_signature_order_additional_item_changeset)

     #case Repo.insert(sconely_signature_order_additional_item_changeset) do
      #  {:ok, sconely_signature_order} -> IO.inspect("sconely_signature_order_changeset")
          #conn
          #|> put_flash(:info, "User updated successfully.")
          #|> redirect(to: user_path(conn, :show, user))
     #   {:error, changeset} -> IO.inspect("error")
          #render(conn, "edit.html", user: user, changeset: changeset)
     #end

    #update cost to reflect guest count
        

  #  Repo.get!(SconelySignatureOrderEventDetails, order_id)
  #  |> SconelySignatureOrder.changeset(order_params)
  #  |> Repo.update
    {:ok, %{status: "hello"}}
  end



  #add order items
  #def add_sconely_social_items(%{order_id: order_id, order: order_params}, _info) do
    #order_id, session_id, item_id, quantity
    #Repo.get!(SconelySignatureOrder, order_id)
    #|> SconelySignatureOrder.changeset(order_params)
    #|> Repo.update
  #end


  #save guest details for signature
  #def save_sconely_signature_order(%{order_id: order_id, order: order_params}, _info) do
    #order_id, #guest count
    #Repo.get!(SconelySignatureOrder, order_id)
    #|> SconelySignatureOrder.changeset(order_params)
    #|> Repo.update
  #end

  #complete order and make payment
  #test secret key sk_test_Bmak0PLr7NSsKLjZeFvRPptz
  #test publishable key pk_test_pY3YMi18Gcw0iUB3BSfmPtpb

  

  #mutation CompleteSconelySocialOrder {
  #  complete_sconely_signature_order(order_id: "Second", amount: 1) {
  #    status
  #  }
  #}


  def complete_sconely_signature_order(%{order_id: order_id, amount: amount}, _info) do
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
                    
    #case charge do
    #    charge -> IO.inspect(charge)
    #    "_" -> ""

    #end

    {:ok, %{status: "hello"}}

    
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