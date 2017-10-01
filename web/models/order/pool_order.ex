defmodule Sconely.PoolOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		#alias Sconely.Order

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@optional_fields ~W(user_id order_id admin_receipt_order_id order_datetime pool_name delivery_date delivery_time)
		@required_fields ~W()

		schema "pool_orders" do
			field :user_id, :integer
			field :order_id, :integer
			field :admin_receipt_order_id, :integer
			field :pool_name, :string
			#field :delivery_contact_id, :integer
			#field :order_datetime, Ecto.Date
			field :delivery_date, Ecto.Date
			field :delivery_time_range, :string
			#field :delivery_contact_first_name, :string
			#field :delivery_contact_last_name, :string
			#field :delivery_contact_email, :string
			#field :delivery_contact_mobile, :string
			#field :delivery_address_street1
			#field :delivery_address_street2
			#field :delivery_address_city
			#field :delivery_address_state
			#field :delivery_address_zipcode
			
			#delivery location - 8th and hope lobby
			
			#datetime created
			#payment method

			#belongs_to :order, Order		
			#has_one :order, Order, join_key: :order_id
			
			#timestamps()
		end


		#def changeset(model, params \\ %{}) do
		#    model
		#    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		#end

end 