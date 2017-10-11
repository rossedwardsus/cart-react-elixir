defmodule Sconely.UserDeliveryContactAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@primary_key {:id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id delivery_contact_address_id first_name last_name email mobile)
		@required_fields ~W()


		schema "user_delivery_contacts_addresses" do
			field :user_id, Ecto.UUID
			field :delivery_contact_address_id, :integer
			field :company_name, :string, size: 50
			field :first_name, :string
			field :last_name, :string
			field :email, :string
			field :mobile, :string
			field :street1, :string
			#field :street2, :string
			#field :city, :string
			#field :state, :string
			#field :zipcode, :string
			#note
			
			#timestamps()
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
		    #|> cast(params, [])
		    #|> validate_required(params, [:name])
		end

end 