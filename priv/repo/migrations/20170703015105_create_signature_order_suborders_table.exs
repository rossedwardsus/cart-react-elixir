defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureOrderSubordersTable do
  use Ecto.Migration

  def change do

	create table(:signature_orders_suborders) do
  	  add :parent_order_id, :uuid, null: false
	  add :order_id, :string
	  add :order_type, :string
	  add :amount, :string
	  add :stripe_token, :string
	end

  end
end
