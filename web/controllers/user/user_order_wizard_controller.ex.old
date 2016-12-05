defmodule SconeHomeElixir.UserOrderWizardController do
  use SconeHomeElixir.Web, :controller

  plug :put_layout, "user_order_wizard_layout.html"

  def index(conn, _params) do
    render conn, "user_order_wizard.html"
  end

  def create(conn, %{"photo" => user_params}) do
    text conn, user_params.path
  	#render conn, "create.html"
  end
end
