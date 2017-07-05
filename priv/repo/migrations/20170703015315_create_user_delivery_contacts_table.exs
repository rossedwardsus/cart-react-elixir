defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryContactTable do
  use Ecto.Migration

  def change do

  	  create table(:user_delivery_contact) do
	      add :user_id, :uuid, null: false
	      add :contact_name, :string
	  	  add :first_name, :string
	  	  add :last_name, :string
	  	  add :email, :string
	  	  add :mobile, :string
  	  end
  end
end
