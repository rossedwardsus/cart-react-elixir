defmodule Sconely.SconelyYoursOrderResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create(args, _info) do
  	IO.puts("create graphql")

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
    
    {:ok, card} = Stripe.Cards.create(:customer, "1", params)

    IO.inspect(card)

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

    #{:ok, charge} = Stripe.Charges.create(1000, params)

	  #%SconelyYoursOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert


    #changeset = UserOrderSconelyYours.changeset(%{user_id: "1", order_id: "1", order_created_datetime: "datetime", paid: "yes"})

    #case Repo.insert(changeset) do
    #  {:ok, _user} ->
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    #end

    #alias Ecto.Multi

    #def reset(account, params) do
    #  Multi.new
    #  |> Multi.update(:account, Account.password_reset_changeset(account, params))
    #  |> Multi.insert(:log, Log.password_reset_changeset(account, params))
    #  |> Multi.delete_all(:sessions, Ecto.assoc(account, :sessions))
    #end

    #Repo.transaction(PasswordManager.reset(account, params))

	  {:ok, %{order_id: 1}}
  end
end