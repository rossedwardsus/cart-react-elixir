defmodule SconeHomeElixir.UserProfilePaymentController do
  use SconeHomeElixir.Web, :controller

  import Mogrify
  #import Gm

  plug :put_layout, "user.html"

  def index(conn, _params) do
    render conn, "user_profile_payment.html"
  end

  #def create(conn, %{"profile_photo" => user_params}) do
  def create(conn, %{"userprofile" => user_params}) do
  
  	#Userprofile.store()
  	SconeHomeElixir.Userprofile.store(user_params)
  	
  	
  	#File.cp!(user_params.path, System.cwd() <> "/uploads/test.jpg")
  	#open(System.cwd() <> "/uploads/test.jpg") |> resize("10x10") |> save(in_place: true)
  	
  	#put under a task?
  	#image = open(System.cwd() <> "/uploads/test.jpg") |> resize("100x100") |> save
  	
  	#File.cp(image.path, System.cwd() <> "/uploads/test_thumbnail.jpg")

  	

  	#Gm.open(System.cwd() <> "/uploads/test.jpg") |> Gm.resize(100, 100) |> Gm.write(System.cwd() <> "/uploads/thumbnail.jpg")
  	#:timer.sleep(1000)
  	#userprofilephoto = user_params.path <> "/" <> user_params.filename

  	#{:ok, pid} = Postgrex.start_link(hostname: "localhost", username: "postgres", password: "", database: "scone_home")
	#{:ok, #PID<0.69.0>}
	#Postgrex.query!(pid, "SELECT * FROM items", [])
	#%Postgrex.Result{command: :select, empty?: false, columns: ["item_id", "title"], rows: [[3,"hey"],[4,"there"]], size: 2}}

    text conn, user_params.path <> "/" <> user_params.filename
  	#render conn, "create.html"
  end

  #defp resize_image() do
  
  #		open(System.cwd() <> "/uploads/test.jpg") |> resize("100x100") |> save
  	
  #end

  	#conn = Plug.Conn.put_resp_cookie(conn, "first_cookie_key", "first_cookie_value")
    #conn = Plug.Conn.put_resp_cookie(conn, "second_cookie_key", "second_cookie_value")
    

end
