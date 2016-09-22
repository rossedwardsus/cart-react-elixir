defmodule SconeHomeElixir.UserProfileDeliveryAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "users" do
			field :user_id, Ecto.UUID
			#field :food_preferences, :string
			
			#timestamps()
		end

		@required_fields ~w(title)
		@optional_fields ~w(question_id created_by)

		  def changeset(struct, params \\ :empty) do
		  	struct
		  	|> cast(params, @required_fields, @optional_fields)
		  end
end 