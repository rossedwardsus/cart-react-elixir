defmodule SconeHomeElixir.AdminAddItemController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "admin.html"

  def index(conn, _params) do
    render conn, "admin_add_item.html"
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