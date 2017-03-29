defmodule Sconely.SconelySocialOrderEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.inspect(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySocialOrderEmailView, "sconely_social_order_email.html", key: _params)

    new_email(
      to: ["friedman.julia@gmail.com"],
      from: "orders@sconehome.com",
      subject: "A new order has been created.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Scone Home!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )

   

   
  end

  def welcome_email_admin(_params) do

    IO.inspect(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySocialOrderEmailView, "sconely_social_order_email.html", key: _params)

    

    new_email(
      to: ["friedman.julia@gmail.com", "eat@sconely.com"],
      from: "orders@sconehome.com",
      subject: "A new order has been created.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Scone Home!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )

   
  end
end