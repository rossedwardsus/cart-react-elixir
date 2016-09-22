defmodule SconeHomeElixir.UserOrderGuestList do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order_guest_list" do
			field :user_id, Ecto.UUID
			field :order_id, :string
			field :guest_id, :string
			
			#timestamps()
		end


end 