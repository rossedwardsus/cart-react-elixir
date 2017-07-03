defmodule SconeHomeElixir.Repo.Migrations.CreateGuestResponsesTable do
  use Ecto.Migration

  def change do
	create table(:guest_responses) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :integer
      add :item_id, :string
      add :first_name, :string
      add :last_name, :string
      add :email, :string
  	  #add :created_at, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
