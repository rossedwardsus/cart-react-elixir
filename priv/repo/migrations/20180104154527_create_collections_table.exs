defmodule SconeHomeElixir.Repo.Migrations.CreateCollectionsTable do
  use Ecto.Migration

  def up do

  	    create_if_not_exists table(:collections, primary_key: false) do
  	      add :id, :uuid, primary_key: true
	      add :name, :string, size: 30
	      add :url_name, :string, size: 30 
	      add :description, :string, size: 100
	      add :active, :boolean
	  	  
	      #create index(:posts, [:slug], concurrently: true)
	    end
  end
end
