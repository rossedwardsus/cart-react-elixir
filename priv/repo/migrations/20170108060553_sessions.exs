defmodule SconeHomeElixir.Repo.Migrations.Sessions do
  use Ecto.Migration

  #use SconeHomeElixir.Web, :model


  IO.puts("migration run")

   #def up do
   # "CREATE TABLE if NOT EXISTS sessions(
   #   add :session_id, Ecto.UUID
	#  add :user_id, :string
	#  add :logged_in_datetime, :string
    #)"
  #end

  def change do
    create table(:sessions, primary_key: true) do
      #add :session_id, :uuid, primary_key: true
	    add :user_id, :uuid
      add :token, :uuid
	    add :logged_in_datetime, :string
      add :logged_out_datetime, :string

      #timestamps

      #create index(:posts, [:slug], concurrently: true)
    end

  end


  def down do
    drop table(:sessions)
  end

  def change do
  end
end
