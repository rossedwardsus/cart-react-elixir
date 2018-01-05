defmodule Sconely.CollectionsController do
  use SconeHomeElixir.Web, :controller

  alias Sconely.MenuItem
  alias Sconely.Collection
  alias Sconely.CollectionMenuItem
  alias SconeHomeElixir.Repo

  import Ecto.Query
  use Timex
  
  def all_collections(conn, _args) do
    #IO.puts("create graphql")

    #Duration.now
    #IO.inspect(Repo.all(from c in Collection, select: %{id: c.id, title: c.title, description: c.description, where: c.active == true}))

    #{:ok, Repo.all(from c in Collection, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    json conn |> put_status(:ok), %{collections: Repo.all(from c in Collection, select: %{id: c.id, title: c.title, description: c.description})}

  end


  def get_collection_menu_items(conn, _args) do
    #IO.puts("create graphql")

    #query = Repo.all(from cmi in CollectionMenuItem, where: cmi.collection_id == "uuid")

    #{collection_menu_items, Repo.all(from cmi in CollectionMenuItems, select: %{id: cmi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    #if _args.order_type == "pool"
    #where: mi.assortment == false, mi.active: true

    json conn |> put_status(:ok), %{items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, description: mi.description, ingredients: mi.ingredients, assortment: mi.assortment}, where: mi.assortment == false, where: mi.active == true, order_by: [asc: mi.order])}

  end

end