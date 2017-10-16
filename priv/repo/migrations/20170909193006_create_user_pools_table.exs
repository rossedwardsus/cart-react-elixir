defmodule SconeHomeElixir.Repo.Migrations.CreateUserPoolsTable do
  use Ecto.Migration

  def up do

  	  create_if_not_exists  table(:user_pools, primary_key: false) do
	      add :id, :uuid, primary_key: true
	      add :user_id, :uuid
	      add :pool_id, :smallint
	      add :pool_name, :string, size: 50
	      add :pool_url_name, :string, size: 50
	  	  #add :created_datetime, :datetime #use fragment
  	  end
  

  end
end
