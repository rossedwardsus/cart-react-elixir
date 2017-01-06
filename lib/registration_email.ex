defmodule Sconely.RegistrationEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.puts(_params["email"])
    
    #template = Phoenix.View.render_to_string(SconeHomeElixir.UserOrderProcessedEmailView, "user_order_processed_email.html", key: _params)

    new_email(
      to: "rossedwards.us@gmail.com",
      from: "welcome@sconely.com",
      subject: "Thank you for joining Sconely.com. " <> _params["email"],
      #html_body: template,
      html_body: "Thanks for joining Sconely!<br>Click here to activate your account.   <a href=\"http:\/\/localhost:4000\/mobile\/registration\/2fa\">activate</a>",
      #text_body: "Thanks for joining!"
    )

  end
end