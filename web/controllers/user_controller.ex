defmodule SconeHomeElixir.UserController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do
  	#clear_session
  	user_id = conn.cookies["user_id"]
  	IO.puts("user_id" <> user_id)
    render conn, "user.html"
  end

  def create(conn, %{"photo" => user_params}) do
  	user_id = conn.cookies["user_id"]
    text conn, user_params.path <> user_id
  	#render conn, "create.html"
  end
end
