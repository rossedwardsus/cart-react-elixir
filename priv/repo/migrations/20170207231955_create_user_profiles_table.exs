defmodule SconeHomeElixir.Repo.Migrations.CreateUserProfilesTable do
  use Ecto.Migration

  def change do
    create table(:user_profiles, primary_key: false) do
      add :user_id, :string
	  add :first_name, :string
	  add :last_name, :string
	  add :about_me, :string

      #create index(:posts, [:slug], concurrently: true)
    end
  end
end
