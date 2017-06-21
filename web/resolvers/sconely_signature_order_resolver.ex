defmodule Sconely.SconelySignatureOrderResolver do
  import Ecto.Query

  alias Sconely.Order
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureGuestResponse
  alias SconeHomeElixir.Repo

  
  def get(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get")

    order = Repo.get!(Order, 23)

    IO.inspect(order.delivery_datetime)

    {:ok, %{delivery_datetime: order.delivery_datetime}}

    
  end
  

  def create(args, _info) do

    IO.inspect(args)

    #insert order table
    #insert signature order table

  	IO.puts("create graphql")
	  #%Order{}
	  #|> Order.changeset(args)
	  #|> Repo.insert

    #%SconelySignatureOrder{}
    #SconelySignatureOrder.changeset(args)
    #Blog.Repo.insert

	  {:ok, %{order_id: 1}}

    #IO.inspect(Ecto.DateTime.utc)
    #IO.inspect(Date.to_erl(DateTime.utc_now()))
    IO.inspect(Calendar.DateTime.now! "America/Los_Angeles")

    order_changeset = Order.changeset(%Order{}, %{order_id: "", order_type: "", delivery_datetime: Ecto.DateTime.utc})

    IO.inspect(order_changeset)
           
     #       if order_changeset.valid? do
                #Repo.insert(order_changeset)

                #Repo.insert(order_delivery_address_changeset)
                #Repo.insert(order_payment_changeset)    
                #Repo.insert(order_items_changeset)
                #Repo.insert(order_contact_changeset)    
                #Repo.insert(order_name_changeset)      

                #case Repo.insert(order_changeset) do
                #  {:ok, response} -> IO.inspect(response)

                #end

                {:ok, datetime} = NaiveDateTime.new(~D[2017-06-18], ~T[00:00:00])

                IO.inspect(datetime)
                IO.inspect(Date.to_erl(~D[2017-06-18]))

                #query = from o in Order, where: o.delivery_datetime > ^datetime

                query = from o in Order, where: fragment("?::date", o.delivery_datetime) == ^Date.to_erl(DateTime.utc_now())

                #query = from o in Order, select: fragment("?::date", o.delivery_datetime) 


                #datetime_add(^Ecto.DateTime.utc, 0, "month")

                orders = Repo.all(query)

                IO.inspect(orders)

           
  end

  def save(args, _info) do

    #get order

    IO.inspect("save")

    order = Repo.get!(Order, 23)
    #sconely_signature_order = Repo.get!(SconelySignatureOrder, 23)

    IO.inspect(order)

    #sconely_signature_order
    #|> SconelySignatureOrder.changeset(%{event_name: "An Event"})
    #|> Repo.update!()


    #IO.puts("create graphql")
    order
    |> Order.changeset(%{user_id: "1"})
    |> Repo.update!()

    IO.inspect(order)

    {:ok, %{order_id: 1}}
  end




  def save_guest_choice(args, _info) do

    IO.inspect("guest")

    #insert order table
    #insert signature order table

    IO.puts("create graphql")
    #%Order{}
    #|> Order.changeset(args)
    #|> Repo.insert

    #%SconelySignatureOrder{}
    #SconelySignatureOrder.changeset(args)
    #Blog.Repo.insert

    {:ok, %{order_id: 1}}

    #IO.inspect(Ecto.DateTime.utc)
    #IO.inspect(Date.to_erl(DateTime.utc_now()))
    IO.inspect(Calendar.DateTime.now! "America/Los_Angeles")

    guest_order_changeset = SconelySignatureGuestResponse.changeset(%SconelySignatureGuestResponse{}, %{order_id: "", item_id: "", first_name: "", last_name: ""})

    #IO.inspect(order_changeset)
           
     #       if order_changeset.valid? do
                #Repo.insert(order_changeset)

                #Repo.insert(order_delivery_address_changeset)
                #Repo.insert(order_payment_changeset)    
                #Repo.insert(order_items_changeset)
                #Repo.insert(order_contact_changeset)    
                #Repo.insert(order_name_changeset)      

                #sconely_signature_order_
                #|> SconelySignatureOrder.changeset(%{event_name: "An Event"})
                #|> Repo.update!()


                case Repo.insert(guest_order_changeset) do
                  {:ok, response} -> IO.inspect(response)

                end

                {:ok, datetime} = NaiveDateTime.new(~D[2017-06-18], ~T[00:00:00])

                IO.inspect(datetime)
                IO.inspect(Date.to_erl(~D[2017-06-18]))

                #query = from o in Order, where: o.delivery_datetime > ^datetime

                #query = from o in Order, where: fragment("?::date", o.delivery_datetime) == ^Date.to_erl(DateTime.utc_now())

                #query = from o in Order, select: fragment("?::date", o.delivery_datetime) 


                #datetime_add(^Ecto.DateTime.utc, 0, "month")

                #orders = Repo.all(query)

                #IO.inspect(orders)

                {:ok, %{order_id: 1}}
 
  end


end