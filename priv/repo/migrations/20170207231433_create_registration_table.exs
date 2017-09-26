defmodule SconeHomeElixir.Repo.Migrations.CreateRegistrationTable do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:registration) do
      #add :user_id, :uuid, null: false
  	  add :email, :string, null: false
  	  #add :password, :string
      add :password_hash, :string
  	  add :registration_datetime, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
