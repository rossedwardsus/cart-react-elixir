defmodule SconeHomeElixir.AdminOrderController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do
    render conn, "admin_orders.html"
  end

  #def index(conn, _params) do
  	#@derive [Poison.Encoder]
  	#defstruct ["key", "value"]
  	#render conn, "index.html"
  #	jsonb %{"key": "value"}
  #end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
