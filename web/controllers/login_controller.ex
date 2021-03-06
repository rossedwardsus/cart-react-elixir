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
    IO.inspect(args["email"])

    user_id = UUID.uuid1()
    token = SecureRandom.uuid
    
    #hash = hashpwsalt("password")
    #checkpw(given_pass, user.password_hash)

    registration = Repo.get_by!(Registration, %{email: args["email"]})
    IO.inspect(registration)

    #checked = checkpw(args["password"], registration.password_hash)

    #IO.inspect(checked)

    #session_changeset = Session.changeset(%Session{}, %{user_id: user_id, token: token})

    #if email exists
    #check passwords equal
    #checked = checkpw(args["data"]["password"], user.password_hash)

    if "checked" do
        #if session_changeset.valid? do

             #user = Repo.get_by!(Userprofile, user_id: registration.user_id)
    
             #Repo.insert(session_changeset)
        
             #working
             #Sconely.RegistrationEmail.welcome_email(%{:first_name => args[:first_name], :last_name => args[:last_name], :email => args[:email]}) |> SconeHomeElixir.Mailer.deliver_later

             #admin
             #Sconely.RegistrationAdminEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

             user = Repo.one!(from u in Registration, where: u.email==^args["email"])
             IO.inspect(user)

             #{ :ok, jwt, _ } = Guardian.encode_and_sign(%{user_id: "12345"}, :access)

             #IO.inspect(Guardian.encode_and_sign(user, :access))
             token = Phoenix.Token.sign(SconeHomeElixir.Endpoint, "sconely user", user.user_id)

             IO.inspect(token)

             response = Phoenix.Token.verify(SconeHomeElixir.Endpoint, "user salt", token, max_age: 86400)

             IO.inspect(response)
                    
             #auth_conn = Guardian.Plug.api_sign_in(conn, user)
             #jwt = Guardian.Plug.current_token(auth_conn)
             #{:ok, claims} = Guardian.Plug.claims(auth_conn)
              
             #auth_conn
             #|> put_resp_header("authorization", "Bearer #{jwt}")
             #|> json(%{access_token: jwt}) # Return token to the client

   
             json conn |> put_status(:ok), %{token: "token", first_name: "user", last_name: ""}

        #end

    else

        json conn |> put_status(:bad_request), %{status: "failed"}

    end

  end


  def logout(conn, args) do

    #session_changeset = Session.changeset(%Session{}, %{user_id: user_id, token: token})

  end

end