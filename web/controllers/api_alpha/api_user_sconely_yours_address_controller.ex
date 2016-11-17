defmodule SconeHomeElixir.ApiUserSconelyYoursAddressController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do

      #get from database

      IO.puts(_params)
      json conn, %{id: "id1"}
  end

  def create(conn, %{"address" => address}) do

      #insert into database

      #changeset = UserSconelyYoursAddress.changeset(%UserSconelyYoursAddress{}, %{question_id: "1", created_by: "1", title: "title"})

      #case Repo.insert(changeset) do
      #  {:ok, _user} ->
      #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #    {:error, changeset} ->
    #      render(conn, "new.html", changeset: changeset)
    #  end

      json conn, %{id: "id1"}

      IO.puts(address)
      IO.puts("api")

      json conn, %{id: "id1"}
  end

end
