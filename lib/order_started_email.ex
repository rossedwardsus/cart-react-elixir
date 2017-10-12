defmodule Sconely.OrderStartedEmail do
  import Bamboo.Email

  def order_started_email(_params) do

    IO.inspect(_params)
    
    #template = Phoenix.View.render_to_string(Sconely.OrderStartedEmailView, "order_started_email.html", key: _params)

    new_email(
      to: ["rossedwards.us@gmail.com"], #add julia
      from: "orders@sconely.com",
      subject: "A new order has been started.",
      #html_body: template,
      html_body: "A new #{_params[:order_type]} order has been created",
      #text_body: "Thanks for joining!"
    )

   
  end

end