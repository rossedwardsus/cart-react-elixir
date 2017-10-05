defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureOrderSubordersTable do
  use Ecto.Migration

  def change do

	create_if_not_exists table(:signature_orders_suborders) do
  	  add :parent_order_id, :bigint, null: false
	  add :suborder_id, :string
	  add :item, :string
	  add :quantity, :string
	  #add :quantity_multiplier
	  add :stripe_token, :string
	  #datetime_added
	  #date time paid
	end

  end
end
