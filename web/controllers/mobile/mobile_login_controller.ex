defmodule SconeHomeElixir.MobileLoginController do
  use SconeHomeElixir.Web, :controller

  alias SconeHomeElixir.Repo
  alias Sconely.Registration
  alias Sconely.User
  alias Comeonin.Bcrypt

  plug :put_layout, "mobile.html"

  def index(conn, _params) do
  	#clear_session
  	#user_id = conn.cookies["user_id"]
  	#IO.puts("user_id" <> user_id)
    conn
    |> assign(:user, "hello")
    |> render("mobile_login.html")
  end

  def create(conn, %{"email" => email, "password" => password}) do

    #login = Repo.get_by(Registration, email: email)
    #Repo.one(from r in Registration, select: [r.user_id, r.email, r.password])
    Repo.one(from u in User, select: [u.user_id, u.first_name, u.last_name])

    Plug.Conn.put_resp_cookie(conn, "user_id", "12345")
  	
    user_id = conn.cookies["user_id"]
    text conn, user_id

  	#render conn, "create.html"
  end
end
