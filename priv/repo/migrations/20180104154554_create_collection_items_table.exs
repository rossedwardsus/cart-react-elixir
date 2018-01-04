defmodule SconeHomeElixir.Repo.Migrations.CreateCollectionItemsTable do
  use Ecto.Migration

  def up do

  	    create_if_not_exists table(:collection_items, primary_key: false) do
  	      add :id, :uuid, primary_key: true
	      add :collection_id, :uuid
	      add :item_id, :uuid
	  	  
	      #create index(:posts, [:slug], concurrently: true)
	    end
  end

end
