defmodule Sconely.YoursSocialPoolCompleteOrderEmail do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView

  #not used
  def yours_complete_order_user1(_params) do

  	#IO.puts("hello")
  	IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SocialYoursOrderEmailView, "social_yours_order_email.html", key: _params)

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

  def yours_admin1(_params) do

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

  def social_complete_order_user1(_params) do

  	#IO.puts("hello")
  	IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.SocialYoursOrderEmailView, "social_yours_order_email.html", key: _params)

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

  def social_complete_order_admin1(_params) do

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









  def yours_social_pool_complete_order_email(_params) do



  	#IO.puts("hello")
  	#IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.YoursSocialPoolCompleteOrderEmailView, "yours_social_pool_complete_order_email.html", key: _params)

    #IO.inspect(_params.args[:user_contact_email])

    #send to admin as well

    new_email(
      #to: _params["order_contact_email"],
      to: [_params.args[:user_contact_email]],
      from: "orders@sconely.com",
      subject: "Sconely.com order: " <> _params.order_datetime_formatted,
      html_body: template,
      #html_body: "Thanks for your Sconely Order<br>pickup-smorgasburgh-payment method-contact-name-datetime-items" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end

  

  def yours_social_pool_complete_order_admin_email(_params) do

  	#IO.puts("hello")
  	#IO.inspect(_params)
  	#IO.inspect(_params["order_contact_email"])
    #IO.inspect(Map.fetch(_params, :order_contact_email))
    #IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.YoursSocialPoolCompleteOrderAdminEmailView, "yours_social_pool_complete_order_admin_email.html", key: _params)

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