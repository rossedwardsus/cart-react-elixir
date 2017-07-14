defmodule Sconely.SignatureOrderGuestResponseResolver do
  alias Sconely.SignatureOrder
  alias Sconely.Order
  use Timex

  alias Sconely.SignatureOrderGuestResponse
  alias SconeHomeElixir.Repo
  
  def get_order(_args, _info) do
    #order = Repo.get_by(SignatureOrder, %{event_url_name: "lacisconelylaunchaugust032017"})

    #IO.inspect(order)
    
    #{:ok, %{parent_order_id: 1, event_long_name: "Laci Sconely Launch", invited_guest_message: order.invited_guest_message}}
    
    #{:ok, %{parent_order_id: 1, event_long_name: "Laci Sconely Launch", invited_guest_message: "Hi everyone,\r\rSconely is providing complimentary scones for the August 3rd Chat & Chew, please select the scone you'd like.\r\rThanks, \rAnais"}}
  
    #{:error}

  end



  def complete_guest_response(_args, _info) do
    #signature_order = Repo.get_by(SconelySignatureOrder, %{parent_order_id: "uuid"})

    IO.inspect(_args)
    #IO.inspect(order)
    #IO.inspect(order.delivery_datetime |> Ecto.DateTime.to_erl)
    #IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    #check if guest added order already
    #else you have alrady chosen a scone thank you


    #guest_response = Repo.get_by(SignatureOrderGuestResponse, %{parent_order_id: "1234", first_name: "Ross"})

    #IO.inspect(guest_response)

    #if guest_responee not equal nill

   
    guest_response_changeset = SignatureOrderGuestResponse.changeset(%SignatureOrderGuestResponse{}, %{parent_order_id:  _args[:parent_order_id], chosen_item_id: _args[:chosen_item_id], first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email]})

    IO.inspect(guest_response_changeset)

    #get title of chosen item from the database 

    Repo.transaction(fn ->

        case Repo.insert(guest_response_changeset) do
          {:ok, response} -> 
                IO.inspect(response)


                #if _args[:chosen_item_id] != 0

                #Sconely.SignatureGuestResponseEmail.welcome_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

                #Sconely.SignatureGuestResponseEmail.admin_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email]}) |> SconeHomeElixir.Mailer.deliver_now


          #{:error}


        end
   
    end)

    #admin
    

   
    {:ok, %{status: "completed"}}

  end

end