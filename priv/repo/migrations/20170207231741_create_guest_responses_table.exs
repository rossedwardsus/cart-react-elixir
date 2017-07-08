defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureGuestResponsesTable do
  use Ecto.Migration

  def change do
	create table(:signature_guest_responses) do
      #add :user_id, :string #uuid or "guest"
      add :parent_order_id, :integer
      add :item_id, :string
      add :first_name, :string
      add :last_name, :string
      add :email, :string
      add :mailing_list, :string
  	  add :datetime_selected, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
