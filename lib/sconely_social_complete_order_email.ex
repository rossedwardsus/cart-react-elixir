defmodule Sconely.SconelySocialCompleteOrderEmail do
  import Bamboo.Email

  def complete_order(_params) do

    IO.inspect(_params)
    
    template = Phoenix.View.render_to_string(Sconely.SconelySocialCompleteOrderEmailView, "sconely_social_complete_order_email.html", key: _params)

    new_email(
      to: ["rossedwards.us@gmail.com"],
      from: "orders@sconehome.com",
      subject: "A new order has been created.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Scone Home!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )

   
  end

end