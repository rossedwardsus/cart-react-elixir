defmodule Sconely.SignatureGuestResponseEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.inspect("email")
    IO.inspect(_params)
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SconelySignatureGuestResponseEmailView, "sconely_signature_guest_response_email.html", key: _params)

    new_email(
      to: _params[:email],
      #to: ["rossedwards.us@gmail.com"],
      from: "eat@sconely.com",
      subject: "Welcome to Sconely",
      html_body: template,
      #html_body: "Thanks for joining Sconely!<br>Click here to activate your account.   <a href=\"http:\/\/localhost:4000\/activate?email=" <> _params["email"] <> "\">activate</a>",
      #text_body: "Thanks for joining!"
    )

  end
end