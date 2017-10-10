defmodule SconeHomeElixir.Repo.Migrations.CreateUserPoolsTable do
  use Ecto.Migration

  def change do

  	  create_if_not_exists  table(:user_pools) do
	      #id
	      add :user_id, :uuid
	      add :pool_id, :smallint
	      add :pool_name, :string, size: 50
	      add :pool_url_name, :string, size: 50
	  	  #add :created_datetime, :datetime #use fragment
  	  end
  

  end
end
