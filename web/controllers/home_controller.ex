defmodule SconeHomeElixir.HomeController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "home.html"

  def index(conn, _params) do



  	IO.inspect(_params["name"])

  	#test_array = [%{"one": "one"}, %{"one": "two"}]

  	#Enum.each(test_array, fn (v) -> {IO.inspect(v[:one])} end)

  	#if _params["name"] != nil do
	#  	name = _params["name"]
	#  	url = "/#" <> name

	#  	redirect conn, to: url
	#else
    	render conn, "index.html"
    #end
  end

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end
end
