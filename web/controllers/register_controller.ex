defmodule Sconely.RegisterController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]

  alias Sconely.{Registration, Userprofile, Session}
  alias SconeHomeElixir.Repo

  import Comeonin.Bcrypt #only: [checkpw: 2

  #plug :action

  require Logger

  plug :put_layout, "home.html"

  def index(conn, _params) do
    render conn, "register.html"
  end

  def create(conn, args) do

    IO.puts(args["password"])

    #user_id = UUID.uuid1()
    user_id = SecureRandom.uuid
    token_id = SecureRandom.uuid
    password_hash = hashpwsalt(args["password"])

    IO.inspect(password_hash)

    #UUID:
    #IO.inspect(SecureRandom.uuid) # => "e8bc6fde-3c11-cc2e-903b-745221154d8a"
    #base64 string:
    #SecureRandom.base64(8) # => "VsifwaD2HCk="
    #urlsafe_base64 string:
    #SecureRandom.urlsafe_base64 #=> "WAut546EWdXM3O_9sJGvmQ"

    registration_changeset = Registration.changeset(%Registration{}, %{user_id: user_id, email: args["email"], password_hash: password_hash})

    user_profile_changeset = Userprofile.changeset(%Userprofile{}, %{user_id: user_id, first_name: args["first_name"], last_name: args["last_name"], email: args["email"], about_me: ""})

    session_changeset = Session.changeset(%Session{}, %{user_id: user_id, token: token_id})


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

    #if changesets are valid then insert

    #unique cndtraint email



    if registration_changeset.valid? do

        user_count = Repo.one!(from u in Registration, where: u.email==^args["email"], select: count("*"))

        IO.inspect(user_count)

        #if email doesnt already exist
        if user_count == 0 do

            
            if user_profile_changeset.valid? do

                if session_changeset.valid? do
              
                         Repo.insert(registration_changeset)
                         Repo.insert(user_profile_changeset)
                         #Repo.insert(session_changeset)
                    
                         #working
                         #Sconely.RegistrationEmail.welcome_email(%{:first_name => args[:first_name], :last_name => args[:last_name], :email => args[:email]}) |> SconeHomeElixir.Mailer.deliver_later

                         #admin
                         #Sconely.RegistrationAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

                         json conn, %{token: "12345678"}

                end

            else 

                IO.inspect(user_profile_changeset.errors)

                json conn, %{error: "email already exists"}

            end

        else

          json conn, %{error: "email already exists"}
    end



    #transaction = Repo.transaction fn ->

    #    case Repo.insert(registration_changeset) do
     #     {:ok, registration_response} -> IO.inspect(registration_response)
        #    conn
        #      |> put_flash(:info, "User created successfully.")
        #      |> redirect(to: user_path(conn, :index))

        #    json conn, %{token: "12345678"}

                    
             
        #        case Repo.insert(user_profile_changeset) do
        #          {:ok, user_profile_response} -> IO.inspect(user_profile_response)
                #    conn
                #      |> put_flash(:info, "User created successfully.")
                #      |> redirect(to: user_path(conn, :index))

                        
                     
                       
                        #with {:ok, user} <- Sconely.Session.authenticate(params, Repo),
                        #with {:ok, jwt, _ } <- Guardian.encode_and_sign(%{id: 1}) do
                        #    #IO.puts(Guardian.encode_and_sign(%{id: 1}))
                        #    IO.puts("hello")
                        #    {:ok, %{user: jwt}}
                        #end

                        #json conn, %{token: "12345678"}


                        #{:ok, %{user_id: user_id}}

                        #session_changeset = Session.changeset(%Session{}, %{user_id: "e", token: ""})

                        #case Repo.insert(session_changeset) do
                        #  {:ok, _registration} -> IO.inspect("ok")
         

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
                                #json conn, %{token: "1234"}

                            #end)
                        #    render(conn, "new.html", changeset: changeset)
                        #end


                  #{:error, changeset} ->  #Repo.rollback(registration_changeset)
                  #   rollback registraction insert
                                          json conn, %{status: "error"}
                                          


                    #Ecto.Changeset.traverse_errors(changeset, fn
                     # IO.inspect(Map.fetch(changeset, :errors))
                      #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                      #{msg, opts} -> IO.inspect(msg)
                      #msg -> msg
                    #end)
                #    render(conn, "new.html", changeset: changeset)
                
                end

     #    {:error, registration_changeset} ->  IO.inspect("error")
                                              #{:error, registration_changeset.errors}
                                              #Repo.rollback(registration_changeset)

            #Ecto.Changeset.traverse_errors(changeset, fn
            #  IO.inspect(Map.fetch(changeset, :errors))
              #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
              #{msg, opts} -> IO.inspect(msg)
              #msg -> msg
            #end)
        #    render(conn, "new.html", changeset: changeset)
    #  end
    #end
    #IO.inspect(transaction)
    #case transaction do
    #  {:ok, _} ->  #working
                   #Sconely.RegistrationEmail.welcome_email(%{:first_name => args[:first_name], :last_name => args[:last_name], :email => args[:email]}) |> SconeHomeElixir.Mailer.deliver_later

                    #admin
                    #Sconely.RegistrationAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

     #               json conn, %{status: "ok", token: "1234567890"}

      #{:error, _} -> IO.inspect("transaction error")
                      #Repo.rollback(registration_changeset.errors)
      #               json conn, %{status: "error"}
    #end
  end

end
