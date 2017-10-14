defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryContactsAddressesTable do
  use Ecto.Migration

  def up do
  	create_if_not_exists table(:user_delivery_contacts_addresses, primary_key: false) do
  		add :id, :uuid, primary_key: true
  		add :user_id, :uuid
  		add :delivery_contact_address_id, :smallint
  		add :company_name, :string, size: 40
  		add :first_name, :string, size: 40
  		add :last_name, :string, size: 40
  		add :email, :string, size: 40
  		add :mobile, :string, size: 40
  		add :street1, :string, size: 40
  		add :street2, :string, size: 40
  		add :city, :string, size: 40
  		add :state, :string, size: 40
  		add :zipcode, :string, size: 40
  		add :note, :string, size: 50
  		#note - per order meaning reusable

  		#add :note, :string
  	end
  end
end
