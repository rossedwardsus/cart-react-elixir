defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryContactsAddressesTable do
  use Ecto.Migration

  def change do
  	create table(:user_delivery_contacts_addresses) do
  		add :user_id, :uuid
		add :first_name, :string
  		add :last_name, :string
  		add :email, :string
  		add :mobile, :string

  		#company name
  		add :street1, :string
  		add :street2, :string
  		add :city, :string
  		add :state, :string
  		add :zipcode, :string

  		#add :note, :string

  end
end
