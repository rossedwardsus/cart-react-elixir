defmodule SconeHomeElixir.HomeController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "home.html"

  def index(conn, _params) do
    render conn, "index.html"
  end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
