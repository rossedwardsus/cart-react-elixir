defmodule SconeHomeElixir.Repo.Migrations.CreateUserProfilesTable do
  use Ecto.Migration

  def change do
    create table(:user_profiles) do
      add :user_id, :uuid, null: false
  	  add :first_name, :string
  	  add :last_name, :string
  	  add :about_me, :string
      add :email, :string
      add :mobile, :string

      #create index(:posts, [:slug], concurrently: true)
    end
  end
end
