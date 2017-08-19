defmodule Sconely.LoginController do
  use SconeHomeElixir.Web, :controller
  use Timex

  import Ecto.Query, only: [from: 2]
  import Comeonin.Bcrypt #only: [checkpw: 2


  alias Sconely.{Registration, Userprofile, Session}
  alias SconeHomeElixir.Repo

  #plug :action

  require Logger

  plug :put_layout, "home.html"

  def index(conn, _params) do
    render conn, "register.html"
  end

  def create(conn, args) do

    #IO.inspect(pass)
    IO.inspect(args)

    user_id = UUID.uuid1()
    token = SecureRandom.uuid
    
    #hash = hashpwsalt("password")
    #checkpw(given_pass, user.password_hash)

    registration = Repo.get_by!(Registration, email: "gmail")
    IO.inspect(registration)

    checked = checkpw(args["password"], registration.password_hash)

    IO.inspect(checked)

    session_changeset = Session.changeset(%Session{}, %{user_id: user_id, token: token})

    #if email exists
    #check passwords equal
    #checked = checkpw(args["data"]["password"], user.password_hash)

    if checked do
        if session_changeset.valid? do

             user = Repo.get_by!(Userprofile, user_id: registration.user_id)
    
             #Repo.insert(session_changeset)
        
             #working
             #Sconely.RegistrationEmail.welcome_email(%{:first_name => args[:first_name], :last_name => args[:last_name], :email => args[:email]}) |> SconeHomeElixir.Mailer.deliver_later

             #admin
             #Sconely.RegistrationAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

             json conn |> put_status(:ok), %{token: token, first_name: "user", last_name: ""}

        end

    else

        json conn |> put_status(:bad_request), %{status: "failed"}

    end

  end


  def logout(conn, args) do

    #session_changeset = Session.changeset(%Session{}, %{user_id: user_id, token: token})

  end

end