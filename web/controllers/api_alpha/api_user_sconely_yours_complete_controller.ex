defmodule SconeHomeElixir.ApiUserSconelyYoursCompleteController do
  use SconeHomeElixir.Web, :controller

  #def index(conn, _params) do
  #json conn, %{id: "id"}
	#end

  #@config domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
  #        key: Application.get_env(:scone_home_eliir, :mailgun_key)
  
  #use Mailgun.Client, @config


  import Bamboo.Email

  import Ecto.Query, only: [from: 2]

  alias SconeHomeElixir.{Repo, Login}
  

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
   
  #def create(conn, %{"address" => address}) do
  def index(conn, _params) do

    use Mix.Config

    #changeset = Login.changeset(%Login{}, %{email: "mary@example.com", password: "password"})
    ##{:error, changeset} = Repo.insert(changeset)


    #config :stripity_stripe, secret_key: "sk_test_dRJI4lMQw1loYK6LmcDLBE41"
    #config :stripity_stripe, platform_client_id: "ca_9ZRaRJdmIM5jw52Jk0KoFLfgzmV0hb1a"

    #{:ok, result} = Stripe.Customers.delete "some_id"

    #IO.puts(result)

    #Stripe.Charges.create({
    #  amount: 2000,
    #  currency: "usd",
    #  source: "tok_1952MuA5rshKhWLCnnZlBDc6", // obtained with Stripe.js
    #  description: "Charge for william.harris@example.com"
    #}

    #, function(err, charge) {
      # asynchronously called
    #});

    params = [
      source: [
        object: "charge",
        number: "4111111111111111",
        exp_month: 10,
        exp_year: 2020,
        country: "US",
        name: "Ducky Test",
        cvc: 123,
      ],
      description: "1000 Widgets",
      capture: false
    ]

    {:ok, charge} = Stripe.Charges.create(1000, params)

    IO.puts(:ok)
    IO.inspect(charge)
    IO.inspect(charge[:status])

    #new_customer = [
    #email: "test@test.com",
    #description: "An Test Account",
    #metadata:[
    #  app_order_id: "ABC123"
    #  app_state_x: "xyz"
    #],
    #card: [
    #  number: "4111111111111111",
    #  exp_month: 01,
    #  exp_year: 2018,
    #  cvc: 123,
    #  name: "Joe Test User"
    #]
  #]
  #{:ok, res} = Stripe.Customers.create new_customer


    #charge credit card
    #if successful
    #else error
    #save order
    #send message to user

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

    
    #working
    #SconeHomeElixir.UserOrderGuestEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now

    

    #Mailer.send_welcome_text_email()

    #SconeHomeElixir.Mailer.welcome_email("rossedwards.us@gmail.com")
    		#{:ok, value} -> "value #{value}"
    		#{:error, value} -> "value #{value}"
    		#{:batch_fetch, value} -> "value #{value}"

    IO.puts("complete")
    #IO.puts(_params["payment"])


    json conn, %{id: "sent email"}

  end
end
