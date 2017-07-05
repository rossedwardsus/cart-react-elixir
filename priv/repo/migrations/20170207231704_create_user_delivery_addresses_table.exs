defmodule SconeHomeElixir.Repo.Migrations.CreateUserDeliveryAddressTable do
  use Ecto.Migration

  def change do
  		#street1
  		add :street1, :string
  	  
  		#street2
  		add :street2, :string

  		#city
  		add :city, :string

  		#state
  		add :state, :string

  		#zipcode
  		add :zipcode, :string

  		#note
  		add :note, :string

  end
end
