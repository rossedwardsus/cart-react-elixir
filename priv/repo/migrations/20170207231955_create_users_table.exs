defmodule SconeHomeElixir.Repo.Migrations.CreateUserProfilesTable do
  use Ecto.Migration

  def change do
    create_if_not_exists  table(:users) do
      add :user_id, :integer, null: false
  	  add :first_name, :string
  	  add :last_name, :string
  	  add :about_me, :string
      add :email, :string #gotten in registration?
      add :mobile, :string
      #add :company_name, :string

      #create index(:posts, [:slug], concurrently: true)
    end
  end
end
