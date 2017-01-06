defmodule Sconely.Registration do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:email, :password]}

		schema "registration" do
			field :user_id, :string
			field :email, :string
			field :password, :string
			field :registration_datetime, :string

			#timestamps()
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, [:email, :password, :registration_datetime])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 