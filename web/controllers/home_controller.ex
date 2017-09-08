defmodule SconeHomeElixir.HomeController do
  use SconeHomeElixir.Web, :controller
  alias Sconely.SignatureOrder
  alias Sconely.Order
  alias Sconely.BrowserAnalytics
  alias SconeHomeElixir.Repo

  plug :put_layout, "home.html"

  def index(conn, params) do


  	user_agent = conn |> get_req_header("user-agent")
  	#ip = conn |> get_req_header("http_client_ip")
  	
  	#IO.inspect(user_agent |> List.first)
  	
  	#IO.inspect(conn.remote_ip)
  	#data time
  	#ipaddress
  	#:inet_parse.ntoa(conn.remote_ip)


  	#changeset = BrowserAnalytics.changeset(%BrowserAnalytics{}, %{data: user_agent |> List.first})
    #{:error, changeset} = Repo.insert(changeset)

    IO.inspect(params["signature_event_name"])

  	IO.inspect(params["pool_name"])

  	#IO.inspect(String.length(params["pool_date"]))

  	#IO.inspect(String.slice(params["pool_date"], (String.length(params["pool_date"])-6), String.length(params["pool_date"])))


  	#test_array = [%{"one": "one"}, %{"one": "two"}]

  	#Enum.each(test_array, fn (v) -> {IO.inspect(v[:one])} end)

  	#/signature_order_pool_name/pool_order_date

  	#signature
  	#pool
  	#yours menu
  	#social menu


  	#if params["signature_event_name"] != nil do

  		#get order type and name

  		#signature_order = Repo.get_by(SignatureOrder, %{event_url_name: params["signature_event_name"]})
  		#order = Repo.get_by(Order, %{order_id: signature_order.parent_order_id})

  		#http://localhost:4000/sconelychat&chewatlaci

  		#IO.inspect(signature_event_name)
  		#IO.inspect(order)

  		#delivery_date = Ecto.DateTime.to_date(order.delivery_datetime) |> Ecto.Date.to_erl

  		date1 = Timex.today()
	    #date2 = Date.from({{1970, 2, 4}, {12, 5, 5}})
	    #date2 = Timex.shift(date1, days: 3)
	    date2 = Timex.shift(date1, days: 3)

	    #date1 = Timex.date({2014, 3, 4})
	    #date2 = Timex.date({2015, 3, 4})

	    #IO.inspect(Timex.diff(date1, delivery_date, :days))

   
  		#if the name exists 
  		#if the date is more then 3 days before the event
  		#else redirect to event not found

  		#if order_type == "signature"
  		#else if order_type == "pool"

  		#if signature_order != nil do

  			#sconely.herokuapp.com

	  		#event_name = params["name"]
	  		#url = "/#/order/" <> event_name <> "/guest/menu"
	  		#redirect conn, to: url

	  	#else

	  		#pool_name = params["pool_name"]
	  		#pool_date = params["pool_date"]

	  		#url = "/#/pool_redirect/" <> pool_name <> "/" <> pool_date
	  		#url = url <> "/"
	  		#redirect conn, to: url

	  	#end

	if params["pool_name"] != nil && params["pool_date"] != nil do

		pool_name = params["pool_name"]
  		pool_date = params["pool_date"]

  		url = "/#/pool/" <> pool_name <> "/" <> pool_date
  		#url = url <> "/"
  		redirect conn, to: url

    else

    	render conn, "index.html"

    end
  end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
