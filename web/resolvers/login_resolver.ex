defmodule Sconely.LoginResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end

  def login(_args, %{context: %{current_user: %{id: id}}}) do
  #def login(args, _info) do

    IO.puts("login")

    #userid password email

    #user = Repo.get_by(Registration, email: "Lew")  
    #lew.name  
    #user.password_salt comeonein.checkpassword


    #user = Login.get_by(email)
    #if user.password == args["password"]

    #auth token


    #create session for user and return session id
    #also auth tokens
    #changeset = Session.changeset(%{order_id: "1", order_id: "", time: "", quantity: "", quantity_multiplier: ""})

    #case Repo.insert(changeset) do
    #  {:ok, _user} ->
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    #end



    #{order_id, name, delivery_address, items with names 1 dozen quantity, paid with, total amount, date of order}

    #working
    #Sconely.SconelySocialOrderEmail.welcome_email(%{"delivery_address_street" => args[:delivery_address_street], "delivery_address_city" => args[:delivery_address_city], "order_items" => args[:order_items]}) |> SconeHomeElixir.Mailer.deliver_now

    #admin
    #Sconely.SconelySocialOrderEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street], "delivery_address_city" => args[:delivery_address_city], "order_items" => args[:order_items]}) |> SconeHomeElixir.Mailer.deliver_now

    {:ok, %{session_id: 1}}

  end

  def login(_args, _info) do
    #IO.puts("not authorized")
    #{:error, "Not Authorized"}

    #with {:ok, user} <- Sconely.Session.authenticate(params, Repo),
    with {:ok, jwt, _ } <- Guardian.encode_and_sign(%{user: "ross"}) do
        IO.inspect(Guardian.encode_and_sign(%{user: "ross"}))
        {:ok, %{user: jwt}}
    end
  end
end