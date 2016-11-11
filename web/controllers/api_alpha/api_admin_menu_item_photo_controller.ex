defmodule SconeHomeElixir.ApiAdminMenuItemPhotoController do
  	use SconeHomeElixir.Web, :controller

  	def index(conn, _params) do
  		json conn, %{items: [%{item_id: "item_id", title: "title"}]}
	end
end
