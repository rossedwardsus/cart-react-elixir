defmodule SconeHomeElixir.Repo.Migrations.CreateUsersTable do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:users) do
      add :user_id, :bigint, null: false
  	  add :first_name, :string, size: 40
  	  add :last_name, :string, size: 40
  	  add :about_me, :string, size: 40
      add :email, :string, size: 50
      add :mobile, :string, size: 20
      
      #create index(:posts, [:slug], concurrently: true)
    end
  end
end
