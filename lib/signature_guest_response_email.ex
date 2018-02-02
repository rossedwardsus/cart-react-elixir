defmodule Sconely.SignatureGuestResponseEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.inspect("email")
    IO.inspect(_params)
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SignatureGuestResponseEmailView, "signature_guest_response_email.html", key: _params)

    new_email(
     )

  end

  def admin_email(_params) do

    IO.inspect("email")
    IO.inspect(_params)
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SignatureGuestResponseAdminEmailView, "signature_guest_response_admin_email.html", key: _params)

    new_email(
       )

  end
end