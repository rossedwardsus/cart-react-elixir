defmodule Sconely.YoursSocialOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id order_id delivery_contact_address_id payment_method_id stripe_charge_token)
		@required_fields ~W()

		schema "yours_social_orders" do
			field :order_id, :integer #primary key #secure random
			field :user_id, :integer #Ecto.UUID
			field :admin_receipt_order_id, :integer
			field :delivery_contact_address_id, :integer #primary key #secure random
			field :payment_method_id, :integer #Ecto.UUID
			#delivery_datetime
			field :stripe_charge_token, :string
			#field message
		
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
	    	#|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 