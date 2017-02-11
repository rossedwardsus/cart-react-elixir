defmodule Sconely.MenuItemsResolver do
  alias Sconely.SconelySignatureOrder
  
  def get_menu_items(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{item_id: 1000, title: "hello", body: "there"}]}
  end


  def create(args, _info) do
  	IO.puts("create graphql")
	  #%SconelySignatureOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{order_id: 1}}
  end
end