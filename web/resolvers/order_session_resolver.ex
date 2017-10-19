defmodule Sconely.OrderSessionResolver do
  #alias Sconely.SconelySignatureOrder
  alias SconeHomeElixir.Repo
  alias Sconely.OrderSession
  
  def create_order_session(args, _info) do

    IO.inspect(args)
    
    order_session_changeset = OrderSession.changeset(%OrderSession{}, %{order_type: args[:order_type], screen: "menu", order_started_datetime: Ecto.DateTime.utc})
    
    case Repo.insert(order_session_changeset, returning: true) do

      {:ok, response} -> IO.inspect(response)

            #IO.inspect(Repo.get(OrderSession, response.session_id))

            #Sconely.OrderStartedEmail.order_started_email(%{session_id: response.session_id, order_type: args[:order_type]}) |> SconeHomeElixir.Mailer.deliver_later

            {:ok, %{session_id: response.session_id}}

    end

  end

  def update_order_session(args, _info) do
    IO.inspect(args)
    #{:ok, Blog.Repo.all(Post)}

    #OrderSession = Friends.Person |> Ecto.Query.first |> Friends.Repo.one
    
    order_session = Repo.get_by!(OrderSession, %{session_id: args[:session_id]})
    order_changeset = OrderSession.changeset(order_session, %{screen: args[:screen]})
    update = Repo.update(order_changeset)

    IO.inspect(update)

    #get order
    #order_session_changeset = OrderSession.changeset(%{order_id: "1", order_id: "", time: "", quantity: "", quantity_multiplier: ""})

    #case Repo.insert(changeset) do
    #  {:ok, _user} ->
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    #end

    {:ok, %{status: "updated"}}
  end  

end