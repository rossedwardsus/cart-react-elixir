defmodule SconeHomeElixir.Repo.Migrations.CreateGuestResponsesTable do
  use Ecto.Migration

  def change do
	create table(:guest_responses) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :uuid
  	  #add :order_type, :string
      #delivery address
      #delivery datetime
      add :created_at, :datetime
      #add :payment_confirmation, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
