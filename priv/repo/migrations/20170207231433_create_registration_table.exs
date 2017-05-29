defmodule SconeHomeElixir.Repo.Migrations.CreateRegistrationTable do
  use Ecto.Migration

  def change do
    create table(:registration) do
      add :user_id, :uuid, null: false
  	  add :email, :string, null: false
  	  add :password, :string
      add :password_salt, :string
  	  add :created_at, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
