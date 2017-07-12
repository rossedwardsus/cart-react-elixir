defmodule Sconely.SignatureOrderGuestResponseResolver do
  alias Sconely.SignatureOrder
  alias Sconely.Order
  use Timex

  alias Sconely.SignatureOrderGuestResponse
  alias SconeHomeElixir.Repo
  
  def get_order(_args, _info) do
    order = Repo.get_by(SignatureOrder, %{event_url_name: "lacisconelylaunchaugust032017"})

    IO.inspect(order)

    {:ok, %{parent_order_id: 1, event_long_name: "Laci Sconely Launch", invited_guest_message: "We are having Scones for our meeting this month.  Enjoy!"}}
  end



  def complete_guest_response(_args, _info) do
    #signature_order = Repo.get_by(SconelySignatureOrder, %{parent_order_id: "uuid"})

    IO.inspect(_args[:first_name])
    #IO.inspect(order)
    #IO.inspect(order.delivery_datetime |> Ecto.DateTime.to_erl)
    #IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    #guest_response_changeset = ignatureOrderGuestResponse.changeset(%SignatureOrderGuestResponse{}, %{parent_order_id:  "parent_order_id", first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email], mailing_list: _args[:mailing_list]})


    #get title of chosen item from the database 

    #Repo.transaction(fn ->

     #   case Repo.insert(guest_response_changeset) do
     #     {:ok, response} -> 
     #           IO.inspect(response)
                Sconely.SignatureGuestResponseEmail.welcome_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

                Sconely.SignatureGuestResponseEmail.admin_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now


     #   end
   
    #end)

    #admin
    

   
    {:ok, %{status: "completed"}}

  end

end