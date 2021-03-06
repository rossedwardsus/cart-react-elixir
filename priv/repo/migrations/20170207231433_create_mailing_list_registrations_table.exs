defmodule SconeHomeElixir.Repo.Migrations.CreateMailingListRegistrationsTable do
  use Ecto.Migration

  def up do
    create_if_not_exists table(:mailing_list_registrations, primary_key: false) do
      add :user_id, :uuid, primary_key: true
  	  add :email, :string, null: false
  	  #add :password, :string
      add :password_hash, :string
  	  add :registration_datetime, :datetime
      #, default: fragment("now()")
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end

  def down do

  end
end
