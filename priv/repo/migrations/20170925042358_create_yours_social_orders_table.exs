defmodule SconeHomeElixir.Repo.Migrations.CreateYoursSocialOrdersTable do
  use Ecto.Migration

  def change do

  	    create_if_not_exists table(:yours_social_orders) do
	      add :user_id, :bigint
	      add :parent_order_id, :bigint
	      add :admin_receipt_order_id, :bigint
	  	  add :user_delivery_contact_address_id, :smallint
	  	  add :user_payment_method_id, :smallint
	  	  add :order_note, :string, size: 255
	  	  #add parking
	  	  add :stripe_payment_token, :string, size: 30
	  	  add :delivery_date, :date
	  	  add :delivery_time_ramge, :string, size: 20

	      #create index(:posts, [:slug], concurrently: true)
	    end
  end
end
