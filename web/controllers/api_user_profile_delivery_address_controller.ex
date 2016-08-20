defmodule SconeHomeElixir.ApiUserProfileDeliveryAddressController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do

  		#get from database

  		IO.puts(_params)
  		json conn, %{id: "id1"}
  end

  def create(conn, _params) do

  		#insert into database

  		IO.puts(_params["delivery_address"])
  		json conn, %{id: "id1"}
  end
end
