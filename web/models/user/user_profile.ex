defmodule Sconely.UserProfiles do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@required_fields ~W()
		@optional_fields ~W(user_id first_name last_name email about_me)

		#@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "user_profiles" do
			field :user_id, Ecto.UUID
			field :first_name, :string
			field :last_name, :string
			field :about_me, :string
			field :email, :string
			field :mobile, :string
			field :company_name, :string
			
			#timestamps()
		end


		#has_many_orders

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
		    #|> cast(params, [])
		    #|> validate_required(params, [:name])
		end


end 