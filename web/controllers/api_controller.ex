defmodule SconeHomeElixir.ApiController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do
  json conn, %{id: "id"}
	end
end
