defmodule SconeHomeElixir.UserProfileFoodPreferences do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "users" do
			field :user_id, Ecto.UUID
			#field :food_preferences, :string
			
			#timestamps()
		end


end 