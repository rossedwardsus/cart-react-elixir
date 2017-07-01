defmodule SconeHomeElixir.Repo.Migrations.CreateSconelySignatureOrdersTable do
  use Ecto.Migration

  def change do

  	 create table(:orders) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :uuid
  	  #add :order_type, :string
      #delivery address
      #delivery datetime
      add :invited_guest_count, :datetime
      #add :code, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
