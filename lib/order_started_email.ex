defmodule Sconely.OrderStartedEmail do
  import Bamboo.Email

  def order_started_email(_params) do

    IO.inspect(_params)
    
    #template = Phoenix.View.render_to_string(Sconely.OrderStartedEmailView, "order_started_email.html", key: _params)

    new_email(
      
    )

   
  end

end