defmodule Sconely.MenuItemsResolver do
  alias Sconely.MenuItem
  alias SconeHomeElixir.Repo

  import Ecto.Query
  use Timex
  
  def getMenuItems(_args, _info) do
    #IO.puts("create graphql")

    #IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    date1 = Timex.now("America/Los_Angeles")
    #IO.inspect(date1)
    #date2 = Date.from({{1970, 2, 4}, {12, 5, 5}})
    #date2 = Timex.shift(date1, days: 3)
    date2 = Timex.shift(date1, days: 3)

    #date1 = Timex.date({2014, 3, 4})
    #date2 = Timex.date({2015, 3, 4})

    #IO.inspect(Timex.diff(date2, date1, :days))

    #Duration.now
    #IO.inspect(Repo.all(from mi in MenuItem, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}))

    {:ok, Repo.all(from mi in MenuItem, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
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