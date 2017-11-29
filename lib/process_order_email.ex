defmodule Sconely.ProcessOrderPoolCompleteOrderEmail do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView

  #@typedef
  def pool_complete_order_email(_params) do



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

  

  def pool_complete_order_admin_email(_params) do

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

  #Sconely.ProcessOrderPoolCompleteOrderEmail.yours_social_pool_complete_order_email(%{pool_name: "pool_name", pool_url: "pool_url_name"order_id: "order_id", admin_receipt_order_id: "admin_receipt_order_id", order_datetime_formatted: "order_datetime_formatted", delivery_date_formatted: delivery_date_formatted, delivery_time: delivery_time, delivery_address: "delivery_address", args: args, subtotal: "", total_items: 0, subtotal_formatted: "subtotal_formatted", delivery_cost: 0.00, promo_code_discount: "promo_code_discount", total_formatted: "total_formatted", cart_items: "cart_items_with_name"}) |> SconeHomeElixir.Mailer.deliver_later
end