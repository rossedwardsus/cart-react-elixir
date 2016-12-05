defmodule SconeHomeElixir.ApiUserProfilePhotoController do
  use SconeHomeElixir.Web, :controller

  def index(conn, _params) do

  		#get from database

  		IO.puts(_params)
  		json conn, %{id: "id1"}
  end

  def create(conn, _params) do

      IO.puts(_params["file"].path)

      #File.cp!(user_params.path, System.cwd() <> "/uploads/test.jpg")
      #open(System.cwd() <> "/uploads/test.jpg") |> resize("10x10") |> save(in_place: true)
      
      #put under a task?
      #image = open(System.cwd() <> "/uploads/test.jpg") |> resize("100x100") |> save
      
      #File.cp(image.path, System.cwd() <> "/uploads/test_thumbnail.jpg")

  		#insert into database

  		json conn, %{id: "id1"}
  end
end
