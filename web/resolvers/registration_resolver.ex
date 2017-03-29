defmodule Sconely.RegistrationResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create_user(args, _info) do

    #userid password email

  	#changeset = Registration.changeset(%{user_type: "guest", order_id: "1", email: "", mobile: "", delivery_date: "datetime", time: "", paid: "yes", stripe_receipt})

    #case Repo.insert(changeset) do
    #  {:ok, _user} ->
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    #end




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
    #Sconely.SconelySocialOrderEmail.welcome_email(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

    #admin
    #Sconely.SconelySocialOrderEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

    {:ok, %{session_id: 1}}

  end
end