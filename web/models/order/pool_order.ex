defmodule Sconely.PoolOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		#alias Sconely.Order

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@optional_fields ~W(user_id parent_order_id admin_receipt_order_id field user_delivery_contact_address_id order_datetime pool_name delivery_date delivery_time)
		@required_fields ~W()

		schema "pool_orders" do
			field :user_id, :integer
			field :parent_order_id, :integer
			field :admin_receipt_order_id, :integer
			field :pool_name, :string
			field :delivery_date, Ecto.Date
			field :delivery_time_range, :string, size: 20
			field :user_delivery_contact_address_id, :integer
			
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