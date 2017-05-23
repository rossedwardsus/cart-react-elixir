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
    #plug SconeHomeElixir.Plugs.RedirectsPlug, "nil"
    #plug :redirects_plug, "nil"
    #plug SconeHomeElixir.RedirectEndpoint
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


  
 
  #scope "/login", SconeHomeElixir do
 #   pipe_through :browser # Use the default browser stack

  #  get "/", LoginController, :index
  #  post "/", LoginController, :create
  #end




  #mobile
  scope "/", SconeHomeElixir do
    #pipe_through :browser # Use the default browser stack


    #if Mix.env == :dev do
     #   get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
    #end

    get "/", HomeController, :index
    get "/:name", HomeController, :index
    #get "/activate", ActivateController, :index

    #forward "/graphql/signature", Absinthe.Plug, schema: SconeHomeElixir.SignatureSchema
    #forward "/graphql/social", Absinthe.Plug, schema: SconeHomeElixir.SocialSchema
    #forward "/graphql/user", Absinthe.Plug, schema: SconeHomeElixir.UserSchema
    #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
  end

  #get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
  #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
    

  

  scope "/api"  do
    pipe_through :api

  #  get "/", Api1Controller, :index
    #post "/", LoginController, :create

    #get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
    forward "/graphql", Absinthe.Plug, schema: Sconely.Schema
    #forward "/graphql/register", Absinthe.Plug, schema: Sconely.RegisterSchema

  end

  #scope "/graphql", Absinthe do

  #    forward "/", Plug, schema: Sconely.Schema
  #    forward "/1", Plug, schema: Sconely.Schema
     
  #end



  # Other scopes may use custom stacks.
  # scope "/api", SconeHomeElixir do
  #   pipe_through :api

      #forward "/graphql/social", Absinthe.Plug, schema: SconeHomeElixir.SocialSchema
      #forward "/graphql/user", Absinthe.Plug, schema: SconeHomeElixir.UserSchema
      #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
  # end

 

end


