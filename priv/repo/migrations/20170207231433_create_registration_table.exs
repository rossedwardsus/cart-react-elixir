defmodule SconeHomeElixir.Repo.Migrations.CreateRegistrationTable do
  use Ecto.Migration

  def change do
    create table(:registration, primary_key: false) do
      add :user_id, :uuid, primary_key: true
	  #add :email, :string
	  #add :password, :string
	  #add :created_datetime

      #timestamps

      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
