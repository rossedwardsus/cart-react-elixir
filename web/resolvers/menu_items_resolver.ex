defmodule Sconely.MenuItemsResolver do
  #alias Sconely.SconelySignatureOrder
  
  def getMenuItems(_args, _info) do
    IO.puts("create graphql")
    
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{item_id: 1000}]}
  end


  def create(args, _info) do
  	IO.puts("create graphql")
	  #%SconelySignatureOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{order_id: 1}}
  end
end