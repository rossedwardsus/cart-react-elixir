defmodule SconeHomeElixir.Router do
  use SconeHomeElixir.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    #plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :logged_in
    #plug SconeHomeElixir.Plugs.RedirectsPlug, "nil"
    #plug :redirects_plug, "nil"
    #plug SconeHomeElixir.RedirectEndpoint
  end

  defp logged_in(conn, _) do
      conn = Plug.Conn.put_resp_cookie(conn, "first_cookie_key", "first_cookie_value")
      IO.puts("cookie" <> conn.cookies["first_cookie_key"])
      if conn.cookies["cookie_name"] == nil do
          IO.puts "hello from a plug"
      end
      conn
  end


  pipeline :api do
    plug :accepts, ["json"]
  end


  #get "/", PageController, :index
  #get "/user", UserController, :index
   

  #scope "/login", SconeHomeElixir do
 #   pipe_through :browser # Use the default browser stack

  #  get "/", LoginController, :index
  #  post "/", LoginController, :create
  #end



  scope "/", SconeHomeElixir do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/login", LoginController, :index
    post "/login", LoginController, :create
    get "/register", RegisterController, :index
    post "/register", RegisterController, :create
    get "/user", UserController, :index

    get "/user/order", UserOrderController, :index
    
    get "/user/order/wizard", UserOrderWizardController, :index
    
    get "/user/profile/photo", UserProfilePhotoController, :index
    post "/user/profile/photo", UserProfilePhotoController, :create
    
    get "/api/user/orders/new", ApiUserOrderController, :index
    get "/api/user/orders/create", ApiUserOrderController, :create
    
    get "/admin", AdminController, :index
    get "/admin/items", AdminItemsController, :index
  end



  
  #scope "/user", SconeHomeElixir do
   # pipe_through :browser # Use the default browser stack

    #get "/", Api1Controller, :index
    #post "/", UserController, :create

    #get "/", UserController, :index
    #post "/order", UserOrderController, :create

  #end


  #scope "/user/order", SconeHomeElixir do
   # pipe_through :browser # Use the default browser stack

    #get "/", UserController, :index
    #post "/", UserController, :create

   # get "/", UserOrderController, :index
   # post "/", UserOrderController, :create

  #end

  #scope "/admin", SconeHomeElixir do
   # pipe_through :browser # Use the default browser stack

   # get "/", AdminController, :index
    #post "/", LoginController, :create
 # end

  scope "/api", SconeHomeElixir  do
    pipe_through :browser # Use the default browser stack

    get "/", Api1Controller, :index
    #post "/", LoginController, :create
  end

  # Other scopes may use custom stacks.
  # scope "/api", SconeHomeElixir do
  #   pipe_through :api
  # end
end
