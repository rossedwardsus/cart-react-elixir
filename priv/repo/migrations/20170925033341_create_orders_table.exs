defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do

  	    create_if_not_exists table(:orders, primary_key_false) do
  	      add :order_id, :uuid, primary_key: true
	      add :user_id, :bigint
	      #add :order_id, :bigint
	      add :admin_receipt_order_id, :bigint
	  	  add :order_type, :string, size: 20
	  	  add :order_datetime, :datetime

	      #create index(:posts, [:slug], concurrently: true)
	    end
 end
end
