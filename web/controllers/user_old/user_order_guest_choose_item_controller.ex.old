defmodule SconeHomeElixir.UserOrderGuestChooseItemController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "user_order_guest.html"

  def index(conn, _params) do
    render conn, "user_order_guest_choose_item.html"
  end

  def create(conn, %{"photo" => user_params}) do
    text conn, user_params.path
  	#render conn, "create.html"
  end
end
