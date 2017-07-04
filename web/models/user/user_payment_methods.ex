defmodule SconeHomeElixir.UserProfilePaymentMethods do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_payment_methods" do
			field :user_id, Ecto.UUID
			field :name, :string
			field :stripe_token, :string
			
			#timestamps()
		end


end 