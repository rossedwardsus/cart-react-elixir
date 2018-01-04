defmodule SconeHomeElixir.Repo.Migrations.CreateCollectionsTable do
  use Ecto.Migration

  def up do

  	    create_if_not_exists table(:collections, primary_key: false) do
  	      add :id, :uuid, primary_key: true
	      add :title, :string, size: 50
	      add :description, :string, size: 50
	      add :active, :boolean
	  	  
	      #create index(:posts, [:slug], concurrently: true)
	    end
  end
end
