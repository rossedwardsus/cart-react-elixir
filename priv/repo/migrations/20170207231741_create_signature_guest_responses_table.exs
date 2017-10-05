defmodule SconeHomeElixir.Repo.Migrations.CreateSignatureGuestResponsesTable do
  use Ecto.Migration

  def change do
	create_if_not_exists table(:signature_guest_responses) do
      #add :user_id, :string #uuid or "guest"
      add :parent_order_id, :bigint
      add :chosen_item_id, :smallint
      add :first_name, :string, size(50)
      add :last_name, :string, size(50)
      add :email, :string, size: 50
      #add :mailing_list, :string
  	  add :datetime_selected, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
