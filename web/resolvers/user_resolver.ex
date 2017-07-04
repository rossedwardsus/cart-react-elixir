defmodule Sconely.UserResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}

    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def user_profile(args, _info) do
  	IO.puts("create graphql")
	  #%SconelySignatureOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{order_id: 1}}
  end

  def save_delivery_address(args, _info) do
    IO.puts("create graphql")
    #%SconelySignatureOrder{}
    #|> SconelySignatureOrder.changeset(args)
    #|> Blog.Repo.insert
    {:ok, %{order_id: 1}}
  end

   def save_payment_method(args, _info) do
    IO.puts("create graphql")
    #%SconelySignatureOrder{}
    #|> SconelySignatureOrder.changeset(args)
    #|> Blog.Repo.insert
    {:ok, %{order_id: 1}}
  end
end