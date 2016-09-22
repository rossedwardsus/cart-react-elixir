defmodule SconeHomeElixir.ApiUserOrderController do
  use SconeHomeElixir.Web, :controller

  alias SconeHomeElixir.UserProfileDeliveryAddress

  #def all(conn, _params) do

      #get user order using id from database

  #    IO.puts(_params)
  #    json conn, %{id: "id1"}
  #end


  def one(conn, _params) do

  		#get user order using id from database

  		IO.puts(_params)
  		json conn, %{id: "id1"}
  end

  def create(conn, %{"address" => address, "suite" => suite}) do

  		#insert into database

      #create order

      changeset = UserProfileDeliveryAddress.changeset(%UserProfileDeliveryAddress{}, %{question_id: "1", created_by: "1", title: "title"})

      case Repo.insert(changeset) do
        {:ok, _user} ->
          conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
        {:error, changeset} ->
          render(conn, "new.html", changeset: changeset)
      end

  		IO.puts(address)
  		IO.puts(suite)

  		json conn, %{id: "id1"}
  end
end
