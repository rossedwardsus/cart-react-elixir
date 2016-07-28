defmodule Email do
  use Bamboo.Phoenix, view: SconeHomeElixir.UserOrderProcessedEmailView

  def email_with_assigns(user) do
    new_email()
    |> put_html_layout({SconeHomeEixir.LayoutView, "order_processed_email.html"})
    # @user will be available in the template
    |> render(:email_with_assigns, user: user)
  end
end