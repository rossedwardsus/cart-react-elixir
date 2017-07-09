defmodule Sconely.SignatureOrderGuestResponseResolver do
  alias Sconely.SconelySignatureOrder

  alias Sconely.SconelySignatureOrderGuestResponse
  alias SconeHomeElixir.Repo
  
  def get_order(_args, _info) do
    order = Repo.get_by(SconelySignatureOrder, %{event_url_name: "lacisconelylaunch"})

    IO.inspect(order)

    {:ok, %{parent_order_id: 1, event_long_name: "Laci Sconely Launch", invited_guest_message: order.invited_guest_message}}
  end



  def complete_guest_response(_args, _info) do
    #order = Repo.get_by(SconelySignatureOrder, %{event_name: "laci"})

    IO.inspect(_args)

    guest_response_changeset = SconelySignatureOrderGuestResponse.changeset(%SconelySignatureOrderGuestResponse{}, %{parent_order_id:  "parent_order_id", first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email], mailing_list: _args[:mailing_list]})


    #Repo.transaction(fn ->

     #   case Repo.insert(guest_response_changeset) do
     #     {:ok, response} -> 
     #           IO.inspect(response)
                Sconely.SignatureGuestResponseEmail.welcome_email(%{"first_name" => _args[:first_name], "last_name" => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

     #   end
   
    #end)

    #admin
    

    #Sconely.SignatureGuestResponse.welcome_email(%{"delivery_address_street" => _args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now


    {:ok, %{status: "completed"}}

  end

end