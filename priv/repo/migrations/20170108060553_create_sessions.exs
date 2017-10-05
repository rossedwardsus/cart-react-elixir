defmodule SconeHomeElixir.Repo.Migrations.Sessions do
  use Ecto.Migration

  #use SconeHomeElixir.Web, :model


  IO.puts("migration run")

  def change do
    create_if_not_exists table(:sessions) do
      #add :session_id, :uuid, primary_key: true
	    add :user_id, :integer
      add :token, :uuid
	    #add :logged_in_datetime, :string, size: 40
      #add :logged_out_datetime, :string, size: 40

      #timestamps

      #create index(:posts, [:slug], concurrently: true)
    end

  end


  #def down do
  #  drop table(:sessions)
  #end

end
