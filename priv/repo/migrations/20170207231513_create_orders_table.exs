defmodule SconeHomeElixir.Repo.Migrations.CreateOrdersTable do
  use Ecto.Migration

  def change do
    create table(:orders) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :uuid
  	  add :order_type, :string
      add :created_at, :datetime
      add :payment_confirmation, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
