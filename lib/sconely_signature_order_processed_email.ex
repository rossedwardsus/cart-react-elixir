defmodule Sconely.SconelySignatureOrderProcessedEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    #WORKING!

    IO.inspect(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySignatureOrderProcessedEmailView, "sconely_signature_order_processed_email.html", key: _params)

    new_email(
     )

  
    #use Mailgun.Client,
    #  domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
    #  key: Application.get_env(:scone_home_elixir, :mailgun_key)

   
  end

  def welcome_email_admin(_params) do

    #WORKING!

    IO.puts(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySignatureOrderProcessedEmailView, "sconely_signature_order_processed_email.html", key: _params)

    new_email(
      )




    #use Mailgun.Client,
    #  domain: Application.get_env(:scone_home_elixir, :mailgun_domain),
    #  key: Application.get_env(:scone_home_elixir, :mailgun_key)

 
  end
end