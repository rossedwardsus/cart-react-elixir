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


  scope "/api", SconeHomeElixir do
    pipe_through :api # Use the default browser stack

    post "/user/profile/photo", ApiUserProfilePhotoController, :create
    get "/user/profile/delivery_address", ApiUserProfileDeliveryAddressController, :index
    post "/user/profile/delivery_address", ApiUserProfileDeliveryAddressController, :create
    get "/user/profile/guest_list", ApiUserProfileGuestListController, :index
    post "/user/profile/guest_list", ApiUserProfileGuestListController, :create
    get "/user/profile/datetime", ApiUserProfileDatetimeController, :index
    post "/user/profile/datetime", ApiUserProfileDatetimeController, :create

    get "/user/orders/bulk/new", ApiUserOrderController, :index
    get "/user/orders/create", ApiUserOrderController, :create
    get "/user/orders/eventname", ApiUserOrderEventNameController, :index

    get "/user/orders/bulk/delivery_address", ApiUserOrderEventNameController, :index    
    get "/user/orders/bulk/datetime", ApiUserOrderEventNameController, :index
    get "/user/orders/bulk/payment", ApiUserOrderEventNameController, :index
    get "/user/orders/bulk/item/add", ApiUserOrderEventNameController, :index            

    get "/menu/items", ApiMenuItemsController, :index

  end



  scope "/", SconeHomeElixir do
    pipe_through :browser # Use the default browser stack

    #social
    get "/mobile/order/guest/choose/item", MobileOrderGuestChooseItemController, :index
    
    #yours
    get "/mobile/order/datetime", MobileOrderController, :index
    get "/mobile/order/items", MobileOrderController, :index
    get "/mobile/order/payment", MobileOrderController, :index
    get "/mobile/order/delivery_address", MobileOrderController, :index
    get "/mobile/order", MobileOrderController, :index
    
    get "/mobile/menu", MobileMenuController, :index
    #get "/mobile/login", MenuController, :index
    

    get "/mobile/user", MobileUserController, :index
    

    get "/mobile", MobileController, :index

    

    get "/redux", ReduxController, :index


    get "/", HomeController, :index
    get "/login", LoginController, :index
    post "/login", LoginController, :create
    get "/register", RegisterController, :index
    post "/register", RegisterController, :create
    
    get "/user", UserController, :index
    get "/user/settings", UserSettingsController, :index
    get "/user/order", UserOrderController, :index
    get "/user/order/wizard", UserOrderWizardController, :index
    
    get "/user/profile/photo", UserProfilePhotoController, :index
    get "/user/profile/delivery_address", UserProfileDeliveryAddressController, :index
    get "/user/profile/name", UserProfileNameController, :index
    get "/user/profile/food_preference", UserProfileFoodPreferenceController, :index
    get "/user/profile/payment", UserProfilePaymentController, :index


    get "/user/profile/payment", UserProfilePaymentController, :index

    get "/order/:order_id/guests/item", UserOrderGuestChooseItemController, :index
    
    get "/admin", AdminController, :index
    get "/admin/add_item", AdminAddItemController, :index
    get "/admin/items", AdminItemsController, :index
    get "/admin/orders", AdminOrdersController, :index
    get "/admin/item/photo", AdminItemPhotoController, :index
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
