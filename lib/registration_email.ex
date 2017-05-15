defmodule Sconely.RegistrationEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.inspect(_params["email"])
    IO.inspect(System.get_env("MIX"))
    
    #template = Phoenix.View.render_to_string(SconeHomeElixir.UserOrderProcessedEmailView, "user_order_processed_email.html", key: _params)

    new_email(
      to: _params["email"],
      from: "welcome@sconely.com",
      subject: "Thank you for joining Sconely.com. ",
      #html_body: template,
      html_body: "Thanks for joining Sconely!<br>Click here to activate your account.   <a href=\"http:\/\/localhost:4000\/activate?email=" <> _params["email"] <> "\">activate</a>",
      #text_body: "Thanks for joining!"
    )

  end
end