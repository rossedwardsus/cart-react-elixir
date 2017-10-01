defmodule SconeHomeElixir.Router do
  use SconeHomeElixir.Web, :router
  #use Phoenix.Router

  pipeline :browser do
    #plug :accepts, ["html"]
    #plug :fetch_session
    #plug :fetch_flash
    #plug :protect_from_forgery
    #plug :put_secure_browser_headers
    #plug :logged_in
    plug Sconely.Plugs.RedirectsPlug, "nil"
    #plug :redirects_plug, "nil"
    #plug SconeHomeElixir.RedirectEndpoint
  end

  pipeline :graphql do
    #plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    #plug Guardian.Plug.LoadResource
    plug SconeHomeElixir.Web.Context
    #plug CORSPlug

  end

  defp logged_in(conn, _) do
      conn = Plug.Conn.put_resp_cookie(conn, "first_cookie_key", "first_cookie_value")
      IO.puts("cookie" <> conn.cookies["first_cookie_key"])
      if conn.cookies["cookie_name"] == nil do
          IO.puts "logged_in in router"
      end
      conn
  end


  pipeline :api do
    #plug :accepts, ["json"]
  end


  #get "/", PageController, :index
  #get "/user", UserController, :index


  #remove????
 
  #scope "/login", SconeHomeElixir do
 #   pipe_through :browser # Use the default browser stack

  #  get "/", LoginController, :index
  #  post "/", LoginController, :create
  #end

  #scope "/api1" do
    #pipe_through :api

    #get "/upload", Sconely.UserProfilePhotoController, :create
    #post "/upload", Sconely.UserProfilePhotoController, :create

    #post "/register", Sconely.RegisterController, :create
    #post "/login", Sconely.LoginController, :create

    #get "/menu_items", Sconely.MenuItemsController, :index   
  #end



  


  scope "/api"  do
    #pipe_through :api
    pipe_through :graphql

  #  get "/", Api1Controller, :index
    #post "/", LoginController, :create

    get "/upload", Sconely.UserProfilePhotoController, :create
    post "/upload", Sconely.UserProfilePhotoController, :create

    post "/register", Sconely.RegisterController, :create
    post "/login", Sconely.LoginController, :create

    get "/menu_items", Sconely.MenuItemsController, :index   

    get "/guest/list", Sconely.GuestListDownloadController, :index   

    get "/graphql", Absinthe.Plug.GraphiQL, schema: Sconely.Schema
    forward "/graphql", Absinthe.Plug, schema: Sconely.Schema
    #forward "/graphql/register", Absinthe.Plug, schema: Sconely.RegisterSchema

  end

  #scope "/graphql", Absinthe do

    #pipe_through :graphql


  #    forward "/", Plug, schema: Sconely.Schema
  #    forward "/1", Plug, schema: Sconely.Schema

    #get "/graphql", Absinthe.Plug.GraphiQL, schema: Sconely.Schema
    #forward "/graphql", Absinthe.Plug, schema: Sconely.Schema
    #forward "/graphql/register", Absinthe.Plug, schema: Sconely.RegisterSchema
     
  #end

  #root
  scope "/", SconeHomeElixir do
    pipe_through :browser # Use the default browser stack



    #if Mix.env == :dev do
     #   get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
    #end



    get "/", HomeController, :index
    #get "/*anything", HomeController, :index

    get "/:signature_event_name", HomeController, :index
    get "/:pool_name/:pool_date", HomeController, :index
    get "/pool/:pool_name/:pool_date", HomeController, :index
    
    #get "/activate", ActivateController, :index




    #forward "/graphql/signature", Absinthe.Plug, schema: SconeHomeElixir.SignatureSchema
    #forward "/graphql/social", Absinthe.Plug, schema: SconeHomeElixir.SocialSchema
    #forward "/graphql/user", Absinthe.Plug, schema: SconeHomeElixir.UserSchema
    #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
  end



  
  #get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
  #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
    



  # Other scopes may use custom stacks.
  # scope "/api", SconeHomeElixir do
  #   pipe_through :api

      #forward "/graphql/social", Absinthe.Plug, schema: SconeHomeElixir.SocialSchema
      #forward "/graphql/user", Absinthe.Plug, schema: SconeHomeElixir.UserSchema
      #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
  # end

 

end


