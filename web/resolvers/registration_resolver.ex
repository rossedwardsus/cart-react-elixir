defmodule Sconely.RegistrationResolver do
  alias Sconely.Registration
  alias SconeHomeElixir.Repo

  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create_user(args, _info) do

    #userid password email

    IO.inspect(args[:email])

  	changeset = Registration.changeset(%Registration{}, %{email: "guest", password: "p", password_salt: ""})

    case Repo.insert(changeset) do
      {:ok, _registration} -> IO.inspect("ok")
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
      {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    end


    #working
    Sconely.RegistrationEmail.welcome_email(%{"email" => args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

    #admin
    #Sconely.SconelySocialOrderEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

    {:ok, %{status: "1"}}

  end
end