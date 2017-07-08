defmodule Sconely.SignatureOrderGuestResponseResolver do
  alias Sconely.SconelySignatureOrder

  alias Sconely.SconelySignatureOrderGuestResponse
  alias SconeHomeElixir.Repo
  
  def get_order(_args, _info) do
    order = Repo.get_by(SconelySignatureOrder, %{event_name: "laci"})

    IO.inspect(order)

    {:ok, %{parent_order_id: 1, event_full_name: "laci launch", invited_guest_message: order.invited_guest_message}}
  end

  def complete_guest_response(_args, _info) do
    #order = Repo.get_by(SconelySignatureOrder, %{event_name: "laci"})

    #IO.inspect(order)

    guest_response_changeset = SconelySignatureOrderGuestResponse.changeset(%SconelySignatureOrderGuestResponse{}, %{user_id:  "user_id"})


    Repo.transaction(fn ->

        case Repo.insert(guest_response_changeset) do
          {:ok, response} -> IO.inspect(response)
        end
   
    end)

    #admin
    Sconely.SignatureGuestResponseEmail.welcome_email(%{"delivery_address_street" => _args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now


    #Sconely.SignatureGuestResponse.welcome_email(%{"delivery_address_street" => _args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now


    {:ok, %{status: "completed"}}

  end

end