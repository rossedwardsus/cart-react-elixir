defmodule Sconely.SessionResolver do
  #alias Sconely.SconelySignatureOrder
  alias SconeHomeElixir.Repo
  alias Sconely.OrderSession
  
  def createOrderSession(order_type) do
    #{:ok, Blog.Repo.all(Post)}

    #order_session_changeset = OrderSession.changeset(order_session, %{status: args[:screen]})
    #case Repo.insert(order_session_changeset) do

    #  {:ok, response} -> IO.inspect(response)

     #       Sconely.OrderStartedEmail.order_started_email(%{}) |> SconeHomeElixir.Mailer.deliver_later

     #      {:ok, %{session_id: response.session_id}}

     # {:error, error} -> nil
    
  end




  def update_order_session(args, _info) do
    IO.inspect(args)
    #{:ok, Blog.Repo.all(Post)}

    #OrderSession = Friends.Person |> Ecto.Query.first |> Friends.Repo.one
    order_session = Repo.get_by!(OrderSession, %{session_id: args[:session_id]})
    #order_changeset = OrderSession.changeset(order_session, %{status: args[:screen]})
    #update = Repo.update(order_changeset)

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