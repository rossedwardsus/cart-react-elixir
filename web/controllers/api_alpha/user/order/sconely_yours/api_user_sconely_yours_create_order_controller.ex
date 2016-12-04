defmodule SconeHomeElixir.ApiUserSconelyYoursCreateOrderController do
  use SconeHomeElixir.Web, :controller

  #alias Sconely.Order
  alias SconeHomeElixir.Repo
  alias Sconely.UserOrderSconelyYours
  
  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end

  #@config domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
  #        key: Application.get_env(:scone_home_eliir, :mailgun_key)
  
  #use Mailgun.Client, @config


  import Bamboo.Email

  #var api_key = 'key-22e98444fc043c1e72943865de283d39';
  #  var domain = 'sandbox60cd8c923f214e8b90257138647a028e.mailgun.org';

  #def welcome_email do

   #   new_email(
   #   to: "rossedwards.us@gmail.com",
     # from: "support@myapp.com",
    #  subject: "Welcome to the app.",
    #  html_body: "<strong>Thanks for joining!</strong>",
    #  text_body: "Thanks for joining!"
    #)

  #end
   

  def index(conn, _params) do

    #save order

  	#send_email to: "rossedwards.us@gmail.com",
     #          from: "@from",
     #          subject: "hello!",
     #          html: "<strong>Welcome!</strong>"

    #new_email(
     # to: "rossedwards.us@gmail.com",
     # from: "support@myapp.com",
     # subject: "Welcome to the app.",
     # html_body: "<strong>Thanks for joining!</strong>",
     # text_body: "Thanks for joining!"
    #)

    # or pipe using Bamboo.Email functions
    #new_email
    #|> to("rossedwards.us@gmail.com")
    #|> from("me@example.com")
    #|> subject("Welcome!!!")
    #|> html_body("<strong>Welcome</strong>")
    #|> text_body("welcome")

    #works?
    #task = Task.async(fn ->  

    #		SconeHomeElixir.Email.welcome_email |> SconeHomeElixir.Mailer.deliver_now

    #end)
    
    #Enum.map([a: 1, b: 2, c: 3], fn({k, v}) -> {k, v * v} end)

    #require session id for security
    #create uuid for order and create new table
    order_id = UUID.uuid1()
    datetime = Timex.now

    #from client
    #%{order: %{user_id: "", order_id: 1234, delivery_address: "", delivery_notes: "", items: [], payment: ""}}
    #process payment first
    #if successful add order
    #if adding order fails display sorry an error occured and refund transaction
    #else save order and send email    

    #changeset = UserOrderSconelyYours.changeset(%UserOrderSconelyYours{}, %{user_id: order_id, order_id: order_id, delivery_address: "da", order_created_datetime: "datetime", status: "paid"})

    #case Repo.insert(changeset) do
    #  {:ok, _user} ->
    #    conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    #end

    #MyRepo.get_by!(Post, title: "My post")
    order = Repo.get_by!(UserOrderSconelyYours, delivery_address: "da")
    changeset = UserOrderSconelyYours.changeset(order, %{id: "1", user_id: order_id, order_id: order_id, delivery_address: "delivery address", order_created_datetime: "datetime", status: "paid"})

    case Repo.update(changeset) do
      {:ok, _user} ->
        conn
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #  {:error, changeset} ->
    #    render(conn, "new.html", changeset: changeset)
    end


    #works
    #SconeHomeElixir.UserOrderGuestEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now

    

    #Mailer.send_welcome_text_email()

    #SconeHomeElixir.Mailer.welcome_email("rossedwards.us@gmail.com")
    		#{:ok, value} -> "value #{value}"
    		#{:error, value} -> "value #{value}"
    		#{:batch_fetch, value} -> "value #{value}"


    json conn, %{response: %{status: 200, order_id: order_id, order_datetime: datetime}}

  end
end
