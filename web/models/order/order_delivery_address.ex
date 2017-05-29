defmodule Sconely.OrderDeliveryAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_social_items" do
			field :order_id, Ecto.UUID
			field :street1, :string
			field :street2, :string
			
			#timestamps()
		end


		#def changeset(model, params \\ %{}) do
		#    model
		#    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		#end

end 