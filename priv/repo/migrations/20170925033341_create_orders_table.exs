defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do

  	def change do
	    create table(:pool_order_responses) do
	      add :user_id, :integer
	      add :order_id, :integer
	  	  add :menu_item_id, :integer #yours, social, pool
	      add :quantity, :integer
	      
	      #create index(:posts, [:slug], concurrently: true)
	    end
  	end
end
