defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do
    create table(:orders, primary_key: false) do
      add :order_id, :uuid, primary_key: true
	  #add :datetime, :string
	  #add :delivery_address, :string
	  #add :created_datetime

      #timestamps

      #order items

      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
