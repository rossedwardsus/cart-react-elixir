defmodule SconeHomeElixir.MobileRegistration2faController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]

  alias Sconely.Registration
  alias SconeHomeElixir.Repo

  #plug :action

  require Logger

  #plug :put_layout, "mobile_registration2fa.html"

  def index(conn, _params) do
    conn
    |> assign(:user, "hello")
    |> render("mobile_registration2fa.html")
    #render conn, "mobile_registration2fa.html"
  end

  def create(conn, %{"code" => code}) do

    IO.puts(code)

    response = Twilex.Messenger.create("+14243227392", "13107755566", "body_text", "optional_media_url")
    case response.error_code do
      nil ->
      #  IO.puts(:error)
      #{:ok, response} ->
       IO.puts("sent message")
      _ ->
       IO.puts("error") 
    end

    #changeset = Registration.changeset(%Registration{}, %{email: "mary@example.com", password: "password"})
    #{:error, changeset} = Repo.insert(changeset)
    

    #{:ok, pid} = Postgrex.start_link(hostname: "localhost", username: "postgres", password: "", database: "scone_home")
    #{:ok, #PID<0.69.0>}
    #Postgrex.query!(pid, "SELECT * FROM items", [])
    #%Postgrex.Result{command: :select, empty?: false, columns: ["item_id", "title"], rows: [[3,"hey"],[4,"there"]], size: 2}}

    #insert into users/registration return user_id
    #uuid
    #send verification email

    #query = from l in Login, 
    #      select: l.email

    #query = Repo.all(Login)

    #IO.puts(Repo.all(query))






    datetime = Timex.now
    #datetime_formatted = Timex.format!(datetime, "%FT%T%:z", :strftime)
    datetime_temp = to_string(datetime.year) <> " " <> to_string(datetime.month) <> " " <> to_string(datetime.hour) <> " " <> to_string(datetime.minute)
    IO.puts(datetime_temp)
    #text conn, Timex.format!(datetime, "%FT%T%:z", :strftime) <> UUID.uuid4()
    #json conn, Repo.all(query)

    #logins = Repo.all(Login)

    
    #Enum.map(logins.rows, fn row -> 
    #  Enum.zip(logins.columns, Tuple.to_list(row))
    #    |> Enum.into(%{})
    #    |> JSON.encode
    #end)

    text conn, "activated"

    #render conn, "index.json", data: logins

    
    #IO.puts(datetime)
    #timestamp(tz)   %Postgrex.Timestamp{year: 2013 month: 10, day: 12, hour: 0, min: 37, sec: 14, usec: 0}
    #text conn, %Postgrex.Timestamp{}
    #text conn, datetime.month

   
    #render conn, "login.html"
    #conn
    #text conn, "hello"
    #redirect conn, to: "/user"
  end

end
