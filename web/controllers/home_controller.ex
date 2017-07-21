defmodule SconeHomeElixir.HomeController do
  use SconeHomeElixir.Web, :controller
  alias Sconely.SignatureOrder
  alias Sconely.Order
  alias SconeHomeElixir.Repo

  plug :put_layout, "home.html"

  def index(conn, params) do



  	IO.inspect(params["name"])

  	#test_array = [%{"one": "one"}, %{"one": "two"}]

  	#Enum.each(test_array, fn (v) -> {IO.inspect(v[:one])} end)

  	if params["name"] != nil do

  		signature_order = Repo.get_by(SignatureOrder, %{event_url_name: params["name"]})
  		order = Repo.get_by(Order, %{order_id: signature_order.parent_order_id})

  		#http://localhost:4000/sconelychat&chewatlaci

  		IO.inspect(signature_order)
  		IO.inspect(order)

  		delivery_date = Ecto.DateTime.to_date(order.delivery_datetime) |> Ecto.Date.to_erl

  		date1 = Timex.today()
	    #date2 = Date.from({{1970, 2, 4}, {12, 5, 5}})
	    #date2 = Timex.shift(date1, days: 3)
	    date2 = Timex.shift(date1, days: 3)

	    #date1 = Timex.date({2014, 3, 4})
	    #date2 = Timex.date({2015, 3, 4})

	    IO.inspect(Timex.diff(date1, delivery_date, :days))

   

  		#if the name exists 
  		#if the date is more then 3 days before the event
  		#else redirect to event not found

  		if signature_order != nil do

	  		name = params["name"]
	  		url = "/#/order/" <> name <> "/guest/menu"
	  		redirect conn, to: url

	  	end

	else
    	render conn, "index.html"
    end
  end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
