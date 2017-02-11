defmodule SconeHomeElixir.SconelySignaturePhotoController do
  use SconeHomeElixir.Web, :controller

  import Mogrify
  #import Gm

  #plug :put_layout, "user.html"

  def index(conn, _params) do
    #render conn, "user_profile_photo.html"
    conn
    |> assign(:user, "hello")
    |> render "user_profile_photo.html"
    
  end

  def create(conn, %{"file" => user_params}) do
  #def create(conn, %{"event" => event_params}) do
  
    scope = %{:event_id => "1"}

  	#Userprofile.store()
  	response = Sconely.SconelySignature.store({user_params, scope})

    #case response do

     # {:ok, response} -> IO.puts("ok")
     # {:error, _} -> IO.puts("error")

    #end


    json conn, %{"uploaded" => "true"}

  end
  	
  
end
