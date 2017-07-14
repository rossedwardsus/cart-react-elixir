defmodule Sconely.UserResolver do
  #alias Sconely.SconelySignatureOrder
  alias Sconely.UserDeliveryContactAddress
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}

    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def get_user(args, _info) do

    #user = User.get_by(User, %{user_id: ""})

  	IO.puts("get user graphql")
	  #%SconelySignatureOrder{}
	  #|> User.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{user: "orders and adddresses"}}
  end

  def add_user_delivery_contact_address(args, _info) do

    #guest_response_changeset = SignatureOrderGuestResponse.changeset(%SignatureOrderGuestResponse{}, %{parent_order_id:  _args[:parent_order_id], chosen_item_id: _args[:chosen_item_id], first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email]})

    IO.puts("create dca graphql")
    #%UserDeliveryContactAddress{}
    #|> user_delivery_contact.changeset(args)
    #|> Blog.Repo.insert
    {:ok, %{status: "added"}}
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