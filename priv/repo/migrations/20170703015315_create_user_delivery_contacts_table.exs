defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryContactTable do
  use Ecto.Migration

  def change do

  	  create table(:user_delivery_contact) do
	      add :user_id, :uuid, null: false
	  	  add :first_name, :string
	  	  add :last_name, :string
	  	  add :email, :string
  	  end
  end
end
