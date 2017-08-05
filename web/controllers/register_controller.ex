defmodule Sconely.RegisterController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]

  alias Sconely.{Registration, UserProfiles}
  alias SconeHomeElixir.Repo

  #plug :action

  require Logger

  plug :put_layout, "home.html"

  def index(conn, _params) do
    render conn, "register.html"
  end

  def create(conn, args) do

    IO.puts(args["email"])

    user_id = UUID.uuid1()
    hash = Bcrypt.hashpwsalt("password")

    registration_changeset = Registration.changeset(%Registration{}, %{user_id:  user_id, email: "e", password: "p", password_salt: hash})

    #registration_changeset = Registration.changeset(%Registration{}, %{email: "mary@example.com", password: "password"})
    #{:error, changeset} = Repo.insert(changeset)

    user_profile_changeset = UserProfiles.changeset(%UserProfiles{}, %{user_id: user_id, first_name: args[:first_name], last_name: args[:last_name], email: "e", about_me: "am"})



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

   
    #render conn, "login.html"
    #conn
    #text conn, "hello"
    #redirect conn, to: "/user"



    #Repo.transaction(fn ->

        #case Repo.insert(registration_changeset) do
        #  {:ok, response} -> IO.inspect(response)
        #    conn
        #      |> put_flash(:info, "User created successfully.")
        #      |> redirect(to: user_path(conn, :index))

             
                #case Repo.insert(user_profile_changeset) do
                #  {:ok, response} -> IO.inspect(response)
                #    conn
                #      |> put_flash(:info, "User created successfully.")
                #      |> redirect(to: user_path(conn, :index))

                        
                     
                       
                        #with {:ok, user} <- Sconely.Session.authenticate(params, Repo),
                        #with {:ok, jwt, _ } <- Guardian.encode_and_sign(%{id: 1}) do
                        #    #IO.puts(Guardian.encode_and_sign(%{id: 1}))
                        #    IO.puts("hello")
                        #    {:ok, %{user: jwt}}
                        #end

                        

                        #{:ok, %{user_id: user_id}}

                        #session_changeset = Session.changeset(%Session{}, %{user_id: "e", session_id: "p", token: ""})

                        #case Repo.insert(session_changeset) do
                        #  {:ok, _registration} -> IO.inspect("ok")
                        #    conn

                              #working
                              #Sconely.RegistrationEmail.welcome_email(%{:first_name => args[:first_name], :last_name => args[:last_name], :email => args[:email]}) |> SconeHomeElixir.Mailer.deliver_later

                              #admin
                              #Sconely.RegistrationAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now



                        #      |> put_flash(:info, "User created successfully.")
                        #      |> redirect(to: user_path(conn, :index))
                        #  {:error, changeset} -> 
                            #Ecto.Changeset.traverse_errors(changeset, fn
                            #  IO.inspect(Map.fetch(changeset, :errors))
                              #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                              #{msg, opts} -> IO.inspect(msg)
                              #msg -> msg

                                #{:ok, %{token: "1234"}}
                                #phoenix.token or secure random
                                json conn, %{token: "1234"}

                            #end)
                        #    render(conn, "new.html", changeset: changeset)
                        #end


                #  {:error, changeset} -> 
                    #Ecto.Changeset.traverse_errors(changeset, fn
                     # IO.inspect(Map.fetch(changeset, :errors))
                      #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                      #{msg, opts} -> IO.inspect(msg)
                      #msg -> msg
                    #end)
                #    render(conn, "new.html", changeset: changeset)
                
         #       end

         #{:error, changeset} -> 
            #Ecto.Changeset.traverse_errors(changeset, fn
            #  IO.inspect(Map.fetch(changeset, :errors))
              #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
              #{msg, opts} -> IO.inspect(msg)
              #msg -> msg
            #end)
        #    render(conn, "new.html", changeset: changeset)
        #end
    #end)

    #json conn, %{token: "12345"}
  end

end
