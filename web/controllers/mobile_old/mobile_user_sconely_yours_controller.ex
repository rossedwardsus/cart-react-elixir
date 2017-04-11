defmodule SconeHomeElixir.MobileUserSconelyYoursController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "mobile.html"

  def index(conn, _params) do

    #get new order id
    #get get user id from cookie

  	#clear_session
  	#user_id = conn.cookies["user_id"]
  	#IO.puts("user_id" <> user_id)
    conn
    |> assign(:user, "ross")
    |> assign(:user_id, "12345")
    |> render("mobile_user_sconely_social.html")
  end

  def create(conn, %{"photo" => user_params}) do
  	user_id = conn.cookies["user_id"]
    text conn, user_params.path <> user_id
  	#render conn, "create.html"
  end
end
