defmodule SconeHomeElixir.Router do
  use SconeHomeElixir.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    #plug :protect_from_forgery
    plug :put_secure_browser_headers
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
    plug :accepts, ["json"]
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
    pipe_through :browser # Use the default browser stack


    
    get "/", HomeController, :index
    get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
    #forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema
    
  end

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


