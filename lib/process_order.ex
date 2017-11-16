defmodule Sconely.ProcessOrder do
  import Bamboo.Email

  #stripe payment
  
  #email receipts-order id
  #items
  #date time
  #contact
  #name
  #cost
  #pool order-delivery address
  #database inserts
  #get menu
  #time zone
  #format datetime

  formatted_datetime = nil

  def format_datetime(datetime) do


  end

  defp am_pm(time) do

  end

  defp timezone(datetime_utc) do

  end

  defp day_of_week(_params) do


  end

  defp promo_code_discount(promo_code, subtotal) do

  end

  defp subtotal(cart_items) do


  end



  def welcome_email(_params) do

    IO.inspect(_params["email"])
    IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.RegisterEmailView, "register_email.html", key: _params)

    new_email(
      #to: ["rossedwards.us@gmail.com", "julia@sconely.com"],
      #to: ["rossedwards.us@gmail.com"],
      to: _params[:email],
      from: "eat@sconely.com",
      subject: "Welcome to Sconely",
      html_body: template,
    )

  end

  def welcome_admin_email(_params) do

    IO.inspect(_params["email"])
    IO.inspect(System.get_env("MIX"))
    
    template = Phoenix.View.render_to_string(Sconely.RegisterEmailView, "register_email.html", key: _params)

    new_email(
      #to: ["rossedwards.us@gmail.com", "julia@sconely.com"],
      to: ["rossedwards.us@gmail.com"],
      from: "eat@sconely.com",
      subject: "Welcome to Sconely",
      html_body: template,
      #html_body: "Thanks for joining Sconely!<br>Click here to activate your account.   <a href=\"http:\/\/localhost:4000\/activate?email=" <> _params["email"] <> "\">activate</a>",
      #text_body: "Thanks for joining!"
    )

  end

end
