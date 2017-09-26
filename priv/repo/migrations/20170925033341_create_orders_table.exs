defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do

  	    create_if_not_exists table(:orders) do
	      add :user_id, :bigint
	      add :order_id, :ibigint
	  	  add :order_type, :string
	  	  add :order_datetime, :datetime

	      #create index(:posts, [:slug], concurrently: true)
	    end
end
