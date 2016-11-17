defmodule SconeHomeElixir.ApiUserSconelyYoursCartController do
  use SconeHomeElixir.Web, :controller

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

    #task = Task.async(fn ->  

    #		SconeHomeElixir.Email.welcome_email |> SconeHomeElixir.Mailer.deliver_now

    #end)
    
    #Enum.map([a: 1, b: 2, c: 3], fn({k, v}) -> {k, v * v} end)

    

    SconeHomeElixir.UserOrderGuestEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now

    

    #Mailer.send_welcome_text_email()

    #SconeHomeElixir.Mailer.welcome_email("rossedwards.us@gmail.com")
    		#{:ok, value} -> "value #{value}"
    		#{:error, value} -> "value #{value}"
    		#{:batch_fetch, value} -> "value #{value}"


    json conn, %{id: "sent email"}

  end
end
