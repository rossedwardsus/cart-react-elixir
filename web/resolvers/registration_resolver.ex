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

    #user_id secure uuid
    #password_salt

  	changeset = Registration.changeset(%Registration{}, %{first: "f", last: "l", email: "e", password: "p", password_salt: "ps"})

    case Repo.insert(changeset) do
      {:ok, _registration} -> IO.inspect("ok")
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))

            #changeset = UserProfile.changeset(%UserProfile{}, %{user_id: "e", first: "f"})

            #case Repo.insert(changeset) do
            #  {:ok, _registration} -> IO.inspect("ok")
            #    conn
            #      |> put_flash(:info, "User created successfully.")
            #      |> redirect(to: user_path(conn, :index))

                    #changeset = Session.changeset(%Session{}, %{user_id: "e", session_id: "p"})

                    #case Repo.insert(changeset) do
                    #  {:ok, _registration} -> IO.inspect("ok")
                    #    conn
                    #      |> put_flash(:info, "User created successfully.")
                    #      |> redirect(to: user_path(conn, :index))
                    #  {:error, changeset} -> 
                        #Ecto.Changeset.traverse_errors(changeset, fn
                          IO.inspect(Map.fetch(changeset, :errors))
                          #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                          #{msg, opts} -> IO.inspect(msg)
                          #msg -> msg
                        #end)
                    #    render(conn, "new.html", changeset: changeset)
                    #end


            #  {:error, changeset} -> 
                #Ecto.Changeset.traverse_errors(changeset, fn
                  IO.inspect(Map.fetch(changeset, :errors))
                  #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                  #{msg, opts} -> IO.inspect(msg)
                  #msg -> msg
                #end)
            #    render(conn, "new.html", changeset: changeset)
            #end

      {:error, changeset} -> 
        #Ecto.Changeset.traverse_errors(changeset, fn
          IO.inspect(Map.fetch(changeset, :errors))
          #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
          #{msg, opts} -> IO.inspect(msg)
          #msg -> msg
        #end)
    #    render(conn, "new.html", changeset: changeset)
    end


    #working
    #Sconely.RegistrationEmail.welcome_email(%{"email" => args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

    #admin
    #Sconely.SconelySocialOrderEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

    {:ok, %{status: "1"}}

  end
end