defmodule Sconely.YoursSocialOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "yours_social_orders" do
			field :order_id, :string #primary key #secure random
			field :user_id, :string #Ecto.UUID
			#field :delivery_contact_address_id, :string #primary key #secure random
			field :payment_method_id, :string #Ecto.UUID
			#delivery_datetime
			#datetime_created
			#stripe_payment_token
			#field message
		
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 