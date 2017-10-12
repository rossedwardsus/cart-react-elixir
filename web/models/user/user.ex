defmodule Sconely.User do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@required_fields ~W()
		@optional_fields ~W(user_id first_name last_name email mobile about_me)

		@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "users" do #user not user profile
			#field :user_id, Ecto.UUID
			field :first_name, :string
			field :last_name, :string
			field :email, :string
			field :mobile, :string
			field :about_me, :string #?
			#field :company_name, :string #put in address instead
			field :stripe_customer_id, :string
			#field image

			#timestamps()
		end


		#has_many_orders

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
		    #|> cast(params, [])
		    #|> validate_required(params, [:name])
		    |> validate_length(:first_name, min: 2)
		    #|> validate_length(:last_name, min: 2)
		    #|> validate_length(:email, min: 2)
		    #|> validate_length(:mobile, min: 2)
		    #|> validate_length(:about_me, min: 2)
		end


end 