defmodule Sconely.Registration do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:email, :password]}

		schema "registration" do
			field :user_id, Ecto.UUID
			field :email, :string
			field :password, :string
			field :registration_date, :date

			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    #struct
		    #|> cast(params, [:name, :email, :bio, :number_of_pets])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 