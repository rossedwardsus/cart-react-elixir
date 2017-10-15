defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureOrdersTable do
  use Ecto.Migration

  def up do

  	 create_if_not_exists table(:signature_orders) do
      #id
      add :parent_order_id, :uuid
      add :event_name, :string
  	  add :invited_guest_count, :smallint
  	  add :invited_guest_message, :string, size: 255
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
