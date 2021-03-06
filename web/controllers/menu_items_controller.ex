defmodule Sconely.MenuItemsController do
  use SconeHomeElixir.Web, :controller

  alias Sconely.MenuItem
  alias SconeHomeElixir.Repo

  import Ecto.Query
  use Timex
  
  def index(conn, _args) do
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

    #{:ok, Repo.all(from mi in MenuItem, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    IO.puts("pool response order_type1")
    IO.inspect(_args["order_type"])

    #if _args.order_type == "pool"
    #where: mi.assortment == false, mi.active: true

    case _args["order_type"] do

        "pool_response" -> json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients, assortment: mi.assortment}, where: mi.assortment == false, where: mi.active == true, order_by: [asc: mi.order])}

        "pool_order" -> json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, where: mi.assortment == false, where: mi.active == true, order_by: [asc: mi.order])}

        "social" -> json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients, assortment: mi.assortment}, where: mi.active == true, order_by: [asc: mi.order])}

        "yours" -> json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients, assortment: mi.assortment}, where: mi.active == true, order_by: [asc: mi.order])}

    end

    #json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: [asc: mi.order])}

  end


  def create(args, _info) do
    IO.puts("create graphql")
    #%SconelySignatureOrder{}
    #|> SconelySignatureOrder.changeset(args)
    #|> Blog.Repo.insert
    {:ok, %{order_id: 1}}
  end
end