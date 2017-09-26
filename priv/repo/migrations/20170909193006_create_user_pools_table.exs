defmodule SconeHomeElixir.Repo.Migrations.CreateUserPoolsTable do
  use Ecto.Migration

  def change do

  	  create_if_not_exists  table(:pool_order_choices_payments) do
	      add :user_id, :integer
	      add :admin_receipt_pool_order_id, :bigint, null: false
	  	  add :delivery_date, Ecto.Date
	  	  add :delivery_time, :string
	  	  add :order_datetime, :datetime
  	  end
  

  end
end
