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


  
  get "/graphql", Absinthe.Plug.GraphiQL, schema: SconeHomeElixir.Schema
  forward "/graphql", Absinthe.Plug, schema: SconeHomeElixir.Schema


   

  #scope "/login", SconeHomeElixir do
 #   pipe_through :browser # Use the default browser stack

  #  get "/", LoginController, :index
  #  post "/", LoginController, :create
  #end




  #mobile
  scope "/", SconeHomeElixir do
    pipe_through :browser # Use the default browser stack



    #social
    get "/mobile/guest", MobileSconelySignatureGuestChooseItemController, :index
    
    #sconely yours
    #get "/mobile/order/datetime", MobileOrderController, :index
    
    get "/mobile/user", MobileUserController, :index
    #get "/mobile/user/sconely_yours/items", MobileUserSconelyYoursItemsController, :index
    #get "/mobile/user/sconely_yours/payment", MobileUserSconelyYoursPaymentController, :index
    #get "/mobile/user/sconely_yours/address", MobileUserSconelyYoursAddressController, :index
    #get "/mobile/user/sconely_yours/datetime", MobileUserSconelyYoursDateTimeController, :index
    #get "/mobile/user/sconely_yours", MobileUserSconelyYoursController, :index
    
    get "/mobile/menu", MobileMenuController, :index
    get "/mobile/order", MobileOrderController, :index
    get "/mobile/login", MobileLoginController, :index    
    post "/mobile/login", MobileLoginController, :create   
    post "/mobile/registration", MobileRegistrationController, :create
    get "/mobile/registration/2fa", MobileRegistration2faController, :index
    post "/mobile/registration/2fa", MobileRegistration2faController, :create
   

    get "/mobile", MobileController, :index


    
    get "/", HomeController, :index
    get "/login", LoginController, :index
    post "/login", LoginController, :create
    get "/register", RegisterController, :index
    post "/register", RegisterController, :create
    

    #not used anymore
    #get "/redux", ReduxController, :index



    #not used anymore
    #get "/user", UserController, :index
    #get "/user/settings", UserSettingsController, :index
    #get "/user/order", UserOrderController, :index
    #get "/user/order/wizard", UserOrderWizardController, :index
    
    #get "/user/profile/photo", UserProfilePhotoController, :index
    #get "/user/profile/delivery_address", UserProfileDeliveryAddressController, :index
    #get "/user/profile/name", UserProfileNameController, :index
    #get "/user/profile/food_preference", UserProfileFoodPreferenceController, :index
    #get "/user/profile/payment", UserProfilePaymentController, :index

    #get "/user/profile/payment", UserProfilePaymentController, :index

    #get "/order/:order_id/guests/item", UserOrderGuestChooseItemController, :index

    #resources "/posts", PostController
    
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


