defmodule SconeHomeElixir.MobileRegistrationController do
  use SconeHomeElixir.Web, :controller

  alias SconeHomeElixir.Repo
  alias Sconely.Registration

  plug :put_layout, "mobile.html"

  def index(conn, _params) do
  	#clear_session
  	#user_id = conn.cookies["user_id"]
  	#IO.puts("user_id" <> user_id)
    conn
    |> assign(:user, "hello")
    |> render("mobile_registration.html")
  end

  def create(conn, %{"email" => email, "password" => password, "image" => image}) do

    #login = Repo.get_by(Registration, email: email)

    changeset = Registration.changeset(%Registration{}, %{email: email, password: password, registration_datetime: "rdt"})
    #changeset = Profile.changeset(%Profile{}, %{first_name: first_name, last_name: last_name})
    
    #Repo.insert(changeset)

    #case Repo.insert(changeset) do #this line blows up
    #  {:ok, post} ->

        #Repo.insert(changeset_profile)
        Task.start_link(fn -> Sconely.RegistrationEmail.welcome_email(%{"email" => email, "address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end); 

        #{:ok, data, _conn} = Plug.Conn.read_body(conn)
        #Sconely.Event.store(%Plug.Upload{filename: "Sconely02.png", path: "/Users/rossedwards/Desktop/julia/scone_home/scone_home_elixir/uploads/"})
        #Sconely.Event.store(image)
        #Sconely.Event.store(%{filename: "Sconely02.png", binary: data})
        #Sconely.Event.store(image)

        #IO.puts("email sent" <> image.path)

        Plug.Conn.put_resp_cookie(conn, "user_id", "12345")

        user_id = conn.cookies["user_id"]
        IO.puts("user_id" <> user_id)
        conn
        |> assign(:user, "session_id-first name")

        #redirect conn, to: "/mobile/user"

    #end
  	
    #user_id = conn.cookies["user_id"]
    text conn, user_id
  	#render conn, "create.html"
  end
end
