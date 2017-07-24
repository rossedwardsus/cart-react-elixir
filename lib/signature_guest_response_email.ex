defmodule Sconely.SignatureGuestResponseEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.inspect("email")
    IO.inspect(_params)
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SignatureGuestResponseEmailView, "signature_guest_response_email.html", key: _params)

    new_email(
      to: _params[:email],
      #to: ["rossedwards.us@gmail.com"],
      from: "eat@sconely.com",
      subject: "Sconely Signature Guest Order",
      html_body: template,
       #text_body: "Thanks for joining!"
    )

  end

  def admin_email(_params) do

    IO.inspect("email")
    IO.inspect(_params)
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SignatureGuestResponseAdminEmailView, "signature_guest_response_admin_email.html", key: _params)

    new_email(
      #to: _params[:email],
      to: ["rossedwards.us@gmail.com"],
      from: "eat@sconely.com",
      subject: "Admin - Signature Guest Order - order id - " <> _params[:order_id],
      html_body: template,
    )

  end
end