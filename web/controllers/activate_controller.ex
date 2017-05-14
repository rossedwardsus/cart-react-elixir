defmodule SconeHomeElixir.ActivateController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]

  alias Sconely.Registration
  alias SconeHomeElixir.Repo

  #plug :action

  require Logger

  #plug :put_layout, "home.html"

  def index(conn, _params) do

    IO.puts("email" <> "password")

    #changeset = Registration.changeset(%Registration{}, %{email: "mary@example.com", password: "password"})
    #{:error, changeset} = Repo.insert(changeset)
    

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

    #render conn, "index.json", logins: "logins"

    #render conn, "index.json", data: logins

    
    #IO.puts(datetime)
    #timestamp(tz)   %Postgrex.Timestamp{year: 2013 month: 10, day: 12, hour: 0, min: 37, sec: 14, usec: 0}
    #text conn, %Postgrex.Timestamp{}
    #text conn, datetime.month

   
    render conn, "index.html"
    #conn
    #text conn, "hello"
    #redirect conn, to: "/user"
  end

end
