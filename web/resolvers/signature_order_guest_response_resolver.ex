defmodule Sconely.SignatureOrderGuestResponseResolver do
  alias Sconely.SignatureOrder
  alias Sconely.Order
  alias Sconely.MenuItem

  use Timex

  alias Sconely.SignatureOrderGuestResponse
  alias SconeHomeElixir.Repo
  
  def get_order(_args, _info) do
    order = Repo.get_by(SignatureOrder, %{event_url_name: _args[:event_url_name]})
    IO.inspect(order)

    #datetime = DateTime.utc_now()
    #IO.inspect(datetime.time_zone)

    #IO.inspect(_args)


    #curl -G --user 'api:pubkey-5ogiflzbnjrljiky49qxsiozqef5jxp7' -G https://api.mailgun.net/v3/address/validate --data-urlencode address='foo@mailgun.net'

    #case System.cmd "curl", ["-XPOST", "-H", "Authorization: token #{github_token}", "https://api.github.com/user/repos", "-d", "#{result}"]  do
    #  {output, 0} ->  IO.puts "#{output}"
    #  {err, code} -> {:error, %Raygun.Error{message: err, command: "new", code: code}}
    #end
    
    #{:ok, %{parent_order_id: 1, event_long_name: "Laci Sconely Launch", invited_guest_message: order.invited_guest_message}}
    
    {:ok, %{parent_order_id: order.parent_order_id, event_long_name: order.event_long_name, invited_guest_message: order.invited_guest_message, delivery_date: ""}}
  
    #{:error}

  end



  def complete_guest_response(_args, _info) do
    signature_order = Repo.get_by(SignatureOrder, %{parent_order_id: "uuid"})

    #IO.inspect(_args)
    #IO.inspect(signature_order)
    
    #IO.inspect(order.delivery_datetime |> Ecto.DateTime.to_erl)
    #IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    #check if guest added order already
    #else you have alrady chosen a scone thank you
    #guest_response = Repo.get_by(SignatureOrderGuestResponse, %{parent_order_id: "1234", first_name: "Ross"})

    #IO.inspect(guest_response)

    #if guest_responee not equal nill

   
    guest_response_changeset = SignatureOrderGuestResponse.changeset(%SignatureOrderGuestResponse{}, %{parent_order_id: _args[:parent_order_id], chosen_item_id: _args[:chosen_item_id], first_name: _args[:first_name], last_name: _args[:last_name], email: _args[:email]})

    IO.inspect(guest_response_changeset)

    Repo.transaction(fn ->

        case Repo.insert(guest_response_changeset) do
          {:ok, response} -> 
                IO.inspect(response)


                #if _args[:chosen_item_id] != 0 do

                  #get title of chosen item from the database 
                  menu_item = Repo.get_by(MenuItem, %{id: _args[:chosen_item_id]})
                  IO.inspect(menu_item.name)

                  Sconely.SignatureGuestResponseEmail.welcome_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email], :item_name => menu_item.name, :event_full_name => signature_order.event_long_name}) |> SconeHomeElixir.Mailer.deliver_later

                  Sconely.SignatureGuestResponseEmail.admin_email(%{:first_name => _args[:first_name], :last_name => _args[:last_name], :email => _args[:email], :order_id => "1", :item_name => menu_item.name}) |> SconeHomeElixir.Mailer.deliver_later

                #end

          {:error}

        end
   
    end)

    #admin
   
    {:ok, %{status: "completed"}}

  end

end