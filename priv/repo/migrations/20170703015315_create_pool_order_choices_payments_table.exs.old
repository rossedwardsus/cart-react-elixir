defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryContactTable do
  use Ecto.Migration

  def change do

  	  create table(:pool_order_choices_payments) do
	      add :pool_order_id, :uuid, null: false
	      add :user_id, :uuid
	  	  add :item_id, :integer
	  	  add :stripe_payment_token, :string
	  	  add :order_datetime, :datetime
	  	  #add :mobile, :string
  	  end
  end
end
