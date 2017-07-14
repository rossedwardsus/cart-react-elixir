defmodule Sconely.UserResolver do
  #alias Sconely.SconelySignatureOrder
  alias Sconely.UserDeliveryContactAddress
  alias SconeHomeElixir.Repo

  
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
	  {:ok, %{first_name: "orders and adddresses", delivery_contact_addresses: %{delivery_contact_address_name: "dcan"}}}
  end



  def add_user_delivery_contact_address(_args, _info) do

    user_delivery_contact_address_changeset = UserDeliveryContactAddress.changeset(%UserDeliveryContactAddress{}, %{user_id:  "1234", delivery_contact_address_name: _args[:delivery_contact_address_name], first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email]})

    IO.puts("create dca graphql")
    IO.inspect(_args)

    Repo.transaction(fn ->

        case Repo.insert(user_delivery_contact_address_changeset) do
          {:ok, response} -> 
                IO.inspect(response)


                #if _args[:chosen_item_id] != 0

                #Sconely.SignatureGuestResponseEmail.welcome_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

                #Sconely.SignatureGuestResponseEmail.admin_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now


          {:error, response} ->
                  IO.inspect(response)


        end
   
    end)

    #%UserDeliveryContactAddress{}
    #|> user_delivery_contact_address_changeset
    #|> Repo.insert
    {:ok, %{status: "added"}}
  end



  def save_user_delivery_contact_address(_args, _info) do

    #user_delivery_contact_address = Repo.get_by!(UserDeliveryContactAddress, %{id: id})

    user_delivery_contact_address_changeset = UserDeliveryContactAddress.changeset(%UserDeliveryContactAddress{}, %{user_id:  "1234", delivery_contact_address_name: _args[:delivery_contact_address_name], first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email]})

    IO.puts("save dca graphql")
    IO.inspect(_args)

    Repo.transaction(fn ->

        #case Repo.insert(user_delivery_contact_address_changeset) do
        #  {:ok, response} -> 
        #        IO.inspect(response)


                #if _args[:chosen_item_id] != 0

                #Sconely.SignatureGuestResponseEmail.welcome_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

                #Sconely.SignatureGuestResponseEmail.admin_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now


        #  {:error, response} ->
         #         IO.inspect(response)


        #end
   
    end)

    #%UserDeliveryContactAddress{}
    #|> user_delivery_contact_address_changeset
    #|> Repo.insert
    {:ok, %{status: "added"}}
  end


   def save_payment_method(args, _info) do
    IO.puts("create graphql")
    #%SconelySignatureOrder{}
    #|> SconelySignatureOrder.changeset(args)
    #|> Blog.Repo.insert
    {:ok, %{order_id: 1}}
  end
end