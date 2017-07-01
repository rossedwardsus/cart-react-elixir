defmodule Sconely.SconelySignatureOrderResolver do
  import Ecto.Query

  alias Sconely.Order
  alias Sconely.SconelySignatureOrder
  alias Sconely.OrderDeliveryAddress
  alias Sconely.OrderDeliveryContact
  
  alias Sconely.SconelySignatureOrderGuestResponse
  alias SconeHomeElixir.Repo


  def get(_args, _info) do

      #IO.inspect({:ok, %{event_name: "en", guest_count: 0, contact: %{first_name: "fn"}}})
  
      #signature_order
      #contact
      #delivery_address
      #guest_responses
      #sub_orders


      {:ok, %{event_name: "en", invited_guest_count: 0, delivery_contact: %{first_name: "fn", last_name: "fn"}, delivery_address: %{street1: "s1"}}}

  end

  
  def get1(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order")

    #Repo.all(from(o in Order, where: o.order_id == "23", preload: :order_delivery_address))

    #Repo.all(  
    #  from oda in OrderDeliveryAddress,
    #    join: o in assoc(oda, :order),
    #   where: o.order_id == "23",
    #  select: oda
    #)

    query = from o in Order,
          join: oda in OrderDeliveryAddress, where: o.order_id == oda.order_id,
          where: o.order_id == "23"
          #sub_orders one to many
          #sub_order_items one to many
          #payment methods
          #delivery_contact
          #guest responses-one to many

    query = from [o, oda] in query,
          select: {o.order_type, oda.street1}

    orders = Repo.all(query)

    #IO.inspect(orders)

    #order = Repo.get(Order, 23)
    #addresses = Repo.all assoc(order, :order_delivery_address)

    #post = Repo.all(from(o in Order, where: o.order_id == "23", preload: :order_delivery_address))

    #Repo.all from o in Order,
    #        where: o.order_id == "uuid",
    #        preload: [:order_delivery_address]



    #order = Repo.get!(Order, "23")

    order = Repo.all from o in Order,
              where: o.order_id == "uuid",
              select: o.order_type

    addresses = Repo.all from oda in OrderDeliveryAddress,
              where: oda.order_id == "uuid"


    IO.inspect(order)
    #IO.inspect(addresses)



    #user = Repo.one from order in Order,
    #      where: order.order_id == "23",
    #      left_join: order_delivery_address in assoc(order, :order_delivery_address),
          #left_join: comments in assoc(posts, :comments),
    #      preload: [order_delivery_address: order_delivery_address]

    #IO.inspect(order.delivery_datetime)

    response = Map.put(%{}, :order_type, List.first(order))
    #response = Map.put(response, :address, addresses)

    IO.inspect(response)

    {:ok, response}

    
  end

  def get_order_details(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order details")

    address = Repo.all from oda in OrderDeliveryAddress,
              where: oda.order_id == "uuid"


    {:ok, address.street}

  end


  def get_order_delivery_contact(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order delivery contact")

     contact = Repo.all from oc in OrderDeliveryContact,
              where: oc.order_id == "uuid",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: %{first_name: oc.first_name, email: oc.email}

      IO.inspect(contact)


    {:ok, List.first(contact)}

  end

  def get_order_delivery_address(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order delivery address")

     address = Repo.all from oda in OrderDeliveryAddress,
              where: oda.order_id == "uuid",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: %{street1: oda.street1, street2: oda.street2}

      IO.inspect(address)


    {:ok, List.first(address)}

  end

  def get_order_guest_responses(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order guest guest responses")

     responses = Repo.all from gr in SconelySignatureOrderGuestResponse,
              where: gr.order_id == "uuid",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: %{first_name: gr.first_name}

      IO.inspect(responses)


    {:ok, responses}

  end

  def get_order_suborders(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    IO.inspect("get order guest guest responses")

     responses = Repo.all from gr in SconelySignatureOrderGuestResponse,
              where: gr.order_id == "uuid",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: %{first_name: gr.first_name}

      IO.inspect(responses)


    {:ok, responses}

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

    #create order_id
    #

    order_changeset = Order.changeset(%Order{}, %{order_id: "", host_id: "", order_type: "signature"})

    #signature_order_changeset = SconelySignatureOrder.changeset(%SconelySignatureOrder{}, %{parent_order_id: "", event_name: "", event_datetime: "", invited_guest_count: 0, invited_guest_message: ""})


    IO.inspect(order_changeset)
           
     #       if order_changeset.valid? do
                #Repo.insert(order_changeset)

                #Repo.insert(order)
                #Repo.insert(signature_order)    
                #Repo.insert(order_items_changeset)
                    

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

                {:ok, %{order_id: 12345}}

           
  end

  def process(args, _info) do

    #get order

    IO.inspect("save")

    #order = Repo.get!(Order, 23)
    #sconely_signature_order = Repo.get!(SconelySignatureOrder, 23)

    order = Repo.all from o in Order,
              where: o.order_id == "uuid"
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              #select: %{first_name: gr.first_name}


    signature_order = Repo.all from so in SconelySignatureOrder,
              where: so.parent_order_id == "uuid"
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              #select: %{first_name: gr.first_name}



    IO.inspect("order")
    IO.inspect(signature_order)

    #sconely_signature_order
    #|> SconelySignatureOrder.changeset(%{event_name: "An Event", invited_guest_count: "", invited_guest_message: ""})
    #|> Repo.update!()


    #IO.puts("create graphql")
    #order
    #|> Order.changeset(%{user_id: "1"})
    #|> Repo.update!()

    

    {:ok, %{state: "processed"}}
  end




  def process_guest_choice(args, _info) do

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

    #guest_order_changeset = SconelySignatureGuestResponse.changeset(%SconelySignatureGuestResponse{}, %{order_id: "", item_id: "", first_name: "", last_name: ""})

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


                #case Repo.insert(guest_order_changeset) do
                #  {:ok, response} -> IO.inspect(response)

                #end

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