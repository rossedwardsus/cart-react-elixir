defmodule SconeHomeElixir.LoginController do
  use SconeHomeElixir.Web, :controller
  import Ecto.Query, only: [from: 2]

  alias SconeHomeElixir.{Repo, Login}

  require Logger

  #plug :redirects_plug
  #SconeHomeElixir.RedirectsPlug.call(%{})
  #plug :authenticate
  #plug SconeHomeElixir.RedirectEndPoint.call(conn, %{})

  def index(conn, _params) do
    render conn, "login.html"
  end

  def create(conn, %{"email" => email, "password" => password}) do

    #IO.puts("email" <> email)
    #IO.puts("password" <> password)

    #query = from l in Login, where: l.email == "email1"
    #result1 = Repo.get_by(Login, email: "email1")

    #result = Repo.all(query)
    #IO.puts(first(result).email)
    #Enum.each(result, fn(r) ->
    #    IO.puts("password" <> r.password)
    #end)

    #Enum.each(result1, fn(r1) ->
        IO.puts("password1" <> result1.password)
    #end)

    
    #{:ok, pid} = Postgrex.start_link(hostname: "localhost", username: "postgres", password: "", database: "scone_home")
    #{:ok, #PID<0.69.0>}
    #Postgrex.query!(pid, "SELECT * FROM items", [])
    #%Postgrex.Result{command: :select, empty?: false, columns: ["item_id", "title"], rows: [[3,"hey"],[4,"there"]], size: 2}}

    #get password and check it against the passworded entered
    #else redirect to login
    #add to session store

    #conn = put_session(conn, :message, "new stuff we just set in the session")
    #message = get_session(conn, :message)

    #render conn, "login.html"
    #conn

    #conn = Plug.Conn.put_resp_cookie(conn, "user_id", "12345")

    text conn, "hello"
    #redirect conn, to: "/user"
  end

  defp authenticate(conn, _) do

    redirect conn, to: "/user1"

  end

end
