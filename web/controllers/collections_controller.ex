defmodule Sconely.CollectionsController do
  use SconeHomeElixir.Web, :controller

  alias Sconely.MenuItem
  alias Sconely.Collection
  alias Sconely.CollectionMenuItem
  alias SconeHomeElixir.Repo

  import Ecto.Query
  import Ecto.UUID
  use Timex
  
  def get_all_collections(conn, _args) do
    #IO.puts("create graphql")

    #Duration.now
    #IO.inspect(Repo.all(from c in Collection, select: %{id: c.id, title: c.title, description: c.description, where: c.active == true}))

    #{:ok, Repo.all(from c in Collection, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    json conn |> put_status(:ok), %{collections: Repo.all(from c in Collection, select: %{id: c.id, title: c.title, url_title: c.url_title, description: c.description})}

  end

  def get_collection_details(conn, _args) do
    #IO.puts("create graphql")

    #Duration.now
    #IO.inspect(Repo.all(from c in Collection, select: %{id: c.id, title: c.title, description: c.description, where: c.active == true}))

    #{:ok, Repo.all(from c in Collection, select: %{id: mi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    json conn |> put_status(:ok), %{collection_details: Repo.one(from c in Collection, select: %{id: c.id, title: c.title, url_title: c.url_title, description: c.description}, where: c.id == ^"37a4f176-3216-4e3b-9168-1ced5d71fba3")}

  end


  def get_collection_menu_items(conn, _args) do
    #IO.puts("create graphql")

    IO.inspect(Repo.all(from cmi in CollectionMenuItem, where: cmi.collection_id == ^"37a4f176-3216-4e3b-9168-1ced5d71fba3"))

    #IO.inspect(elem(cast("0937b5e1-ae49-4481-972b-818fc8120fe4"), 1))

    
    menu_items = Repo.all(from cmi in CollectionMenuItem, select: cmi.menu_item_id, where: cmi.collection_id == ^"37a4f176-3216-4e3b-9168-1ced5d71fba3")

    IO.inspect(menu_items)


    #{collection_menu_items, Repo.all(from cmi in CollectionMenuItems, select: %{id: cmi.id, name: mi.name, description: mi.description, ingredients: mi.ingredients}, order_by: mi.id)}
    #{:ok, [%{item_id: 1000}]}

    #if _args.order_type == "pool"
    #where: mi.assortment == false, mi.active: true

    json conn |> put_status(:ok), %{collection_menu_items: Repo.all(from mi in MenuItem, select: %{id: mi.id, menu_item_id: mi.menu_item_id, name: mi.name, collection_name: mi.collection_name, description: mi.description, collection_description: mi.collection_description, ingredients: mi.ingredients, assortment: mi.assortment}, where: mi.id in ^menu_items)}

    #json conn |> put_status(:ok), %{collection_menu_items: Repo.all(from cmi in CollectionMenuItem, select: %{menu_item_id: cmi.item_id}, where: cmi.collection_id == ^"0937b5e1-ae49-4481-972b-818fc8120fe4")}


  end

end