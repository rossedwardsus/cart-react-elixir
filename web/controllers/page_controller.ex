defmodule SconeHomeElixir.PageController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
