defmodule SconeHomeElixir.MobileLoginController do
  use SconeHomeElixir.Web, :controller

  alias SconeHomeElixir.Repo
  alias Sconely.Sessions
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


    #IO.puts("email" <> email)
    #IO.puts("password" <> password)
    IO.puts(UUID.uuid1())

    #login = Repo.get_by(Registration, email: email)
    user =  Repo.one(from r in Registration, select: [r.user_id, r.email, r.password, r.password_salt], where: r.email == ^email)

    case user do

          [] -> IO.inspect(user)
          user -> IO.inspect("user")
                  IO.inspect(user)

                  if password == Enum.at(user, 2) do

                      IO.puts("yes")

                    #  session_id = UUID.uuid1()

                      #add to session table and redirect to user
                      #add the cookie
                      session_changeset = Sessions.changeset(%Sessions{}, %{user_id: Enum.at(user, 0)})
                      case Repo.insert(session_changeset) do
                        {:error, session_changeset} -> IO.inspect(session_changeset)
                        {:ok, session_changeset} -> IO.inspect(session_changeset)
                      end

                      #Plug.Conn.put_resp_cookie(conn, "user_id", "12345")

                  else

                      IO.puts("no")

                  end

    end

    #Repo.one(from u in User, select: [u.user_id, u.first_name, u.last_name])

    
    #query = from l in Login, where: l.email == "email1"
    #user = Repo.get_by(Login, email: "email1")

    #comeonin
    #if result1.salt(password) == result1.password

    user_id = conn.cookies["user_id"]
    text conn, user_id
    
  	#render conn, "create.html"
  end
end
