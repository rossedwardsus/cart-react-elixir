defmodule Sconely.UserProfiles do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@required_fields ~W(user_id first_name last_name about_me)
		@optional_fields ~W()

		#@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "user_profiles" do
			field :user_id, Ecto.UUID
			field :first_name, :string
			field :last_name, :string
			field :about_me, :string, default: ""
			#field :email, :string
			#field :mobile, :string, default: ""
			#field :company_name
			
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