defmodule SconeHomeElixir.Api2Controller do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do
  json conn, %{id: "id1"}
	end
end
