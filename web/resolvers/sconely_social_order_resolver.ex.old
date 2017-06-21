defmodule Sconely.SconelySocialOrderResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def complete_sconely_social_order(args, _info) do
  	IO.puts("create graphql")
    IO.inspect(args)


    #make the charge
    #if it goes through then save the card if its a new card
    #if not then just complete the order
    #if theres an error respond with an error message
    #if successful save the order and send an email to the
    #order creator and maybe to admin
    #also save the address if its new
    #if its not new then get the address
    #save the token from stripe
    #loop through items and save to the database


    #if guest get card details if registerd possibly get card from database

    params = [
      source: [
        object: "card",
        number: "4111111111111111",
        cvc: 123,
        exp_month: 12,
        exp_year: 2020,
        metadata: [
          test_field: "test val"
        ]
      ]
    ]

    #get customer id from local database and the card id thats used
    
    #{:ok, card} = Stripe.Cards.create(:customer, "1", params)

    #IO.inspect(card)

    params = [
      source: [
        object: "charge",
        number: "4111111111111111",
        exp_month: 10,
        exp_year: 2020,
        country: "US",
        name: "Ducky Test",
        cvc: 123,
      ],
      description: "1000 Widgets",
      capture: false
    ]
    
    case Stripe.Charges.create(1000, params) do
      {:ok, charge} -> IO.inspect(charge)
          
          #create order id

          #changeset = Orders.changeset(%{user_type: "guest", order_id: "1", email: "", mobile: "", delivery_date: "datetime", time: "", paid: "yes", stripe_receipt})

          #case Repo.insert(changeset) do
          #  {:ok, _user} ->
          #    conn
          #      |> put_flash(:info, "User created successfully.")
          #      |> redirect(to: user_path(conn, :index))
          #  {:error, changeset} ->
          #    render(conn, "new.html", changeset: changeset)
          #end


          #changeset = Order_Items.changeset(%{order_id: "1", order_id: "", time: "", quantity: "", quantity_multiplier: ""})

          #case Repo.insert(changeset) do
          #  {:ok, _user} ->
          #    conn
          #      |> put_flash(:info, "User created successfully.")
          #      |> redirect(to: user_path(conn, :index))
          #  {:error, changeset} ->
          #    render(conn, "new.html", changeset: changeset)
          #end



          #{order_id, name, delivery_address, items with names 1 dozen quantity, paid with, total amount, date of order}

          #working
          Sconely.SconelySocialCompleteOrderEmail.complete_order(%{"delivery_address_street" => args[:street], "city" => args[:city], "cart_items" => args[:cart_items]}) |> SconeHomeElixir.Mailer.deliver_now

          #admin
          #Sconely.SconelySocialCompleteOrderAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street], "delivery_address_city" => args[:delivery_address_city], "order_items" => args[:order_items]}) |> SconeHomeElixir.Mailer.deliver_now

          {:ok, %{order_id: 1}}

      {:error, _error} ->
          {:ok, %{order_id: 1}}

    end

    #%SconelyYoursOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert


    

    #alias Ecto.Multi

    #def reset(account, params) do
    #  Multi.new
    #  |> Multi.update(:account, Account.password_reset_changeset(account, params))
    #  |> Multi.insert(:log, Log.password_reset_changeset(account, params))
    #  |> Multi.delete_all(:sessions, Ecto.assoc(account, :sessions))
    #end

    #Repo.transaction(PasswordManager.reset(account, params))

	  
  end
end