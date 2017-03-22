defmodule Sconely.SconelySignatureOrderProcessedEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    #WORKING!

    IO.puts(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySignatureOrderProcessedEmailView, "sconely_signature_order_processed_email.html", key: _params)

    new_email(
      to: "rossedwards.us@gmail.com",
      from: "orders@sconely.com",
      subject: "Your Sconely Order #1234567890 has been recieved.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Sconely!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )

  


    # or pipe using Bamboo.Email functions
    #new_email
    #|> to(["rossedwards.us@gmail.com", "eat@sconely.com", "friedman.julia@gmail.com"])
    #|> from("me@example.com")
    #|> subject("Welcome!!!")
    #|> html_body(template)
    #|> text_body("welcome")

    #use Mailgun.Client,
    #  domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
    #  key: Application.get_env(:scone_home_elixir, :mailgun_key)

    #send_email to: "rossedwards.us@gmail.com",
    #         from: "us@example.com",
    #         subject: "Welcome!",
    #         text: "Welcome to HelloPhoenix!"

  end

  def welcome_email_admin(_params) do

    #WORKING!

    IO.puts(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySignatureOrderProcessedEmailView, "sconely_signature_order_processed_email.html", key: _params)

    new_email(
      to: "friedman.julia@gmail.com",
      from: "orders@sconely.com",
      subject: "Your Sconely Order #1234567890 has been recieved.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Sconely!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )






    # or pipe using Bamboo.Email functions
    #new_email
    #|> to(["rossedwards.us@gmail.com", "eat@sconely.com", "friedman.julia@gmail.com"])
    #|> from("me@example.com")
    #|> subject("Welcome!!!")
    #|> html_body(template)
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