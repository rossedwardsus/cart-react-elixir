defmodule Sconely.PoolOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		#alias Sconely.Order

		use SconeHomeElixir.Web, :model

		@primary_key {:id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id parent_order_id admin_receipt_order_id user_delivery_contact_address_id order_datetime pool_name delivery_date delivery_time)
		@required_fields ~W()

		schema "pool_orders" do
			field :user_id, Ecto.UUID
			field :parent_order_id, Ecto.UUID
			field :user_pool_id, :integer
			field :admin_receipt_order_id, :integer
			#field :pool_url_name, :string
			#field :pool_name, :string
			field :delivery_date, Ecto.Date
			field :delivery_time_range, :string, size: 20
			field :user_delivery_contact_address_id, :integer
			field :pickup_location, :string, size: 50
			#field :order_note, :string, size: 255
		
			#timestamps()
		end


		#def changeset(model, params \\ %{}) do
		#    model
		#    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		#end

end 