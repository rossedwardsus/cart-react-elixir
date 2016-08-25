defmodule SconeHomeElixir.ApiUserOrderMessageStationaryController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do

  		#get from database

  		IO.puts(_params)
  		json conn, %{id: "id1"}
  end

  def create(conn, %{"address" => address, "suite" => suite}) do

  		#insert into database

  		IO.puts(address)
  		IO.puts(suite)

  		json conn, %{id: "id1"}
  end
end
