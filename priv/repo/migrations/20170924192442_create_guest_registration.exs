defmodule SconeHomeElixir.Repo.Migrations.CreateGuestRegistrationTable do
  use Ecto.Migration

   def up do
    create table(:guest_registrations, primary_key: false) do
      add :user_id, :uuid, primary_key: true
      add :email, :string, size: 100
      add :registration_datetime, :datetime
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
