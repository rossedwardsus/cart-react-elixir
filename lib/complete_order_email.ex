defmodule Sconely.CompleteOrderEmail do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView

  def welcome_email(_params) do

    #IO.inspect(_params["email"])
    #IO.inspect(System.get_env("MIX"))
    
    #template = Phoenix.View.render_to_string(SconeHomeElixir.UserOrderProcessedEmailView, "user_order_processed_email.html", key: _params)

    new_email(
      to: _params["email"],
      from: "order@sconely.com",
      subject: "Sconely.com order",
      #html_body: template,
      html_body: "Thanks for your Sconely Order<br>" <> _params["order_id"],
      #text_body: "Thanks for joining!"
    )

  end
end