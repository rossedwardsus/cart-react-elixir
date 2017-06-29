defmodule Sconely.OrderDeliveryAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		alias Sconely.Order

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order_delivery_address" do
			field :order_id, :string
			field :street1, :string
			field :street2, :string

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