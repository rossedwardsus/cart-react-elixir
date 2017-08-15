defmodule Sconely.LoginController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]
  import Comeonin.Bcrypt #only: [checkpw: 2


  alias Sconely.Registration
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
    hash = hashpwsalt("password")
    #checkpw(given_pass, user.password_hash)

    #UUID:
    #SecureRandom.uuid # => "e8bc6fde-3c11-cc2e-903b-745221154d8a"
    #base64 string:
    #SecureRandom.base64(8) # => "VsifwaD2HCk="
    #urlsafe_base64 string:
    #SecureRandom.urlsafe_base64 #=> "WAut546EWdXM3O_9sJGvmQ"

    registration_changeset = Repo.get_by!(Registration, email:  "email")

    
    #Repo.transaction(fn ->

        #case Repo.insert(registration_changeset) do
        #  {:ok, response} -> IO.inspect(response)
        #    conn
        #      |> put_flash(:info, "User created successfully.")
        #      |> redirect(to: user_path(conn, :index))

             
               
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

    json conn, %{token: "12345"}
  end

end
