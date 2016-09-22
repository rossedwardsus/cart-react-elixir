defmodule SconeHomeElixir.UserNewOrderEmail do
  import Bamboo.Email

  def welcome_email(_params) do

    IO.puts(_params["address"])
    
    template = Phoenix.View.render_to_string(SconeHomeElixir.UserOrderProcessedEmailView, "user_order_processed_email.html", key: _params)

    new_email(
      to: "rossedwards.us@gmail.com",
      from: "orders@sconehome.com",
      subject: "Your Scone Home Order #123456 has been created.",
      html_body: template,
      #html_body: "<strong>Thanks for ordering from Scone Home!<br>Your order<br>Deliver Date<br>Payment<br>Delivery Address</strong>",
      #text_body: "Thanks for joining!"
    )


   

  end
end