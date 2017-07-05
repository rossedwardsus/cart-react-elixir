defmodule Sconely.RegistrationResolver do
  alias Sconely.Registration
  alias Sconely.UserProfiles
  alias SconeHomeElixir.Repo
  
  alias Comeonin.Bcrypt 
  #alias Ecto.Multi
  import Ecto.Query


  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create_user(args, _info) do

    #userid password email

    IO.inspect(args[:email])

    #user_id secure uuid
    #password_salt

    user_id = UUID.uuid1()
    hash = Bcrypt.hashpwsalt("password")

  	registration_changeset = Registration.changeset(%Registration{}, %{user_id:  user_id, first: "f", last: "l", email: "e", password: "p", password_salt: hash})

    user_profile_changeset = UserProfiles.changeset(%UserProfiles{}, %{user_id: user_id, first_name: "f", last_name: "l", email: "e", about_me: "am"})


    #multi =
    #    Multi.new
    #    |> Multi.insert(:registration, registration_changeset)
      
    #case Repo.transaction(multi) do
    #    {:ok, result} -> IO.inspect(result)
    #end

    #Regex.scan(~r/c(d|e)/, "abcd abce")

    
    #query = from r in Registration, join: up in UserProfiles, where: r.user_id == up.user_id
    #query = from [r, up] in query, select: {up.first_name}

    IO.puts("first name") 
    #IO.inspect(Repo.all(query))

    email_exists_query = Repo.get_by(Registration, %{email: "e11"})

    if email_exists_query != nil do

        IO.inspect("exists")

    else

        IO.inspect("doesnt exist")

    end

    Repo.transaction(fn ->

        case Repo.insert(registration_changeset) do
          {:ok, response} -> IO.inspect(response)
        #    conn
        #      |> put_flash(:info, "User created successfully.")
        #      |> redirect(to: user_path(conn, :index))

             
        #        case Repo.insert(user_profile_changeset) do
         #         {:ok, response} -> IO.inspect(response)
                #    conn
                #      |> put_flash(:info, "User created successfully.")
                #      |> redirect(to: user_path(conn, :index))

                        #working
                        Sconely.RegistrationEmail.welcome_email(%{"email" => args[:email]}) |> SconeHomeElixir.Mailer.deliver_now

                        #admin
                        #Sconely.SconelySocialOrderEmail.welcome_email_admin(%{"delivery_address_street" => args[:delivery_address_street]}) |> SconeHomeElixir.Mailer.deliver_now

                     
                       
                        #with {:ok, user} <- Sconely.Session.authenticate(params, Repo),
                        #with {:ok, jwt, _ } <- Guardian.encode_and_sign(%{id: 1}) do
                        #    #IO.puts(Guardian.encode_and_sign(%{id: 1}))
                        #    IO.puts("hello")
                        #    {:ok, %{user: jwt}}
                        #end

                        {:ok, %{user_id: user_id}}


                        #changeset = Session.changeset(%Session{}, %{user_id: "e", session_id: "p"})

                        #case Repo.insert(changeset) do
                        #  {:ok, _registration} -> IO.inspect("ok")
                        #    conn
                        #      |> put_flash(:info, "User created successfully.")
                        #      |> redirect(to: user_path(conn, :index))
                        #  {:error, changeset} -> 
                            #Ecto.Changeset.traverse_errors(changeset, fn
                            #  IO.inspect(Map.fetch(changeset, :errors))
                              #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
                              #{msg, opts} -> IO.inspect(msg)
                              #msg -> msg
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
         #end

         {:error, changeset} -> 
            #Ecto.Changeset.traverse_errors(changeset, fn
            #  IO.inspect(Map.fetch(changeset, :errors))
              #{msg, opts} -> String.replace(msg, "%{count}", to_string(opts[:count]))
              #{msg, opts} -> IO.inspect(msg)
              #msg -> msg
            #end)
        #    render(conn, "new.html", changeset: changeset)
        end
    end)

  end
end