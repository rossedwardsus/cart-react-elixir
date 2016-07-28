defmodule SconeHomeElixir.Email do
  import Bamboo.Email

  def welcome_email do
    
    template = Phoenix.View.render_to_string(SconeHomeElixir.UserOrderProcessedEmailView, "user_order_processed_email.html", %{})

    new_email(
      to: "rossedwards.us@gmail.com",
      from: "orders@sconehome.com",
      subject: "Your Scone Home Order #123456 has been recieved.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Scone Home!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )


    # or pipe using Bamboo.Email functions
    #new_email
    #|> to("foo@example.com")
    #|> from("me@example.com")
    #|> subject("Welcome!!!")
    #|> html_body("<strong>Welcome</strong>")
    #|> text_body("welcome")

    #use Mailgun.Client,
    #  domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
    #  key: Application.get_env(:scone_home_elixir, :mailgun_key)

    #send_email to: "rossedwards.us@gmail.com",
    #         from: "us@example.com",
    #         subject: "Welcome!",
    #         text: "Welcome to HelloPhoenix!"

  end
end