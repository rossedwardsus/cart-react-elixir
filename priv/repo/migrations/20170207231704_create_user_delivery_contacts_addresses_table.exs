defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryAddressTable do
  use Ecto.Migration

  def change do
  	create table(:order_items) do
  	
		add :first_name, :string
  		add :last_name, :string
  		add :email, :string
  		add :mobile, :string

  		add :street1, :string
  		add :street2, :string
  		add :city, :string
  		add :state, :string
  		add :zipcode, :string

  		add :note, :string

  end
end
