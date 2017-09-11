defmodule SconeHomeElixir.Repo.Migrations.CreateUserPoolsTable do
  use Ecto.Migration

  def change do

  	def change do

  	  create table(:pool_order_choices_payments) do
	      add :pool_order_id, :uuid, null: false
	      add :user_id, Ecto.UUID
	  	  #add :menu_item_id, Ecto.UUID
	  	  #add :stripe_payment_token, :string
	  	  #add :order_datetime, :datetime
	  	  #add :mobile, :string
  	  end
  
  	end

  end
end
