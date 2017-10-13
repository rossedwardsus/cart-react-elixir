defmodule Sconely.YoursSocialOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@primary_key {:id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id parent_order_id user_delivery_contact_address_id user_payment_method_id stripe_charge_token delivery_date delivery_time_range)
		@required_fields ~W()

		schema "yours_social_orders" do
			field :parent_order_id, Ecto.UUID #primary key #secure random
			field :user_id, Ecto.UUID
			#field :admin_receipt_order_id, :integer
			field :user_delivery_contact_address_id, :integer #primary key #secure random
			field :user_payment_method_id, :integer #Ecto.UUID
			field :delivery_date, Ecto.Date
			field :delivery_time_range, :string, size: 20
			field :stripe_charge_token, :string, size: 30
			field :order_note, :string, size: 255
			field :gift, :boolean
			field :gift_note, :string, size: 255
		
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
	    	#|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 