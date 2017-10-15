defmodule SconeHomeElixir.Repo.Migrations.Sessions do
  use Ecto.Migration

  #use SconeHomeElixir.Web, :model


  def up do
    create_if_not_exists table(:order_sessions, primary_key: false) do
      add :session_id, :uuid, primary_key: true
	    add :order_type, :string, size: 10
      add :order_started_datetime, :string, size: 40
      add :screen, :string, size: 10
      add :order_ended_datetime, :string, size: 40

      #timestamps

      #create index(:posts, [:slug], concurrently: true)
    end

  end


  #def down do
  #  drop table(:sessions)
  #end

end
