defmodule Sconely.OrderContact do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@required_fields ~W(order_id)
		
		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "order_contact" do
			field :order_id, Ecto.UUID
			field :email, :string
			field :mobile, :string
			field :first_name, :string
			field :last_namr, :string
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields)
		    #|> validate_required([:email])
		    |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 