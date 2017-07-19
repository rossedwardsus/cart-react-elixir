defmodule Sconely.MenuItemsResolver do
  alias Sconely.MenuItems
  alias SconeHomeElixir.Repo

  import Ecto.Query
  use Timex
  
  def getMenuItems(_args, _info) do
    IO.puts("create graphql")

    IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    date1 = Timex.today()
    #date2 = Date.from({{1970, 2, 4}, {12, 5, 5}})
    #date2 = Timex.shift(date1, days: 3)
    date2 = Timex.shift(date1, days: 3)

    #date1 = Timex.date({2014, 3, 4})
    #date2 = Timex.date({2015, 3, 4})

    IO.inspect(Timex.diff(date2, date1, :days))

    #Duration.now

    new_customer = [
      email: "test@test.com",
      description: "An Test Account",
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
    ]
    {:ok, res} = Stripe.Customers.create new_customer

    IO.inspect(res[:id])

    #params = [
    #  source: [
    #    object: "card",
    #    number: "4111111111111111",
    #    cvc: 123,
    #    exp_month: 12,
    #    exp_year: 2020,
    #    metadata: [
    #      test_field: "test val"
    #    ]
    #  ]
    #]

    #{:ok, card} = Stripe.Cards.create(:customer, customer_id, params)


    IO.inspect(Repo.all(from mi in MenuItems, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}))

    {:ok, Repo.all(from mi in MenuItems, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}
  end


  def create(args, _info) do
  	IO.puts("create graphql")
	  #%SconelySignatureOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{order_id: 1}}
  end
end