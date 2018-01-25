defmodule Sconely.CollectionOrderEmail do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView


  def collection_order_email(_params) do


  	#IO.puts("hello")
  	#IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.CollectionCompleteOrderEmailView, "collection_complete_order_email.html", key: _params)

    #IO.inspect(_params.args[:user_contact_email])

    #send to admin as well

    new_email(
      #to: _params["order_contact_email"],
      to: [_params.args[:user_contact_email]],
      from: "orders@sconely.com",
      subject: "Sconely.com " <> _params.collection_name <> " order: " <> _params.order_datetime_formatted,
      html_body: template,
      #html_body: "Thanks for your Sconely Order<br>pickup-smorgasburgh-payment method-contact-name-datetime-items" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end

  

  def collection_order_admin_email(_params) do

  	#IO.puts("hello")
  	#IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.CollectionCompleteOrderAdminEmailView, "collection_complete_order_admin_email.html", key: _params)

    #IO.inspect(_params["order_first_name"])

    #send to admin as well

    new_email(
      to: ["rossedwards.us@gmail.com", "julia@sconely.com"],
      from: "orders@sconely.com",
      subject: _params[:admin_email_subject],
      html_body: template,
      #html_body: "Thanks for your Sconely Order<br>pickup-smorgasburgh-payment method-contact-name-datetime-items" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end
end