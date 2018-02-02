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
      )

  end
end