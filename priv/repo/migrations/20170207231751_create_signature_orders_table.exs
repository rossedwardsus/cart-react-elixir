defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureOrdersTable do
  use Ecto.Migration

  def change do

  	 create table(:signature_orders) do
      add :parent_order_id, :uuid
      add :event_name, :string
  	  add :invited_guest_count, :integer
  	  add :invited_guest_message, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
