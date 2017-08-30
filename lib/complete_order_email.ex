defmodule Sconely.CompleteOrderEmail do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView

  def welcome_email(_params) do

  	#IO.puts("hello")
  	IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.YoursOrderEmailView, "yours_order_email.html", key: _params)

    IO.inspect(_params[:user_contact_mobile])

    #send to admin as well

    new_email(
      #to: _params["order_contact_email"],
      to: ["rossedwards.us@gmail.com"],
      from: "order@sconely.com",
      subject: "Sconely.com order: " <> _params.order_id,
      html_body: template,
      #html_body: "Thanks for your Sconely Order<br>pickup-smorgasburgh-payment method-contact-name-datetime-items" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end

  def admin(_params) do

  	#IO.puts("hello")
  	#IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.CompletedOrderEmailView, "completed_order_email.html", key: _params)

    IO.inspect(_params["order_first_name"])

    #send to admin as well

    new_email(
      to: "rossedwards.us@gmail.com",
      from: "order@sconely.com",
      subject: "Admin - order for jan 1, 2017 - dtla/99025: " <> _params["order_id"],
      html_body: template,
      #html_body: "Thanks for your Sconely Order<br>pickup-smorgasburgh-payment method-contact-name-datetime-items" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end
end