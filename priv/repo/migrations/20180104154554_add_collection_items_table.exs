defmodule SconeHomeElixir.Repo.Migrations.AddCollectionItemsTable do
  use Ecto.Migration

  def up do

  	    create_if_not_exists table(:collection_items, primary_key: false) do
  	      add :id, :uuid, primary_key: true
	      add :user_id, :uuid
	      add :parent_order_id, :uuid
	      #add :admin_receipt_order_id, :bigint
	  	  add :user_delivery_contact_address_id, :smallint
	  	  add :user_payment_method_id, :smallint
	  	  add :order_note, :string, size: 50
	  	  add :gift, :boolean
	  	  add :gift_note, :string, size: 50
	  	  add :stripe_payment_token, :string, size: 30
	  	  add :delivery_date, :date
	  	  add :delivery_time_range, :string, size: 20
	  	  
	      #create index(:posts, [:slug], concurrently: true)
	    end
  end

end
